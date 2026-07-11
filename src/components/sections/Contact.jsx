import { MapPin, Phone, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export default function Contact() {
  function handleSubmit(e) {
    e.preventDefault()
    // Showcase only — wire this up to your booking backend/email service.
    alert("Thanks! This form is a UI demo and isn't connected to a backend yet.")
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
            Fill out the form and our front desk will confirm a time within
            one business day.
          </p>

          <div className="mt-8 space-y-5">
            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-5 w-5 text-[var(--brand-teal)]" />
              <span className="text-sm text-[var(--brand-ink)]/80">
                123 Bole Road, Addis Ababa, Ethiopia
              </span>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="mt-0.5 h-5 w-5 text-[var(--brand-teal)]" />
              <span className="text-sm text-[var(--brand-ink)]/80">+251 11 234 5678</span>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="mt-0.5 h-5 w-5 text-[var(--brand-teal)]" />
              <span className="text-sm text-[var(--brand-ink)]/80">
                Mon–Fri 8am–6pm · Sat 9am–3pm
              </span>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5 rounded-2xl bg-[var(--brand-mint-soft)] p-6">
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="name">Full name</Label>
              <Input id="name" placeholder="Jane Doe" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone</Label>
              <Input id="phone" type="tel" placeholder="+251 9xx xxx xxx" required />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="jane@email.com" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">What do you need help with?</Label>
            <Textarea id="message" placeholder="e.g. Routine checkup, tooth pain..." rows={4} />
          </div>
          <Button
            type="submit"
            className="w-full bg-[var(--brand-coral)] hover:bg-[var(--brand-coral-dark)]"
          >
            Request Appointment
          </Button>
        </form>
      </div>
    </section>
  )
}
