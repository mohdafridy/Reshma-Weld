import {
  Zap,
  Scissors,
  Package,
  Wrench,
  Flame,
  HardHat,
  Factory,
} from "lucide-react";
import type { ProductCategory } from "../types";

export const categories: ProductCategory[] = [
  {
    slug: "welding-machines",
    name: "Welding Machines",
    shortDescription:
      "Arc, TIG, MIG/CO₂, inverter and specialized welding machines for industrial and workshop use.",
    icon: Zap,
  },
  {
    slug: "cutting-equipment",
    name: "Cutting Equipment",
    shortDescription:
      "Plasma cutting, CNC beveling and cut-off machines for precision metal cutting.",
    icon: Scissors,
  },
  {
    slug: "welding-consumables",
    name: "Welding Consumables",
    shortDescription:
      "Electrodes, wires, filler materials and tungsten rods for MIG, TIG and MMA welding.",
    icon: Package,
  },
  {
    slug: "welding-accessories",
    name: "Welding Accessories",
    shortDescription:
      "Torches, cables, shields, chipping hammers and welding trolleys.",
    icon: Wrench,
  },
  {
    slug: "gas-welding-equipment",
    name: "Gas Welding Equipment",
    shortDescription:
      "Gas hoses, regulators and cutting/welding torches for gas welding applications.",
    icon: Flame,
  },
  {
    slug: "safety-equipment",
    name: "Safety Equipment",
    shortDescription:
      "Helmets, goggles, shoes, gloves and shields for operator safety.",
    icon: HardHat,
  },
  {
    slug: "industrial-workshop-equipment",
    name: "Industrial & Workshop Equipment",
    shortDescription:
      "Pipe jointing, drilling, grinding machines and general workshop tools.",
    icon: Factory,
  },
];

export function getCategoryBySlug(slug: string): ProductCategory | undefined {
  return categories.find((c) => c.slug === slug);
}
