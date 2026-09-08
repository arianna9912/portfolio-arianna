"use client";

import { useTranslation } from "react-i18next";

export default function Skills() {
  const { t } = useTranslation();
  const groups = t("skills.groups", { returnObjects: true }) as {
    idx: string;
    title: string;
    chips: string[];
  }[];

  return (
    <section id="habilidades" className="relative py-[110px] border-t" style={{ borderColor: "var(--line-soft)" }}>
      <div className="mx-auto max-w-[1180px] px-8">
        {/* Section head */}
        <div className="flex items-end justify-between gap-6 flex-wrap mb-[56px]">
          <div>
            <h2 className="font-sans font-semibold text-[clamp(26px,3.2vw,36px)] tracking-[-0.01em]">
              {t("skills.title")}
            </h2>
          </div>
          <div className="font-mono text-[11.5px] tracking-[0.14em] uppercase text-[var(--text-dim)]">
            {t("skills.tag").split("·")[0]}
            <span className="text-[var(--accent)]">·</span>
            {t("skills.tag").split("·")[1]}
          </div>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-[1px] border border-[var(--line-soft)]"
          style={{ background: "var(--line-soft)" }}
        >
          {groups.map((g) => (
            <div key={g.idx} className="p-[30px_26px]" style={{ background: "var(--bg-panel)" }}>
              <div className="flex items-center gap-2 mb-5">
                <span className="font-mono text-[11px] text-[var(--accent-2)]">{g.idx}</span>
                <h3 className="font-sans text-[16px] font-semibold">{g.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {g.chips.map((chip) => (
                  <span
                    key={chip}
                    className="font-mono text-[12px] px-[11px] py-[7px] border border-[var(--line)] text-[var(--text-dim)] hover:border-[var(--accent)] hover:text-[var(--text)] transition-colors cursor-pointer"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}