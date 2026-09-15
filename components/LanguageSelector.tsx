"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { Globe } from "@phosphor-icons/react";

export default function LanguageSelector() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const toggleLocale = () => {
    const newLocale = locale === "vi" ? "en" : "vi";
    const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
    router.push(newPath);
  };

  return (
    <button
      onClick={toggleLocale}
      className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-soft-sand transition-colors"
      aria-label="Change language"
    >
      <Globe size={20} weight="bold" />
      <span className="text-sm font-medium uppercase">{locale}</span>
    </button>
  );
}
