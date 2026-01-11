"use client";

import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";

export default function LanguageToggle() {
    const { language, setLanguage } = useLanguage();

    return (
        <Button
            variant="outline"
            onClick={() => setLanguage(language === "en" ? "zh" : "en")}
            className="min-w-[40px] font-semibold"
        >
            {language === "en" ? "中文" : "English"}
        </Button>
    );
}
