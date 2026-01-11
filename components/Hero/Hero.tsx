"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import BackgroundSquares from "../Backgrounds/BackgroundSquares";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <>
      <div className="flex flex-col justify-start items-center mt-20 pb-24 px-4 text-center z-10 relative">
        <h1 className="text-5xl md:text-7xl font-bold mt-8 max-w-[1000px] tracking-tight text-neutral-900 dark:text-white">
          {t({ en: "Welcome to ", zh: "歡迎來到 " })}
          <span className="text-blue-600">MDRE - SSAT Labs</span>
        </h1>

        <div className="flex flex-col justify-center items-center mt-7 gap-4 text-lg md:text-xl text-neutral-600 dark:text-neutral-400 max-w-[900px] leading-relaxed">
          <p>
            {t({
              en: "The MDRE and SSAT laboratories are dedicated to pioneering research in medical devices, smart sensing systems, and assistive technologies. Our interdisciplinary team strives to bridge the gap between engineering innovation and clinical application, bringing advanced solutions to real-world healthcare challenges.",
              zh: "MDRE 與 SSAT 實驗室致力於醫療器材、智慧感測系統與輔助科技的前瞻研究。我們的跨領域團隊努力縮短工程創新與臨床應用之間的差距，為現實世界的醫療挑戰提供先進的解決方案。"
            })}
          </p>
        </div>
      </div>
      {/* Background */}
      <BackgroundSquares />
    </>
  );
}
