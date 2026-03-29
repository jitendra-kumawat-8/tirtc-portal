export const keyDomains = [
  "5G / Next-Generation Networks",
  "Cybersecurity and Network Security",
  "Artificial Intelligence in Telecom Operations",
  "Internet of Things (IoT) and Smart Systems",
  "Networking, Cloud and Digital Infrastructure",
];

export const courseCards = [
  {
    title: "Entry-Level Skilling",
    duration: "3–6 months",
    topics: [
      "Fibre deployment",
      "RF field technician",
      "Basic network operations",
      "Tower management",
      "L1 NOC support",
    ],
    outcome: "Deployable field and operations talent.",
    accent: "#1D4ED8",
    accentBg: "rgba(29,78,216,0.06)",
    hoverGradient: "linear-gradient(135deg, #1D4ED8 0%, #1E40AF 100%)",
  },
  {
    title: "Advanced Certification",
    duration: "6–12 months",
    topics: [
      "5G Core & Open RAN",
      "IoT rollout & Edge/MEC integration",
      "OSS/BSS",
      "AI in networks",
      "Cyber resilience / SOC operations",
    ],
    outcome: "Specialised engineers and network technologists.",
    accent: "#1E40AF",
    accentBg: "rgba(30,64,175,0.06)",
    hoverGradient: "linear-gradient(135deg, #1E40AF 0%, #1E3A8A 100%)",
  },
  {
    title: "Professional Upskilling",
    duration: "Modular / short-cycle",
    topics: [
      "Design & optimisation",
      "Rollout management",
      "Network assurance",
      "Security compliance",
    ],
    outcome: "For working telecom professionals and project managers.",
    accent: "#06B6D4",
    accentBg: "rgba(6,182,212,0.06)",
    hoverGradient: "linear-gradient(135deg, #0891B2 0%, #0E7490 100%)",
  },
];

export const programmeApproach = [
  "Industry-validated curriculum",
  "Outcome-oriented training",
  "Focus on direct employability",
] as const;

export const jobCards = [
  {
    title: "5G Field Operations Engineer",
    meta: "Jabalpur · Full-time",
    highlights: [
      "Site surveys, installation & commissioning support",
      "RF basics, safety compliance, and handover documentation",
      "Works with OEM / operator field workflows",
    ],
    outcome: "Early-career engineers ready for rollout and maintenance teams.",
    accent: "#1D4ED8",
    hoverGradient: "linear-gradient(135deg, #1D4ED8 0%, #1E40AF 100%)",
  },
  {
    title: "NOC / Network Operations Associate",
    meta: "Hybrid · Full-time",
    highlights: [
      "L1 monitoring, ticketing, and escalation playbooks",
      "Fault isolation on transport, IP, and access networks",
      "Shift-ready operations with clear runbooks",
    ],
    outcome: "Deployable talent for 24×7 network assurance desks.",
    accent: "#1E40AF",
    hoverGradient: "linear-gradient(135deg, #1E40AF 0%, #1E3A8A 100%)",
  },
  {
    title: "Fibre & Access Network Technician",
    meta: "Field · Contract-to-hire",
    highlights: [
      "Splicing, testing, and last-mile fibre readiness",
      "Customer premises equipment and basic troubleshooting",
      "Quality checks aligned to operator SOPs",
    ],
    outcome: "Hands-on technicians for FTTH and enterprise access rollouts.",
    accent: "#2563EB",
    hoverGradient: "linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%)",
  },
] as const;
