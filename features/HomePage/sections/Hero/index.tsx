import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowForwardRounded, CheckCircleOutlineRounded } from "@mui/icons-material";
import { useAuth } from "../../../../context/AuthContext";
import { candidatePoints, employerPoints } from "./constants";

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    setMounted(true);
  }, []);

  /** Hide login/signup CTAs once client knows the user is signed in (avoids SSR/hydration mismatch). */
  const showLoginSignupCTAs = !mounted || !isAuthenticated;

  return (
    <section
      className="relative overflow-hidden text-white"
      style={{
        // background: [
        //   "radial-gradient(circle at 18% 32%, rgba(255,255,255,0.07), transparent 40%)",
        //   "radial-gradient(circle at 82% 72%, rgba(255,255,255,0.05), transparent 40%)",
        //   "linear-gradient(135deg, #1D4ED8 0%, #0891B2 100%)",
        // ].join(", "),
        backgroundImage:
          "url('/assets/hero-bg-1.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-[1] max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-center">

          {/* Left column */}
          <div className="md:col-span-7 flex flex-col gap-7">
            <h1
              className="hero-title text-[2rem] md:text-[3.75rem] font-extrabold leading-[1.05] tracking-tight text-white"

            >
              Telecom Innovation, Research & Training Centre (TIRTC)
            </h1>

            <p className="hero-sub text-white text-sm md:text-base font-semibold tracking-[0.18em] uppercase">
              Building India&apos;s Future Telecom Workforce
            </p>

            <p className="hero-body text-white/95 text-base leading-[1.85] max-w-[560px]">
              An industry-led initiative by the Confederation of Indian Industry (CII), in collaboration
              with the Department of Telecommunications (DoT).
            </p>
            <p className="hero-body text-white/95 text-base leading-[1.85] max-w-[560px]">
              A dedicated centre for skilling in the telecom sector, innovation, applied research and
              workforce development, located at BRBRAITT Campus, Jabalpur, Madhya Pradesh.
            </p>
          </div>

          {/* Right column — glass card + portal entry points */}
          <div id="apply" className="md:col-span-5 relative scroll-mt-24">
            <div className="absolute inset-[-20%] blur-[100px] bg-blue-400/30 pointer-events-none" />
            <div
              className="hero-card relative rounded-[28px] p-6 sm:p-8 flex flex-col gap-6 bg-white/[0.06] border border-white/[0.18] backdrop-blur-xl shadow-[0_24px_64px_rgba(0,0,0,0.25)]"
            >
              {/* <div className="flex flex-col gap-2">
                <h3 className="text-xl md:text-2xl font-bold">Portal entry points</h3>
                <span className="text-sm font-bold uppercase tracking-[0.16em] text-white/95">
                  Login / Register · Employer Login
                </span>
              </div> */}

              <div className="flex flex-col gap-6">
                {/* Candidates */}
                <div className="flex flex-col gap-4">
                  <h4 className="text-lg font-bold font-poppins">For Candidates</h4>
                  <ul className="flex flex-col gap-2.5">
                    {candidatePoints.map((point) => (
                      <li key={point} className="flex items-start gap-2">
                        <CheckCircleOutlineRounded
                          className="flex-shrink-0 mt-0.5 text-accent-400"
                          style={{ fontSize: 18 }}
                        />
                        <span className="text-sm text-white">{point}</span>
                      </li>
                    ))}
                  </ul>
                  {showLoginSignupCTAs && (
                    <div className="flex flex-col sm:flex-row gap-2.5 pt-1">
                      <Link
                        href="/login"
                        className="btn-transition inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold bg-primary-700 text-white rounded-full hover:bg-primary-900 shadow-sm"
                      >
                        Login <ArrowForwardRounded fontSize="small" />
                      </Link>
                      <Link
                        href="/register"
                        className="btn-transition inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-full border border-white/35 text-white hover:bg-white/10"
                      >
                        Register
                      </Link>
                    </div>
                  )}
                </div>

                {/* Employers */}
                <div className="flex flex-col gap-4 pt-6 border-t border-white/15">
                  <h4 className="text-lg font-bold font-poppins">For Employers</h4>
                  <ul className="flex flex-col gap-2.5">
                    {employerPoints.map((point) => (
                      <li key={point} className="flex items-start gap-2">
                        <CheckCircleOutlineRounded
                          className="flex-shrink-0 mt-0.5  text-accent-400"
                          style={{ fontSize: 18 }}
                        />
                        <span className="text-sm text-white">{point}</span>
                      </li>
                    ))}
                  </ul>
                  {showLoginSignupCTAs && (
                    <div className="flex flex-col sm:flex-row gap-2.5 pt-1">
                      <Link
                        href="/employer-login"
                        className="btn-transition inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold bg-white text-primary-700 rounded-full hover:bg-white/90 shadow-sm font-poppins"
                      >
                        Employer Login <ArrowForwardRounded fontSize="small" />
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
