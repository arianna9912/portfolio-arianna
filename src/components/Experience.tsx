"use client";

import { useTranslation } from "react-i18next";

export default function Experience() {
  const { t } = useTranslation();
  const jobs = t("experience.jobs", { returnObjects: true }) as {
    role: string;
    date: string;
    org: string;
    bullets: string[];
  }[];
  const edu = t("experience.edu", { returnObjects: true }) as {
    deg: string;
    inst: string;
    yr: string;
  }[];

  return (
    <section id="experiencia" className="relative py-[110px] border-t" style={{ borderColor: "var(--line-soft)" }}>
      <div className="mx-auto max-w-[1180px] px-8">
        {/* Section head */}
        <div className="flex items-end justify-between gap-6 flex-wrap mb-[56px]">
          <div>
            <h2 className="font-sans font-semibold text-[clamp(26px,3.2vw,36px)] tracking-[-0.01em]">
              {t("experience.title")}
            </h2>
          </div>
          <div className="font-mono text-[11.5px] tracking-[0.14em] uppercase text-[var(--text-dim)]">
            {t("experience.tag").split("·")[0]}
            <span className="text-[var(--accent)]">·</span>
            {t("experience.tag").split("·")[1]}
          </div>
        </div>

        {/* Pipeline */}
        <div className="relative pl-9" style={{ borderLeftColor: "var(--line)" }}>
          {/* Línea vertical */}
          <div
            className="absolute left-[5px] top-1.5 bottom-1.5 w-px"
            style={{
              background:
                "linear-gradient(180deg, var(--accent), var(--accent-2) 50%, var(--line) 100%)",
            }}
          />

          {jobs.map((job, i) => (
            <div key={i} className="relative pb-16 last:pb-0">
              {/* Nodo */}
              <div
                className="absolute -left-9 top-1.5 w-[11px] h-[11px] rounded-full border-2"
                style={{
                  background: "var(--bg)",
                  borderColor: "var(--accent)",
                  boxShadow: "0 0 0 4px var(--bg), 0 0 14px var(--accent-glow)",
                }}
              />
              <div className="flex justify-between items-baseline flex-wrap gap-y-2 gap-x-5 mb-1.5">
                <h3 className="font-sans text-[20px] font-semibold">{job.role}</h3>
                <span className="font-mono text-[12px] text-[var(--text-faint)] whitespace-nowrap">
                  {job.date}
                </span>
              </div>
              <div className="font-mono text-[12.5px] tracking-[0.03em] text-[var(--accent-2)] mb-4">
                {job.org}
              </div>
              <ul className="list-none max-w-[62ch]">
                {job.bullets.map((b, j) => (
                  <li
                    key={j}
                    className="relative pl-[18px] text-[14.5px] leading-[1.7] text-[var(--text-dim)] mb-2"
                  >
                    <span className="absolute left-0 top-0 text-[var(--text-faint)] font-mono">›</span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Educación */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-[1px] border border-[var(--line-soft)] mt-16"
          style={{ background: "var(--line-soft)" }}
        >
          {edu.map((e, i) => (
            <div key={i} className="p-[24px_26px]" style={{ background: "var(--bg-panel)" }}>
              <div className="font-semibold text-[15px] mb-1.5">{e.deg}</div>
              <div className="font-mono text-[12px] text-[var(--text-dim)]">{e.inst}</div>
              <div className="font-mono text-[11px] text-[var(--text-faint)] mt-1.5">{e.yr}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}