import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ArrowRight } from "lucide-react"
import { services } from "@/data/services"

const avatarPatients = [
  "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=64&h=64&fit=crop&crop=faces&auto=format&q=60",
  "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=64&h=64&fit=crop&crop=faces&auto=format&q=60",
]

export default function Services() {
  return (
    <section id="services" className="bg-[var(--brand-mint)]">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-10 md:grid-cols-[minmax(0,1fr)_2fr]">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex -space-x-3">
                {avatarPatients.map((src, i) => (
                  <Avatar key={i} className="h-9 w-9 border-2 border-[var(--brand-mint)]">
                    <AvatarImage src={src} alt="Happy patient" />
                    <AvatarFallback>P</AvatarFallback>
                  </Avatar>
                ))}
              </div>
              <div className="leading-tight">
                <p className="text-sm font-semibold text-[var(--brand-ink)]">20k+</p>
                <p className="text-xs text-[var(--muted-foreground)]">Happy Client</p>
              </div>
            </div>

            <p className="mt-4 text-[15px] text-[var(--muted-foreground)]">
              Providing exceptional dental care to smiles everywhere.
            </p>

            <p className="mt-8 font-display text-lg text-[var(--brand-ink)]">
              See every way we can care for your smile
            </p>
            <Button
              asChild
              className="mt-4 rounded-full bg-[var(--brand-ink)] px-5 text-white hover:bg-[var(--brand-teal-light)]"
            >
              <a href="#contact">
                See All Services <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </Button>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {services.slice(0, 4).map(({ id, icon: Icon, title, description }) => (
              <Card key={id} className="border-none bg-white shadow-sm">
                <CardContent className="p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--brand-mint)] text-[var(--brand-ink)]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 font-display text-lg text-[var(--brand-ink)]">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm text-[var(--muted-foreground)]">
                    {description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
