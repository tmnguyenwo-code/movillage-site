#!/usr/bin/env node
// Image optimization script using sharp (Node.js)
// Converts 109 real images to WebP format and generates responsive sizes

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SOURCE_DIR = "/Users/anyaclaw/workspace/Mo Village/Real Visual Contents from Mo Village";
const DEST_DIR = "/Users/anyaclaw/workspace/Mo Village/movillage-site/public/images";

console.log("Mơ Village Image Optimization");
console.log("==============================\n");

// Check if sharp is available
let sharp;
try {
  sharp = (await import('sharp')).default;
} catch (e) {
  console.error("Error: sharp not found. Installing...");
  console.log("Run: npm install sharp --save-dev");
  process.exit(1);
}

// Create destination directories
const dirs = ['rooms', 'facilities', 'restaurant', 'cafe', 'campus'];
dirs.forEach(dir => {
  const dirPath = path.join(DEST_DIR, dir);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
});

// Sanitize filename
function sanitizeFilename(name) {
  return name
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '')
    .replace(/-+/g, '-');
}

// Get all image files recursively
function getImageFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir, { withFileTypes: true });

  for (const item of items) {
    const fullPath = path.join(dir, item.name);
    if (item.isDirectory()) {
      files.push(...getImageFiles(fullPath));
    } else if (/\.(jpg|jpeg|png)$/i.test(item.name)) {
      files.push(fullPath);
    }
  }

  return files;
}

// Process image
async function processImage(sourcePath, destPath, quality, maxWidth) {
  try {
    await sharp(sourcePath)
      .resize(maxWidth, null, { withoutEnlargement: true, fit: 'inside' })
      .webp({ quality })
      .toFile(destPath);
    return true;
  } catch (err) {
    console.error(`Failed to process ${sourcePath}:`, err.message);
    return false;
  }
}

// Main processing
async function main() {
  const mappings = [
    { source: "Các hạng phòng", dest: "rooms" },
    { source: "Các tiện ích", dest: "facilities" },
    { source: "Nhà hàng Tây Bắc", dest: "restaurant" },
    { source: "Quầy cafe", dest: "cafe" },
    { source: "Tổng thể khuôn viên", dest: "campus" }
  ];

  let totalProcessed = 0;

  for (const mapping of mappings) {
    const sourceDir = path.join(SOURCE_DIR, mapping.source);
    const destDir = path.join(DEST_DIR, mapping.dest);

    console.log(`Processing ${mapping.source}...`);

    const images = getImageFiles(sourceDir);

    for (const imgPath of images) {
      const relativePath = path.relative(sourceDir, imgPath);
      const parentDir = path.dirname(relativePath);
      const filename = path.basename(imgPath, path.extname(imgPath));

      let prefix = mapping.dest;
      if (parentDir !== '.') {
        prefix = sanitizeFilename(path.basename(parentDir));
      }

      const baseName = `${prefix}-${sanitizeFilename(filename)}`;

      // Full size WebP
      const fullPath = path.join(destDir, `${baseName}.webp`);
      await processImage(imgPath, fullPath, 85, 1920);

      // Thumbnail
      const thumbPath = path.join(destDir, `${baseName}-thumb.webp`);
      await processImage(imgPath, thumbPath, 80, 800);

      totalProcessed++;
      process.stdout.write(`\r  Processed: ${totalProcessed} images`);
    }

    console.log(` ✓`);
  }

  console.log("\n");
  console.log("Optimization complete!");
  console.log("\nImages saved to:", DEST_DIR);
  console.log("\nDirectory structure:");

  for (const dir of dirs) {
    const dirPath = path.join(DEST_DIR, dir);
    const files = fs.readdirSync(dirPath).filter(f => f.endsWith('.webp'));
    const fullSize = files.filter(f => !f.includes('-thumb')).length;
    const thumbs = files.filter(f => f.includes('-thumb')).length;
    console.log(`  - ${dir.padEnd(12)} (${fullSize} full + ${thumbs} thumbs = ${files.length} files)`);
  }

  console.log(`\nTotal: ${totalProcessed} images optimized`);
}

main().catch(console.error);
