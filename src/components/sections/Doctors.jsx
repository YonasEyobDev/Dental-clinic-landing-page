import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { doctors } from "@/data/doctors"

export default function Doctors() {
  return (
    <section id="doctors" className="mx-auto max-w-6xl px-6 py-24">
      <div className="mx-auto max-w-xl text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-[var(--brand-coral)]">
          Our team
        </p>
        <h2 className="mt-2 font-display text-3xl font-semibold text-[var(--brand-ink)] md:text-4xl">
          Meet your dentists
        </h2>
        <p className="mt-3 text-[var(--brand-ink)]/70">
          Licensed specialists, each focused on a different part of your care.
        </p>
      </div>

      <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {doctors.map((doc) => (
          <div key={doc.id} className="text-center">
            <Avatar className="mx-auto h-24 w-24 border-4 border-[var(--brand-mint)]">
              <AvatarImage src={doc.photo} alt={doc.name} className="object-cover" />
              <AvatarFallback className="bg-[var(--brand-ink)] text-lg font-semibold text-white">
                {doc.initials}
              </AvatarFallback>
            </Avatar>
            <h3 className="mt-4 font-display text-lg font-semibold text-[var(--brand-ink)]">
              {doc.name}
            </h3>
            <p className="text-sm font-medium text-[var(--brand-coral)]">{doc.role}</p>
            <p className="mt-1 text-sm text-[var(--brand-ink)]/60">{doc.focus}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
