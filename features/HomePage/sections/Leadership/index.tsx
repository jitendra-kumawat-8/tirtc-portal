import { Chip } from "@mui/material";
import { CheckCircleOutlineRounded } from "@mui/icons-material";
import { governancePoints, taskGroups } from "./constants";
import { BG_TINTED_2 } from "../../backgrounds";

export default function Leadership() {
  return (
    <section
      id="leadership"
      className="scroll-mt-24 relative overflow-hidden"
      style={{ background: BG_TINTED_2 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 py-20 md:py-28 flex flex-col gap-12">

        <div className="flex flex-col gap-4">
          <span className="text-sm font-bold uppercase tracking-[0.16em] text-primary-700">
            Leadership &amp; Governance
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left — CII role */}
          <div className="flex flex-col gap-5">
            <p className="text-base" style={{ color: "#475569", lineHeight: 1.8 }}>
              As the implementing partner, CII is responsible for the overall management and coordination
              of TIRTC. This includes mobilising &amp; counselling of candidates, conducting training
              sessions by Industry Experts, and facilitating industry linkages for placement opportunities.
            </p>
            <p className="text-base" style={{ color: "#475569", lineHeight: 1.8 }}>
              CII has developed a structured operational model for TIRTC, focusing on identifying in-demand
              job roles, curriculum development, and establishing training labs with the latest technology.
              Through its extensive network, CII ensures training programmes are aligned with industry
              standards and candidates are equipped for the evolving telecom landscape.
            </p>
          </div>

          {/* Right — governance framework */}
          <div className="flex flex-col gap-6">
            <h3 className="text-lg font-semibold text-content-primary font-poppins">Governance Framework</h3>
            <ul className="flex flex-col gap-3">
              {governancePoints.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <CheckCircleOutlineRounded
                    className="flex-shrink-0 mt-0.5"
                    style={{ fontSize: 18, color: "#1D4ED8" }}
                  />
                  <span className="text-sm" style={{ color: "#475569" }}>{point}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col gap-3">
              <span className="text-sm font-semibold text-content-primary font-poppins">Dedicated task groups for:</span>
              <div className="flex flex-wrap gap-2">
                {taskGroups.map((group) => (
                  <Chip
                    key={group}
                    label={group}
                    variant="outlined"
                    sx={{
                      borderColor: "rgba(29,78,216,0.2)",
                      color: "#1D4ED8",
                      backgroundColor: "white",
                      fontWeight: 500,
                      fontSize: "0.8125rem",
                      "&:hover": { backgroundColor: "rgba(29,78,216,0.04)" },
                    }}
                  />
                ))}
              </div>
            </div>

            <p className="text-sm font-medium" style={{ color: "#475569", fontStyle: "italic" }}>
              This model ensures speed, flexibility, transparency, and accountability.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
