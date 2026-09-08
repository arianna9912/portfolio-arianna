"use client";

import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t } = useTranslation();
  const rows = t("contact.rows", { returnObjects: true }) as {
    k: string;
    v: string;
    type: string;
  }[];

  const hrefFor = (type: string, v: string) => {
    if (type === "mailto") return `mailto:${v}`;
    if (type === "tel") return `tel:+525527407608`;
    if (type === "github") return "https://www.github.com/arianna9912";
    return undefined;
  };

  return (
    <section id="contacto" className="relative grid-bg pb-0">
      {/* Corner ticks bottom */}
      <div className="absolute inset-0 pointer-events-none">
        <span className="absolute bottom-6 left-6 w-[14px] h-[14px] border border-[var(--line)] border-r-0 border-t-0" />
        <span className="absolute bottom-6 right-6 w-[14px] h-[14px] border border-[var(--line)] border-l-0 border-t-0" />
      </div>

      <div className="mx-auto max-w-[1180px] px-8 relative z-[2]" style={{ paddingTop: 110, paddingBottom: 90 }}>
        {/* Section head */}
        <div className="flex items-end justify-end gap-6 flex-wrap mb-11">
          <div className="font-mono text-[11.5px] tracking-[0.14em] uppercase text-[var(--text-dim)]">
            {t("contact.tag").split("·")[0]}
            <span className="text-[var(--accent)]">·</span>
            {t("contact.tag").split("·")[1]}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-[60px]">
          {/* Texto + botones */}
          <div>
            <h2 className="font-sans font-semibold text-[clamp(30px,4vw,46px)] leading-[1.12] tracking-[-0.01em] max-w-[14ch]">
              {t("contact.heading")}
            </h2>
            <p className="text-[15.5px] text-[var(--text-dim)] mt-[18px] max-w-[44ch]">
              {t("contact.sub")}
            </p>
            <div className="flex flex-wrap gap-[14px] mt-8">
              <a
                href="mailto:apr991212@gmail.com"
                className="font-mono text-[13px] tracking-[0.03em] px-[22px] py-[13px] inline-flex items-center gap-2 font-semibold hover:-translate-y-0.5 transition-transform text-[#0a0a0c]"
                style={{ background: "linear-gradient(90deg, var(--accent), var(--accent-2))" }}
              >
                {t("contact.emailBtn")}
              </a>
              <a
                href="https://www.github.com/arianna9912"
                target="_blank"
                rel="noopener"
                className="font-mono text-[13px] tracking-[0.03em] px-[22px] py-[13px] inline-flex items-center gap-2 text-[var(--text)] border border-[var(--line)] hover:-translate-y-0.5 hover:border-[var(--text-dim)] transition-all"
              >
                {t("contact.githubBtn")}
              </a>
            </div>
          </div>

          {/* Lista de contacto */}
          <div className="flex flex-col">
            {rows.map((row) => {
              const href = hrefFor(row.type, row.v);
              const isLink = !!href;
              return (
                <div
                  key={row.k}
                  className="flex justify-between items-center py-5 border-b font-mono text-[14px] first:border-t"
                  style={{ borderColor: "var(--line-soft)" }}
                >
                  <span className="text-[var(--text-faint)] text-[11px] tracking-[0.08em] uppercase">
                    {row.k}
                  </span>
                  {isLink ? (
                    <a
                      href={href}
                      target={row.type === "github" ? "_blank" : undefined}
                      rel={row.type === "github" ? "noopener" : undefined}
                      className="text-[var(--text)] hover:text-[var(--accent-2)] transition-colors"
                    >
                      {row.v}
                    </a>
                  ) : (
                    <span className="text-[var(--text)]">{row.v}</span>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}