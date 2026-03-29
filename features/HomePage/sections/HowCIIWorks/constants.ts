import type { ComponentType } from "react";
import type { SvgIconProps } from "@mui/material";
import {
  DomainRounded,
  ConstructionRounded,
  HandshakeRounded,
  GroupsRounded,
} from "@mui/icons-material";

export const functionalModelCards: Array<{
  Icon: ComponentType<SvgIconProps>;
  title: string;
  lines: string[];
}> = [
  {
    Icon: DomainRounded,
    title: "Centre Establishment",
    lines: ["Establishing TIRTC as an industry-led telecom training centre"],
  },
  {
    Icon: ConstructionRounded,
    title: "Infrastructure",
    lines: [
      "Infrastructure support provided through BSNL",
      "Existing facilities upgraded to enable advanced telecom training",
    ],
  },
  {
    Icon: HandshakeRounded,
    title: "Industry Partnership",
    lines: [
      "Industry partners to support curriculum design, labs and training delivery",
      "Participation in apprenticeships, OJT and placements",
    ],
  },
  {
    Icon: GroupsRounded,
    title: "Operation by Joint Industry Forum",
    lines: [
      "Industry Telecom Forum formed under CII",
      "Forum oversees training quality, industry alignment and outcomes",
    ],
  },
];

export const frameworkChips = [
  "Implementation Partner",
  "Centre Operations",
  "Training & Curriculum",
  "Lab Management",
  "Industry Engagement",
  "Mobilisation & Counselling",
  "Certification",
  "Placement Facilitation",
];

export const deliveryVehicles: Array<{ title: string; description: string }> = [
  {
    title: "CII Multi Skill Training Institutes (MSTIs)",
    description: "Delivering hands-on, job-oriented training",
  },
  {
    title: "CII Model Career Centres",
    description: "Enabling career counselling, job matching & placement support",
  },
  {
    title: "Awarding Body",
    description: "Enabling NSQF-aligned training and certification",
  },
  {
    title: "Industry-Led Courses",
    description: "Covering telecom, tech and digital literacy",
  },
  {
    title: "International Pathways",
    description: "With language, mobility & global career readiness support",
  },
];
