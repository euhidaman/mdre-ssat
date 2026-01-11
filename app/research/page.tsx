"use client";

import { useLanguage } from "@/context/LanguageContext";
import { cn } from "@/lib/utils";
import { ArrowBigDown, Target } from "lucide-react";

export default function ResearchPage() {
    const { t } = useLanguage();

    const subObjectives = [
        {
            id: 1,
            title: {
                en: "Risk management assessment for women's professional sports participation, industrial co-prosperity, and transformation.",
                zh: "女性職人之項運動與產業共榮與轉型風險管理評估"
            }
        },
        {
            id: 2,
            title: {
                en: "Evaluation of the effectiveness of menstrual-cycle courses on bodily sensitivity.",
                zh: "月經週期課程對躁敏性體感效度評估"
            }
        },
        {
            id: 3,
            title: {
                en: "An intelligent predictive data system for risk monitoring and decision-making feedback on women workers' physical performance and occupational health.",
                zh: "智能預估資料於女性職人體能表現與工作健康之風險監測與決策回饋系統"
            }
        },
        {
            id: 4,
            title: {
                en: "Fatigue prevention, fitness level assessment, and return-to-sport evaluation for female athletes.",
                zh: "女性運動員疲勞防護與體適能水準檢查及運動重返評估"
            }
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-16 tracking-tight">
                    {t({ en: "RESEARCH AXIS", zh: "研究方向" })}
                </h1>

                <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12 border border-blue-100">
                    <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-8 md:p-12 text-center text-white">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
                            {t({
                                en: "Empowering Women to Shine with Strength and Grace",
                                zh: "守護女儀人綻放力與美"
                            })}
                        </h2>
                        <div className="w-24 h-1 bg-white mx-auto mt-6 rounded-full opacity-60"></div>
                    </div>

                    <div className="p-8 md:p-12">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {subObjectives.map((obj, index) => (
                                <div
                                    key={obj.id}
                                    className={cn(
                                        "group relative p-6 rounded-xl border-2 transition-all duration-300 hover:shadow-lg",
                                        "border-gray-100 bg-gray-50 hover:bg-white hover:border-blue-200"
                                    )}
                                >
                                    <div className="absolute top-0 right-0 -mt-3 -mr-3 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                                        {t({ en: `Objective ${obj.id}`, zh: `子計畫${["一", "二", "三", "四"][index]}` })}
                                    </div>

                                    <div className="flex items-start space-x-4">
                                        <div className="flex-shrink-0">
                                            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                                                <Target className="w-6 h-6" />
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold text-gray-800 leading-snug group-hover:text-blue-700 transition-colors">
                                                {t(obj.title)}
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
