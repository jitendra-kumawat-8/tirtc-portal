import Link from "next/link";
import { useMemo } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Chip } from "@mui/material";
import { ArrowBackIosNewRounded, ArrowForwardIosRounded, ArrowForwardRounded, CheckCircleOutlineRounded } from "@mui/icons-material";
import { courseCards, jobCards, featuredDomainCards } from "./constants";
import { useCarouselViewport } from "../../hooks/useCarouselViewport";
import { FeaturedDomainCard } from "./FeaturedDomainCard";
import { FeaturedJobCard } from "./FeaturedJobCard";
import { BG_TINTED_2 } from "../../backgrounds";

function PrevArrow({ onClick }: { onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      className="slick-custom-arrow flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center btn-transition absolute -left-12 top-1/2 -translate-y-1/2 z-10 sm:-left-14"
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
      className="slick-custom-arrow flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center btn-transition absolute -right-12 top-1/2 -translate-y-1/2 z-10 sm:-right-14"
      style={{ border: "1.5px solid rgba(29,78,216,0.2)", color: "#1D4ED8", background: "white", boxShadow: "0 2px 8px rgba(0,0,0,0.08)" }}
      aria-label="Next"
    >
      <ArrowForwardIosRounded style={{ fontSize: 13 }} />
    </button>
  );
}

export default function Courses() {
  const vp = useCarouselViewport();

  const trainingSliderSettings = useMemo(
    () => ({
      dots: true,
      infinite: true,
      speed: 400,
      slidesToShow: vp.slidesToShow,
      slidesToScroll: vp.slidesToScroll,
      arrows: vp.arrows,
      ...(vp.arrows ? { prevArrow: <PrevArrow />, nextArrow: <NextArrow /> } : {}),
      dotsClass: "slick-dots tirtc-dots",
    }),
    [vp.slidesToShow, vp.slidesToScroll, vp.arrows]
  );

  const jobSliderSettings = useMemo(
    () => ({
      dots: true,
      infinite: true,
      speed: 400,
      slidesToShow: vp.slidesToShow,
      slidesToScroll: vp.slidesToScroll,
      arrows: vp.arrows,
      ...(vp.arrows ? { prevArrow: <PrevArrow />, nextArrow: <NextArrow /> } : {}),
      dotsClass: "slick-dots tirtc-dots",
    }),
    [vp.slidesToShow, vp.slidesToScroll, vp.arrows]
  );

  return (
    <section id="courses" className="bg-background-primary py-20 md:py-28 scroll-mt-24" style={{ background: BG_TINTED_2 }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 flex flex-col gap-12">

        {/* Header */}
        <div className="flex flex-col gap-4">
          <h2 className="section-heading">
            Courses / Training Programmes
          </h2>
        </div>

        {/* Sector-specific training + cards */}
        {/* Key domains — carousel (replaces chip row + old featured trainings) */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between gap-y-2">
            <div className="flex flex-col gap-2">
              <h3 className="section-subheading">Trainings</h3>
            </div>
            <Link
              href="/courses"
              className="btn-transition inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-full self-start sm:self-auto"
              style={{ border: "1.5px solid rgba(29,78,216,0.3)", color: "#1D4ED8" }}
            >
              View all courses <ArrowForwardRounded style={{ fontSize: 14 }} />
            </Link>
          </div>

          <div className="relative overflow-hidden sm:overflow-visible sm:px-12 md:px-14 tirtc-slick-equal-height">
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
              @media (max-width: 767px) {
                .slick-custom-arrow { display: none !important; }
              }
            `}</style>

            <Slider key={`featured-trainings-${vp.slidesToShow}`} {...trainingSliderSettings}>
              {featuredDomainCards.map((card) => (
                <div key={card.id} className="flex h-full flex-col px-2.5 pb-8">
                  <FeaturedDomainCard card={card} />
                </div>
              ))}
            </Slider>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <h3 className="section-subheading">
              Sector-specific Technology Training
            </h3>
            {/* <p className="section-description">
              delivered through specialised labs with hands-on,
              simulation-based learning aligned with NSQF and industry standards.
            </p> */}
          </div>
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
        </div>

        {/* Programme approach — stacked cards: image band + copy (no skew) */}
        {/* <div className="flex flex-col gap-8">
          <h3 className="section-subheading">Programme Approach</h3>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-6 lg:gap-8">
            {programmeApproachCards.map((card, index) => (
              <article
                key={card.title}
                className="flex flex-col overflow-hidden rounded-2xl border border-primary-700/10 bg-background-primary shadow-[0_4px_24px_rgba(30,58,138,0.07)]"
              >
                <div className="relative aspect-[5/3] w-full shrink-0 overflow-hidden">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                  <div
                    className="absolute inset-x-0 bottom-0 h-1"
                    style={{ backgroundColor: card.accent }}
                    aria-hidden
                  />
                </div>

                <div className="flex flex-col gap-3 border-t border-primary-900/[0.06] px-5 py-5 sm:px-6 sm:py-6">
                  <div className="flex items-center gap-3">
                    <span
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white"
                      style={{ backgroundColor: card.accent }}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h4 className="font-poppins text-base font-bold leading-snug text-content-primary sm:text-[17px]">
                      {card.title}
                    </h4>
                  </div>
                  <p className="text-sm leading-relaxed text-content-secondary">
                    {card.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div> */}


        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between gap-y-2">
            <div className="flex flex-col gap-2">
              <h3 className="section-subheading">Featured Jobs</h3>

            </div>
            <Link
              href="/jobs"
              className="btn-transition inline-flex items-center gap-1.5 self-start rounded-full px-4 py-2 text-xs font-semibold sm:self-auto"
              style={{ border: "1.5px solid rgba(29,78,216,0.3)", color: "#1D4ED8" }}
            >
              View all jobs <ArrowForwardRounded style={{ fontSize: 14 }} />
            </Link>
          </div>
          <div className="relative overflow-hidden sm:overflow-visible sm:px-12 md:px-14 tirtc-slick-equal-height">
            <Slider key={`featured-jobs-${vp.slidesToShow}`} {...jobSliderSettings}>
              {jobCards.map((job) => (
                <div key={job.id} className="flex h-full min-h-0 w-full flex-col px-2.5 pb-8">
                  <FeaturedJobCard job={job} />
                </div>
              ))}
            </Slider>
          </div>
        </div>

      </div>
    </section>
  );
}
