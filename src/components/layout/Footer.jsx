import { Facebook, Instagram, Twitter } from "@/components/icons/social"

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--brand-ink)] text-[var(--brand-cream)]">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <p className="font-display text-xl font-semibold">
              Bright<span className="text-[var(--brand-coral)]">smile</span>
            </p>
            <p className="mt-3 text-sm text-[var(--brand-cream)]/70">
              Modern dental care, close to home.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-[var(--brand-cream)]/60">
              Navigate
            </p>
            <ul className="mt-3 space-y-2 text-sm">
              <li><a href="#services" className="hover:text-[var(--brand-coral)]">Services</a></li>
              <li><a href="#about" className="hover:text-[var(--brand-coral)]">About</a></li>
              <li><a href="#doctors" className="hover:text-[var(--brand-coral)]">Doctors</a></li>
              <li><a href="#contact" className="hover:text-[var(--brand-coral)]">Contact</a></li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-[var(--brand-cream)]/60">
              Hours
            </p>
            <ul className="mt-3 space-y-2 text-sm text-[var(--brand-cream)]/80">
              <li>Mon – Fri: 8am – 6pm</li>
              <li>Saturday: 9am – 3pm</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-[var(--brand-cream)]/60">
              Follow
            </p>
            <div className="mt-3 flex gap-4">
              <a href="#" aria-label="Facebook" className="hover:text-[var(--brand-coral)]">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Instagram" className="hover:text-[var(--brand-coral)]">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Twitter" className="hover:text-[var(--brand-coral)]">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-[var(--brand-cream)]/10 pt-6 text-xs text-[var(--brand-cream)]/50">
          © {new Date().getFullYear()} Brightsmile Dental Clinic. Built for showcase purposes.
        </div>
      </div>
    </footer>
  )
}
