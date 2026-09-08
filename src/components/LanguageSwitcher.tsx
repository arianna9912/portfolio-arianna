"use client";

import { useTranslation } from "react-i18next";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  return (
    <div className="flex items-center gap-1 border border-[var(--line)] font-mono text-[11px]">
      {(["es", "en"] as const).map((lang) => (
        <button
          key={lang}
          onClick={() => i18n.changeLanguage(lang)}
          className={`px-2 py-1 transition-colors ${
            i18n.language === lang ? "text-[#0a0a0c] font-semibold" : "text-[var(--text-dim)] hover:text-[var(--text)]"
          }`}
          style={i18n.language === lang ? { background: "var(--accent)" } : undefined}
        >
          {lang.toUpperCase()}
        </button>
      ))}
    </div>
  );
}