import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-20">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <div className="overflow-hidden rounded-[2rem]">
          <img
            src="https://images.unsplash.com/photo-1642844819197-5f5f21b89ff8?w=900&h=1000&fit=crop&auto=format&q=70"
            alt="Dentist at work in a modern clinic"
            className="h-full w-full object-cover"
          />
        </div>

        <div>
          <h2 className="font-display text-3xl font-medium text-[var(--brand-ink)] md:text-4xl">
            Committed to Healthy Smiles
          </h2>
          <p className="mt-4 max-w-md text-[15px] text-[var(--muted-foreground)]">
            Dr. Euel Lewi Speciality Dental Clinic has helped thousands of
            patients — and hundreds of thousands online — achieve confident,
            natural-looking smiles through precise veneer work, restorative
            care, and honest treatment plans.
          </p>
          <Button
            asChild
            className="mt-6 rounded-full bg-[var(--brand-ink)] px-5 text-white hover:bg-[var(--brand-teal-light)]"
          >
            <a href="#contact">
              Learn More <ArrowRight className="ml-1 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
