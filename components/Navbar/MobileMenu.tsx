"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function MobileMenu() {
    const [isOpen, setIsOpen] = useState(false);
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
        <>
            <Button
                variant="ghost"
                size="icon"
                className="lg:hidden"
                onClick={() => setIsOpen(true)}
            >
                <Menu className="h-6 w-6" />
            </Button>

            {isOpen && (
                <div className="fixed inset-0 z-50 bg-white dark:bg-neutral-900 p-6 flex flex-col gap-6 animate-in slide-in-from-right duration-300">
                    <div className="flex justify-end">
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setIsOpen(false)}
                        >
                            <X className="h-6 w-6" />
                        </Button>
                    </div>
                    <nav className="flex flex-col gap-4">
                        {links.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className={cn(
                                    "text-xl font-medium py-2 px-4 rounded-md transition-colors",
                                    pathname === link.href
                                        ? "text-blue-600 bg-blue-50 dark:bg-gray-800"
                                        : "text-gray-900 dark:text-gray-100"
                                )}
                            >
                                {t(link.label)}
                            </Link>
                        ))}
                    </nav>
                </div>
            )}
        </>
    );
}
