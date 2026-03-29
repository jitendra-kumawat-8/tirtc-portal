import Head from "next/head";
import { FormEvent, useState } from "react";
import { useSnackbar } from "notistack";
import type { InterestForm } from "./types";

import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import VisionMission from "./sections/VisionMission";
import Background from "./sections/ProblemSolution";
import Objective from "./sections/Objective";
import Courses from "./sections/Courses";
import HowCIIWorks from "./sections/HowCIIWorks";
import Partners from "./sections/Partners";
import Leadership from "./sections/Leadership";
import CTASection from "./sections/CTASection";
import Footer from "./sections/Footer";
import InterestDialog from "./sections/InterestDialog";

export default function HomePage() {
  const { enqueueSnackbar } = useSnackbar();
  const [interestOpen, setInterestOpen] = useState(false);
  const [interestForm, setInterestForm] = useState<InterestForm>({
    name: "", email: "", phone: "", interestType: "Student",
  });

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleInterestSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (Object.values(interestForm).some((v) => !v.trim())) {
      enqueueSnackbar("Please complete all fields before submitting.", { variant: "warning" });
      return;
    }
    enqueueSnackbar("Interest captured. The admissions team will follow up shortly.", { variant: "success" });
    setInterestOpen(false);
    setInterestForm({ name: "", email: "", phone: "", interestType: "Student" });
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
        .hero-ctas  { animation: fadeUp 0.6s ease-out 0.4s both; }
        .hero-card  { animation: fadeIn 0.8s ease-out 0.3s both; }
        .stat-card  { transition: transform 0.2s ease, box-shadow 0.2s ease; }
        .stat-card:hover { transform: scale(1.04); box-shadow: 0 8px 24px rgba(30,58,138,0.18); }
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
        <Hero onShowInterest={() => setInterestOpen(true)} />
        <About />
        <VisionMission />
        <Background />
        <Objective />
        <Courses />
        <HowCIIWorks />
        <Partners />
        <Leadership />
        <CTASection />
        <Footer />
      </div>

      <InterestDialog
        open={interestOpen}
        onClose={() => setInterestOpen(false)}
        form={interestForm}
        setForm={setInterestForm}
        onSubmit={handleInterestSubmit}
      />
    </>
  );
}
