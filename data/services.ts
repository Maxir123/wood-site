import { Wrench, Gauge, Building2, Zap, Layers, Users, Radio } from "lucide-react"
import type { LucideIcon } from "lucide-react"

export type Service = {
  slug: string
  title: string
  summary: string
  description: string
  keyPoints: string[]
  icon: LucideIcon
  images?: string[]
}

export const services: Service[] = [
  {
    slug: "fabrication",
    title: "Fabrication Works",
    icon: Wrench,
    summary:
      "Structural fabrication of industrial components — girders, I-beams, C-channels, plates, storage tanks, and prefabricated shed construction for industrial facilities.",
    description:
      "In order to aid and quarter the process system, structural fabrication is compulsory with different shapes and sizes of sectioned steels such as Girders, Angles, I-beams, C-channels, Plates etc. We not only fabricate individual parts and sections of the project but also supply complete factory outbuildings including those to house machinery.",
    keyPoints: [
      "Structural fabrication (girders, angles, I-beams, C-channels, plates)",
      "Pre-fabricated shed construction (rafters, box columns, purlins)",
      "Heavy crane support artefacts and platforms",
      "Machinery substructure and heavy-duty support frameworks",
      "Storage tanks and silo fabrication",
      "Sectors served: minerals & ore processing, sugar plants, cement plants, power plants",
    ],
    images: [
      "/images/civil/civil-mast-rooftop-erection.png",
      "/images/scaffolding/scaffold-structure-01.png",
    ],
  },
  {
    slug: "mechanical",
    title: "Mechanical Works",
    icon: Gauge,
    summary:
      "Heating, cooling, refrigeration, piping and plumbing systems — installation, production, and ongoing maintenance and repair for industrial and commercial buildings.",
    description:
      "Merab Engineering Services Limited is in charge of heating or cooling systems, refrigerators, piping and plumbing. We have an extensive range of expertise that, when put together, comprises a huge part of creating and maintaining a building so that it fulfils its purpose. Anything with mechanical parts will require the attention of Merab Engineering Services Limited whether for production, installation or ongoing maintenance and repair.\n\nTemperature control in a building is a large part of our work, especially because heating systems or air conditioners are required in new buildings to keep the temperature at a comfortable level. We look at the building and determine the best method needed for heating and cooling, taking into consideration practical installation costs and energy efficiency.\n\nOur responsibilities include making sure mechanical elements of the building are installed on time and within budget, scheduling of subcontractors, and allocating and delegating of workloads.",
    keyPoints: [
      "HVAC — heating, ventilation, air conditioning",
      "Refrigeration systems",
      "Piping and plumbing installation",
      "Maintenance and repair of mechanical systems",
      "Budget and schedule management for mechanical packages",
    ],
    images: [
      "/images/insulation/greenville-process-piping.png",
      "/images/insulation/greenville-valve-manifold.png",
      "/images/civil/civil-generator-installation.png",
    ],
  },
  {
    slug: "civil",
    title: "Civil Works",
    icon: Building2,
    summary:
      "Buildings, roads, culverts and drainage, boreholes, water tanks, fencing, and concrete structures for industrial and commercial clients.",
    description:
      "Merab Engineering Services Limited delivers comprehensive civil works across industrial, commercial, and public-sector projects in Nigeria.",
    keyPoints: [
      "Site acquisition and topographic survey",
      "Subsoil investigation (DCP test, borehole logging)",
      "Roads, culverts, and drainage construction",
      "Buildings and fencing",
      "Boreholes, overhead tanks, and reticulation",
      "Project management",
    ],
    images: [
      "/images/civil/civil-concrete-road-01.png",
      "/images/civil/civil-drainage-channel.png",
      "/images/civil/civil-building-completed.png",
      "/images/civil/civil-perimeter-fence.png",
    ],
  },
  {
    slug: "electrical-instrumentation",
    title: "Electrical & Instrumentation Works",
    icon: Zap,
    summary:
      "Full-scope electrical and instrumentation works — from LV/MV cabling and panels to instrumentation, telecom infrastructure, and rural electrification.",
    description:
      "Merab Engineering Services Limited provides full electrical and instrumentation engineering services covering installation, testing, and commissioning across industrial, commercial, and infrastructure projects.",
    keyPoints: [
      "Instrumentation and telecom works (air piping, signal tubing)",
      "Transmitters, test control valves, LV/MV cabling",
      "Electrical panels and earthing systems",
      "Street lighting, fire alarms, access control",
      "Transformer supply and installation",
      "HT/LT power lines and rural electrification",
    ],
    images: [
      "/images/civil/civil-generator-electrical-works.png",
      "/images/insulation/greenville-level-gauge.png",
      "/images/civil/civil-generator-installation.png",
    ],
  },
  {
    slug: "insulation",
    title: "Heat & Cold Pipe / Vessel Insulation",
    icon: Layers,
    summary:
      "Insulation of heat and cold pipelines and vessels, and cathodic protection services for oil and gas and industrial facilities.",
    description:
      "Merab Engineering Services Limited carries out heat and cold pipe insulation, vessel insulation, and cathodic protection for process plants, refineries, and industrial facilities across Nigeria.",
    keyPoints: [
      "Heat and cold pipe insulation",
      "Vessel insulation",
      "Cathodic protection",
    ],
    images: [
      "/images/insulation/greenville-lng-tank-insulation.png",
      "/images/insulation/greenville-pipe-rack-run.png",
      "/images/insulation/greenville-valves-manifold.png",
      "/images/insulation/greenville-elbow-insulation.png",
    ],
  },
  {
    slug: "labour-scaffolding",
    title: "Labour Supply & Scaffolding",
    icon: Users,
    summary:
      "Supply of skilled and unskilled labour — welders, fitters, fabricators, pipe-fitters — and scaffolding services for industrial, refinery, oil & gas, and construction sites.",
    description:
      "We are into general contracts such as labour supply — skilled and unskilled — trained professionals in welding, fittings, fabrication, pipeline jobs, refinery, oil and gas flow stations, building constructions, industrial elevated access, safety installations, structural steel works, repairs and replacement parts, etc.\n\nWe have skilled workers in various fields that are well trained in safety and are of good behaviour. Merab Engineering Services Limited have worked with and for many companies in this aspect and have shown competency in supply of labour and human resources management. We have safety kits, a well-equipped retainership hospital, and also make available working tools and machines.\n\nAll employees are trained to live a safety lifestyle every day, both on and off facility. Security personnel will be deployed for the safe keeping of both company materials and personnel.",
    keyPoints: [
      "Skilled labour: welders, fitters, fabricators, pipe-fitters",
      "Unskilled labour supply",
      "Scaffolding erection and dismantling for industrial access",
      "Safety training and PPE provision",
      "Retainership hospital / welfare support",
      "Human resources management",
    ],
    images: [
      "/images/labour/labour-ppe-workers-at-height.png",
      "/images/scaffolding/scaffold-vessel-and-pipes.png",
      "/images/scaffolding/scaffold-structure-02.png",
      "/images/labour/labour-safety-training.png",
    ],
  },
  {
    slug: "telecom",
    title: "Telecom Site Services",
    icon: Radio,
    summary:
      "Telecom site build and maintenance — civil works, electro-mechanical installation, tower and antenna erection, and integrated site maintenance.",
    // TODO: client to confirm current activity level; PDF references are older
    description:
      "Merab Engineering Services Limited provides telecom site build and integrated maintenance services including civil, electro-mechanical, tower and antenna installation.",
    keyPoints: [
      "Site build (civil and electro-mechanical)",
      "Tower and antenna erection",
      "Integrated site maintenance",
    ],
    images: [
      "/images/civil/civil-tower-and-stones.png",
      "/images/civil/civil-mast-rooftop-erection.png",
    ],
  },
]

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug)
}
