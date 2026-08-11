import { CalendarCheck, MapPinned, Repeat, Headphones } from "lucide-react";
import type { TrustStat } from "../types";

export const trustStats: TrustStat[] = [
  { label: "Established 2006", value: "20+ Years", icon: CalendarCheck },
  { label: "Pan-India Enquiries", value: "India-Wide", icon: MapPinned },
  { label: "Sales & Rental", value: "Flexible", icon: Repeat },
  { label: "Technical Support", value: "Ongoing", icon: Headphones },
];
