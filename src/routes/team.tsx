import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/page-hero";
import { Reveal } from "@/components/site/reveal";
import { team } from "@/lib/atara-content";
import { NextStepsNavigation } from "@/components/site/next-steps";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Meet the Team — Atara" },
      { name: "description", content: "The students behind Atara." },
      { property: "og:title", content: "Meet the Team — Atara" },
      { property: "og:description", content: "The students behind Atara." },
    ],
  }),
  component: TeamPage,
});

function TeamPage() {
  return (
    <>
      <PageHero eyebrow="Meet the team" title="Young leaders," italic="wearing every hat.">
        <p className="text-lg leading-relaxed text-forest/80">
          ATARA is entirely student-planned, student-hosted and student-reported. Meet the people
          behind every event, initiative, and impact.
        </p>
      </PageHero>

      <section className="bg-cream pb-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {team.map((m, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <article
                  data-cursor-card
                  className="team-card group relative overflow-hidden rounded-3xl border border-forest/10 bg-card p-6"
                >
                  <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[1.5rem]">
                    <img
                      src={m.image}
                      alt={m.name}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
                    />
                  </div>
                  <h3 className="mt-6 font-display text-xl font-medium">
                    {m.name}
                  </h3>
                  <p className="mt-1 text-xs uppercase tracking-[0.25em] opacity-60">
                    {m.role}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <NextStepsNavigation
        title="Where to next?"
        subtitle="Get in touch or explore the causes we champion."
        steps={[
          {
            href: "/contact",
            label: "Contact Us",
            description: "Reach out — whether you're an NGO, sponsor, or student who wants in.",
          },
          {
            href: "/causes",
            label: "Five Causes",
            description: "Education, animal welfare, healthcare, awareness, community — dive deeper.",
          },
          {
            href: "/donate",
            label: "Support Us",
            description: "Scan the QR code or email us to fuel the next initiative.",
          },
        ]}
      />
    </>
  );
}