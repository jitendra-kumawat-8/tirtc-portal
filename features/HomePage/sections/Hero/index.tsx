import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowForwardRounded } from "@mui/icons-material";
import { useAuth } from "../../../../context/AuthContext";
import { heroStats } from "./constants";

interface HeroProps {
  onShowInterest: () => void;
}

export default function Hero({ onShowInterest }: HeroProps) {
  const [mounted, setMounted] = useState(false);
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    setMounted(true);
  }, []);

  const showHeroCTAs = !mounted || !isAuthenticated;
  return (
    <section
      className="relative overflow-hidden text-white"
      style={{
        background: [
          "radial-gradient(circle at 18% 32%, rgba(255,255,255,0.07), transparent 40%)",
          "radial-gradient(circle at 82% 72%, rgba(255,255,255,0.05), transparent 40%)",
          "linear-gradient(135deg, #1D4ED8 0%, #0891B2 100%)",
        ].join(", "),
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-center">

          {/* Left column */}
          <div className="md:col-span-7 flex flex-col gap-7">
            {/* <div className="hero-badge flex flex-wrap gap-3 items-center">
              <div className="flex items-center px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm">
                <Image
                  src="/logo/CII White.png"
                  alt="Confederation of Indian Industry"
                  width={72}
                  height={28}
                  style={{ objectFit: "contain" }}
                />
              </div>
              <div className="px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm">
                <span className="text-xs font-semibold tracking-[0.05em]">In collaboration with DoT</span>
              </div>
            </div> */}

            <h1
              className="hero-title text-[2rem] md:text-[3.75rem] font-extrabold leading-[1.08] tracking-tight"
              style={{
                background: "linear-gradient(135deg, #ffffff 40%, #bfdbfe 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Telecom Innovation, Research & Training Centre
            </h1>

            <p className="hero-sub text-white/95 text-base font-medium tracking-wide" style={{ fontStyle: "italic" }}>
              BRBRAITT Campus, Jabalpur, Madhya Pradesh
            </p>

            <p className="hero-body text-white/95 text-base leading-[1.85] max-w-[560px]">
              An industry-led institutional platform for telecom skilling, innovation, applied research, and workforce
              development
            </p>
            <p className="hero-body text-white/95 text-base leading-[1.85] max-w-[560px]">
              Creating a dedicated institutional platform for telecom skilling, innovation, applied research and workforce development.
            </p>

            {showHeroCTAs && (
              <div className="hero-ctas flex flex-col sm:flex-row gap-3">
                <Link
                  href="/login"
                  className="btn-transition inline-flex items-center justify-center gap-2 px-7 py-3 bg-secondary-500 hover:bg-secondary-600 text-white font-bold rounded-full shadow-[0_8px_24px_rgba(249,115,22,0.35)]"
                >
                  Login <ArrowForwardRounded fontSize="small" />
                </Link>
                <Link
                  href="/employer-login"
                  className="btn-transition inline-flex items-center justify-center px-7 py-3 border border-white/40 text-white font-semibold rounded-full backdrop-blur-sm hover:bg-white/10 hover:border-white"
                >
                  Employer Login
                </Link>
              </div>
            )}
          </div>

          {/* Right column — glassmorphism card */}
          <div className="md:col-span-5 relative">
            <div className="absolute inset-[-20%] blur-[48px] bg-blue-400/20 pointer-events-none" />
            <div className="hero-card relative rounded-[28px] p-8 bg-white/[0.08] border border-white/[0.18] backdrop-blur-xl shadow-[0_24px_64px_rgba(0,0,0,0.25)]">
              <h3 className="text-lg font-bold">Portal entry points</h3>
              <div className="flex flex-col gap-5 mt-6">
                <div className="flex flex-col gap-1.5">
                  <span className="text-[11px] font-bold uppercase tracking-[0.1em] text-white/55">For candidates</span>
                  <p className="text-sm text-white/85">
                    Explore courses, register, and submit application details in one guided flow.
                  </p>
                </div>
                <div className="border-t border-white/[0.14]" />
                <div className="flex flex-col gap-1.5">
                  <span className="text-[11px] font-bold uppercase tracking-[0.1em] text-white/55">For employers</span>
                  <p className="text-sm text-white/85">
                    Log in to connect with a structured, industry-ready talent pipeline.
                  </p>
                </div>
                <div className="border-t border-white/[0.14]" />
                <div className="grid grid-cols-2 gap-3">
                  {heroStats.map((item) => (
                    <div key={item.label} className="stat-card rounded-2xl bg-white/[0.92] p-4 flex flex-col gap-1 items-center">
                      <span className="text-2xl font-extrabold text-primary-900">{item.value}</span>
                      <span className="text-sm text-content-secondary">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
