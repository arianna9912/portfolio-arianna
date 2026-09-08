"use client";

import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

const LINKS = [
  { id: "sobre-mi", key: "about" },
  { id: "habilidades", key: "skills" },
  { id: "experiencia", key: "experience" },
  { id: "proyectos", key: "projects" },
  { id: "contacto", key: "contact" },
];

export default function Nav() {
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goto = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`sticky top-0 z-50 backdrop-blur-md border-b transition-colors ${
        scrolled ? "bg-[rgba(10,10,12,0.92)]" : "bg-[rgba(10,10,12,0.82)]"
      }`}
      style={{ borderColor: "var(--line-soft)" }}
    >
      <nav className="mx-auto max-w-[1180px] px-8 py-[18px] flex items-center justify-between">
        <button
          onClick={() => goto("sobre-mi")}
          className="font-mono text-sm tracking-[0.02em] flex items-center gap-[10px]"
        >
          <span
            className="w-[9px] h-[9px]"
            style={{
              background: "var(--accent)",
              boxShadow: "0 0 10px var(--accent-glow)",
              transform: "rotate(45deg)",
            }}
          />
          ARIANNA::PÉREZ
        </button>

        <div className="hidden md:flex gap-[30px] font-mono text-[12.5px] tracking-[0.04em] text-[var(--text-dim)]">
          {LINKS.map((l) => (
            <button
              key={l.id}
              onClick={() => goto(l.id)}
              className="relative py-1 hover:text-[var(--text)] transition-colors group"
            >
              {t(`nav.${l.key}`)}
              <span
                className="absolute left-0 bottom-0 w-0 h-px group-hover:w-full transition-all duration-300"
                style={{ background: "var(--accent)" }}
              />
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          <button
            onClick={() => goto("contacto")}
            className="hidden md:inline-block font-mono text-xs px-[14px] py-2 border border-[var(--line)] text-[var(--text)] tracking-[0.03em] hover:border-[var(--accent)] transition-colors"
            style={{ background: "rgba(255,90,31,0.08)" }}
          >
            <span className="hover:bg-transparent">{t("nav.contactCta")} →</span>
          </button>
        </div>
      </nav>
    </header>
  );
}