import {
  Building2,
  Cog,
  Hammer,
  Factory,
  Train,
  Plane,
  Ship,
  Settings,
  Landmark,
  Layers,
  GitBranch,
  Warehouse,
  Wrench,
} from "lucide-react";
import type { IndustryItem } from "../types";

export const industries: IndustryItem[] = [
  {
    name: "Construction",
    description: "Welding and cutting equipment for construction sites and building projects.",
    icon: Building2,
  },
  {
    name: "Infrastructure",
    description: "Equipment supporting large-scale infrastructure development work.",
    icon: Landmark,
  },
  {
    name: "Engineering",
    description: "Welding solutions for general and precision engineering applications.",
    icon: Cog,
  },
  {
    name: "Fabrication",
    description: "Equipment for structural and general metal fabrication work.",
    icon: Hammer,
  },
  {
    name: "Heavy Engineering",
    description: "Equipment suited to heavy engineering and large fabrication requirements.",
    icon: Factory,
  },
  {
    name: "Manufacturing",
    description: "Welding and cutting equipment for production and manufacturing environments.",
    icon: Settings,
  },
  {
    name: "Railways",
    description: "Equipment supporting welding and fabrication work in railway projects.",
    icon: Train,
  },
  {
    name: "Aviation",
    description: "Precision welding equipment for aviation-related fabrication work.",
    icon: Plane,
  },
  {
    name: "Shipbuilding",
    description: "Heavy-duty welding and cutting equipment for shipbuilding applications.",
    icon: Ship,
  },
  {
    name: "Industrial Maintenance",
    description: "Equipment and support for ongoing industrial maintenance activities.",
    icon: Wrench,
  },
  {
    name: "Structural Fabrication",
    description: "Equipment for structural steel fabrication and assembly.",
    icon: Layers,
  },
  {
    name: "Pipeline & HDPE Applications",
    description: "HDPE pipe jointing and related equipment for pipeline projects.",
    icon: GitBranch,
  },
  {
    name: "Workshop Applications",
    description: "General-purpose welding and workshop equipment for day-to-day operations.",
    icon: Warehouse,
  },
];
