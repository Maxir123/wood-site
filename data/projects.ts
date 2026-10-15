export type Project = {
  slug: string
  title: string
  client: string
  sector: string
  scope: string
  location: string
  summary: string
  image: string
  gallery: string[]
}

export const projects: Project[] = [
  {
    slug: "greenville-lng",
    title: "Greenville LNG Rumuji Installation & Insulation",
    client: "Greenville Oil & Gas",
    sector: "Oil & Gas / LNG",
    scope: "Pipe racks fabrication, thermal insulation, and electrical & instrumentation works",
    location: "Rumuji, Rivers State",
    summary:
      "Pipe racks installation, comprehensive cold and hot thermal insulation for process lines and vessels, and electrical & instrumentation works at the Greenville LNG facility.",
    image: "/images/insulation/greenville-pipe-rack-run.png",
    gallery: [
      "/images/insulation/greenville-pipe-rack-run.png",
      "/images/insulation/greenville-lng-tank-insulation.png",
      "/images/insulation/greenville-process-piping.png",
      "/images/insulation/greenville-elbow-insulation.png",
      "/images/insulation/greenville-valves-manifold.png",
    ],
  },
  {
    slug: "spdc-scaffolding",
    title: "SPDC Scaffolding & Fastening Services",
    client: "SPDC",
    sector: "Oil & Gas",
    scope: "Certified scaffolding erection, access platforms, and structural fastening works",
    location: "Rivers State / Niger Delta",
    summary:
      "Certified industrial scaffolding structures, elevated access platforms, and structural fastening services for Shell Petroleum Development Company facilities.",
    image: "/images/scaffolding/scaffold-structure-01.png",
    gallery: [
      "/images/scaffolding/scaffold-structure-01.png",
      "/images/scaffolding/scaffold-structure-02.png",
      "/images/scaffolding/scaffold-vessel-and-pipes.png",
    ],
  },
  {
    slug: "chemie-tech-manpower",
    title: "Chemie-Tech Dangote Refinery Manpower Supply",
    client: "Chemie-Tech DMCC",
    sector: "Refinery / Industrial",
    scope: "Skilled manpower supply, certified welders, fitters, scaffolders, and HSE supervision",
    location: "Lekki Free Zone, Lagos State",
    summary:
      "Provision of skilled and certified industrial manpower — welders, pipe-fitters, fabricators, and scaffolders with occupational safety training for refinery development packages.",
    image: "/images/labour/labour-ppe-workers-at-height.png",
    gallery: [
      "/images/labour/labour-ppe-workers-at-height.png",
      "/images/labour/labour-safety-training.png",
      "/images/labour/labour-toolbox-meeting.png",
    ],
  },
  {
    slug: "nddc-road-works",
    title: "NDDC Road Construction & Transformer Installation",
    client: "NDDC",
    sector: "Civil Infrastructure",
    scope: "Road construction, concrete drainage channels, and transformer supply and installation",
    location: "Niger Delta Region",
    summary:
      "Civil infrastructure development delivering concrete paved road corridors, side stormwater drainage networks, and electrical transformer installations.",
    image: "/images/civil/civil-concrete-road-01.png",
    gallery: [
      "/images/civil/civil-concrete-road-01.png",
      "/images/civil/civil-drainage-channel.png",
      "/images/civil/civil-generator-installation.png",
      "/images/civil/civil-generator-electrical-works.png",
    ],
  },
  {
    slug: "inec-civil-works",
    title: "INEC Civil & Building Construction Works",
    client: "INEC",
    sector: "Public Sector",
    scope: "Civil building works, structural roof truss assembly, and perimeter security fencing",
    location: "Nigeria",
    summary:
      "Civil construction of institutional office facilities, structural steel roof framing, interior finishings, and concrete perimeter boundary fencing.",
    image: "/images/civil/civil-building-completed.png",
    gallery: [
      "/images/civil/civil-building-completed.png",
      "/images/civil/civil-perimeter-fence.png",
      "/images/civil/civil-roof-truss-construction.png",
      "/images/civil/civil-ceiling-installation.png",
    ],
  },
  {
    slug: "nekede-poly-roads",
    title: "Federal Polytechnic Nekede Internal Road Network",
    client: "Federal Polytechnic Nekede",
    sector: "Civil Infrastructure",
    scope: "Rigid concrete pavement road construction and stormwater drainage",
    location: "Owerri, Imo State",
    summary:
      "Road network construction with concrete pavement and drainage infrastructure across the Federal Polytechnic Nekede campus.",
    image: "/images/civil/civil-concrete-road-03.png",
    gallery: [
      "/images/civil/civil-concrete-road-03.png",
      "/images/civil/civil-access-road-02.png",
      "/images/civil/civil-drainage-channel.png",
    ],
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}
