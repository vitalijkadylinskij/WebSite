"use client";

import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "ru" : "en";
    i18n.changeLanguage(newLang);
  };

  return (
    <div>
      <Button
        onClick={toggleLanguage}
        variant="outline"
        className="px-4 py-2 text-sm font-medium border-none cursor-pointer bg-transparent shadow-none uppercase"
      >
        {i18n.language}
      </Button>
    </div>
  );
}
