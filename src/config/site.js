export const SITE_TAGLINE = "Mobile Veterinary Care in Kisii, Nyamira & Nyanza"
export const SITE_NAME = "The Monna Veterinary Clinic"
export const SITE_URL =
  process.env.REACT_APP_SITE_URL || "https://monnavetclinic.co.ke"

export const SITE_PHONE = "+254706877722"
export const SITE_PHONE_DISPLAY = "0706877722"
export const SITE_EMAIL = "kevin068mbunde@gmail.com"

export const DEFAULT_DESCRIPTION =
  "Professional 24/7 mobile veterinary services for livestock, pets, and poultry across Kisii, Nyamira, and Nyanza, Kenya. Emergency care, vaccinations, surgery, and diagnostics at your farm or home."

export const DEFAULT_KEYWORDS =
  "mobile vet Kisii, veterinary clinic Nyamira, Nyanza vet services, emergency vet Kenya, livestock vet, pet doctor Kisii, animal hospital, Monna Veterinary Clinic"

export const AREA_SERVED = ["Kisii County", "Nyamira County", "Nyanza Region"]

export const LOCAL_BUSINESS_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "VeterinaryCare",
  name: SITE_NAME,
  description: DEFAULT_DESCRIPTION,
  url: SITE_URL,
  telephone: SITE_PHONE,
  email: SITE_EMAIL,
  areaServed: AREA_SERVED.map((name) => ({
    "@type": "AdministrativeArea",
    name,
  })),
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "16:00",
    },
  ],
  priceRange: "$$",
  medicalSpecialty: "Veterinary Medicine",
}
