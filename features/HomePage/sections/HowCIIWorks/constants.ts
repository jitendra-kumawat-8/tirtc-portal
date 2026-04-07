import type { ComponentType } from "react";
import type { SvgIconProps } from "@mui/material";
import {
  CastForEducationRounded,
  ConstructionRounded,
  DomainRounded,
  GroupsRounded,
  HandshakeRounded,
  LanguageRounded,
  MenuBookRounded,
  SupportAgentRounded,
  WorkspacePremiumRounded,
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

/** CII Skill Delivery Vehicles — wheel + supporting copy (5 nodes) */
export const deliveryVehicles: Array<{
  title: string;
  description: string;
  Icon: ComponentType<SvgIconProps>;
}> = [
  {
    title: "CII Multi Skill Training Institutes (MSTIs)",
    description: "Delivering hands-on, job-oriented training",
    Icon: CastForEducationRounded,
  },
  {
    title: "CII Model Career Centres",
    description: "Career counselling, job matching & placement support",
    Icon: SupportAgentRounded,
  },
  {
    title: "Awarding Body",
    description: "NSQF-aligned training and certification",
    Icon: WorkspacePremiumRounded,
  },
  {
    title: "Industry-Led Courses",
    description: "Telecom, tech and digital literacy",
    Icon: MenuBookRounded,
  },
  {
    title: "International Pathways",
    description: "Language, mobility & global career readiness",
    Icon: LanguageRounded,
  },
];
