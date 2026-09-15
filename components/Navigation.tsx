"use client";

import { useState } from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { List, X } from "@phosphor-icons/react";
import Image from "next/image";
import LanguageSelector from "./LanguageSelector";
import Container from "./Container";

interface NavigationProps {
  onOpenBooking?: () => void;
}

export default function Navigation({ onOpenBooking }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = useTranslations("nav");

  const navItems = [
    { label: t("story"), href: "#story" },
    { label: t("rooms"), href: "#rooms" },
    { label: t("experiences"), href: "#experiences" },
    { label: t("gallery"), href: "#gallery" },
    { label: t("directions"), href: "#directions" },
    { label: t("packages"), href: "#packages" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-warm-paper/95 backdrop-blur-sm z-50 border-b border-karst-mist">
      <Container>
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="relative h-12 w-48">
            <Image
              src="/02-mo-village-horizontal-lockup.svg"
              alt="Mơ Village"
              fill
              className="object-contain object-left"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-espresso hover:text-stilt-timber transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <button
              onClick={onOpenBooking}
              className="bg-terracotta hover:bg-terracotta/90 text-warm-paper px-6 py-2 rounded-lg transition-colors"
            >
              {t("booking")}
            </button>
            <LanguageSelector />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-espresso"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <List size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-karst-mist">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block py-3 text-espresso hover:text-stilt-timber transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking?.();
              }}
              className="w-full text-left py-3 text-espresso hover:text-stilt-timber transition-colors"
            >
              {t("booking")}
            </button>
            <div className="pt-3">
              <LanguageSelector />
            </div>
          </div>
        )}
      </Container>
    </nav>
  );
}
