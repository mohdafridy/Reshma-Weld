/**
 * Central site configuration.
 *
 * IMPORTANT: Contact details below are intentionally left as placeholders.
 * Do not invent phone numbers, emails, addresses, or GST numbers — replace
 * these values with verified company details before launch.
 */

export const siteConfig = {
  companyName: "Reshma Weld Associates",
  legalName: "Reshma Weld Associates",
  tagline: "Welding & Industrial Equipment — Sales, Rental & Service",
  established: 2006,
  market: "India",

  description:
    "Reshma Weld Associates supplies welding machines, cutting equipment, welding consumables, accessories and industrial equipment with sales, rental, installation, training and technical support across India.",

  url: "https://www.reshmaweld.com",

  // Placeholder contact details — replace with verified information.
  contact: {
    phonePrimary: "+91 XXXXX XXXXX", // TODO: add verified phone number
    phoneSecondary: "", // TODO: optional second line
    whatsapp: "", // TODO: add WhatsApp number if available
    email: "info@reshmaweld.example", // TODO: replace with verified email
    salesEmail: "", // TODO: optional dedicated sales email
    address: {
      line1: "Address line 1", // TODO: add verified address
      line2: "Address line 2",
      city: "City",
      state: "State",
      pincode: "PIN Code",
      country: "India",
    },
    gstNumber: "", // TODO: add GST number if applicable
    businessHours: "Mon – Sat, 9:30 AM – 6:30 PM", // TODO: confirm hours
  },

  social: {
    linkedin: "", // TODO: add LinkedIn URL
    facebook: "", // TODO: add Facebook URL
    instagram: "", // TODO: add Instagram URL
    youtube: "", // TODO: add YouTube URL
  },

  cta: {
    enquireUrl: "/contact",
    quoteUrl: "/contact?type=quote",
    rentalUrl: "/contact?type=rental",
  },
} as const;

export type SiteConfig = typeof siteConfig;
