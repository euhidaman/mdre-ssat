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

        <div className="flex flex-col justify-center items-center mt-7 gap-6 text-lg md:text-xl text-neutral-600 dark:text-neutral-400 max-w-[900px] leading-relaxed">
          <div className="space-y-4">
            {t({
              en: (
                <>

                  <p>Movement Diagnosis and Rehabilitation Engineering & Sport Science and Athletics Training (MDRE-SSAT) is an interdisciplinary research initiative dedicated to advancing the understanding of human movement, athletic performance, and rehabilitation through engineering, data science, and sport science.</p>
                  <p>Our mission is to bridge engineering innovation and applied sport science, developing evidence-based tools and methodologies that support performance optimization, injury prevention, and rehabilitation in both clinical and athletic contexts.</p>
                </>
              ),
              zh: (
                <>

                  <p className="font-medium">動作診斷暨復健工程與運動科學暨運動防護實驗室</p>
                  <p className="text-sm opacity-80 mb-4 italic">Movement Diagnosis and Rehabilitation Engineering & Sport Science and Athletics Training MDRE-SSAT</p>
                  <p>是一個跨領域研究團隊，致力於透過工程、資料科學與運動科學，推動人體動作、運動表現與復健領域的研究與發展。</p>
                  <p>我們的使命是連結工程創新與應用型運動科學，發展具科學實證基礎的工具與研究方法，應用於運動表現最佳化、運動傷害預防，以及臨床與運動情境下的復健評估與介入。</p>
                </>
              )
            })}
          </div>
        </div>
      </div>
      {/* Background */}
      <BackgroundSquares />
    </>
  );
}
