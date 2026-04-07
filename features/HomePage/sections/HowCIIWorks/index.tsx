import { useEffect, useState } from "react";
import { Chip } from "@mui/material";
import { ArrowForwardRounded } from "@mui/icons-material";
import {
  functionalModelCards,
  frameworkChips,
  deliveryVehicles,
} from "./constants";
import { BG_TINTED_1 } from "../../backgrounds";

export default function HowCIIWorks() {
  const [narrow, setNarrow] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 639px)");
    const apply = () => setNarrow(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  return (
    <section
      id="how-cii-works"
      className="scroll-mt-24 relative overflow-x-hidden"
      style={{ background: BG_TINTED_1 }}
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-10 px-4 pt-14 sm:gap-14 sm:px-6 sm:pt-20 pb-10 md:pt-28 lg:px-20">
        <div className="flex flex-col gap-4">
          <h2 className="section-heading">
            How CII Centre of Excellence on Skills Works
          </h2>
        </div>

        <div className="flex flex-col gap-6">
          <h3 className="section-subheading">
            Industry-Led Functional Model
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:px-20 px-0">
            {functionalModelCards.map(({ Icon, title, lines }) => (
              <div
                key={title}
                className="cii-card rounded-2xl bg-white p-6 flex flex-col gap-4 cursor-default"
                style={{
                  border: "1.5px solid rgba(29,78,216,0.15)",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget;
                  el.style.background =
                    "linear-gradient(135deg, #396dff 0%, #0891B2 100%)";
                  el.style.borderColor = "transparent";
                  el.style.boxShadow = "0 12px 32px rgba(29,78,216,0.25)";
                  el.style.transform = "translateY(-4px)";
                  el
                    .querySelectorAll<HTMLElement>(".cii-title")
                    .forEach((n) =>
                      n.style.setProperty("color", "white", "important")
                    );
                  el
                    .querySelectorAll<HTMLElement>(".cii-text")
                    .forEach((n) => {
                      n.style.color = "rgba(255,255,255,0.85)";
                    });
                  el
                    .querySelectorAll<HTMLElement>(".cii-icon")
                    .forEach((n) => {
                      n.style.color = "white";
                    });
                  el
                    .querySelectorAll<HTMLElement>(".cii-icon-wrap")
                    .forEach((n) => {
                      n.style.background = "rgba(255,255,255,0.15)";
                    });
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget;
                  el.style.background = "white";
                  el.style.borderColor = "rgba(29,78,216,0.15)";
                  el.style.boxShadow = "0 2px 12px rgba(0,0,0,0.06)";
                  el.style.transform = "translateY(0)";
                  el
                    .querySelectorAll<HTMLElement>(".cii-title")
                    .forEach((n) => {
                      n.style.removeProperty("color");
                    });
                  el
                    .querySelectorAll<HTMLElement>(".cii-text")
                    .forEach((n) => {
                      n.style.color = "#475569";
                    });
                  el
                    .querySelectorAll<HTMLElement>(".cii-icon")
                    .forEach((n) => {
                      n.style.color = "#1D4ED8";
                    });
                  el
                    .querySelectorAll<HTMLElement>(".cii-icon-wrap")
                    .forEach((n) => {
                      n.style.background = "rgba(29,78,216,0.07)";
                    });
                }}
              >
                <div className="flex items-start gap-4">
                  <div
                    className="cii-icon-wrap w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{
                      background: "rgba(29,78,216,0.07)",
                      transition: "background 0.3s ease",
                    }}
                  >
                    <Icon
                      className="cii-icon"
                      style={{
                        fontSize: 22,
                        color: "#1D4ED8",
                        transition: "color 0.3s ease",
                      }}
                    />
                  </div>
                  <h4
                    className="cii-title text-base font-semibold text-content-primary font-poppins mt-1.5"
                    style={{ transition: "color 0.3s ease" }}
                  >
                    {title}
                  </h4>
                </div>
                <ul className="flex flex-col gap-2">
                  {lines.map((line) => (
                    <li key={line} className="flex items-start gap-2.5">
                      <ArrowForwardRounded
                        className="cii-icon flex-shrink-0 mt-0.5"
                        style={{
                          fontSize: 14,
                          color: "#1D4ED8",
                          transition: "color 0.3s ease",
                        }}
                      />
                      <span
                        className="cii-text text-sm"
                        style={{
                          color: "#475569",
                          transition: "color 0.3s ease",
                        }}
                      >
                        {line}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <h3 className="section-subheading">
            CII Interventions &amp; Framework
          </h3>
          <div className="flex flex-wrap gap-2.5">
            {frameworkChips.map((chip) => (
              <Chip
                key={chip}
                label={chip}
                variant="outlined"
                sx={{
                  borderColor: "rgba(29,78,216,0.2)",
                  color: "#1D4ED8",
                  backgroundColor: "white",
                  fontWeight: 500,
                  fontSize: "0.8125rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                  "&:hover": { backgroundColor: "rgba(29,78,216,0.04)" },
                }}
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-6 sm:gap-8 -mb-10">
          <div className="flex flex-col gap-2 sm:gap-3">
            <h3 className="section-subheading">
              CII Skill Delivery Vehicles
            </h3>
            <p className="section-description max-w-[17rem] text-sm sm:max-w-2xl sm:text-base md:max-w-3xl">
              Making TIRTC the Hub for Talent Development and Capacity Building
              in the Telecom Sector.
            </p>
          </div>

          <div className="relative mx-auto w-full max-w-[min(100%,18.5rem)] px-1 py-3 sm:max-w-[520px] sm:px-4 sm:py-6">
            <div className="relative aspect-square w-full min-h-[200px] sm:min-h-0">
              {/* Ring */}
              <svg
                className="pointer-events-none absolute inset-0 z-[1] h-full w-full"
                viewBox="0 0 100 100"
                aria-hidden="true"
              >
                <defs>
                  <linearGradient
                    id="cii-wheel-ring"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#22D3EE" />
                    <stop offset="55%" stopColor="#3B82F6" />
                    <stop offset="100%" stopColor="#1E3A8A" />
                  </linearGradient>
                </defs>

                <circle
                  cx="50"
                  cy="50"
                  r={narrow ? 28 : 31}
                  fill="none"
                  stroke="url(#cii-wheel-ring)"
                  strokeWidth={narrow ? 0.9 : 1}
                  strokeDasharray="4 6"
                  strokeLinecap="round"
                  opacity="0.95"
                />
              </svg>

              {/* Centre hub */}
              <div className="absolute left-1/2 top-1/2 z-10 flex h-[17%] w-[17%] min-h-[3.75rem] min-w-[3.75rem] max-h-[4.75rem] max-w-[4.75rem] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-primary-700/15 bg-background-primary px-1.5 text-center shadow-[0_6px_18px_rgba(30,58,138,0.1)] sm:h-[20%] sm:w-[20%] sm:min-h-[84px] sm:min-w-[84px] sm:max-h-none sm:max-w-none sm:px-2.5 sm:shadow-[0_8px_28px_rgba(30,58,138,0.12)] md:min-h-[96px] md:min-w-[96px]">
                <span className="font-poppins text-[0.6rem] font-bold uppercase leading-tight tracking-wide text-primary-900 sm:text-xs md:text-[15px]">
                  CII Skill Delivery
                </span>
              </div>

              {deliveryVehicles.map(({ title, description, Icon }, i) => {
                const total = deliveryVehicles.length;
                const angle = (2 * Math.PI * i) / total - Math.PI / 2;

                const iconRadius = narrow ? 27 : 31;
                const labelRadius = narrow ? 31.5 : 36;

                const iconLeft = 50 + iconRadius * Math.cos(angle);
                const iconTop = 50 + iconRadius * Math.sin(angle);

                const labelLeft = 50 + labelRadius * Math.cos(angle);
                const labelTop = 50 + labelRadius * Math.sin(angle);

                const cos = Math.cos(angle);
                const sin = Math.sin(angle);

                let labelClass =
                  "absolute z-[15] flex w-[7.25rem] flex-col gap-0.5 leading-snug sm:w-[9.5rem] md:w-[11rem] sm:gap-1";

                let transform = "translate(-50%, -50%)";
                let textAlign: "left" | "right" | "center" = "center";

                if (cos > 0.35) {
                  labelClass += " items-start";
                  transform = "translate(0, -50%)";
                  textAlign = "left";
                } else if (cos < -0.35) {
                  labelClass += " items-end";
                  transform = "translate(-100%, -50%)";
                  textAlign = "right";
                } else {
                  labelClass += " items-center";
                  transform = sin > 0 ? "translate(-50%, 0.15rem)" : "translate(-50%, calc(-100% - 0.15rem))";
                  textAlign = "center";
                }

                return (
                  <div key={title} className="contents">
                    <div
                      className="absolute z-[15] flex -translate-x-1/2 -translate-y-1/2 items-center justify-center"
                      style={{ left: `${iconLeft}%`, top: `${iconTop}%` }}
                    >
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-primary-700/15 bg-background-primary shadow-[0_4px_14px_rgba(30,58,138,0.12)] sm:h-14 sm:w-14 sm:border-2 sm:shadow-[0_6px_20px_rgba(30,58,138,0.14)] md:h-16 md:w-16">
                        <Icon className="text-[19px] text-primary-700 sm:text-[24px] md:text-[28px]" />
                      </div>
                    </div>

                    <div
                      className={labelClass}
                      style={{
                        left: `${labelLeft + (i >= 3 ? -6 : i > 0 ? 6 : 0)}%`,
                        top: `${labelTop + (i === 0 ? -4 : 0)}%`,
                        transform,
                        textAlign,
                      }}
                    >
                      <span className="max-w-full text-[9.5px] font-semibold leading-[1.2] text-primary-900 sm:text-[11px] md:text-[13px]">
                        {title}
                      </span>
                      <span className="max-w-full text-[8.5px] leading-[1.28] text-content-secondary sm:text-[10px] md:text-xs">
                        {description}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
