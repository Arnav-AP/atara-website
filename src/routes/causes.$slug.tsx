import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/site/reveal";
import { Magnetic } from "@/components/site/magnetic";
import { causes } from "@/lib/atara-content";
import { NextStepsNavigation } from "@/components/site/next-steps";

export const Route = createFileRoute("/causes/$slug")({
  loader: ({ params }) => {
    const cause = causes.find((c) => c.slug === params.slug);
    if (!cause) throw notFound();
    return { cause };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.cause.title} — Atara` },
          { name: "description", content: loaderData.cause.lead },
          { property: "og:title", content: `${loaderData.cause.title} — Atara` },
          { property: "og:description", content: loaderData.cause.lead },
        ]
      : [{ title: "Cause — Atara" }, { name: "robots", content: "noindex" }],
  }),
  component: CauseDetail,
  notFoundComponent: () => (
    <div className="pt-40 pb-24 text-center">
      <h1 className="font-display text-4xl">Cause not found</h1>
      <Link to="/causes" className="mt-6 inline-block text-forest underline">All causes</Link>
    </div>
  ),
  errorComponent: () => (
    <div className="pt-40 pb-24 text-center">
      <h1 className="font-display text-4xl">Something went wrong</h1>
    </div>
  ),
});

function CauseDetail() {
  const { cause } = Route.useLoaderData();
  const idx = causes.findIndex((c) => c.slug === cause.slug);
  const next = causes[(idx + 1) % causes.length];

  return (
    <>
      <section className="relative overflow-hidden bg-ink pt-40 pb-24 text-cream lg:pt-56 lg:pb-32">
        <div className="absolute inset-0 opacity-30">
          <img src={cause.image} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/30" />
        </div>
        <div className="relative mx-auto max-w-[1200px] px-6 lg:px-10">
          <Link to="/causes" className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-cream/70 hover:text-leaf">
            <ArrowLeft className="h-3 w-3" /> All causes
          </Link>
          <p className="mt-8 text-xs uppercase tracking-[0.4em] text-leaf">{cause.title}</p>
          <h1 className="mt-4 font-display text-5xl font-light leading-[1.05] md:text-7xl text-balance">{cause.lead}</h1>
        </div>
      </section>

      <section className="bg-cream py-28">
        <div className="mx-auto grid max-w-[1200px] gap-16 px-6 lg:grid-cols-[1fr_1fr] lg:px-10">
          <Reveal>
            <img src={cause.image} alt="" loading="lazy" className="w-full rounded-3xl object-cover" />
          </Reveal>
          <Reveal delay={0.15}>
            <h2 className="font-display text-3xl font-light text-forest md:text-4xl">What we're doing</h2>
            <p className="mt-5 text-lg leading-relaxed text-forest/80">{cause.body}</p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Magnetic strength={0.4}>
                <Link to="/donate" className="inline-flex items-center gap-2 rounded-full bg-forest px-6 py-3 text-sm font-medium text-cream hover:bg-ink">
                  Support this cause <ArrowUpRight className="h-4 w-4" />
                </Link>
              </Magnetic>
              <Link to="/events" className="inline-flex items-center gap-2 rounded-full border border-forest/30 px-6 py-3 text-sm font-medium text-forest hover:bg-forest/5">
                See related events
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-cream pb-32">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-10">
<Link to="/causes/$slug" params={{ slug: next.slug }} className="group flex items-center justify-between rounded-3xl border border-forest/15 p-8 transition-colors hover:bg-forest/5">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-forest/50">Next cause</p>
                <p className="mt-2 font-display text-3xl font-medium text-forest">{next.title}</p>
              </div>
              <ArrowUpRight className="h-6 w-6 text-forest transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
            </Link>
        </div>
      </section>

      <NextStepsNavigation
        title="Where to next?"
        subtitle="Explore events supporting this cause and see the impact."
        steps={[
          {
            href: "/events",
            label: "Our Events",
            description: "Fundraisers and competitions powering this cause.",
          },
          {
            href: "/impact",
            label: "Our Impact",
            description: "Transparent numbers behind every initiative.",
          },
          {
            href: "/team",
            label: "Meet the Team",
            description: "The students making this cause happen.",
          },
        ]}
      />
    </>
  );
}