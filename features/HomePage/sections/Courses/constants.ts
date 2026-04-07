export const keyDomains = [
  "5G / 6G",
  "Next-Generation Networks",
  "Artificial Intelligence",
  "Telecom Operations",
  "Internet of Things (IoT)",
  "Smart Systems",
  "Cybersecurity",
  "Network Security",
  "Networking",
  "Cloud Computing",
  "Digital Infrastructure",
];

export const courseCards = [
  {
    title: "Entry-Level Skilling",
    duration: "1–6 months",
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
    hoverGradient: "linear-gradient(135deg, #396dff 0%, #0891B2 100%)",
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
    accent: "#1D4ED8",
    accentBg: "rgba(29,78,216,0.06)",
    hoverGradient: "linear-gradient(135deg, #396dff 0%, #0891B2 100%)",
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
    accent: "#1D4ED8",
    accentBg: "rgba(29,78,216,0.06)",
    hoverGradient: "linear-gradient(135deg, #396dff 0%, #0891B2 100%)",
  },
];

/** Programme approach — images from /public/assets/trainings */
export const programmeApproachCards = [
  {
    title: "Industry-validated curriculum",
    description:
      "Course design reviewed with industry so skills match real roles—aligned to NSQF and telecom sector needs.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    accent: "#E11D48",
  },
  {
    title: "Outcome-oriented training",
    description:
      "Hands-on and simulation-based learning in specialised labs, with clear milestones toward job-ready competence.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
    accent: "#1E3A8A",
  },
  {
    title: "Focus on direct employability",
    description:
      "Training explicitly linked to placements, apprenticeships and employer needs so learners can move into work faster.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
    accent: "#EA580C",
  },
] as const;

/** Carousel cards — key domains; images from /public/assets/trainings (reuse where needed). */
export const featuredDomainCards = [
  {
    id: 11,
    title: "5G / 6G",
    summary:
      "Learn the fundamentals of ultra-fast wireless technologies and next-gen connectivity.",
    focus:
      "Covers 5G architecture, use cases, and the future roadmap towards 6G innovation.",
    image: "/assets/trainings/6g.jpeg",
  },
  {
    id: 12,
    title: "Next-Generation Networks",
    summary:
      "Understand the evolution of modern telecom networks and advanced communication systems.",
    focus:
      "Focuses on high-speed, low-latency networks powering digital transformation.",
    image: "/assets/trainings/next-gen-nertworks.jpeg",
  },
  {
    id: 13,
    title: "Artificial Intelligence",
    summary:
      "Explore how AI is transforming telecom with automation and intelligent decision-making.",
    focus:
      "Includes machine learning applications for network optimization and analytics.",
    image: "/assets/trainings/ai.jpeg",
  },
  {
    id: 14,
    title: "Telecom Operations",
    summary:
      "Gain insights into the day-to-day functioning and management of telecom networks.",
    focus:
      "Covers network monitoring, maintenance, and service delivery processes.",
    image: "/assets/trainings/telecom-operations.jpeg",
  },
  {
    id: 15,
    title: "Internet of Things (IoT)",
    summary:
      "Learn how connected devices communicate and enable smart ecosystems.",
    focus:
      "Focuses on IoT architecture, sensors, and real-world applications across industries.",
    image: "/assets/trainings/iot.jpeg",
  },
  {
    id: 16,
    title: "Smart Systems",
    summary:
      "Understand integrated systems that use data and automation for efficient operations.",
    focus:
      "Covers smart cities, smart homes, and intelligent industrial solutions.",
    image:
      "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=900&q=80",
  },
  {
    id: 17,
    title: "Cybersecurity",
    summary:
      "Build knowledge to protect digital systems from cyber threats and attacks.",
    focus:
      "Includes security frameworks, threat detection, and risk mitigation strategies.",
    image: "/assets/trainings/cybersecurity.jpeg",
  },
  {
    id: 18,
    title: "Network Security",
    summary:
      "Focuses on securing telecom and IT networks from unauthorized access and breaches.",
    focus:
      "Covers firewalls, encryption, and secure network design principles.",
    image: "/assets/trainings/network-security.jpeg",
  },
  {
    id: 19,
    title: "Networking",
    summary:
      "Learn the fundamentals of data communication and network infrastructure.",
    focus: "Covers protocols, routing, switching, and connectivity concepts.",
    image: "/assets/trainings/next-gen-nertworks.jpeg",
  },
  {
    id: 20,
    title: "Cloud Computing",
    summary:
      "Understand cloud computing models and their role in modern IT and telecom.",
    focus:
      "Includes cloud deployment, virtualization, and scalable service delivery.",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=900&q=80",
  },
  {
    id: 21,
    title: "Digital Infrastructure",
    summary:
      "Explore the backbone of digital ecosystems including data centers and connectivity systems.",
    focus:
      "Focuses on enabling seamless digital services and large-scale network operations.",
    image: "/assets/trainings/telecom-operations.jpeg",
  },
] as const;

const SHARED_BLUE = "#1D4ED8";
const SHARED_GRADIENT = "linear-gradient(135deg, #396dff 0%, #0891B2 100%)";

export const jobCards = [
  {
    id: 1,
    title: "Telecom Network Support Engineer",
    highlights: [
      "Monitor network performance",
      "Troubleshoot basic connectivity issues",
      "Assist in maintaining telecom infrastructure",
    ],
    accent: SHARED_BLUE,
    hoverGradient: SHARED_GRADIENT,
  },
  {
    id: 2,
    title: "RF Engineer - Trainee",
    highlights: [
      "Work on mobile network signals",
      "Analyze coverage and signal strength",
      "Assist in network optimization",
    ],
    accent: SHARED_BLUE,
    hoverGradient: SHARED_GRADIENT,
  },
  {
    id: 3,
    title: "NOC Engineer",
    highlights: [
      "Monitor telecom networks 24/7",
      "Identify outages / issues",
      "Escalate technical problems",
    ],
    accent: SHARED_BLUE,
    hoverGradient: SHARED_GRADIENT,
  },
  {
    id: 4,
    title: "Telecom Technician / Field Engineer",
    highlights: [
      "Install telecom equipment",
      "Support site operations",
      "Handle basic troubleshooting",
    ],
    accent: SHARED_BLUE,
    hoverGradient: SHARED_GRADIENT,
  },
  {
    id: 5,
    title: "Core Network Engineer - Junior",
    highlights: [
      "Work on switching, routing, and core systems",
      "Handle network traffic and data flow",
      "Support backend telecom operations",
    ],
    accent: SHARED_BLUE,
    hoverGradient: SHARED_GRADIENT,
  },
  {
    id: 6,
    title: "Transmission / Transport Engineer",
    highlights: [
      "Manage fiber networks & data transmission",
      "Ensure network reliability",
      "Work with SDH, MPLS, IP networks",
    ],
    accent: SHARED_BLUE,
    hoverGradient: SHARED_GRADIENT,
  },
  {
    id: 7,
    title: "Telecom Operations Engineer",
    highlights: [
      "Oversee network performance",
      "Coordinate between RAN & core teams",
      "Optimize telecom services",
    ],
    accent: SHARED_BLUE,
    hoverGradient: SHARED_GRADIENT,
  },
  {
    id: 8,
    title: "Telecom Protocol / Call Flow Engineer",
    highlights: [
      "Analyze call flows (voice/data sessions)",
      "Troubleshoot signaling issues",
      "Work with LTE/5G protocols",
    ],
    accent: SHARED_BLUE,
    hoverGradient: SHARED_GRADIENT,
  },
  {
    id: 9,
    title: "5G / Telecom Innovation Engineer",
    highlights: [
      "Work on next-gen networks (5G)",
      "Assist in deployment & testing",
      "Optimize network performance",
    ],
    accent: SHARED_BLUE,
    hoverGradient: SHARED_GRADIENT,
  },
  {
    id: 10,
    title: "Telecom Solutions Engineer",
    highlights: [
      "Design telecom solutions for clients",
      "Work on integration across systems",
      "Support pre-sales or technical consulting",
    ],
    accent: SHARED_BLUE,
    hoverGradient: SHARED_GRADIENT,
  },
] as const;
