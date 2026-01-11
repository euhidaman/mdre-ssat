"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function NavbarLinks() {
  const { t } = useLanguage();
  const pathname = usePathname();

  const links = [
    { href: "/", label: { en: "Home", zh: "首頁" } },
    { href: "/about", label: { en: "About", zh: "關於" } },
    { href: "/research", label: { en: "Research", zh: "研究方向" } },
    { href: "/members", label: { en: "Members", zh: "成員" } },
    { href: "/privacy", label: { en: "Privacy Policy", zh: "隱私權政策" } },
  ];

  return (
    <div className="flex items-center gap-1 md:gap-4">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={cn(
            "px-3 py-2 text-sm font-medium rounded-md transition-colors hover:bg-gray-100 dark:hover:bg-gray-800",
            pathname === link.href ? "text-blue-600 bg-blue-50 dark:bg-gray-800" : "text-gray-600 dark:text-gray-300"
          )}
        >
          {t(link.label)}
        </Link>
      ))}
    </div>
  );
}
