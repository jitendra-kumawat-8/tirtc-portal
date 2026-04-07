import Head from "next/head";

import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import VisionMission from "./sections/VisionMission";
import Objective from "./sections/Objective";
import Background from "./sections/ProblemSolution";
import Courses from "./sections/Courses";
import HowCIIWorks from "./sections/HowCIIWorks";
import Partners from "./sections/Partners";
import Footer from "./sections/Footer";
import Governance from "./sections/Governance";
import CorePillars from "./sections/CorePillars";

export default function HomePage() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <Head>
        <title>TIRTC | Telecom Innovation, Research & Training Centre</title>
        <meta
          name="description"
          content="An industry-led initiative by CII and DoT — telecom skilling, research, and workforce development at BRBRAITT Campus, Jabalpur."
        />
      </Head>

      {/* Global animation keyframes */}
      <style jsx global>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        .hero-badge { animation: fadeUp 0.5s ease-out both; }
        .hero-title { animation: fadeUp 0.6s ease-out 0.1s both; }
        .hero-sub   { animation: fadeUp 0.6s ease-out 0.2s both; }
        .hero-body  { animation: fadeUp 0.6s ease-out 0.3s both; }
        .hero-card  { animation: fadeIn 0.8s ease-out 0.3s both; }
        .nav-link       { transition: color 0.15s ease; }
        .btn-transition { transition: all 0.2s ease; }
        .obj-card {
          transition: background 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease;
        }
        .obj-card:hover {
          background: linear-gradient(135deg, #396dff 0%, #0891B2 100%) !important;
          border-color: transparent !important;
          transform: translateY(-4px);
          box-shadow: 0 12px 32px rgba(29,78,216,0.25);
        }
        @keyframes wiggle {
          0%, 100% { transform: rotate(0deg); }
          20% { transform: rotate(-12deg); }
          40% { transform: rotate(10deg); }
          60% { transform: rotate(-6deg); }
          80% { transform: rotate(4deg); }
        }
        .obj-card:hover .obj-icon-wrap {
          background: rgba(255,255,255,0.15) !important;
        }
        .obj-card:hover .obj-icon-wiggle {
          animation: wiggle 0.5s ease-in-out;
          color: white !important;
        }
        .obj-card:hover .obj-title {
          color: white !important;
        }
        .obj-card:hover .obj-text {
          color: rgba(255,255,255,0.85) !important;
        }
      `}</style>

      <div className="bg-background-primary text-content-primary">
        <Navbar scrollToSection={scrollToSection} />
        <Hero />
        <About />
        <VisionMission />
        <Objective />
        {/* <Background /> */}
        <CorePillars />
        <Governance />
        <Courses />
        {/* <HowCIIWorks /> */}
        <Partners />
        <Footer />
      </div>
    </>
  );
}
