import { useLayoutEffect, useState } from "react";

/** Matches ladder: 0–767 → 1 | 768–1024 → 2 | 1025+ → 3 */
function computeSlides(w: number) {
  if (w < 768) return { slidesToShow: 1, slidesToScroll: 1, arrows: false as const };
  if (w < 1025) return { slidesToShow: 2, slidesToScroll: 1, arrows: true as const };
  return { slidesToShow: 3, slidesToScroll: 1, arrows: true as const };
}

/**
 * react-slick’s `responsive` + matchMedia runs after mount, so the first paint uses
 * default `slidesToShow` (often 3) until listeners fire — wrong on mobile refresh.
 * We read `innerWidth` in `useLayoutEffect` so the first client paint matches the viewport.
 * While `width === 0` (SSR / very first render), we assume 1 slide so markup matches phones.
 */
export function useCarouselViewport() {
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    const update = () => setWidth(window.innerWidth);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const dims = width === 0 ? { slidesToShow: 1, slidesToScroll: 1, arrows: false as const } : computeSlides(width);

  return { width, ...dims };
}
