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
                    <div className="prose prose-lg text-gray-600 space-y-8">
                        <div>
                            {t({
                                en: (
                                    <>
                                        <p>
                                            Movement Diagnosis and Rehabilitation Engineering & Sport Science and Athletics Training (MDRE-SSAT) is an interdisciplinary research platform based at National Taiwan University of Science and Technology (NTUST).
                                        </p>
                                        <p className="mt-4">
                                            It was established as a formal collaboration between two laboratories at NTUST:
                                        </p>
                                        <ul className="list-disc pl-6 mt-2">
                                            <li>Movement Diagnosis and Rehabilitation Engineering Laboratory (MDRE)</li>
                                            <li>Sport Science and Athletics Training Laboratory (SSAT)</li>
                                        </ul>
                                        <p className="mt-4">
                                            By combining expertise from engineering, biomechanics, and sport science, MDRE-SSAT serves as a unified framework for research on human movement, athletic performance, and rehabilitation.
                                        </p>
                                    </>
                                ),
                                zh: (
                                    <>
                                        <p className="font-bold text-xl mb-2 text-gray-800">動作診斷暨復健工程與運動科學暨運動防護實驗室</p>
                                        <p className="text-sm opacity-80 mb-4 italic">Movement Diagnosis and Rehabilitation Engineering & Sport Science and Athletics Training, MDRE-SSAT</p>
                                        <p>
                                            是一個設立於 國立臺灣科技大學（NTUST）的跨領域研究平台。
                                        </p>
                                        <p className="mt-4">
                                            MDRE-SSAT 由台科大校內兩個實驗室共同合作成立，整合彼此的研究專長：
                                        </p>
                                        <ul className="list-disc pl-6 mt-2">
                                            <li>動作診斷暨復健工程實驗室（MDRE）</li>
                                            <li>運動科學暨運動防護實驗室（SSAT）</li>
                                        </ul>
                                        <p className="mt-4">
                                            透過工程、運動科學與生物力學的深度結合，MDRE-SSAT 致力於推動人體動作分析、運動表現評估與復健工程相關研究。
                                        </p>
                                    </>
                                )
                            })}
                        </div>

                        <div className="border-t border-gray-100 pt-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">
                                {t({ en: "Our Mission", zh: "我們的使命" })}
                            </h2>
                            {t({
                                en: (
                                    <p>
                                        The mission of MDRE-SSAT is to bridge engineering innovation and applied sport science within NTUST, developing scientific methods and technological tools that support performance optimization, injury prevention, and rehabilitation across athletic and clinical populations.
                                    </p>
                                ),
                                zh: (
                                    <p>
                                        MDRE-SSAT 的使命是在 台科大（NTUST）的學術環境中，連結工程創新與應用型運動科學，發展具科學依據的分析方法與技術工具，應用於運動表現優化、傷害預防與復健評估，涵蓋運動員與一般族群。
                                    </p>
                                )
                            })}
                        </div>

                        <div className="border-t border-gray-100 pt-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">
                                {t({ en: "Our Vision", zh: "我們的願景" })}
                            </h2>
                            {t({
                                en: (
                                    <p>
                                        MDRE-SSAT aims to be a reference research hub within NTUST and beyond for technology-driven movement analysis, fostering collaboration among researchers, clinicians, coaches, and athletes. Through the integration of computer vision, signal processing, biomechanics, and physiological modeling, we strive to translate academic research into real-world applications.
                                    </p>
                                ),
                                zh: (
                                    <p>
                                        MDRE-SSAT 期望成為校內外具代表性的 科技導向人體動作研究平台，促進研究人員、臨床專業人員、教練與運動員之間的跨領域合作。透過整合電腦視覺、訊號處理、生物力學與生理模型，我們致力於將學術研究成果轉化為實際可應用的解決方案。
                                    </p>
                                )
                            })}
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
