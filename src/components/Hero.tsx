"use client";

import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

function useTypewriter(fullText: string, speed = 60, delay = 0) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!fullText) return;
    setDisplayed("");
    setDone(false);
    let i = 0;
    const words = fullText.split(" ");
    let interval: ReturnType<typeof setInterval> | undefined;

    const start = setTimeout(() => {
      interval = setInterval(() => {
        i++;
        setDisplayed(words.slice(0, i).join(" "));
        if (i >= words.length) {
          clearInterval(interval);
          setDone(true);
        }
      }, speed);
    }, delay);

    return () => {
      clearTimeout(start);
      if (interval) clearInterval(interval);
    };
  }, [fullText, speed, delay]);

  return { displayed, done };
}

export default function Hero() {
  const { t } = useTranslation();

  const line1 = useTypewriter(t("hero.headline1"), 60);

  return (
    <section className="relative grid-bg" style={{ borderTop: "none" }}>
      {/* Corner ticks top */}
      <div className="absolute inset-0 pointer-events-none">
        <span className="absolute top-6 left-6 w-[14px] h-[14px] border border-[var(--line)] border-r-0 border-b-0" />
        <span className="absolute top-6 right-6 w-[14px] h-[14px] border border-[var(--line)] border-l-0 border-b-0" />
      </div>

      <div className="mx-auto max-w-[1180px] px-8">
        <div
          className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-10 items-center relative z-[2]"
          style={{ paddingTop: 96, paddingBottom: 120 }}
        >
          {/* Texto */}
          <div>
            <div className="flex items-center gap-[10px] mb-[26px]">
              <span className="w-[26px] h-px" style={{ background: "var(--accent)" }} />
              <span className="font-mono text-[11.5px] tracking-[0.14em] uppercase text-[var(--text-dim)]">
                {t("hero.eyebrow").split("·")[0]}
                <span className="text-[var(--accent)]">·</span>
                {t("hero.eyebrow").split("·")[1]}
              </span>
            </div>

            {/* Línea 1 animada: "Hola, soy Arianna" */}
            <h1 className="font-sans font-extralight font-medium text-[clamp(30px,4vw,46px)] leading-[1.12] tracking-[-0.01em]">
              {line1.displayed}
              {!line1.done && (
                <span
                  className="inline-block w-[7px] h-[0.95em] ml-1 align-middle"
                  style={{ background: "var(--accent)", animation: "blink 1s step-end infinite" }}
                />
              )}
            </h1>

            {/* Sub descriptivo */}
            <p className="mt-[28px] max-w-[46ch] text-[16px] leading-[1.65] text-[var(--text-dim)]">
              {t("hero.sub")}
            </p>

            <div className="flex flex-wrap gap-[14px] mt-[34px]">
              <a
                href="#proyectos"
                className="font-mono text-[13px] tracking-[0.03em] px-[22px] py-[13px] inline-flex items-center gap-2 font-semibold hover:-translate-y-0.5 transition-transform text-[#0a0a0c]"
                style={{
                  background: "linear-gradient(90deg, var(--accent), var(--accent-2))",
                }}
              >
                {t("hero.cta")}
              </a>
              <a
                href="#contacto"
                className="font-mono text-[13px] tracking-[0.03em] px-[22px] py-[13px] inline-flex items-center gap-2 text-[var(--text)] border border-[var(--line)] hover:-translate-y-0.5 hover:border-[var(--text-dim)] transition-all"
              >
                {t("hero.cta2")}
              </a>
            </div>
          </div>

          {/* Diagrama SVG animado + parallax de mouse */}
          <div
            className="flex items-center justify-center lg:mb-0 mt-10 lg:mt-0"
            style={{ perspective: "1000px" }}
            onMouseMove={(e) => {
              const el = e.currentTarget as HTMLElement;
              const rect = el.getBoundingClientRect();
              const px = (e.clientX - rect.left) / rect.width;
              const py = (e.clientY - rect.top) / rect.height;
              const rx = (0.5 - py) * 14;
              const ry = (px - 0.5) * 18;
              const svg = el.querySelector("svg") as SVGSVGElement | null;
              if (svg) svg.style.transform = `rotateX(${rx.toFixed(2)}deg) rotateY(${ry.toFixed(2)}deg)`;
            }}
            onMouseLeave={(e) => {
              const svg = e.currentTarget.querySelector("svg") as SVGSVGElement | null;
              if (svg) svg.style.transform = "rotateX(0deg) rotateY(0deg)";
            }}
          >
            <svg
              viewBox="0 0 460 460"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-auto max-w-[320px] lg:max-w-[460px]"
              style={{ transformStyle: "preserve-3d", transition: "transform 0.35s cubic-bezier(0.2,0.7,0.3,1)" }}
              role="img"
              aria-label="Diagrama de arquitectura: datos fluyendo de la capa de interfaz a la capa de API y a la capa de datos"
            >
              <defs>
                <linearGradient id="eg" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ff5a1f" />
                  <stop offset="100%" stopColor="#ffb020" />
                </linearGradient>
                <linearGradient id="f1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#17181e" />
                  <stop offset="100%" stopColor="#101116" />
                </linearGradient>
                <radialGradient id="halo" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#ff5a1f" stopOpacity="0.55" />
                  <stop offset="100%" stopColor="#ff5a1f" stopOpacity="0" />
                </radialGradient>
                <path id="flowPath" d="M230,166 L230,376" fill="none" />
              </defs>

              {/* Anillo orbital punteado */}
              <g opacity="0.5">
                <ellipse cx="230" cy="255" rx="205" ry="96" fill="none" stroke="#33343c" strokeWidth="1" strokeDasharray="2 7" />
                <g>
                  <animateTransform attributeName="transform" type="rotate" from="0 230 255" to="360 230 255" dur="34s" repeatCount="indefinite" />
                  <circle cx="435" cy="255" r="2.6" fill="#ffb020" />
                </g>
                <g>
                  <animateTransform attributeName="transform" type="rotate" from="180 230 255" to="540 230 255" dur="34s" repeatCount="indefinite" />
                  <circle cx="435" cy="255" r="2.2" fill="#ff5a1f" />
                </g>
              </g>

              {/* Halos ambientales */}
              <circle cx="230" cy="110" r="70" fill="url(#halo)" opacity="0.18">
                <animate attributeName="opacity" values="0.10;0.28;0.10" dur="4.4s" begin="0s" repeatCount="indefinite" />
              </circle>
              <circle cx="230" cy="272" r="70" fill="url(#halo)" opacity="0.18">
                <animate attributeName="opacity" values="0.10;0.28;0.10" dur="4.4s" begin="1.1s" repeatCount="indefinite" />
              </circle>
              <circle cx="230" cy="434" r="70" fill="url(#halo)" opacity="0.18">
                <animate attributeName="opacity" values="0.10;0.28;0.10" dur="4.4s" begin="2.2s" repeatCount="indefinite" />
              </circle>

              {/* Líneas conectoras base */}
              <line x1="230" y1="170" x2="230" y2="212" stroke="url(#eg)" strokeWidth="2" strokeLinecap="round" opacity="0.55" />
              <line x1="230" y1="332" x2="230" y2="374" stroke="url(#eg)" strokeWidth="2" strokeLinecap="round" opacity="0.55" />

              {/* Paquetes de datos fluyendo */}
              <circle r="4.5" fill="#ffb020">
                <animateMotion dur="3.4s" repeatCount="indefinite" begin="0s">
                  <mpath href="#flowPath" />
                </animateMotion>
                <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.08;0.85;1" dur="3.4s" repeatCount="indefinite" begin="0s" />
              </circle>
              <circle r="4.5" fill="#ff5a1f">
                <animateMotion dur="3.4s" repeatCount="indefinite" begin="1.7s">
                  <mpath href="#flowPath" />
                </animateMotion>
                <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.08;0.85;1" dur="3.4s" repeatCount="indefinite" begin="1.7s" />
              </circle>

              {/* Capa UI (arriba) */}
              <g>
                <animateTransform attributeName="transform" type="translate" values="0,0; 0,-6; 0,0" keyTimes="0;0.5;1" dur="5s" begin="0s" repeatCount="indefinite" />
                <polygon points="230,50 360,110 230,170 100,110" fill="url(#f1)" stroke="#2c2d34" strokeWidth="1" />
                <text x="230" y="116" textAnchor="middle" fontFamily="Space Grotesk" fontSize="15" fill="#ededec" fontWeight="600">front-end</text>
              </g>
              <circle cx="230" cy="170" r="3.5" fill="#ff5a1f" />

              {/* Capa API (medio) */}
              <g>
                <animateTransform attributeName="transform" type="translate" values="0,0; 0,-6; 0,0" keyTimes="0;0.5;1" dur="5s" begin="0.4s" repeatCount="indefinite" />
                <polygon points="230,212 360,272 230,332 100,272" fill="url(#f1)" stroke="#2c2d34" strokeWidth="1" />
                <text x="230" y="278" textAnchor="middle" fontFamily="Space Grotesk" fontSize="15" fill="#ededec" fontWeight="600">api</text>
              </g>
              <circle cx="230" cy="332" r="3.5" fill="#ffb020" />

              {/* Capa DATOS (abajo) — reemplaza GA4 */}
              <g>
                <animateTransform attributeName="transform" type="translate" values="0,0; 0,-6; 0,0" keyTimes="0;0.5;1" dur="5s" begin="0.8s" repeatCount="indefinite" />
                <polygon points="230,374 360,434 230,460 100,434" fill="url(#f1)" stroke="#2c2d34" strokeWidth="1" />
                <text x="230" y="420" textAnchor="middle" fontFamily="Space Grotesk" fontSize="12" fill="#ededec" fontWeight="600">back-end</text>
              </g>

              {/* Marcas de esquina */}
              <circle cx="230" cy="20" r="2" fill="#3a3b42" />
              <circle cx="30" cy="270" r="2" fill="#3a3b42" />
              <circle cx="430" cy="270" r="2" fill="#3a3b42" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}