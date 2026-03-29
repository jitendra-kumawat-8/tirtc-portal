import type { ComponentType } from "react";
import type { SvgIconProps } from "@mui/material";
import {
  PrecisionManufacturingRounded,
  SchoolRounded,
  WorkRounded,
  RocketLaunchRounded,
  GroupsRounded,
  HubRounded,
} from "@mui/icons-material";

export const objectives: Array<{
  Icon: ComponentType<SvgIconProps>;
  title: string;
  text: string;
}> = [
  {
    Icon: PrecisionManufacturingRounded,
    title: "Industry-Aligned Labs",
    text: "Establish technology-driven, industry-aligned training labs and classrooms",
  },
  {
    Icon: SchoolRounded,
    title: "Job-Ready Skills",
    text: "Equip youth with job-ready skills in telecom and emerging technologies",
  },
  {
    Icon: WorkRounded,
    title: "Employment & Entrepreneurship",
    text: "Enable employment generation and entrepreneurship development",
  },
  {
    Icon: RocketLaunchRounded,
    title: "Innovation Ecosystem",
    text: "Strengthen India's telecom innovation ecosystem",
  },
  {
    Icon: GroupsRounded,
    title: "Talent Pipeline",
    text: "Build a sustainable talent pipeline for telecom and digital infrastructure sectors",
  },
  {
    Icon: HubRounded,
    title: "Industry Collaboration",
    text: "Integrate industry participation across training, labs, apprenticeships and hiring",
  },
];
