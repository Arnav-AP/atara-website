import { createFileRoute, Link, Outlet, useMatches } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/site/page-hero";
import { Reveal } from "@/components/site/reveal";
import { Tilt } from "@/components/site/tilt";
import { events } from "@/lib/atara-content";
import { NextStepsNavigation } from "@/components/site/next-steps";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Fundraisers & Events — Atara" },
      { name: "description", content: "Every fundraiser and event Atara has hosted." },
      { property: "og:title", content: "Fundraisers & Events — Atara" },
      { property: "og:description", content: "Every fundraiser and event Atara has hosted." },
    ],
  }),
  component: EventsLayout,
});

function EventsLayout() {
  const matches = useMatches();
  const hasChild = matches.some((m) => m.routeId.startsWith("/events/$"));
  if (hasChild) return <Outlet />;
  return <EventsIndex />;
}

function EventsIndex() {
  return (
    <>
      <PageHero eyebrow="Fundraisers & events" title="Stages we've built" italic="for young voices.">
        <p className="text-lg leading-relaxed text-forest/80">
          From drawing competitions to health camps, every event ATARA organises is a fundraiser and a platform — a chance for students to discover their talents, build leadership skills, and contribute to causes that truly matter.
        </p>
      </PageHero>

      <section className="bg-cream pb-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="space-y-6">
            {events.map((e, i) => (
                <Reveal key={e.slug} delay={i * 0.08}>
                    <Tilt className="w-full">
                      <Link to="/events/$slug" params={{ slug: e.slug }} className="group grid overflow-hidden rounded-3xl border border-forest/10 bg-card md:grid-cols-[1.3fr_1fr]">
                        <div className="relative aspect-[16/10] overflow-hidden md:aspect-auto">
                          <img src={e.image} alt="" loading="lazy" className="h-full w-full object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-110" />
                        </div>
                        <div className="flex flex-col justify-between p-8 lg:p-12">
                          <div>
                            <p className="text-xs uppercase tracking-[0.3em] text-leaf">{e.kicker} · {e.date}</p>
                            <h3 className="mt-3 font-display text-3xl font-light text-forest md:text-4xl">{e.title}</h3>
                            <p className="mt-4 text-sm leading-relaxed text-forest/70">{e.summary}</p>
                          </div>
                          <div className="mt-8 flex items-end justify-between">
                            <div className="text-xs uppercase tracking-[0.25em] text-forest/60">
                              <p>{e.participants}+ participants</p>
                              <p className="mt-1">For {e.beneficiaries}</p>
                            </div>
                            <ArrowUpRight className="h-6 w-6 text-forest transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
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
        subtitle="See the impact of our events and the causes they support."
        steps={[
          {
            href: "/team",
            label: "Meet the Team",
            description: "The students behind every fundraiser, event, and partnership.",
          },
          {
            href: "/impact",
            label: "Our Impact",
            description: "The measurable outcomes from every fundraiser and event.",
          },
          {
            href: "/causes",
            label: "Our Causes",
            description: "The five causes your participation helps support.",
          },
        ]}
      />
    </>
  );
}