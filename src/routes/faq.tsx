import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/page-hero";
import { Reveal } from "@/components/site/reveal";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { NextStepsNavigation } from "@/components/site/next-steps";

const faqs = [
  { q: "Who runs Atara?", a: "Atara is founded and led entirely by students of Fountainhead Wockhardt Global School, Aurangabad — starting with Grade 9. Teachers advise; students decide." },
  { q: "Where does the money go?", a: "Every rupee is tagged to a specific event, campaign or partner NGO. You can see the breakdown on our Impact page." },
  { q: "Can my school partner with Atara?", a: "Yes — reach out via the Contact page. We're actively looking to open chapters at other schools." },
  { q: "Can I volunteer if I'm not a student?", a: "Absolutely. Send us a note through Join Atara and we'll match you with a role." },
  { q: "How do I sponsor an event?", a: "Email atara.wgs@gmail.com with your organisation and interest, and we'll share our sponsorship deck." },
];

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Atara" },
      { name: "description", content: "Frequently asked questions about Atara." },
      { property: "og:title", content: "FAQ — Atara" },
      { property: "og:description", content: "Frequently asked questions about Atara." },
    ],
  }),
  component: () => (
    <>
      <PageHero eyebrow="Frequently asked" title="Ask us" italic="anything." />
      <section className="bg-cream pb-32">
        <div className="mx-auto max-w-3xl px-6 lg:px-10">
          <Reveal>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((f, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-forest/15">
                  <AccordionTrigger className="py-6 text-left font-display text-xl text-forest hover:no-underline">{f.q}</AccordionTrigger>
                  <AccordionContent className="text-base leading-relaxed text-forest/75">{f.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </section>

      <NextStepsNavigation
        title="Where to next?"
        subtitle="Still have questions? Explore our story or get in touch."
        steps={[
          {
            href: "/about",
            label: "About Atara",
            description: "Our founding story, mission, vision, and values.",
          },
          {
            href: "/contact",
            label: "Contact Us",
            description: "Send us a note — we reply to every message.",
          },
          {
            href: "/donate",
            label: "Support Us",
            description: "Fuel the next initiative with a direct donation.",
          },
        ]}
      />
    </>
  ),
});