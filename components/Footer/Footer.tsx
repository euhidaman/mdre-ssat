"use client";

import Link from "next/link";
import FooterColumn from "./FooterColumn";
import { data } from "./data";
import Logo from "../Logo/Logo";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <div className="bg-neutral-100 border-t flex flex-col justify-center items-center">
      <div className="flex flex-col md:flex-row justify-between items-start w-full max-w-[1500px] py-12 px-6 md:px-12 gap-16 md:gap-32">
        <div className="flex flex-col gap-6 min-w-[300px]">
          <Logo variant="footer" />
          <div className="flex flex-col gap-1">
            <p className="text-base font-semibold text-neutral-800">
              {t({ en: "Address:", zh: "地址：" })}
            </p>
            <p className="text-base text-neutral-500 max-w-sm leading-relaxed">
              {t({
                en: "National Taiwan University of Science and Technology, No. 43, Section 4, Keelung Rd, Da’an District, Taipei City, 106",
                zh: "106 台北市大安區基隆路四段43號 國立臺灣科技大學"
              })}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16 flex-1 w-full">
          {data.map((section, index) => (
            <FooterColumn key={index} data={section} />
          ))}
        </div>
      </div>
      <div className="w-full border-t border-neutral-200 py-6 text-center">
        <p className="text-sm text-neutral-500">
          © {new Date().getFullYear()} {t({ en: "MDRE & SSAT Labs. All rights reserved.", zh: "MDRE & SSAT 實驗室。版權所有。" })}
        </p>
      </div>
    </div>
  );
}
