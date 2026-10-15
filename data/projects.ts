export type Project = {
  id: number
  title: string
  sector: string
  client: string
  summary: string
  /** image path — all TODO until client supplies real photos */
  image: string
}

/**
 * Seed data from docs/CONTENT.md.
 * No contract values, rates, or financial figures.
 * No invented details — any unknown field uses a TODO string.
 */
export const projects: Project[] = [
  {
    id: 1,
    title: "Greenville LNG Rumuji",
    sector: "Oil & Gas / Refinery",
    client: "Greenville Oil & Gas",
    summary: "Pipe racks, insulation, and electrical & instrumentation works.",
    image: "/images/insulation/greenville-lng-tank-insulation.png",
  },
  {
    id: 2,
    title: "Scaffolding & Fastening Works",
    sector: "Oil & Gas / Refinery",
    client: "SPDC",
    summary: "Scaffolding erection and fastening services.",
    image: "/images/scaffolding/scaffold-vessel-and-pipes.png",
  },
  {
    id: 3,
    title: "Manpower Supply",
    sector: "Oil & Gas / Refinery",
    client: "Chemie-Tech DMCC (Dangote Refinery)",
    summary: "Skilled manpower supply for refinery operations.",
    image: "/images/labour/labour-ppe-workers-at-height.png",
  },
  {
    id: 4,
    title: "Roads & Transformer Supply",
    sector: "Civil Infrastructure",
    client: "NDDC",
    summary: "Road construction and transformer supply and installation.",
    image: "/images/civil/civil-concrete-road-01.png",
  },
  {
    id: 5,
    title: "Building Works",
    sector: "Public Sector",
    client: "INEC",
    summary: "Civil and building construction works.",
    image: "/images/civil/civil-perimeter-fence.png",
  },
  {
    id: 6,
    title: "Roads Construction",
    sector: "Civil Infrastructure",
    client: "Federal Polytechnic Nekede",
    summary: "Roads construction within the polytechnic campus.",
    image: "/images/civil/civil-concrete-road-03.png",
  },
  {
    id: 7,
    title: "Waste Evacuation",
    sector: "Environmental",
    client: "Abuja Environmental Protection Board",
    summary: "Waste evacuation and environmental services.",
    image: "/images/civil/civil-access-road-02.png",
  },
  {
    id: 8,
    title: "Works",
    sector: "Public Sector",
    client: "FCTA",
    summary: "TODO: project description to be confirmed by client.",
    image: "/images/civil/civil-building-completed.png",
  },
  {
    id: 9,
    title: "Electrification Project",
    sector: "Power & Electrification",
    client: "Bayelsa State Government",
    summary: "Rural electrification works.",
    image: "/images/civil/civil-generator-installation.png",
  },
]

export const projectSectors = [
  "All",
  "Oil & Gas / Refinery",
  "Civil Infrastructure",
  "Power & Electrification",
  "Public Sector",
  "Environmental",
] as const
