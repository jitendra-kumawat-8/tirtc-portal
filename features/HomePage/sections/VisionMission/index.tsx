import { CheckCircleOutlineRounded } from "@mui/icons-material";
import Image from "next/image";
import { missionPoints, visionMissionImages, visionParagraph } from "./constants";

const RIGHT_PANEL_BG = [
  "radial-gradient(circle at 12% 50%, rgba(29,78,216,0.08), transparent 42%)",
  "radial-gradient(circle at 82% 22%, rgba(6,182,212,0.06), transparent 38%)",
  "linear-gradient(90deg, #ffffff 0%, #f1f5ff 52%, #e6f6ff 100%)",
].join(", ");

const LEFT_PANEL_BG = [
  "radial-gradient(circle at 88% 50%, rgba(29,78,216,0.08), transparent 42%)",
  "radial-gradient(circle at 18% 22%, rgba(6,182,212,0.06), transparent 38%)",
  "linear-gradient(270deg, #ffffff 0%, #f1f5ff 52%, #e6f6ff 100%)",
].join(", ");

export default function VisionMission() {
  return (
    <section
      id="vision"
      className="mt-24 overflow-hidden  "
    >
      <div className="mx-auto flex flex-col gap-10 ">
        <div className="flex flex-col gap-4 text-center">
          <h2 className="section-heading">Vision &amp; Mission</h2>

        </div>

        <div className="flex flex-col gap-0">
          <div className="overflow-hidden   bg-white ">
            <div className="grid min-h-[300px] grid-cols-1 lg:min-h-[400px] lg:grid-cols-2">
              <div className="relative min-h-[280px] lg:min-h-[400px]">
                <Image
                  src={visionMissionImages.vision}
                  alt="Vision"
                  fill
                  className="object-contain"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              <div
                className="flex items-center px-6 py-10 md:px-10 lg:px-28"
                style={{ background: RIGHT_PANEL_BG }}
              >
                <div className="max-w-[560px]">
                  <h3 className="font-poppins text-[1.5rem] md:text-[2rem] font-semibold leading-none text-[#1D4ED8] normal-case">
                    Our Vision
                  </h3>
                  <p className="mt-7 text-base leading-relaxed text-black md:text-base">
                    {visionParagraph}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="overflow-hidden   bg-white ">
            <div className="grid min-h-[300px] grid-cols-1 lg:min-h-[400px] lg:grid-cols-2">
              <div
                className="order-2 flex items-center px-6 py-10 md:px-16 lg:order-1 lg:px-28"
                style={{ background: LEFT_PANEL_BG }}
              >
                <div className="max-w-[560px]">
                  <h3 className="font-poppins text-[1.5rem] md:text-[2rem] font-semibold leading-none text-[#1D4ED8] normal-case">
                    Our Mission
                  </h3>
                  <ul className="mt-7 flex flex-col gap-3">
                    {missionPoints.map((point) => (
                      <li key={point} className="flex items-start gap-2.5">
                        <CheckCircleOutlineRounded
                          className="mt-0.5 flex-shrink-0 text-[#1D4ED8]"
                          style={{ fontSize: 18 }}
                        />
                        <span className="text-base leading-relaxed text-black md:text-base">
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="relative order-1 min-h-[280px] lg:order-2 lg:min-h-[400px]">
                <Image
                  src={visionMissionImages.mission}
                  alt="Mission"
                  fill
                  className="object-contain"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
