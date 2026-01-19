"use client";

import { useLanguage } from "@/context/LanguageContext";
import { cn } from "@/lib/utils";
import { Target } from "lucide-react";

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
                        {/* Project Description (Green Box) */}
                        <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-8 mb-12">
                            <div className="prose prose-lg max-w-none text-emerald-900">
                                {t({
                                    en: (
                                        <div className="space-y-6">
                                            <p className="text-xl font-semibold text-emerald-800">
                                                The labs are leading a research initiative, &quot;Empowering Women to Shine with Strength and Grace,&quot; a project dedicated to supporting and advancing the health, performance, and training of female triathletes.
                                            </p>

                                            <div className="grid md:grid-cols-2 gap-8">
                                                <div>
                                                    <h3 className="text-lg font-bold text-emerald-900 mb-3">Female athletes are more prone than male athletes to:</h3>
                                                    <ul className="list-disc pl-6 space-y-1">
                                                        <li>Stress fractures</li>
                                                        <li>Anterior cruciate ligament (ACL) ruptures</li>
                                                        <li>Concussion</li>
                                                        <li>Patellofemoral pain syndrome</li>
                                                        <li>Ankle sprains</li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <h3 className="text-lg font-bold text-emerald-900 mb-3">Biomechanical demands of triathlons often lead to:</h3>
                                                    <ul className="list-disc pl-6 space-y-1 text-sm md:text-base">
                                                        <li>Stress fractures</li>
                                                        <li>Patellofemoral pain syndrome</li>
                                                        <li>Ankle sprains</li>
                                                    </ul>
                                                </div>
                                            </div>

                                            <div className="bg-white/50 rounded-xl p-6 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm md:text-base">
                                                <p>The prevalence of menstrual irregularities in female triathletes has been reported to be as high as <span className="font-bold text-emerald-700">24%</span>.</p>
                                                <p><span className="font-bold text-emerald-700">40%</span> reported a history of primary or secondary amenorrhea, with an average duration of 14 months.</p>
                                                <p>Amenorrhea occurs in <span className="font-bold text-emerald-700">3.4% to 66%</span> of female athletes, compared with only 2% to 5% in the general population.</p>
                                                <p>Between <span className="font-bold text-emerald-700">20% and 42%</span> of athletes report that heavy bleeding negatively affects their sport performance.</p>
                                            </div>

                                            <p className="font-bold text-emerald-800 border-l-4 border-emerald-500 pl-4 py-2">
                                                Athletes with oligomenorrhea or amenorrhea have been found to have an increased risk of stress fractures compared with eumenorrheic individuals.
                                            </p>
                                        </div>
                                    ),
                                    zh: (
                                        <div className="space-y-6">
                                            <p className="text-xl font-semibold text-emerald-800">
                                                此外，實驗室亦正領導一項新的研究計畫 「守護無限綻放的力與美」，致力於支持並提升女性鐵人三項運動員的健康、表現與訓練品質。
                                            </p>

                                            <div className="grid md:grid-cols-2 gap-8">
                                                <div>
                                                    <h3 className="text-lg font-bold text-emerald-900 mb-3">女性運動員比男性運動員更容易出現以下問題：</h3>
                                                    <ul className="list-disc pl-6 space-y-1">
                                                        <li>壓力性骨折</li>
                                                        <li>前十字韌帶（ACL）斷裂</li>
                                                        <li>腦震盪</li>
                                                        <li>髕股疼痛症候群</li>
                                                        <li>踝關節扭傷</li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <h3 className="text-lg font-bold text-emerald-900 mb-3">由於三鐵運動的生物力學負荷，特別容易受到：</h3>
                                                    <ul className="list-disc pl-6 space-y-1">
                                                        <li>壓力性骨折</li>
                                                        <li>髕股疼痛症候群</li>
                                                        <li>踝關節扭傷</li>
                                                    </ul>
                                                </div>
                                            </div>

                                            <div className="bg-white/50 rounded-xl p-6 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm md:text-base">
                                                <p>研究顯示，女性鐵人三項運動員的月經不規律之盛行率可高達 <span className="font-bold text-emerald-700">24%</span>。</p>
                                                <p>有 <span className="font-bold text-emerald-700">40%</span> 回報曾出現初級或次級閉經，平均持續時間為 14 個月。</p>
                                                <p>女性運動員閉經發生率為 <span className="font-bold text-emerald-700">3.4% 至 66%</span>，而一般女性族群僅為 2% 至 5%。</p>
                                                <p>約有 <span className="font-bold text-emerald-700">20% 至 42%</span> 的女性表示，經血過多會對其運動表現造成負面影響。</p>
                                            </div>

                                            <p className="font-bold text-emerald-800 border-l-4 border-emerald-500 pl-4 py-2">
                                                研究發現，具有寡經（oligomenorrhea）或閉經（amenorrhea）的女性運動員，其發生壓力性骨折的風險高於月經正常者。
                                            </p>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>

                        <div className="text-center mb-12">
                            <h3 className="text-2xl font-bold text-gray-900">
                                {t({
                                    en: "The main objectives of this research project are as follows:",
                                    zh: "本研究計畫的主要目標如下："
                                })}
                            </h3>
                            <div className="w-20 h-1.5 bg-blue-600 mx-auto mt-4 rounded-full shadow-sm"></div>
                        </div>

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
