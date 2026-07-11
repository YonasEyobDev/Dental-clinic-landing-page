import { Star } from "lucide-react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import { testimonials } from "@/data/testimonials"

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-[var(--brand-teal)] py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-[var(--brand-coral)]">
            Testimonials
          </p>
          <h2 className="mt-2 font-display text-3xl font-semibold text-[var(--brand-cream)] md:text-4xl">
            What our patients say
          </h2>
        </div>

        <Carousel className="mt-14">
          <CarouselContent>
            {testimonials.map((t) => (
              <CarouselItem key={t.id} className="md:basis-1/2 lg:basis-1/3">
                <Card className="h-full border-none bg-[var(--brand-cream)]">
                  <CardContent className="flex h-full flex-col p-6">
                    <div className="flex gap-1 text-[var(--brand-coral)]">
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                    <p className="mt-4 flex-1 text-sm text-[var(--brand-ink)]/80">
                      "{t.quote}"
                    </p>
                    <div className="mt-5">
                      <p className="text-sm font-semibold text-[var(--brand-ink)]">
                        {t.name}
                      </p>
                      <p className="text-xs text-[var(--brand-ink)]/60">{t.role}</p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  )
}
