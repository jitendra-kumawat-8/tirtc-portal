/** Warm soft gradient — original Vision & Mission background */
export const BG_TINTED_1 = "linear-gradient(135deg, #f7fbff 0%, #fff6f3 100%)";

/** Same palette & angle as BG_TINTED_1, for glass cards (over blur) */
export const BG_TINTED_1_CARD =
  "linear-gradient(135deg, rgba(247,251,255,0.82) 0%, rgba(255,246,243,0.82) 100%)";

/** Cool blue radial gradient — original Objective background */
export const BG_TINTED_2 = [
  "radial-gradient(circle at 80% 70%, rgba(29,78,216,0.08), transparent 45%)",
  "radial-gradient(circle at 20% 30%, rgba(6,182,212,0.06), transparent 45%)",
  "linear-gradient(170deg, #ffffff 0%, #f1f5ff 50%, #e6f6ff 100%)",
].join(", ");
