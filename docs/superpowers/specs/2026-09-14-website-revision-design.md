# Mơ Village Website Revision Design

## Goal

Repair visible website defects while preserving chaptered cinematic structure and existing content. Match approved brand typography and color rules. Keep looping rendered videos and Mist Lamp signature interaction.

## Confirmed direction

- Keep pinned cinematic chapters.
- Use native browser scrolling as input. Remove Lenis interpolation.
- Let videos play naturally. Scroll drives transforms, not video seeking.
- Keep custom Mist Lamp as large light only. Native cursor remains visible everywhere.
- Use exact approved fonts: Fraunces 500/600 for short display text; Be Vietnam Pro 400/500/600 for body and UI.
- Keep approved palette. Use Warm Paper and Soft Sand backgrounds, Deep Espresso for headings and body, restrained supporting colors.
- Fix all visible correctness defects, including missing images, sticky geometry, mobile overflow, responsive booking, and media loading.
- Keep current section order and bilingual content.

## Motion architecture

Use Motion values directly from `useScroll`, with transforms and opacity only. Each pinned section gets enough scroll height for its intended journey, and its sticky viewport uses `100dvh`. Reduced-motion users receive stable, untransformed content. Hero remains calm parallax. Rooms remain horizontal pan, but travel distance derives from measured track width rather than a fixed pixel value. Experiences remains largest pinned chapter, but content is staged into readable panels instead of overflowing one viewport.

## Typography and color

Load Fraunces and Be Vietnam Pro through `next/font/google`, exposing separate display and body CSS variables. Define every utility class used by components in Tailwind or replace nonexistent utilities with valid semantic classes. Apply approved fixed web type scale with responsive reductions only where required for phone fit. Use approved Vietnamese line heights and tracking limits. Remove automatic dark-mode token inversion because guidelines define one warm light theme.

## Mist Lamp

Keep radial mist clearing in Hero and Experiences. Do not hide cursor. Track pointer only on hover-capable fine pointers. Update GSAP with `quickTo` rather than creating a new tween on every mouse event. Disable effect for touch and reduced motion.

## Media

Use existing completed five-second MP4 files for Hero and Experiences. Keep posters and looping playback. Pause offscreen videos through browser behavior where possible without scroll seeking. Add responsive image sizing hints. Replace missing image references with existing room assets. Do not fabricate approved logo artwork; retain text wordmark until source vector is supplied.

## Responsive behavior

Desktop keeps cinematic pinning and horizontal rooms. Mobile keeps pinned Hero but replaces fragile horizontal hijack and dense pinned Experiences with native horizontal scroll-snap or normal flow. Booking becomes normal-height flow so form and map cannot clip. Navigation remains single-row, and custom pointer behavior never activates on touch.

## Verification

- Production build passes.
- Desktop and phone routes load without console errors.
- Wheel and touch-like scrolling reach page end without dead zones.
- Headings resolve to Fraunces; body and UI resolve to Be Vietnam Pro.
- Cursor stays visible while Mist Lamp follows pointer.
- Both videos return successful media responses, play when visible, and use posters.
- No missing image requests.
- Reduced-motion view contains all content without transforms.
- Desktop and mobile screenshots show no overlap, clipping, or unintended horizontal overflow.

## Known exclusion

Approved horizontal logo lockup cannot be implemented because no vector or raster logo asset exists in supplied site or guideline folder. Current text wordmark stays temporarily.
