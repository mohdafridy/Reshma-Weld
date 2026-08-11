/**
 * Central site configuration.
 */

export const siteConfig = {
  companyName: "Reshma Weld Trading Corporation",
  legalName: "Reshma Weld Trading Corporation",
  tagline: "Welding & Industrial Equipment — Sales, Rental & Service",
  established: 2006,
  market: "India",

  description:
    "Reshma Weld Trading Corporation supplies welding machines, cutting equipment, welding consumables, accessories and industrial equipment with sales, rental, installation, training and technical support across India.",

  url: "https://www.reshmaweld.com",

  contact: {
    phonePrimary: "+91 99455 14876",
    phoneSecondary: "+91 93535 94365",
    whatsapp: "+91 99455 14876",
    whatsappSecondary: "+91 93535 94365",
    email: "reshmaweld@yahoo.co.in",
    salesEmail: "", // TODO: optional dedicated sales email
    address: {
      line1: "5MMR+VH4, BK Halli Road, Airport Road",
      line2: "Mylanahalli, Mailanahalli",
      city: "Bengaluru",
      state: "Karnataka",
      pincode: "562149",
      country: "India",
    },
    gstNumber: "29AWVPR1765J1ZJ",
    businessHours: "Mon – Sat: 9:00 AM – 8:00 PM · Sunday: Half Day",
  },

  social: {
    linkedin: "", // TODO: add LinkedIn URL
    facebook: "", // TODO: add Facebook URL
    instagram: "https://www.instagram.com/rwtc_weld",
    youtube: "", // TODO: add YouTube URL
  },

  cta: {
    enquireUrl: "/contact",
    quoteUrl: "/contact?type=quote",
    rentalUrl: "/contact?type=rental",
  },
} as const;

export type SiteConfig = typeof siteConfig;
