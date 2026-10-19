export type CertStatus = "confirmed" | "available-on-request"

export type Certification = {
  id: string
  name: string
  issuer: string
  reference?: string
  status: CertStatus
  statusNote: string
}

export type DocumentRecord = {
  id: string
  title: string
  category: "Corporate & Statutory" | "Tax & Statutory Compliance" | "Procurement & Industry Regulatory" | "Project Completion & Awards"
  issuer: string
  description: string
  status: "Available on Request"
}

export const certifications: Certification[] = [
  {
    id: "cac",
    name: "Corporate Affairs Commission (CAC)",
    issuer: "Federal Republic of Nigeria",
    reference: "RC 429220",
    status: "confirmed",
    statusNote: "Incorporated Entity (Est. 2001)",
  },
  {
    id: "firs",
    name: "Federal Tax Clearance",
    issuer: "Federal Inland Revenue Service (FIRS)",
    status: "available-on-request",
    statusNote: "Corporate Tax Clearance dossier — provided upon request",
  },
  {
    id: "vat",
    name: "Value Added Tax (VAT) Registration",
    issuer: "Federal Inland Revenue Service (FIRS)",
    status: "available-on-request",
    statusNote: "VAT Registration Certificate on file — provided upon request",
  },
  {
    id: "itf",
    name: "Industrial Training Fund (ITF)",
    issuer: "Industrial Training Fund",
    status: "available-on-request",
    statusNote: "Workforce Training Compliance Certificate on file — provided upon request",
  },
  {
    id: "nsitf",
    name: "NSITF Compliance Registration",
    issuer: "Nigeria Social Insurance Trust Fund",
    status: "available-on-request",
    statusNote: "Employees Compensation Scheme Clearance on file — provided upon request",
  },
  {
    id: "pencom",
    name: "PenCom Compliance Registration",
    issuer: "National Pension Commission",
    status: "available-on-request",
    statusNote: "Pension Compliance Certificate on file — provided upon request",
  },
  {
    id: "bpp",
    name: "BPP Federal Contractor Registration",
    issuer: "Bureau of Public Procurement (BPP)",
    status: "available-on-request",
    statusNote: "National Database of Federal Contractors Registration on file — provided upon request",
  },
  {
    id: "dpr",
    name: "DPR / NUPRC Permit",
    issuer: "Department of Petroleum Resources / NUPRC",
    status: "available-on-request",
    statusNote: "Oil & Gas Industry Service Permit on file — provided upon request",
  },
  {
    id: "napims",
    name: "NAPIMS / NNPC NJQS",
    issuer: "NAPIMS / NNPC Joint Qualification System",
    status: "available-on-request",
    statusNote: "Vendor pre-qualification records on file — provided upon request",
  },
  {
    id: "npc",
    name: "NPC Registration",
    issuer: "National Population Commission",
    status: "available-on-request",
    statusNote: "Corporate filing record on file — provided upon request",
  },
  {
    id: "ncc",
    name: "NCC Registration",
    issuer: "Nigerian Communications Commission",
    status: "available-on-request",
    statusNote: "Service registration record on file — provided upon request",
  },
]

export const confirmedCerts = certifications.filter((c) => c.status === "confirmed")
export const otherRegistrations = certifications.filter((c) => c.status !== "confirmed")

export const documentRecords: DocumentRecord[] = [
  {
    id: "doc-cac-inc",
    title: "CAC Certificate of Incorporation (RC 429220)",
    category: "Corporate & Statutory",
    issuer: "Corporate Affairs Commission",
    description: "Official certificate confirming incorporation as a limited liability engineering entity.",
    status: "Available on Request",
  },
  {
    id: "doc-cac-capital",
    title: "Notice of Increase of Nominal Share Capital",
    category: "Corporate & Statutory",
    issuer: "Corporate Affairs Commission",
    description: "Statutory corporate filing documenting authorized share capital expansion.",
    status: "Available on Request",
  },
  {
    id: "doc-firs-vat",
    title: "FIRS Value Added Tax (VAT) Registration Certificate",
    category: "Tax & Statutory Compliance",
    issuer: "Federal Inland Revenue Service",
    description: "Official VAT registration and federal tax compliance dossier.",
    status: "Available on Request",
  },
  {
    id: "doc-firs-tax",
    title: "Federal Tax Clearance Certificate",
    category: "Tax & Statutory Compliance",
    issuer: "Federal Inland Revenue Service",
    description: "Corporate income tax clearance certificate and statutory returns on record.",
    status: "Available on Request",
  },
  {
    id: "doc-itf",
    title: "ITF Certificate of Compliance",
    category: "Tax & Statutory Compliance",
    issuer: "Industrial Training Fund",
    description: "Employer workforce training contribution and statutory compliance clearance.",
    status: "Available on Request",
  },
  {
    id: "doc-nsitf",
    title: "NSITF Compliance Certificate",
    category: "Tax & Statutory Compliance",
    issuer: "Nigeria Social Insurance Trust Fund",
    description: "Employees' Compensation Act workplace social welfare and insurance clearance.",
    status: "Available on Request",
  },
  {
    id: "doc-pencom",
    title: "PenCom Compliance Certificate",
    category: "Tax & Statutory Compliance",
    issuer: "National Pension Commission",
    description: "Pension Reform Act workplace pension scheme clearance certificate.",
    status: "Available on Request",
  },
  {
    id: "doc-bpp",
    title: "BPP Federal Contractor Registration",
    category: "Procurement & Industry Regulatory",
    issuer: "Bureau of Public Procurement",
    description: "National Database of Federal Contractors, Consultants and Service Providers registration.",
    status: "Available on Request",
  },
  {
    id: "doc-dpr",
    title: "DPR / NUPRC Oil & Gas Industry Service Permit",
    category: "Procurement & Industry Regulatory",
    issuer: "Department of Petroleum Resources / NUPRC",
    description: "Statutory petroleum industry service permit for oil and gas facilities.",
    status: "Available on Request",
  },
  {
    id: "doc-nddc-completion",
    title: "NDDC Certificate of Practical Completion of Road Works",
    category: "Project Completion & Awards",
    issuer: "Niger Delta Development Commission",
    description: "Official handover and completion certificate for civil infrastructure in Delta State.",
    status: "Available on Request",
  },
  {
    id: "doc-nddc-award",
    title: "NDDC Contract Award Documentation",
    category: "Project Completion & Awards",
    issuer: "Niger Delta Development Commission",
    description: "Formal project commissioning and procurement award documentation.",
    status: "Available on Request",
  },
  {
    id: "doc-inec-award",
    title: "INEC Contract Award Documentation",
    category: "Project Completion & Awards",
    issuer: "Independent National Electoral Commission",
    description: "Public infrastructure contract award documentation for institutional facility works.",
    status: "Available on Request",
  },
  {
    id: "doc-greenville-agreement",
    title: "Greenville LNG Industrial Scaffolding Agreement",
    category: "Project Completion & Awards",
    issuer: "Greenville Oil & Gas Limited",
    description: "Industrial access, scaffolding supply, and erection contract agreement for LNG operations.",
    status: "Available on Request",
  },
  {
    id: "doc-dangote-agreement",
    title: "Dangote Refinery Manpower Subcontract Agreement",
    category: "Project Completion & Awards",
    issuer: "Chemie-Tech / Dangote Petroleum Refinery",
    description: "Specialized engineering manpower and certified craft labor supply subcontract.",
    status: "Available on Request",
  },
]
