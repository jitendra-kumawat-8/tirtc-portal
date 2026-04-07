import Image from "next/image";
import { useMemo } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ArrowBackIosNewRounded, ArrowForwardIosRounded } from "@mui/icons-material";
import { useCarouselViewport } from "../../hooks/useCarouselViewport";
import { corePillars } from "./constants";
import { BG_TINTED_2 } from "../../backgrounds";

function PrevArrow({ onClick }: { onClick?: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="slick-custom-arrow flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center btn-transition absolute -left-12 top-1/2 -translate-y-1/2 z-10 sm:-left-14"
      style={{
        border: "1.5px solid rgba(29,78,216,0.2)",
        color: "#1D4ED8",
        background: "white",
        boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
      }}
      aria-label="Previous pillars"
    >
      <ArrowBackIosNewRounded style={{ fontSize: 13 }} />
    </button>
  );
}

function NextArrow({ onClick }: { onClick?: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="slick-custom-arrow flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center btn-transition absolute -right-12 top-1/2 -translate-y-1/2 z-10 sm:-right-14"
      style={{
        border: "1.5px solid rgba(29,78,216,0.2)",
        color: "#1D4ED8",
        background: "white",
        boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
      }}
      aria-label="Next pillars"
    >
      <ArrowForwardIosRounded style={{ fontSize: 13 }} />
    </button>
  );
}

export default function CorePillars() {
  const vp = useCarouselViewport();

  const pillarsSliderSettings = useMemo(
    () => ({
      dots: true,
      infinite: true,
      speed: 550,
      slidesToShow: vp.slidesToShow,
      slidesToScroll: vp.slidesToScroll,
      arrows: vp.arrows,
      ...(vp.arrows ? { prevArrow: <PrevArrow />, nextArrow: <NextArrow /> } : {}),
      autoplay: true,
      autoplaySpeed: 3000,
      pauseOnHover: true,
      dotsClass: "slick-dots tirtc-dots",
    }),
    [vp.slidesToShow, vp.slidesToScroll, vp.arrows]
  );

  return (
    <section id="core-pillars" className="scroll-mt-24 bg-background-primary py-20 md:py-28" style={{ background: BG_TINTED_2 }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 flex flex-col gap-10 md:gap-12">
        <h2 className="section-heading">Core Pillars</h2>

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

          <Slider key={`core-pillars-${vp.slidesToShow}`} {...pillarsSliderSettings}>
            {corePillars.map(({ title, description, imageSrc, imageAlt }) => (
              <div key={title} className="flex h-full min-w-0 w-full flex-col px-2.5 pb-8">
                <article className="group flex w-full min-w-0 flex-col overflow-hidden rounded-2xl border border-primary-700/10 bg-background-primary shadow-sm transition-shadow duration-300 hover:shadow-lg hover:shadow-primary-900/5 hover:border-primary-700/20 h-full">
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-background-muted shrink-0">
                    <Image
                      src={imageSrc}
                      alt={imageAlt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                    />
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-primary-900/50 via-transparent to-transparent opacity-80 pointer-events-none"
                      aria-hidden
                    />
                  </div>
                  <div className="flex flex-col gap-2 p-5 md:p-6 flex-1">
                    <h3 className="text-base md:text-lg font-semibold text-content-primary font-poppins leading-snug">
                      {title}
                    </h3>
                    <p className="text-sm text-content-secondary leading-relaxed">{description}</p>
                  </div>
                </article>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}
