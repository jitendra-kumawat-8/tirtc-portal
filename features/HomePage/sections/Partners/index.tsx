import Image from "next/image";
import {
  highlightPartners,
  partnerLogos,
  PARTNER_MARQUEE_DEFAULT_SLOT,
  type PartnerMarqueeLogo,
} from "./constants";
import { BG_TINTED_2 } from "../../backgrounds";

/** Image fills its slot; sizing is on the wrapper to avoid Tailwind `important: true` conflicts */
const MARQUEE_IMG_CLASS =
  "block h-full w-full max-h-full max-w-full object-contain object-center opacity-90";

function LogoStrip({
  logos,
  direction,
}: {
  logos: readonly PartnerMarqueeLogo[];
  direction: "left" | "right";
}) {
  const loop = [...logos, ...logos];
  return (
    <div className="relative w-full overflow-hidden py-3">
      <div
        className={
          direction === "left"
            ? "partner-marquee flex w-max gap-16 md:gap-20 lg:gap-24 items-center"
            : "partner-marquee-reverse flex w-max gap-20 md:gap-24 lg:gap-32"
        }
      >
        {loop.map((logo, i) => (
          <div
            key={`${logo.src}-${i}`}
            className={[
              "flex shrink-0 items-center justify-center overflow-hidden",
              logo.slotClassName ?? PARTNER_MARQUEE_DEFAULT_SLOT,
            ].join(" ")}
          >
            <img src={logo.src} alt={logo.alt} className={MARQUEE_IMG_CLASS} loading="lazy" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Partners() {
  return (
    <section
      id="partners"
      className="scroll-mt-24 overflow-hidden  py-20 md:py-28"

    >
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-4 sm:px-6 lg:px-20">
        <div className="flex flex-col gap-4 text-center">
          <h2 className="section-heading text-primary-900">Industry Partners</h2>
          <h3 className="section-subtitle text-content-primary max-w-3xl mx-auto">
            Supported by leading telecom and technology companies
          </h3>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 lg:gap-10">
          {highlightPartners.map((logo) => (
            <div
              key={logo.src}
              className="flex min-h-[8.5rem] items-center justify-center rounded-2xl border border-primary-700/12 bg-background-primary px-4 py-8 shadow-lg shadow-primary-900/5 sm:min-h-[10rem] sm:px-8 md:min-h-[11rem] md:px-10"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={420}
                height={160}
                className="h-auto max-h-[3.5rem] w-auto max-w-full object-contain object-center sm:max-h-24 md:max-h-28"
              />
            </div>
          ))}
        </div>

        <LogoStrip logos={partnerLogos} direction="left" />
      </div>
    </section>
  );
}
