import { Button } from "@/components/ui/button"

export default function AppointmentCTA() {
  return (
    <section className="bg-[var(--brand-coral)]">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-16 text-center">
        <h2 className="font-display text-3xl font-semibold text-[var(--brand-cream)] md:text-4xl">
          Your next visit is one click away
        </h2>
        <p className="max-w-md text-[var(--brand-cream)]/90">
          Same-week openings available. No account required to book.
        </p>
        <Button
          asChild
          size="lg"
          className="bg-[var(--brand-ink)] text-[var(--brand-cream)] hover:bg-[var(--brand-ink)]/90"
        >
          <a href="#contact">Book Your Appointment</a>
        </Button>
      </div>
    </section>
  )
}
