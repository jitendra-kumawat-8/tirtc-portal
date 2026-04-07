/** Shown above the marquee — larger treatment */
export const highlightPartners = [
  {
    src: "/assets/partners/brbraitt.jpeg",
    alt: "BRBRAITT — academic partner",
  },
  {
    src: "/assets/partners/dot.png",
    alt: "Department of Telecommunications, Government of India",
  },
  {
    src: "/logo/CII.png",
    alt: "Confederation of Indian Industry",
  },
  {
    src: "/assets/partners/bsnl.svg",
    alt: "BSNL",
  },
] as const;

/**
 * Marquee logo. Optional `slotClassName` sets the **wrapper** size (recommended) so it
 * does not fight the global Tailwind `important: true` config. Omit to use the default slot
 * in `LogoStrip`. Use only valid utilities (`max-h-13` does not exist — use `max-h-14` or
 * arbitrary e.g. `max-h-[3.25rem]`).
 */
export type PartnerMarqueeLogo = {
  src: string;
  alt: string;
  slotClassName?: string;
};

/** Default logo slot (wrapper) — duplicated in `LogoStrip` fallback */
export const PARTNER_MARQUEE_DEFAULT_SLOT =
  "h-12 w-[10rem] sm:h-14 sm:w-[11rem] md:h-16 md:w-[12rem]";

/** Marquee logos — per-logo slot overrides via `slotClassName` (full wrapper Tailwind string) */
export const partnerLogos = [
  { src: "/assets/partners/jio.svg", alt: "Reliance Jio" },
  { src: "/assets/partners/nokia.svg", alt: "Nokia" },
  { src: "/assets/partners/cisco.svg", alt: "Cisco" },
  {
    src: "/assets/partners/airtel.svg",
    alt: "Airtel",
    slotClassName: "h-14 w-[11rem] sm:h-16 sm:w-[12rem] md:h-20 md:w-[14rem]",
  },
  // { src: "/assets/partners/ericsson.svg", alt: "Ericsson" },
  { src: "/assets/partners/tejas.svg", alt: "Tejas Networks" },
  { src: "/assets/partners/vi.svg", alt: "Vodafone Idea" },
  {
    src: "/assets/partners/qualcomm.svg",
    alt: "Qualcomm",
    slotClassName: "h-9 w-[8rem] sm:h-10 sm:w-[9rem] md:h-11 md:w-[10rem]",
  },
] as const satisfies readonly PartnerMarqueeLogo[];
