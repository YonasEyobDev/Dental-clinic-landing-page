import { useState } from "react"
import { MapPin, Phone, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

// Clinic's WhatsApp-reachable number, in international format (no + or spaces).
// Confirm with the clinic which of the two numbers is on WhatsApp before launch.
const CLINIC_WHATSAPP_NUMBER = "251975578988"

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" })

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.id]: e.target.value }))
  }

  function handleSubmit(e) {
    e.preventDefault()

    const text = [
      `New appointment request from the website:`,
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      form.message ? `Message: ${form.message}` : null,
    ]
      .filter(Boolean)
      .join("\n")

    const url = `https://wa.me/${CLINIC_WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`
    window.open(url, "_blank", "noopener,noreferrer")
  }

  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
      <div className="grid gap-12 md:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-[var(--brand-coral)]">
            Contact
          </p>
          <h2 className="mt-2 font-display text-3xl font-semibold text-[var(--brand-ink)] md:text-4xl">
            Book your appointment
          </h2>
          <p className="mt-3 text-[var(--brand-ink)]/70">
            Fill out the form and it'll open a WhatsApp message straight to
            our front desk — no account needed.
          </p>

          <div className="mt-8 space-y-5">
            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-5 w-5 text-[var(--brand-teal)]" />
              <span className="text-sm text-[var(--brand-ink)]/80">
                Bole, Shewa Dabo, Getu Commercial Centre, 3rd floor, Addis Ababa
              </span>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="mt-0.5 h-5 w-5 text-[var(--brand-teal)]" />
              <span className="text-sm text-[var(--brand-ink)]/80">
                0910 363238 / 0975 852323
              </span>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="mt-0.5 h-5 w-5 text-[var(--brand-teal)]" />
              <span className="text-sm text-[var(--brand-ink)]/80">
                {/* Placeholder hours — confirm real opening hours with the clinic */}
                Mon–Sat, appointment required
              </span>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5 rounded-2xl bg-[var(--brand-mint-soft)] p-6">
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="name">Full name</Label>
              <Input
                id="name"
                placeholder="Jane Doe"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="+251 9xx xxx xxx"
                value={form.phone}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">What do you need help with?</Label>
            <Textarea
              id="message"
              placeholder="e.g. Veneers consultation, teeth whitening..."
              rows={4}
              value={form.message}
              onChange={handleChange}
            />
          </div>
          <Button
            type="submit"
            className="w-full bg-[var(--brand-coral)] hover:bg-[var(--brand-coral-dark)]"
          >
            Request Appointment via WhatsApp
          </Button>
        </form>
      </div>
    </section>
  )
}
