import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Instagram } from "@/components/icons/social"
import { ArrowRight } from "lucide-react"
import { doctors } from "@/data/doctors"

export default function Doctors() {
  const doc = doctors[0]

  return (
    <section id="doctors" className="mx-auto max-w-6xl px-6 py-24">
      <div className="mx-auto max-w-xl text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-[var(--brand-coral)]">
          Meet the doctor
        </p>
        <h2 className="mt-2 font-display text-3xl font-semibold text-[var(--brand-ink)] md:text-4xl">
          The dentist behind every smile
        </h2>
      </div>

      <div className="mx-auto mt-14 flex max-w-2xl flex-col items-center gap-6 rounded-[2rem] bg-[var(--brand-mint)] p-10 text-center">
        <Avatar className="h-28 w-28 border-4 border-white">
          <AvatarImage src={doc.photo} alt={doc.name} className="object-cover" />
          <AvatarFallback className="bg-[var(--brand-ink)] text-lg font-semibold text-white">
            {doc.initials}
          </AvatarFallback>
        </Avatar>

        <div>
          <h3 className="font-display text-2xl font-semibold text-[var(--brand-ink)]">
            {doc.name}
          </h3>
          <p className="mt-1 text-sm font-medium text-[var(--brand-coral)]">{doc.role}</p>
          <p className="mt-2 max-w-md text-sm text-[var(--brand-ink)]/70">{doc.focus}</p>
        </div>

        <Button
          render={
            <a
              href="https://www.instagram.com/dr.euellewispecialitydental"
              target="_blank"
              rel="noopener noreferrer"
            />
          }
          nativeButton={false}
          variant="outline"
          className="rounded-full border-[var(--brand-ink)] text-[var(--brand-ink)] hover:bg-white"
        >
          <Instagram className="h-4 w-4" />
          See more smile transformations <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </section>
  )
}
