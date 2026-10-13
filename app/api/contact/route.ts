import { NextResponse } from "next/server"
import { z } from "zod"
import { Resend } from "resend"

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  company: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
  /** Honeypot — must be empty; bots fill it */
  _hp: z.string().max(0, "Bot detected"),
})

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const parsed = schema.safeParse(body)

    if (!parsed.success) {
      const firstError = parsed.error.errors[0]?.message ?? "Invalid request"
      return NextResponse.json({ error: firstError }, { status: 400 })
    }

    const { name, email, company, message } = parsed.data

    const apiKey = process.env.RESEND_API_KEY
    const toEmail = process.env.CONTACT_TO_EMAIL

    if (!apiKey || !toEmail) {
      console.error("Missing RESEND_API_KEY or CONTACT_TO_EMAIL env vars")
      return NextResponse.json(
        { error: "Server configuration error. Please contact us directly." },
        { status: 500 }
      )
    }

    const resend = new Resend(apiKey)

    const { error } = await resend.emails.send({
      from: "Merab Engineering Website <noreply@merabengineering.com>",
      to: [toEmail],
      replyTo: email,
      subject: `New enquiry from ${name} — Merab Engineering website`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2B1A6E;">New Website Enquiry</h2>
          <table style="width:100%; border-collapse:collapse;">
            <tr>
              <td style="padding:8px; font-weight:bold; width:120px;">Name</td>
              <td style="padding:8px;">${escapeHtml(name)}</td>
            </tr>
            <tr style="background:#f5f5f5;">
              <td style="padding:8px; font-weight:bold;">Email</td>
              <td style="padding:8px;"><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td>
            </tr>
            ${
              company
                ? `<tr>
              <td style="padding:8px; font-weight:bold;">Company</td>
              <td style="padding:8px;">${escapeHtml(company)}</td>
            </tr>`
                : ""
            }
            <tr style="background:#f5f5f5;">
              <td style="padding:8px; font-weight:bold; vertical-align:top;">Message</td>
              <td style="padding:8px; white-space:pre-wrap;">${escapeHtml(message)}</td>
            </tr>
          </table>
          <hr style="margin:24px 0; border:none; border-top:1px solid #eee;" />
          <p style="color:#888; font-size:12px;">Sent via the Merab Engineering website contact form.</p>
        </div>
      `,
    })

    if (error) {
      console.error("Resend error:", error)
      return NextResponse.json(
        { error: "Failed to send message. Please try again or contact us directly." },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (err) {
    console.error("Contact route error:", err)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;")
}
