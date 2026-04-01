import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Chip } from "@mui/material";
import { ArrowBackIosNewRounded, ArrowForwardIosRounded, ArrowForwardRounded, CheckCircleOutlineRounded } from "@mui/icons-material";
import { keyDomains, courseCards, programmeApproach, jobCards } from "./constants";
import { courses as allCourses } from "../../../CoursesPage/constants";
import { useInterestFlow } from "../../../../context/InterestFlowContext";
import { makeInterestId } from "../../../../utils/interestId";

const previewCourses = allCourses.slice(0, 9);

function PrevArrow({ onClick }: { onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      className="slick-custom-arrow flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center btn-transition absolute -left-5 top-1/2 -translate-y-1/2 z-10"
      style={{ border: "1.5px solid rgba(29,78,216,0.2)", color: "#1D4ED8", background: "white", boxShadow: "0 2px 8px rgba(0,0,0,0.08)" }}
      aria-label="Previous"
    >
      <ArrowBackIosNewRounded style={{ fontSize: 13 }} />
    </button>
  );
}

function NextArrow({ onClick }: { onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      className="slick-custom-arrow flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center btn-transition absolute -right-5 top-1/2 -translate-y-1/2 z-10"
      style={{ border: "1.5px solid rgba(29,78,216,0.2)", color: "#1D4ED8", background: "white", boxShadow: "0 2px 8px rgba(0,0,0,0.08)" }}
      aria-label="Next"
    >
      <ArrowForwardIosRounded style={{ fontSize: 13 }} />
    </button>
  );
}

function TrainingInterestButton({ courseTitle }: { courseTitle: string }) {
  const { runShowInterest } = useInterestFlow();
  const id = makeInterestId("training", courseTitle);
  return (
    <button
      type="button"
      onClick={() => runShowInterest({ id, title: courseTitle })}
      className="btn-transition self-start inline-flex items-center gap-1 px-3.5 py-1.5 text-xs font-semibold rounded-full mt-1"
      style={{ background: "#1D4ED8", color: "white" }}
    >
      Show Interest <ArrowForwardRounded style={{ fontSize: 13 }} />
    </button>
  );
}

function JobInterestButton({ jobTitle, accent }: { jobTitle: string; accent: string }) {
  const { runShowInterest } = useInterestFlow();
  const id = makeInterestId("job", jobTitle);
  return (
    <button
      type="button"
      onClick={() => runShowInterest({ id, title: jobTitle })}
      className="jc-cta btn-transition self-start inline-flex items-center gap-1 px-3.5 py-1.5 text-xs font-semibold rounded-full"
      style={{
        border: `1.5px solid ${accent}40`,
        color: accent,
        background: "transparent",
        transition: "all 0.3s ease",
      }}
    >
      Show Interest <ArrowForwardRounded className="jc-cta-icon" style={{ fontSize: 13 }} />
    </button>
  );
}

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 400,
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow: <PrevArrow />,
  nextArrow: <NextArrow />,
  dotsClass: "slick-dots tirtc-dots",
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 2, arrows: true } },
    { breakpoint: 640, settings: { slidesToShow: 1, arrows: false } },
  ],
};

const jobSliderSettings = {
  dots: true,
  infinite: true,
  speed: 400,
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow: <PrevArrow />,
  nextArrow: <NextArrow />,
  dotsClass: "slick-dots tirtc-dots",
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 2, arrows: true } },
    { breakpoint: 640, settings: { slidesToShow: 1, arrows: false } },
  ],
};

export default function Courses() {
  return (
    <section id="courses" className="bg-white py-20 md:py-28 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 flex flex-col gap-12">

        {/* Header */}
        <div className="flex flex-col gap-4">
          <span className="text-sm font-bold uppercase tracking-[0.16em] text-primary-700">
            Courses / Training Programmes
          </span>
          <p className="text-base text-content-primary leading-[1.8]">
            Sector-specific technology training delivered through specialised labs with hands-on,
            simulation-based learning aligned with NSQF and industry standards.
          </p>
        </div>

        {/* Key domains */}
        <div className="flex flex-col gap-4">
          <span className="text-sm font-bold uppercase tracking-[0.16em] text-gray-800">Key Domains</span>
          <div className="flex flex-wrap gap-2">
            {keyDomains.map((domain) => (
              <Chip
                key={domain}
                label={domain}
                variant="outlined"
                sx={{
                  borderColor: "rgba(29,78,216,0.2)",
                  color: "#1D4ED8",
                  fontWeight: 500,
                  fontSize: "0.8125rem",
                  "&:hover": { backgroundColor: "rgba(29,78,216,0.04)" },
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                }}
              />
            ))}
          </div>
        </div>

        {/* Course cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {courseCards.map((course) => (
            <div
              key={course.title}
              className="course-card rounded-2xl p-6 flex flex-col gap-6 cursor-default group"
              style={{
                background: "white",
                border: `1.5px solid ${course.accent}25`,
                boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.background = course.hoverGradient;
                el.style.borderColor = "transparent";
                el.style.boxShadow = "0 12px 32px rgba(0,0,0,0.15)";
                el.querySelectorAll<HTMLElement>(".cc-title").forEach((n) => { n.style.color = "white"; });
                el.querySelectorAll<HTMLElement>(".cc-text").forEach((n) => { n.style.color = "rgba(255,255,255,0.85)"; });
                el.querySelectorAll<HTMLElement>(".cc-icon").forEach((n) => { n.style.color = "rgba(255,255,255,0.7)"; });
                el.querySelectorAll<HTMLElement>(".cc-chip").forEach((n) => { n.style.borderColor = "rgba(255,255,255,0.3)"; n.style.color = "white"; });
                el.querySelectorAll<HTMLElement>(".cc-label").forEach((n) => { n.style.color = "rgba(255,255,255,0.6)"; });
                el.querySelectorAll<HTMLElement>(".cc-divider").forEach((n) => { n.style.borderColor = "rgba(255,255,255,0.15)"; });
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.background = "white";
                el.style.borderColor = `${course.accent}25`;
                el.style.boxShadow = "0 2px 12px rgba(0,0,0,0.06)";
                el.querySelectorAll<HTMLElement>(".cc-title").forEach((n) => { n.style.color = course.accent; });
                el.querySelectorAll<HTMLElement>(".cc-text").forEach((n) => { n.style.color = "#475569"; });
                el.querySelectorAll<HTMLElement>(".cc-icon").forEach((n) => { n.style.color = course.accent; });
                el.querySelectorAll<HTMLElement>(".cc-chip").forEach((n) => { n.style.borderColor = `${course.accent}33`; n.style.color = course.accent; });
                el.querySelectorAll<HTMLElement>(".cc-label").forEach((n) => { n.style.color = course.accent; });
                el.querySelectorAll<HTMLElement>(".cc-divider").forEach((n) => { n.style.borderColor = ""; });
              }}
            >
              <div className="flex flex-col gap-4">
                <h3 className="cc-title text-lg font-bold font-poppins" style={{ color: course.accent, transition: "color 0.3s ease" }}>{course.title}</h3>
                <Chip
                  className="cc-chip"
                  label={course.duration}
                  size="small"
                  variant="outlined"
                  sx={{
                    alignSelf: "flex-start",
                    borderColor: `${course.accent}33`,
                    color: course.accent,
                    fontWeight: 600,
                    fontSize: "0.7rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    transition: "all 0.3s ease",
                  }}
                />
              </div>

              <ul className="flex flex-col gap-2">
                {course.topics.map((topic) => (
                  <li key={topic} className="flex items-start gap-2.5">
                    <CheckCircleOutlineRounded
                      className="cc-icon flex-shrink-0 mt-0.5"
                      style={{ fontSize: 16, color: course.accent, transition: "color 0.3s ease" }}
                    />
                    <span className="cc-text text-sm" style={{ color: "#475569", transition: "color 0.3s ease" }}>{topic}</span>
                  </li>
                ))}
              </ul>

              <div className="cc-divider border-t border-black/[0.06] pt-4 flex flex-col gap-1 mt-auto" style={{ transition: "border-color 0.3s ease" }}>
                <span className="cc-label text-[11px] font-bold uppercase tracking-[0.1em]" style={{ color: course.accent, transition: "color 0.3s ease" }}>
                  Outcome
                </span>
                <p className="cc-text text-sm" style={{ color: "#475569", transition: "color 0.3s ease" }}>{course.outcome}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Programme approach */}
        <div className="flex flex-col gap-4">
          <span className="text-sm font-semibold text-content-primary font-poppins">Programme Approach</span>
          <div className="flex flex-wrap gap-6">
            {programmeApproach.map((point) => (
              <div key={point} className="flex items-center gap-2.5">
                <CheckCircleOutlineRounded style={{ fontSize: 20, color: "#1D4ED8" }} />
                <span className="text-sm font-medium text-content-primary">{point}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Trainings — slick slider */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold text-content-primary font-poppins">Featured Trainings</span>
            <Link
              href="/courses"
              className="btn-transition inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-full"
              style={{ border: "1.5px solid rgba(29,78,216,0.3)", color: "#1D4ED8" }}
            >
              Show All <ArrowForwardRounded style={{ fontSize: 14 }} />
            </Link>
          </div>

          <div className="relative sm:px-6">
            <style>{`
              .tirtc-dots { margin-top: 20px !important; }
              .tirtc-dots li button:before {
                color: rgba(29,78,216,0.25) !important;
                font-size: 8px !important;
                opacity: 1 !important;
              }
              .tirtc-dots li.slick-active button:before {
                color: #1D4ED8 !important;
              }
              @media (max-width: 639px) {
                .slick-custom-arrow { display: none !important; }
              }
            `}</style>

            <Slider {...sliderSettings}>
              {previewCourses.map((course) => (
                <div key={course.title} className="px-2.5">
                  <div
                    id={makeInterestId("training", course.title)}
                    className="rounded-2xl bg-white overflow-hidden flex flex-col h-full"
                    style={{
                      border: "1.5px solid rgba(29,78,216,0.1)",
                      boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                      transition: "box-shadow 0.25s ease, transform 0.25s ease",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.boxShadow = "0 10px 28px rgba(29,78,216,0.12)";
                      (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 12px rgba(0,0,0,0.06)";
                      (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                    }}
                  >
                    {/* Image */}
                    <div className="relative w-full h-40 flex-shrink-0">
                      <Image
                        src={course.image}
                        alt={course.title}
                        fill
                        style={{ objectFit: "cover" }}
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                    {/* Content */}
                    <div className="flex flex-col gap-3 p-5">
                      <h3
                        className="text-sm font-semibold text-content-primary font-poppins leading-snug"
                        style={{
                          display: "-webkit-box",
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                        }}
                      >
                        {course.title}
                      </h3>
                      <p
                        className="text-xs leading-relaxed"
                        style={{
                          color: "#64748B",
                          display: "-webkit-box",
                          WebkitLineClamp: 3,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                        }}
                      >
                        {course.description}
                      </p>
                      <TrainingInterestButton courseTitle={course.title} />
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <span className="text-sm font-semibold text-content-primary font-poppins">
              Featured roles
            </span>
            <p className="text-sm text-content-secondary max-w-3xl leading-relaxed">
              Representative openings aligned with TIRTC skilling tracks — no imagery, role-first
              details for quick scanning alongside training programmes.
            </p>
          </div>
          <div className="relative sm:px-6">
            <Slider {...jobSliderSettings}>
              {jobCards.map((job) => (
                <div key={job.title} className="px-2.5 pb-8">
                  <div
                    id={makeInterestId("job", job.title)}
                    className="job-card rounded-2xl p-6 flex flex-col gap-5 cursor-default h-full"
                    style={{
                      background: "white",
                      border: `1.5px solid ${job.accent}25`,
                      boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                      transition: "all 0.3s ease",
                      minHeight: 340,
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget;
                      el.style.background = job.hoverGradient;
                      el.style.borderColor = "transparent";
                      el.style.boxShadow = "0 12px 32px rgba(0,0,0,0.15)";
                      el.querySelectorAll<HTMLElement>(".jc-title").forEach((n) => { n.style.color = "white"; });
                      el.querySelectorAll<HTMLElement>(".jc-text").forEach((n) => { n.style.color = "rgba(255,255,255,0.85)"; });
                      el.querySelectorAll<HTMLElement>(".jc-icon").forEach((n) => { n.style.color = "rgba(255,255,255,0.7)"; });
                      el.querySelectorAll<HTMLElement>(".jc-cta").forEach((n) => {
                        n.style.borderColor = "rgba(255,255,255,0.45)";
                        n.style.color = "white";
                        n.style.background = "rgba(255,255,255,0.12)";
                      });
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget;
                      el.style.background = "white";
                      el.style.borderColor = `${job.accent}25`;
                      el.style.boxShadow = "0 2px 12px rgba(0,0,0,0.06)";
                      el.querySelectorAll<HTMLElement>(".jc-title").forEach((n) => { n.style.color = job.accent; });
                      el.querySelectorAll<HTMLElement>(".jc-text").forEach((n) => { n.style.color = "#475569"; });
                      el.querySelectorAll<HTMLElement>(".jc-icon").forEach((n) => { n.style.color = job.accent; });
                      el.querySelectorAll<HTMLElement>(".jc-cta").forEach((n) => {
                        n.style.borderColor = `${job.accent}40`;
                        n.style.color = job.accent;
                        n.style.background = "transparent";
                      });
                    }}
                  >
                    <h3
                      className="jc-title text-base font-bold font-poppins leading-snug"
                      style={{ color: job.accent, transition: "color 0.3s ease" }}
                    >
                      {job.title}
                    </h3>

                    <ul className="flex flex-col gap-2 flex-1">
                      {job.highlights.map((line) => (
                        <li key={line} className="flex items-start gap-2.5">
                          <CheckCircleOutlineRounded
                            className="jc-icon flex-shrink-0 mt-0.5"
                            style={{ fontSize: 15, color: job.accent, transition: "color 0.3s ease" }}
                          />
                          <span className="jc-text text-xs leading-relaxed" style={{ color: "#475569", transition: "color 0.3s ease" }}>
                            {line}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <JobInterestButton jobTitle={job.title} accent={job.accent} />
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>

      </div>
    </section>
  );
}
