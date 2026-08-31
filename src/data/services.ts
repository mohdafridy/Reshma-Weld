import {
  ShoppingCart,
  Repeat,
  Wrench,
  GraduationCap,
  Headphones,
  Search,
  LifeBuoy,
} from "lucide-react";
import type { ServiceItem } from "../types";

export const coreServices: ServiceItem[] = [
  {
    title: "Equipment Sales",
    description:
      "Welding machines, cutting equipment, consumables, accessories and industrial equipment supplied to customers across India.",
    icon: ShoppingCart,
  },
  {
    title: "Equipment Rental / Hire",
    description:
      "Selected equipment available on hire for short-term projects, site work and temporary requirements.",
    icon: Repeat,
  },
  {
    title: "Installation",
    description:
      "On-site installation support to help get equipment set up and ready for operation.",
    icon: Wrench,
  },
  {
    title: "Operational Training",
    description:
      "Guidance for operators on the safe and efficient use of welding and cutting equipment.",
    icon: GraduationCap,
  },
  {
    title: "Technical Support",
    description:
      "Technical guidance on equipment selection, application and operating parameters.",
    icon: Headphones,
  },
  {
    title: "Troubleshooting",
    description:
      "Diagnosis and fault rectification support to minimize equipment downtime.",
    icon: Search,
  },
  {
    title: "After-Sales Service",
    description:
      "Ongoing service support after purchase or rental to keep equipment running reliably.",
    icon: LifeBuoy,
  },
];
