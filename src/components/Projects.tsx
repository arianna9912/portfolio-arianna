"use client";

import Image from "next/image";
import { useTranslation } from "react-i18next";

export default function Projects() {
  const { t } = useTranslation();
  const cards = t("projects.cards", { returnObjects: true }) as {
    id: string;
    status: string;
    title: string;
    desc: string;
    tags: string[];
    img: string;
    url: string;
  }[];

  return (
    <section id="proyectos" className="relative py-[110px] border-t" style={{ borderColor: "var(--line-soft)" }}>
      <div className="mx-auto max-w-[1180px] px-8">
        {/* Section head */}
        <div className="flex items-end justify-between gap-6 flex-wrap mb-[56px]">
          <div>
            <h2 className="font-sans font-semibold text-[clamp(26px,3.2vw,36px)] tracking-[-0.01em]">
              {t("projects.title")}
            </h2>
          </div>
          <div className="font-mono text-[11.5px] tracking-[0.14em] uppercase text-[var(--text-dim)]">
            {t("projects.tag").split("·")[0]}
            <span className="text-[var(--accent)]">·</span>
            {t("projects.tag").split("·")[1]}
          </div>
        </div>

        <p className="font-mono text-[12px] text-[var(--text-faint)] mb-10 -mt-8 max-w-[60ch]">
          {t("projects.note")}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[22px]">
          {cards.map((p, i) => (
            <article
              key={i}
              className="border border-[var(--line)] p-[26px] relative hover:-translate-y-1 hover:border-[var(--accent)] transition-all"
              style={{ background: "var(--bg-panel)" }}
            >
              <a href={p.url} target="_blank" rel="noopener noreferrer" className="block group">
                <div className="-mx-[26px] -mt-[26px] mb-6 overflow-hidden border-b border-[var(--line)]">
                  <Image
                    src={p.img}
                    alt={p.title}
                    width={800}
                    height={500}
                    className="w-full h-[190px] object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    loading="lazy"
                  />
                </div>
                <div className="flex justify-between items-start mb-[22px]">
                  <span className="font-mono text-[11px] text-[var(--text-faint)]">{p.id}</span>
                  <span
                    className="font-mono text-[10px] tracking-[0.06em] px-2 py-0.5"
                    style={{
                      color: "var(--accent-2)",
                      border: "1px solid rgba(255,176,32,0.35)",
                    }}
                  >
                    {p.status}
                  </span>
                </div>
                <h3 className="font-sans text-[18px] font-semibold mb-[10px]">{p.title}</h3>
                <p className="text-[13.5px] leading-[1.65] text-[var(--text-dim)] mb-5">{p.desc}</p>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[10.5px] text-[var(--text-faint)] border border-[var(--line-soft)] px-2 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="font-mono text-[11px] tracking-[0.04em] text-[var(--accent)]">
                  VER REPOSITORIO ↗
                </span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}