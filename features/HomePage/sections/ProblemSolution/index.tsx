import { CheckCircleOutlineRounded } from "@mui/icons-material";
import { Chip } from "@mui/material";
import { demandIntro, demandRoleCards } from "./constants";
import { BG_TINTED_2 } from "../../backgrounds";

export default function Background() {
  return (
    <section
      id="background"
      className="relative overflow-hidden py-20 md:py-28 scroll-mt-24"
      style={{ background: BG_TINTED_2 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
        <div className="flex flex-col gap-8">

          <span className="section-heading">Background</span>

          <p className="section-subtitle">
            India&apos;s telecom ecosystem is undergoing a rapid transition toward AI-driven, cloud-based,
            software-defined and secure 5G/6G-ready infrastructure.
          </p>

          <p className="section-description">{demandIntro.leadIn}</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 gap-5">
            {demandRoleCards.map((card) => (
              <div
                key={card.title}
                className="course-card rounded-2xl p-6 flex flex-col gap-6 cursor-default group min-h-[300px]"
                style={{
                  background: "white",
                  border: `1.5px solid ${card.accent}25`,
                  boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget;
                  el.style.background = card.hoverGradient;
                  el.style.borderColor = "transparent";
                  el.style.boxShadow = "0 12px 32px rgba(0,0,0,0.15)";
                  el.querySelectorAll<HTMLElement>(".ps-cc-title").forEach((n) => {
                    n.style.color = "white";
                  });
                  el.querySelectorAll<HTMLElement>(".ps-cc-text").forEach((n) => {
                    n.style.color = "rgba(255,255,255,0.85)";
                  });
                  el.querySelectorAll<HTMLElement>(".ps-cc-icon").forEach((n) => {
                    n.style.color = "rgba(255,255,255,0.7)";
                  });
                  el.querySelectorAll<HTMLElement>(".ps-cc-chip").forEach((n) => {
                    n.style.borderColor = "rgba(255,255,255,0.3)";
                    n.style.color = "white";
                  });
                  el.querySelectorAll<HTMLElement>(".ps-cc-label").forEach((n) => {
                    n.style.color = "rgba(255,255,255,0.6)";
                  });
                  el.querySelectorAll<HTMLElement>(".ps-cc-divider").forEach((n) => {
                    n.style.borderColor = "rgba(255,255,255,0.15)";
                  });
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget;
                  el.style.background = "white";
                  el.style.borderColor = `${card.accent}25`;
                  el.style.boxShadow = "0 2px 12px rgba(0,0,0,0.06)";
                  el.querySelectorAll<HTMLElement>(".ps-cc-title").forEach((n) => {
                    n.style.color = card.accent;
                  });
                  el.querySelectorAll<HTMLElement>(".ps-cc-text").forEach((n) => {
                    n.style.color = "#475569";
                  });
                  el.querySelectorAll<HTMLElement>(".ps-cc-icon").forEach((n) => {
                    n.style.color = card.accent;
                  });
                  el.querySelectorAll<HTMLElement>(".ps-cc-chip").forEach((n) => {
                    n.style.borderColor = `${card.accent}33`;
                    n.style.color = card.accent;
                  });
                  el.querySelectorAll<HTMLElement>(".ps-cc-label").forEach((n) => {
                    n.style.color = card.accent;
                  });
                  el.querySelectorAll<HTMLElement>(".ps-cc-divider").forEach((n) => {
                    n.style.borderColor = "";
                  });
                }}
              >
                <div className="flex flex-col gap-4">
                  <h3
                    className="ps-cc-title text-lg font-bold font-poppins leading-snug"
                    style={{ color: card.accent, transition: "color 0.3s ease" }}
                  >
                    {card.title}
                  </h3>
                  <Chip
                    className="ps-cc-chip"
                    label={card.badge}
                    size="small"
                    variant="outlined"
                    sx={{
                      alignSelf: "flex-start",
                      borderColor: `${card.accent}33`,
                      color: card.accent,
                      fontWeight: 600,
                      fontSize: "0.7rem",
                      textTransform: "none",
                      letterSpacing: "0.04em",
                      transition: "all 0.3s ease",
                    }}
                  />
                </div>

                <ul className="flex flex-col gap-2 flex-1">
                  {card.topics.map((topic) => (
                    <li key={topic} className="flex items-start gap-2.5">
                      <CheckCircleOutlineRounded
                        className="ps-cc-icon flex-shrink-0 mt-0.5"
                        style={{ fontSize: 16, color: card.accent, transition: "color 0.3s ease" }}
                      />
                      <span
                        className="ps-cc-text text-sm"
                        style={{ color: "#475569", transition: "color 0.3s ease" }}
                      >
                        {topic}
                      </span>
                    </li>
                  ))}
                </ul>

                <div
                  className="ps-cc-divider border-t border-black/[0.06] pt-4 flex flex-col gap-1 mt-auto"
                  style={{ transition: "border-color 0.3s ease" }}
                >
                  <span
                    className="ps-cc-label text-[11px] font-bold uppercase tracking-[0.1em]"
                    style={{ color: card.accent, transition: "color 0.3s ease" }}
                  >
                    Outcome
                  </span>
                  <p className="ps-cc-text text-sm" style={{ color: "#475569", transition: "color 0.3s ease" }}>
                    {card.outcome}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p className="section-description">{demandIntro.afterCards}</p>

          <p className="section-subtitle" style={{ fontStyle: "italic" }}>
            {demandIntro.closing}
          </p>

        </div>
      </div>
    </section>
  );
}
