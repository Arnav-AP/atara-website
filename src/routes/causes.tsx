import { createFileRoute, Link, Outlet, useMatches } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/site/page-hero";
import { Reveal } from "@/components/site/reveal";
import { Tilt } from "@/components/site/tilt";
import { causes } from "@/lib/atara-content";
import { NextStepsNavigation } from "@/components/site/next-steps";

export const Route = createFileRoute("/causes")({
  head: () => ({
    meta: [
      { title: "Causes We Support — Atara" },
      { name: "description", content: "Education, animal welfare, healthcare, awareness and community development — the causes Atara stewards." },
      { property: "og:title", content: "Causes We Support — Atara" },
      { property: "og:description", content: "Education, animal welfare, healthcare, awareness and community development." },
    ],
  }),
  component: CausesLayout,
});

function CausesLayout() {
  const matches = useMatches();
  const hasChild = matches.some((m) => m.routeId.startsWith("/causes/$"));
  if (hasChild) return <Outlet />;
  return <CausesIndex />;
}

function CausesIndex() {
  return (
    <>
      <PageHero eyebrow="Causes we support" title="Five threads," italic="one shared root.">
        <p className="text-lg leading-relaxed text-forest/80">
          Atara's work spans education, animal welfare, healthcare, awareness and community development — all rooted in the same belief that young people are ready to lead the causes they care about.
        </p>
      </PageHero>

      <section className="bg-cream pb-28">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="grid gap-8 md:grid-cols-2">
                {causes.map((c, i) => (
                  <Reveal key={c.slug} delay={i * 0.06}>
                    <Tilt className="w-full">
                      <Link to="/causes/$slug" params={{ slug: c.slug }} className="group relative block overflow-hidden rounded-3xl border border-forest/10 bg-card">
                        <div className="relative aspect-[16/10] overflow-hidden">
                          <img src={c.image} alt="" loading="lazy" className="h-full w-full object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-110" />
                          <div className={`absolute inset-0 bg-gradient-to-t ${c.tone} mix-blend-multiply`} />
                        </div>
                        <div className="p-8">
                          <p className="text-xs uppercase tracking-[0.3em] text-forest/50">{c.title}</p>
                          <h3 className="mt-3 font-display text-3xl font-medium text-forest">{c.lead}</h3>
                          <p className="mt-4 text-sm leading-relaxed text-forest/70">{c.body}</p>
                          <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-forest">
                            Read the story <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                          </div>
                        </div>
                      </Link>
                    </Tilt>
                  </Reveal>
                ))}
          </div>
        </div>
      </section>

      <NextStepsNavigation
        title="Where to next?"
        subtitle="Explore the impact behind each cause and the people making it happen."
        steps={[
          {
            href: "/events",
            label: "Our Events",
            description: "The fundraisers and competitions that power these five causes.",
          },
          {
            href: "/impact",
            label: "Our Impact",
            description: "See the numbers behind every cause — transparent and traceable.",
          },
          {
            href: "/team",
            label: "Meet the Team",
            description: "The students who turn each cause into real-world action.",
          },
        ]}
      />
    </>
  );
}