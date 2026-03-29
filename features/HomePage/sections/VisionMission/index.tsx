import { CheckCircleOutlineRounded } from "@mui/icons-material";
import { missionPoints } from "./constants";

export default function VisionMission() {
  return (
    <section
      id="vision"
      className="scroll-mt-24 relative overflow-hidden"
      style={{
        backgroundImage: "url('/assets/vision-mission-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dark overlay for contrast */}
      <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.45)" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 py-20 md:py-28 relative flex flex-col gap-6">
        <div className="flex items-center gap-3">
          <span className="text-sm font-bold uppercase tracking-[0.16em]" style={{ color: "rgba(255,255,255,0.65)" }}>
            Vision &amp; Mission
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Left — mission bullet points */}
          <div className="flex flex-col gap-6">
            <ul className="flex flex-col gap-3">
              {missionPoints.map((text) => (
                <li key={text} className="flex items-start gap-3">
                  <CheckCircleOutlineRounded
                    className="flex-shrink-0 mt-0.5"
                    style={{ fontSize: 18, color: "rgba(255,255,255,0.65)" }}
                  />
                  <span className="text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.88)" }}>
                    {text}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right — vision paragraph */}
          <div className="flex flex-col gap-5">
            <p className="text-lg leading-[1.8] tracking-wider" style={{ color: "rgba(255,255,255,0.95)" }}>
              To be the premier Training, Research and Development Institution on Telecommunication
              Technology and its Management, working at the intersection of Technology and Business.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
