export type CertStatus = "confirmed" | "pending-renewal" | "unverified"

export type Certification = {
  id: string
  name: string
  issuer: string
  reference?: string
  status: CertStatus
  /** Shown in the UI for non-confirmed certs instead of claiming currency */
  statusNote: string
}

/**
 * Compliance data sourced strictly from docs/CONTENT.md.
 *
 * Rules applied:
 * - CAC RC 429220: confirmed — display as current.
 * - FIRS, VAT, ITF, NSITF, NPC, BPP: expired (2018/2019) — status "pending-renewal".
 * - COREN / NSE: individual engineer registrations — NOT listed (company cert only).
 * - NCC, DPR, NAPIMS/NNPC NJQS: unverified — status "unverified".
 * - ISO: not mentioned anywhere in source — NOT listed.
 */
export const certifications: Certification[] = [
  {
    id: "cac",
    name: "CAC Registration",
    issuer: "Corporate Affairs Commission, Nigeria",
    reference: "RC 429220",
    status: "confirmed",
    statusNote: "Confirmed",
  },
  {
    id: "firs",
    name: "Tax Clearance Certificate",
    issuer: "Federal Inland Revenue Service (FIRS)",
    status: "pending-renewal",
    statusNote: "TODO: renewed certificate required — not currently displayed.",
  },
  {
    id: "vat",
    name: "VAT Registration",
    issuer: "Federal Inland Revenue Service (FIRS)",
    status: "pending-renewal",
    statusNote: "TODO: renewed certificate required — not currently displayed.",
  },
  {
    id: "itf",
    name: "ITF Registration",
    issuer: "Industrial Training Fund (ITF)",
    status: "pending-renewal",
    statusNote: "TODO: renewed certificate required — not currently displayed.",
  },
  {
    id: "nsitf",
    name: "NSITF Compliance Certificate",
    issuer: "Nigeria Social Insurance Trust Fund (NSITF)",
    status: "pending-renewal",
    statusNote: "TODO: renewed certificate required — not currently displayed.",
  },
  {
    id: "npc",
    name: "NPC Registration",
    issuer: "National Population Commission (NPC)",
    status: "pending-renewal",
    statusNote: "TODO: renewed certificate required — not currently displayed.",
  },
  {
    id: "bpp",
    name: "BPP Registration",
    issuer: "Bureau of Public Procurement (BPP)",
    status: "pending-renewal",
    statusNote: "TODO: renewed certificate required — not currently displayed.",
  },
  {
    id: "ncc",
    name: "NCC Registration",
    issuer: "Nigerian Communications Commission (NCC)",
    status: "unverified",
    statusNote: "TODO: unverified — awaiting documentation.",
  },
  {
    id: "dpr",
    name: "DPR Registration",
    issuer: "Department of Petroleum Resources (DPR)",
    status: "unverified",
    statusNote: "TODO: unverified — awaiting documentation.",
  },
  {
    id: "napims",
    name: "NAPIMS / NNPC NJQS",
    issuer: "NAPIMS / NNPC",
    status: "unverified",
    statusNote: "TODO: unverified — awaiting documentation.",
  },
]

export const confirmedCerts = certifications.filter((c) => c.status === "confirmed")
