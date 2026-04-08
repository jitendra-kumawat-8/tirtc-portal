import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { ArrowForwardRounded } from "@mui/icons-material";
import { courses } from "./constants";
import { BG_TINTED_2 } from "../HomePage/backgrounds";
import { featuredDomainCards } from "../HomePage/sections/Courses/constants";
import { FeaturedDomainCard } from "../HomePage/sections/Courses/FeaturedDomainCard";
import { useInterestFlow } from "../../context/InterestFlowContext";
import { makeInterestId } from "../../utils/interestId";

export default function CoursesPage() {
  return (
    <>
      <Head>
        <title>Courses & Training Programmes | TIRTC</title>
        <meta
          name="description"
          content="Explore telecom and technology training programmes at TIRTC — hands-on, industry-aligned courses for job-ready skills."
        />
      </Head>

      <div className="min-h-screen" style={{ background: BG_TINTED_2 }}>

        {/* Top bar */}
        <nav className="sticky top-0 z-50 bg-white/[0.94] backdrop-blur-lg border-b border-primary-900/[0.07]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 flex items-center justify-between h-[68px]">

            <Link href="/" className="flex h-12 w-24 items-center justify-center sm:w-28">
              <Image
                src="/logo/TIRTC LOGOS.png"
                alt="TIRTC"
                width={70}
                height={70}
                className="max-h-12 w-auto object-contain"
              />
            </Link>
            <Link href="/" className="flex h-12 w-24 items-center justify-center sm:w-28">
              <Image
                src="/logo/CII.png"
                alt="CII"
                width={120}
                height={52}
                className="max-h-11 w-auto object-contain"
              />
            </Link>

            <div className="hidden sm:flex  items-center gap-2">
              <Link
                href="/"
                className="hidden sm:inline-block px-4 py-2 text-sm font-medium text-content-secondary hover:text-primary-700 rounded-full hover:bg-primary-700/[0.06] btn-transition"
              >
                ← Back to Home
              </Link>
              {/* <div className="w-px h-5 bg-gray-200 hidden sm:block" /> */}
              {/* <Link
                href="/apply"
                className="btn-transition px-5 py-2 text-sm font-semibold bg-primary-700 text-white rounded-full hover:bg-primary-900 shadow-sm"
              >
                Apply Now
              </Link> */}
            </div>
          </div>
        </nav>

        {/* Page header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 pt-16 pb-10 flex flex-col gap-4">
          <span className="text-sm font-bold uppercase tracking-[0.16em] text-primary-700">
            Courses &amp; Training Programmes
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-content-primary font-poppins tracking-tight leading-tight">
            Skill up with industry-aligned programmes
          </h1>
          <p className="text-base " style={{ color: "#475569" }}>
            Hands-on, outcome-focused training across sectors — built for real-world employability.
          </p>
          {/* <span className="text-xs font-medium" style={{ color: "#94A3B8" }}>
            {courses.length} programmes available
          </span> */}
        </div>

        {/* Key domains — same themes as home */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 pb-12 flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <span className="text-sm font-bold uppercase tracking-[0.16em] text-primary-700">
              Key domains
            </span>
            {/* <p className="text-base " style={{ color: "#475569" }}>
              Training themes aligned to NSQF and industry standards — explore what each domain covers, then
              browse the full programme catalogue below.
            </p> */}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {featuredDomainCards.map((card) => (
              <FeaturedDomainCard key={card.id} card={card} />
            ))}
          </div>
        </div>

        {/* All programmes grid */}
        {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 pb-24 flex flex-col gap-6">
          <h2 className="text-lg font-semibold text-content-primary font-poppins">All programmes</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {courses.map((course) => (
              <CourseCard key={course.title} {...course} />
            ))}
          </div>
        </div> */}

        {/* Footer strip */}
        {/* <div
          className="border-t py-8"
          style={{ borderColor: "rgba(29,78,216,0.1)", background: "rgba(255,255,255,0.6)" }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
            <span className="text-xs" style={{ color: "#94A3B8" }}>
              Anchored by{" "}
              <span className="font-semibold text-content-primary">Confederation of Indian Industry</span>
              {" "}| In collaboration with{" "}
              <span className="font-semibold text-content-primary">Department of Telecommunications</span>
            </span>
            <Link
              href="/apply"
              className="btn-transition inline-flex items-center gap-1.5 px-5 py-2 text-sm font-semibold bg-primary-700 text-white rounded-full hover:bg-primary-900 shadow-sm self-start sm:self-auto"
            >
              Apply Now <ArrowForwardRounded fontSize="small" />
            </Link>
          </div>
        </div> */}

      </div>
    </>
  );
}

interface CourseCardProps {
  title: string;
  description: string;
  image: string;
  tag: string;
}

function CourseCard({ title, description, image }: CourseCardProps) {
  const { runShowInterest } = useInterestFlow();
  const interestId = makeInterestId("course", title);
  return (
    <div
      id={interestId}
      className="rounded-2xl bg-white flex flex-col overflow-hidden cursor-default group"
      style={{
        border: "1.5px solid rgba(29,78,216,0.1)",
        boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
        transition: "box-shadow 0.25s ease, transform 0.25s ease",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 32px rgba(29,78,216,0.12)";
        (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 12px rgba(0,0,0,0.05)";
        (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
      }}
    >
      {/* Image */}
      <div className="relative w-full h-44 overflow-hidden flex-shrink-0">
        <Image
          src={image}
          alt={title}
          fill
          loading="lazy"
          style={{ objectFit: "cover", transition: "transform 0.4s ease" }}
          className="group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-3 p-5 flex-1">
        <h3
          className="text-sm font-semibold text-content-primary font-poppins leading-snug"
          style={{
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {title}
        </h3>
        <p
          className="text-xs leading-relaxed flex-1"
          style={{
            color: "#64748B",
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {description}
        </p>
      </div>

      {/* CTA */}
      <div className="px-5 pb-5">
        <button
          type="button"
          onClick={() => runShowInterest({ id: interestId, title })}
          className="btn-transition w-full inline-flex items-center justify-center gap-1.5 py-2 text-xs font-semibold rounded-full"
          style={{
            border: "1.5px solid rgba(29,78,216,0.3)",
            color: "#1D4ED8",
            transition: "all 0.2s ease",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.background = "#1D4ED8";
            (e.currentTarget as HTMLElement).style.color = "white";
            (e.currentTarget as HTMLElement).style.borderColor = "#1D4ED8";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.background = "transparent";
            (e.currentTarget as HTMLElement).style.color = "#1D4ED8";
            (e.currentTarget as HTMLElement).style.borderColor = "rgba(29,78,216,0.3)";
          }}
        >
          Show Interest <ArrowForwardRounded style={{ fontSize: 14 }} />
        </button>
      </div>
    </div>
  );
}
