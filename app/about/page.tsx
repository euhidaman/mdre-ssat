"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function AboutPage() {
    const { t } = useLanguage();

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden p-8 md:p-12">
                {/* Main Section: MDRE-SSAT */}
                <section className="mb-12">
                    <h1 className="text-4xl font-extrabold text-gray-900 mb-6 tracking-tight">
                        MDRE-SSAT
                    </h1>
                    <div className="prose prose-lg text-gray-600 space-y-6">
                        <p>
                            {t({
                                en: "The Movement Diagnosis and Rehabilitation Engineering & Sport Science and Athletics Training laboratories (MDRE-SSAT) form an integrated research group operating under the National Taiwan University of Science and Technology (NTUST). Their research focuses on advancing human performance, injury prevention, and movement rehabilitation through scientific, engineering, and data-driven approaches.",
                                zh: "國立臺灣科技大學（NTUST）旗下的動作診斷暨復健工程實驗室（MDRE）與運動科學暨運動防護實驗室（SSAT）共同組成 MDRE-SSAT 整合研究團隊。研究方向聚焦於透過科學方法、工程技術與資料導向的策略，推動人類表現提升、運動傷害預防與復健相關領域的發展。"
                            })}
                        </p>
                        <p>
                            {t({
                                en: "Our goal is to bridge the gap between science, technology, and real-world practice, empowering individuals from elite athletes to everyday workers to move stronger, safer, and smarter.",
                                zh: "我們的目標是縮短科學研究、技術創新與實務應用之間的距離，協助從菁英運動員到一般工作者，都能以更強壯、更安全、更聰明的方式進行活動與訓練。"
                            })}
                        </p>
                    </div>
                </section>

                {/* Sub Section: New Initiative */}
                <section className="border-t border-gray-100 pt-12">
                    <h2 className="text-3xl font-bold text-blue-600 mb-8">
                        {t({
                            en: "Empowering Women to Shine with Strength and Grace",
                            zh: "守護無限綻放的力與美"
                        })}
                    </h2>

                    <div className="prose prose-lg text-gray-600 space-y-8">
                        <p className="font-medium text-gray-800 text-xl">
                            {t({
                                en: "The labs are also leading a new initiative, “Empowering Women to Shine with Strength and Grace,” a project dedicated to supporting and advancing the health, performance, and training of female triathletes.",
                                zh: "此外，實驗室亦正領導一項新的研究計畫 「守護無限綻放的力與美」，致力於支持並提升女性鐵人三項運動員的健康、表現與訓練品質。"
                            })}
                        </p>

                        <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">
                                {t({
                                    en: "Female athletes are more prone than male athletes to:",
                                    zh: "女性運動員比男性運動員更容易出現以下問題："
                                })}
                            </h3>
                            <ul className="list-disc pl-6 space-y-2">
                                {[
                                    { en: "Stress fractures", zh: "壓力性骨折" },
                                    { en: "Anterior cruciate ligament (ACL) ruptures", zh: "前十字韌帶（ACL）斷裂" },
                                    { en: "Concussion", zh: "腦震盪" },
                                    { en: "Patellofemoral pain syndrome", zh: "髕股疼痛症候群" },
                                    { en: "Ankle sprains", zh: "踝關節扭傷" }
                                ].map((item, i) => (
                                    <li key={i}>{t(item)}</li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">
                                {t({
                                    en: "Because of the biomechanical demands of swimming, cycling, and running, female triathletes are particularly likely to suffer from:",
                                    zh: "由於游泳、騎車與跑步所產生的生物力學負荷，女性鐵人三項運動員特別容易受到以下傷害："
                                })}
                            </h3>
                            <ul className="list-disc pl-6 space-y-2">
                                {[
                                    { en: "Stress fractures", zh: "壓力性骨折" },
                                    { en: "Patellofemoral pain syndrome", zh: "髕股疼痛症候群" },
                                    { en: "Ankle sprains", zh: "踝關節扭傷" }
                                ].map((item, i) => (
                                    <li key={i}>{t(item)}</li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-blue-50 p-6 rounded-xl space-y-4">
                            <p>
                                {t({
                                    en: "The prevalence of menstrual irregularities in female triathletes has been reported to be as high as 24%.",
                                    zh: "研究顯示，女性鐵人三項運動員的月經不規律之盛行率可高達 24%。"
                                })}
                            </p>
                            <p>
                                {t({
                                    en: "Among female triathletes, 40% reported a history of primary or secondary amenorrhea, with an average duration of 14 months.",
                                    zh: "在女性鐵人三項運動員中，有 40% 回報曾出現初級或次級閉經，平均持續時間為 14 個月。"
                                })}
                            </p>
                            <p>
                                {t({
                                    en: "Amenorrhea occurs in 3.4% to 66% of female athletes, compared with only 2% to 5% of women in the general population.",
                                    zh: "女性運動員閉經發生率為 3.4% 至 66%，而一般女性族群僅為 2% 至 5%。"
                                })}
                            </p>
                            <p>
                                {t({
                                    en: "Between 20% and 42% of athletes report that heavy bleeding negatively affects their sport performance.",
                                    zh: "約有 20% 至 42% 的女性表示，經血過多會對其運動表現造成負面影響。"
                                })}
                            </p>
                            <p className="font-semibold text-blue-800">
                                {t({
                                    en: "Athletes with oligomenorrhea or amenorrhea have been found to have an increased risk of stress fractures compared with eumenorrheic individuals.",
                                    zh: "研究發現，具有寡經（oligomenorrhea）或閉經（amenorrhea）的女性運動員，其發生壓力性骨折的風險高於月經正常者。"
                                })}
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
