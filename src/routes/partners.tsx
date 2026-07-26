import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/page-hero";
import { Reveal } from "@/components/site/reveal";
import { NextStepsNavigation } from "@/components/site/next-steps";

const partners = [
  { name: "APLA Animal Welfare NGO", role: "Animal welfare partner — water stations for stray animals across the city." },
  { name: "SSBB NGO", role: "Healthcare partner — supporting Thalassemia patients and their families." },
  { name: "Zilla Parishad School, Gokulwadi", role: "Education partner — recipient of digital writing tablets." },
  { name: "Fountainhead Wockhardt Global School", role: "Home school — where Atara was founded through IB Service as Action." },
];

export const Route = createFileRoute("/partners")({
  head: () => ({
    meta: [
      { title: "Partners & Collaborators — Atara" },
      { name: "description", content: "The NGOs, schools and organisations that make Atara's work possible." },
      { property: "og:title", content: "Partners & Collaborators — Atara" },
      { property: "og:description", content: "The NGOs, schools and organisations that make Atara's work possible." },
    ],
  }),
  component: () => (
    <>
      <PageHero eyebrow="Partners & collaborators" title="We do nothing" italic="alone." />
      <section className="bg-cream pb-32">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-10">
          <div className="grid gap-6 md:grid-cols-2">
            {partners.map((p, i) => (
              <Reveal key={p.name} delay={i * 0.05} className="rounded-3xl border border-forest/10 bg-card p-8">
                <h3 className="font-display text-2xl font-medium text-forest">{p.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-forest/70">{p.role}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <NextStepsNavigation
        title="Where to next?"
        subtitle="See the causes we champion together and the events we host."
        steps={[
          {
            href: "/causes",
            label: "Our Causes",
            description: "Education, animal welfare, healthcare, awareness, community — five threads, one root.",
          },
          {
            href: "/events",
            label: "Our Events",
            description: "Fundraisers and competitions we co-host with our partners.",
          },
          {
            href: "/impact",
            label: "Our Impact",
            description: "Transparent numbers behind every partnership and initiative.",
          },
        ]}
      />
    </>
  ),
});