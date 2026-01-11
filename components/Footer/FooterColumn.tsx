"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function FooterColumn({ data }: any) {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col justify-start items-start">
      <p className="font-medium mb-4">{t(data.title)}</p>
      {data.links.map((link: any, index: number) => (
        <Link
          key={index}
          href={link.href}
          className="text-sm text-neutral-500 hover:text-neutral-700 transition-all mb-4"
        >
          {t(link.name)}
        </Link>
      ))}
    </div>
  );
}
