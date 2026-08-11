import type { LucideIcon } from "lucide-react";

export interface ProductCategory {
  slug: string;
  name: string;
  shortDescription: string;
  icon: LucideIcon;
}

export interface Product {
  id: string;
  name: string;
  categorySlug: string;
  description: string;
  specNote: string;
  availability: ("Sale" | "Rental")[];
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface IndustryItem {
  name: string;
  description: string;
  icon: LucideIcon;
}

export interface QualityParameter {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface TrustStat {
  label: string;
  value: string;
  icon: LucideIcon;
}

export interface NavLink {
  label: string;
  path: string;
}

export type RequirementType = "Sales" | "Rental" | "Service" | "General Enquiry";
