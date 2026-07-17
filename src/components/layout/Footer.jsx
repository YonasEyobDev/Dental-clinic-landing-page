import { Facebook, Instagram, TikTok } from "@/components/icons/social"
import { MapPin, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--brand-ink)] text-[var(--brand-cream)]">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <p className="font-display text-xl font-semibold">
              Lewi<span className="text-[var(--brand-coral)]">Dental</span>
            </p>
            <p className="mt-3 text-sm text-[var(--brand-cream)]/70">
              Speciality dental care in Bole, Addis Ababa.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-[var(--brand-cream)]/60">
              Navigate
            </p>
            <ul className="mt-3 space-y-2 text-sm">
              <li><a href="#services" className="hover:text-[var(--brand-coral)]">Services</a></li>
              <li><a href="#about" className="hover:text-[var(--brand-coral)]">About</a></li>
              <li><a href="#doctors" className="hover:text-[var(--brand-coral)]">Doctor</a></li>
              <li><a href="#contact" className="hover:text-[var(--brand-coral)]">Contact</a></li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-[var(--brand-cream)]/60">
              Visit
            </p>
            <ul className="mt-3 space-y-2 text-sm text-[var(--brand-cream)]/80">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                <span>Bole, Shewa Dabo, Getu Commercial Centre, 3rd floor</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0" />
                <span>0910 363238 / 0975 852323</span>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-[var(--brand-cream)]/60">
              Follow
            </p>
            <div className="mt-3 flex gap-4">
              <a
                href="https://www.facebook.com/Lewidentalclinic"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="hover:text-[var(--brand-coral)]"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/dr.euellewispecialitydental"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="hover:text-[var(--brand-coral)]"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.tiktok.com/@lewispecialitydental"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="hover:text-[var(--brand-coral)]"
              >
                <TikTok className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-[var(--brand-cream)]/10 pt-6 text-xs text-[var(--brand-cream)]/50">
          © {new Date().getFullYear()} Lewi Speciality Dental Clinic. Built for showcase purposes.
        </div>
      </div>
    </footer>
  )
}
