import { useState } from "react"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"

const links = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Doctor", href: "#doctors" },
  { label: "Contact", href: "#contact" },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--brand-cream)]/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="font-display text-xl font-semibold text-[var(--brand-ink)]">
          Lewi<span className="text-[var(--brand-coral)]">Dental</span>
        </a>

        <nav className="hidden gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[var(--brand-ink)]/80 transition-colors hover:text-[var(--brand-coral)]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button asChild className="bg-[var(--brand-coral)] hover:bg-[var(--brand-coral-dark)]">
            <a href="#contact">Book Appointment</a>
          </Button>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-[var(--brand-cream)]">
            <SheetHeader>
              <SheetTitle className="font-display">Lewi Dental</SheetTitle>
            </SheetHeader>
            <nav className="mt-6 flex flex-col gap-5 px-4">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-base font-medium text-[var(--brand-ink)]"
                >
                  {link.label}
                </a>
              ))}
              <Button
                asChild
                className="mt-2 bg-[var(--brand-coral)] hover:bg-[var(--brand-coral-dark)]"
              >
                <a href="#contact" onClick={() => setOpen(false)}>
                  Book Appointment
                </a>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
