export const company = {
  name: "Merab Engineering Services Limited",
  /** DRAFT — client to confirm before go-live */
  tagline: "Engineering, Fabrication & Industrial Services Across Nigeria",
  /** DRAFT — client to confirm before go-live */
  metaDescription:
    "Merab Engineering Services Limited delivers fabrication, mechanical, civil, electrical and instrumentation, insulation, scaffolding and labour supply services to oil and gas, power and infrastructure clients in Nigeria.",
  phone: "08034101313",
  email: "merabengineering@gmail.com",
  website: "https://www.merabengineering.com",
  cacNumber: "RC 429220",
  /** TODO: client to confirm office hours */
  hours: "TODO: client to confirm",
  offices: [
    {
      label: "Head Office (Abuja)",
      address: "Zone D, House 5 Plot 965, Apo Resettlement, Abuja.",
    },
    {
      label: "Port Harcourt",
      address:
        "No. 2 Doxa Road, Off Peter Odili Road, Trans Amadi Industrial Layout, Port Harcourt, Rivers State.",
    },
    {
      label: "Lagos",
      address:
        "Suite 2, Maaz Energy Filling Station Complex, Elekon-Dangote Refinery Road, Ibeju Lekki, Lagos State.",
    },
  ],
  keywords: [
    "engineering",
    "fabrication",
    "mechanical",
    "civil",
    "electrical",
    "instrumentation",
    "insulation",
    "scaffolding",
    "labour supply",
    "Nigeria",
    "oil and gas",
    "refinery",
    "power",
  ],
  nav: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services/fabrication" },
    { label: "Projects", href: "/projects" },
    { label: "Clients", href: "/clients" },
    { label: "Compliance", href: "/compliance" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
} as const
