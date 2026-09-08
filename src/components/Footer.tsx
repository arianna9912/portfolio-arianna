"use client";

import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="border-t py-[26px]" style={{ borderColor: "var(--line-soft)" }}>
      <div className="mx-auto max-w-[1180px] px-8 flex justify-between items-center flex-wrap gap-2.5 font-mono text-[11.5px] text-[var(--text-faint)]">
        <span>{t("footer.line1")}</span>
        <a
          href="https://www.github.com/arianna9912"
          target="_blank"
          rel="noopener"
          className="hover:text-[var(--accent)] transition-colors"
        >
          {t("footer.line2")}
        </a>
      </div>
    </footer>
  );
}