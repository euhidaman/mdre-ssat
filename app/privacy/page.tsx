"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function PrivacyPolicyPage() {
    const { t } = useLanguage();

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center py-8 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">
                {t({ en: "Privacy Policy", zh: "隱私權政策" })}
            </h1>
            <div className="w-full max-w-5xl h-[85vh] bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
                <iframe
                    src="/privacy-policy.pdf"
                    className="w-full h-full border-none"
                    title="Privacy Policy"
                />
            </div>
        </div>
    );
}
