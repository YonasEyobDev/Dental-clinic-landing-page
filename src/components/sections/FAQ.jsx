import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"
import { faqs } from "@/data/faqs"

export default function FAQ() {
  return (
    <section id="faq" className="mx-auto max-w-3xl px-6 py-24">
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-[var(--brand-coral)]">
          FAQ
        </p>
        <h2 className="mt-2 font-display text-3xl font-semibold text-[var(--brand-ink)] md:text-4xl">
          Common questions
        </h2>
      </div>

      <Accordion type="single" collapsible className="mt-10">
        {faqs.map((faq) => (
          <AccordionItem key={faq.id} value={faq.id} className="border-[var(--border)]">
            <AccordionTrigger className="text-left font-display text-base font-medium text-[var(--brand-ink)]">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-[var(--brand-ink)]/70">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  )
}
