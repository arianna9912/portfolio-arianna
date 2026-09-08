"use client";

import { useTranslation } from "react-i18next";

function SectionHead({ title, tag }: { title: string; tag: string }) {
  return (
    <div className="flex items-end justify-between gap-6 flex-wrap mb-[56px]">
      <div>
        <h2 className="font-sans font-semibold text-[clamp(26px,3.2vw,36px)] tracking-[-0.01em]">
          {title}
        </h2>
      </div>
      <div className="font-mono text-[11.5px] tracking-[0.14em] uppercase text-[var(--text-dim)]">
        {tag.split("·").map((part, i) => (
          <span key={i}>
            {part}
            {i === 0 && <span className="text-[var(--accent)]">·</span>}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function About() {
  const { t } = useTranslation();
  const spec = t("about.spec", { returnObjects: true }) as {
    k: string;
    v: string;
    accent?: boolean;
  }[];

  return (
    <section id="sobre-mi" className="relative py-[110px] border-t" style={{ borderColor: "var(--line-soft)" }}>
      <div className="mx-auto max-w-[1180px] px-8">
        <SectionHead title={t("about.title")} tag={t("about.tag")} />

        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-[70px]">
          {/* Texto */}
          <div>
            {["p1", "p2", "p3"].map((key) => (
              <p
                key={key}
                className="text-[16px] leading-[1.75] text-justify text-[var(--text-dim)] max-w-[58ch]"
                dangerouslySetInnerHTML={{ __html: t(`about.${key}`) }}
              />
            ))}
          </div>

          {/* Spec sheet */}
          <div className="border border-[var(--line)]" style={{ background: "var(--bg-panel)" }}>
            {spec.map((row) => (
              <div
                key={row.k}
                className="flex justify-between px-5 py-4 font-mono text-[13px] border-b"
                style={{ borderColor: "var(--line-soft)" }}
              >
                <span className="text-[var(--text-faint)]">{row.k}</span>
                <span
                  className="text-right"
                  style={{ color: row.accent ? "var(--accent-2)" : "var(--text)" }}
                >
                  {row.v}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}