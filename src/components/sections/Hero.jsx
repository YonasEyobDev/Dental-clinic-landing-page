import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ArrowRight, Sparkles } from "lucide-react"

const avatarPatients = [
  "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=64&h=64&fit=crop&crop=faces&auto=format&q=60",
  "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=64&h=64&fit=crop&crop=faces&auto=format&q=60",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=64&h=64&fit=crop&crop=faces&auto=format&q=60",
]

export default function Hero() {
  return (
    <section className="bg-[var(--background)]">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 py-16 md:grid-cols-2 md:py-24">
        <div>
          <div className="flex items-center gap-3">
            <div className="flex -space-x-3">
              {avatarPatients.map((src, i) => (
                <Avatar key={i} className="h-9 w-9 border-2 border-white">
                  <AvatarImage src={src} alt="Happy patient" />
                  <AvatarFallback>P</AvatarFallback>
                </Avatar>
              ))}
            </div>
            <div className="leading-tight">
              <p className="text-sm font-semibold text-[var(--brand-ink)]">50k+</p>
              <p className="text-xs text-[var(--muted-foreground)]">Followers Trust Us</p>
            </div>
          </div>

          <h1 className="mt-6 font-display text-4xl font-medium leading-[1.1] text-[var(--brand-ink)] md:text-5xl">
            Transforming Smiles with Precision &amp; Care
          </h1>

          <p className="mt-5 max-w-md text-[15px] text-[var(--muted-foreground)]">
            From veneers to full smile makeovers, Dr. Euel Lewi brings the
            transformations you've seen on TikTok into a real clinic — right
            here in Bole, Addis Ababa.
          </p>

          <Button
            asChild
            size="lg"
            className="mt-7 rounded-full bg-[var(--brand-ink)] px-6 text-white hover:bg-[var(--brand-teal-light)]"
          >
            <a href="#contact">
              <span className="inline-flex items-center gap-1">
                Book Appointment <ArrowRight className="h-4 w-4" />
              </span>
            </a>
          </Button>
        </div>

        <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-[2rem] bg-[var(--brand-mint)]">
          <img
            src="https://images.unsplash.com/photo-1744723856265-866d19b9cf1a?w=900&h=1100&fit=crop&auto=format&q=70"
            alt="Dentist treating a patient"
            className="h-full w-full object-cover"
          />

          <a
            href="#contact"
            className="absolute right-4 top-4 flex items-center gap-1 rounded-full bg-white/95 px-4 py-2 text-sm font-medium text-[var(--brand-ink)] shadow-sm backdrop-blur transition hover:bg-white"
          >
            <span className="inline-flex items-center gap-1">
              Contact <ArrowRight className="h-3.5 w-3.5" />
            </span>
          </a>

          <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-2xl bg-white/95 p-2 pr-4 shadow-sm backdrop-blur">
            <Avatar className="h-10 w-10">
              <AvatarImage
                src="https://images.unsplash.com/photo-1581585004042-bca38021ce1e?w=100&h=100&fit=crop&crop=faces&auto=format&q=60"
                alt="Dr. Euel Lewi"
              />
              <AvatarFallback>EG</AvatarFallback>
            </Avatar>
            <p className="text-xs font-medium text-[var(--brand-ink)]">Dr. Euel Lewi</p>
          </div>

          <div className="absolute bottom-4 right-4 max-w-[9.5rem] rounded-2xl bg-[var(--brand-coral)] p-3 text-white shadow-sm">
            <p className="flex items-center gap-1 text-xs font-semibold">
              <Sparkles className="h-3.5 w-3.5" /> Modern Treatments
            </p>
            <p className="mt-1 text-[11px] leading-snug text-white/85">
              We use the latest technology for painless, effective care.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
