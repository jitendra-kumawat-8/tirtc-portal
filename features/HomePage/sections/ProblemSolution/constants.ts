/** Background section — cards map only to the four stated demand role clusters. */
export const demandIntro = {
  leadIn:
    "This transformation is creating strong demand for skilled professionals across these priority areas:",
  afterCards:
    "While industry investments are accelerating, the availability of job-ready, industry-aligned talent remains a critical constraint.",
  closing:
    "To address this, CII is establishing TIRTC as a structured, scalable institutional model integrating training, innovation, and industry collaboration.",
} as const;

export const demandRoleCards = [
  {
    title: "Network & field engineers",
    badge: "Field · RAN · access",
    topics: [
      "Rollout, commissioning and maintenance of access and transport networks",
      "Tower, fibre and last-mile execution aligned to operator workflows",
      "Fault response and coordination with OEM and contractor teams",
    ],
    outcome: "Deployable talent for build, operate and sustain on the ground.",
    accent: "#1D4ED8",
    accentBg: "rgba(29,78,216,0.06)",
    hoverGradient: "linear-gradient(135deg, #396dff 0%, #0891B2 100%)",
  },
  {
    title: "Cybersecurity specialists",
    badge: "Security · compliance",
    topics: [
      "Securing telecom and IT estates against evolving threats",
      "SOC operations, incident response and audit readiness",
      "Identity, zero-trust and secure access for hybrid environments",
    ],
    outcome: "Teams that keep networks and subscriber data trustworthy.",
    accent: "#1D4ED8",
    accentBg: "rgba(29,78,216,0.06)",
    hoverGradient: "linear-gradient(135deg, #396dff 0%, #0891B2 100%)",
  },
  {
    title: "Data centre & cloud professionals",
    badge: "DC · cloud · platforms",
    topics: [
      "Design and operations of edge, core DC and hybrid cloud",
      "Virtualisation, orchestration and service reliability",
      "Capacity for data-heavy 5G and enterprise workloads",
    ],
    outcome:
      "Professionals who run resilient digital infrastructure behind the network.",
    accent: "#1D4ED8",
    accentBg: "rgba(29,78,216,0.06)",
    hoverGradient: "linear-gradient(135deg, #396dff 0%, #0891B2 100%)",
  },
  {
    title: "Optimisation & automation experts",
    badge: "OSS · analytics · AI ops",
    topics: [
      "Performance tuning, capacity optimisation and cost efficiency",
      "Automating NOC and assurance workflows",
      "AI-assisted monitoring and closed-loop remediation",
    ],
    outcome: "Experts who improve quality and reduce manual toil at scale.",
    accent: "#1D4ED8",
    accentBg: "rgba(29,78,216,0.06)",
    hoverGradient: "linear-gradient(135deg, #396dff 0%, #0891B2 100%)",
  },
] as const;
