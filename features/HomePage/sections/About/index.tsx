import Image from "next/image";
import { CheckCircleOutlineRounded } from "@mui/icons-material";
import { aboutPoints } from "./constants";

export default function About() {
  return (
    <section
      id="about"
      className="scroll-mt-24 bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch rounded-2xl overflow-hidden"
          style={{ boxShadow: "0 20px 60px rgba(29,78,216,0.10)" }}
        >

          {/* Left — image fills full height of the row */}
          <div className="relative min-h-[340px] lg:min-h-0">
            <Image
              src="/assets/about-us.jpeg"
              alt="BRBRAITT Campus, Jabalpur — home of TIRTC"
              fill
              style={{ objectFit: "cover", objectPosition: "center" }}
              priority
            />
            <div
              className="absolute bottom-0 left-0 right-0 px-5 py-3"
              style={{ background: "linear-gradient(to top, rgba(15,23,42,0.65) 0%, transparent 100%)" }}
            >
              <p className="text-xs text-white/80 font-medium">
                BRBRAITT Campus · Jabalpur, Madhya Pradesh
              </p>
            </div>
          </div>

          {/* Right — text content */}
          <div className="flex flex-col justify-center gap-7 p-8 md:p-12 bg-white">
            <div className="flex flex-col gap-4">
              <span className="text-sm font-bold uppercase tracking-[0.16em] text-primary-700">
                About TIRTC
              </span>
              <p className="text-lg text-content-primary leading-[1.8]">
                The Telecom Innovation, Research &amp; Training Centre (TIRTC), Jabalpur will serve as an
                industry-led hub for telecom R&amp;D, innovation, skill development and jobs.
              </p>
              <p className="text-base text-content-secondary leading-[1.8] italic">
                An industry-led telecom training centre designed to build a future-ready telecom
                workforce through hands-on, industry-aligned learning and strong placement integration.
              </p>
            </div>

            <ul className="flex flex-col gap-3">
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
      </div>
    </section>
  );
}
