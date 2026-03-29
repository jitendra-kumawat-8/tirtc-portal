import { Chip } from "@mui/material";
import { ArrowForwardRounded } from "@mui/icons-material";
import { functionalModelCards, frameworkChips, deliveryVehicles } from "./constants";
import { BG_TINTED_1 } from "../../backgrounds";

export default function HowCIIWorks() {
  return (
    <section
      id="how-cii-works"
      className="scroll-mt-24 relative overflow-hidden"
      style={{ background: BG_TINTED_1 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 py-20 md:py-28 flex flex-col gap-14">

        {/* Section header */}
        <div className="flex flex-col gap-4">
          <span className="text-sm font-bold uppercase tracking-[0.16em]" style={{ color: "#1D4ED8" }}>
            How CII Centre of Excellence on Skills Works
          </span>
        </div>

        {/* Industry-Led Functional Model */}
        <div className="flex flex-col gap-6">
          <h3 className="text-lg font-semibold text-content-primary font-poppins">Industry-Led Functional Model</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 px-20">
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
                  el.style.background = "linear-gradient(135deg, #396dff 0%, #0891B2 100%)";
                  el.style.borderColor = "transparent";
                  el.style.boxShadow = "0 12px 32px rgba(29,78,216,0.25)";
                  el.style.transform = "translateY(-4px)";
                  el.querySelectorAll<HTMLElement>(".cii-title").forEach((n) => { n.style.setProperty("color", "white", "important"); });
                  el.querySelectorAll<HTMLElement>(".cii-text").forEach((n) => { n.style.color = "rgba(255,255,255,0.85)"; });
                  el.querySelectorAll<HTMLElement>(".cii-icon").forEach((n) => { n.style.color = "white"; });
                  el.querySelectorAll<HTMLElement>(".cii-icon-wrap").forEach((n) => { n.style.background = "rgba(255,255,255,0.15)"; });
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget;
                  el.style.background = "white";
                  el.style.borderColor = "rgba(29,78,216,0.15)";
                  el.style.boxShadow = "0 2px 12px rgba(0,0,0,0.06)";
                  el.style.transform = "translateY(0)";
                  el.querySelectorAll<HTMLElement>(".cii-title").forEach((n) => { n.style.removeProperty("color"); });
                  el.querySelectorAll<HTMLElement>(".cii-text").forEach((n) => { n.style.color = "#475569"; });
                  el.querySelectorAll<HTMLElement>(".cii-icon").forEach((n) => { n.style.color = "#1D4ED8"; });
                  el.querySelectorAll<HTMLElement>(".cii-icon-wrap").forEach((n) => { n.style.background = "rgba(29,78,216,0.07)"; });
                }}
              >
                <div className="flex items-start gap-4">
                  <div className="cii-icon-wrap w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "rgba(29,78,216,0.07)", transition: "background 0.3s ease" }}>
                    <Icon className="cii-icon" style={{ fontSize: 22, color: "#1D4ED8", transition: "color 0.3s ease" }} />
                  </div>
                  <h4 className="cii-title text-base font-semibold text-content-primary font-poppins mt-1.5" style={{ transition: "color 0.3s ease" }}>{title}</h4>
                </div>
                <ul className="flex flex-col gap-2">
                  {lines.map((line) => (
                    <li key={line} className="flex items-start gap-2.5">
                      <ArrowForwardRounded className="cii-icon flex-shrink-0 mt-0.5" style={{ fontSize: 14, color: "#1D4ED8", transition: "color 0.3s ease" }} />
                      <span className="cii-text text-sm" style={{ color: "#475569", transition: "color 0.3s ease" }}>{line}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* CII Interventions & Framework */}
        <div className="flex flex-col gap-6">
          <h3 className="text-lg font-semibold text-content-primary font-poppins">CII Interventions &amp; Framework</h3>
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

        {/* CII Skill Delivery Vehicles */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <h3 className="text-lg font-semibold text-content-primary font-poppins">CII Skill Delivery Vehicles</h3>
            <p className="text-base" style={{ color: "#475569" }}>
              Making TIRTC the Hub for Talent Development and Capacity Building in the Telecom Sector.
            </p>
          </div>
          <ul className="flex flex-col gap-4">
            {deliveryVehicles.map(({ title, description }) => (
              <li key={title} className="flex items-start gap-3">
                <ArrowForwardRounded className="flex-shrink-0 mt-0.5" style={{ fontSize: 16, color: "#1D4ED8" }} />
                <div className="flex flex-col gap-0.5">
                  <span className="text-sm font-semibold text-content-primary font-poppins">{title}</span>
                  <span className="text-sm" style={{ color: "#475569" }}>{description}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
}
