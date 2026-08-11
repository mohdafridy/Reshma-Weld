import { Box, Zap, Gauge, Volume2, Battery, Settings2 } from "lucide-react";
import type { QualityParameter } from "../types";

export const qualityParameters: QualityParameter[] = [
  {
    title: "Compact Structure",
    description: "Space-efficient equipment design suited for workshop and site conditions.",
    icon: Box,
  },
  {
    title: "Fast Ignition",
    description: "Reliable, quick arc starting for consistent welding performance.",
    icon: Zap,
  },
  {
    title: "High Capacity",
    description: "Equipment capable of handling demanding industrial workloads.",
    icon: Gauge,
  },
  {
    title: "Low Noise Level",
    description: "Quieter operation for improved working conditions.",
    icon: Volume2,
  },
  {
    title: "Efficient Power Consumption",
    description: "Equipment selected with attention to power efficiency.",
    icon: Battery,
  },
  {
    title: "Low Maintenance",
    description: "Equipment chosen for durability and ease of upkeep.",
    icon: Settings2,
  },
];

export const qualityProcess = [
  {
    step: "01",
    title: "Procurement",
    description: "Equipment is sourced from trusted vendors in the welding and industrial equipment sector.",
  },
  {
    step: "02",
    title: "Inspection",
    description: "Products are evaluated by quality controllers before being accepted into stock.",
  },
  {
    step: "03",
    title: "Storage",
    description: "Equipment is stored under appropriate conditions to preserve quality until dispatch.",
  },
  {
    step: "04",
    title: "Final Delivery",
    description: "Products are dispatched to customers, supported by installation and technical guidance where required.",
  },
];
