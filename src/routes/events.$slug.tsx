import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { Reveal } from "@/components/site/reveal";
import { Magnetic } from "@/components/site/magnetic";
import { events } from "@/lib/atara-content";
import { NextStepsNavigation } from "@/components/site/next-steps";

export const Route = createFileRoute("/events/$slug")({
  loader: ({ params }) => {
    const event = events.find((e) => e.slug === params.slug);
    if (!event) throw notFound();
    return { event };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.event.title} — Atara` },
          { name: "description", content: loaderData.event.summary },
          { property: "og:title", content: `${loaderData.event.title} — Atara` },
          { property: "og:description", content: loaderData.event.summary },
        ]
      : [{ title: "Event — Atara" }, { name: "robots", content: "noindex" }],
  }),
  component: EventDetail,
  notFoundComponent: () => (
    <div className="pt-40 pb-24 text-center">
      <h1 className="font-display text-4xl">Event not found</h1>
      <Link to="/events" className="mt-6 inline-block text-forest underline">All events</Link>
    </div>
  ),
  errorComponent: () => (
    <div className="pt-40 pb-24 text-center">
      <h1 className="font-display text-4xl">Something went wrong</h1>
    </div>
  ),
});

function EventDetail() {
  const { event } = Route.useLoaderData();
  return (
    <>
      <section className="relative overflow-hidden bg-ink pt-40 pb-24 text-cream lg:pt-52">
        <div className="absolute inset-0 opacity-40">
          <img src={event.image} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/40" />
        </div>
        <div className="relative mx-auto max-w-[1200px] px-6 lg:px-10">
          <Link to="/events" className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-cream/70 hover:text-leaf">
            <ArrowLeft className="h-3 w-3" /> All events
          </Link>
          <p className="mt-8 text-xs uppercase tracking-[0.4em] text-leaf">{event.kicker} · {event.date}</p>
          <h1 className="mt-4 font-display text-5xl font-light leading-[1.05] md:text-7xl text-balance">{event.title}</h1>
        </div>
      </section>

      <section className="bg-cream py-24">
        <div className="mx-auto grid max-w-[1200px] gap-16 px-6 lg:grid-cols-[2fr_1fr] lg:px-10">
          <Reveal className="space-y-8">
            <div>
              <h2 className="font-display text-3xl font-light text-forest">What happened</h2>
              <p className="mt-4 text-lg leading-relaxed text-forest/80">{event.summary}</p>
            </div>
            <div>
              <h2 className="font-display text-3xl font-light text-forest">The outcome</h2>
              <p className="mt-4 text-lg leading-relaxed text-forest/80">{event.outcome}</p>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <aside className="sticky top-32 space-y-6 rounded-3xl border border-forest/10 bg-card p-8">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-forest/50">Participants</p>
                <p className="mt-2 font-display text-4xl text-forest">{event.participants}+</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-forest/50">Beneficiaries</p>
                <p className="mt-2 text-lg text-forest">{event.beneficiaries}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-forest/50">Year</p>
                <p className="mt-2 text-lg text-forest">{event.date}</p>
              </div>
              <Magnetic strength={0.4}>
                <Link to="/donate" className="mt-4 inline-flex items-center gap-2 rounded-full bg-forest px-5 py-3 text-sm font-medium text-cream hover:bg-ink">
                  Support the next one →
                </Link>
              </Magnetic>
            </aside>
          </Reveal>
        </div>
      </section>

      <NextStepsNavigation
        title="Where to next?"
        subtitle="Meet the team behind events and explore our causes."
        steps={[
          {
            href: "/team",
            label: "Meet the Team",
            description: "The students who organise every fundraiser and event.",
          },
          {
            href: "/causes",
            label: "Our Causes",
            description: "The five causes every event supports.",
          },
          {
            href: "/impact",
            label: "Our Impact",
            description: "See the measurable outcomes from past events.",
          },
        ]}
      />
    </>
  );
}