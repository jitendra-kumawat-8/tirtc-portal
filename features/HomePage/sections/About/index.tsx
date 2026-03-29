import { CheckCircleOutlineRounded } from "@mui/icons-material";
import { aboutPoints } from "./constants";

export default function About() {
  return (
    <section
      id="about"
      className="scroll-mt-24 relative overflow-hidden bg-white"
    >

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 py-20 md:py-28 relative">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-20 items-start">

          {/* Left — intro */}

          <div className="md:col-span-5 flex flex-col gap-5">
            <span className="text-sm font-bold uppercase tracking-[0.16em] text-primary-700">
              About TIRTC
            </span>

            <p className="text-lg text-content-primary leading-[1.8]">
              The Telecom Innovation, Research &amp; Training Centre (TIRTC), Jabalpur will serve as an
              industry-led hub for telecom R&amp;D, innovation, skill development and jobs.
            </p>
            <p className="text-base text-content-secondary leading-[1.8] italic" style={{ fontStyle: "italic" }}>
              An industry-led telecom training centre designed to build a future-ready telecom workforce
              through hands-on, industry-aligned learning and strong placement integration.
            </p>
          </div>

          {/* Right — bullet points */}
          <ul className="md:col-span-7 flex flex-col gap-3">
            {aboutPoints.map((text) => (
              <li key={text} className="flex items-start gap-3">
                <CheckCircleOutlineRounded
                  className="text-primary-700 flex-shrink-0 mt-0.5"
                  style={{ fontSize: 18 }}
                />
                <span className="text-base text-content-secondary leading-relaxed">{text}</span>
              </li>
            ))}
          </ul>

        </div>
      </div>
    </section>
  );
}
