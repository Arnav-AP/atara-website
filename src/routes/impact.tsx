import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/page-hero";
import { Reveal } from "@/components/site/reveal";
import { Counter } from "@/components/site/counter";
import { stats, timeline, events } from "@/lib/atara-content";
import { NextStepsNavigation } from "@/components/site/next-steps";

export const Route = createFileRoute("/impact")({
  head: () => ({
    meta: [
      { title: "Our Impact — Atara" },
      {
        name: "description",
        content:
          "Every rupee, every event, every partnership Atara has stewarded — measured honestly.",
      },
      { property: "og:title", content: "Our Impact — Atara" },
      {
        property: "og:description",
        content: "Every rupee, every event, every partnership Atara has stewarded.",
      },
    ],
  }),
  component: ImpactPage,
});

function ImpactPage() {
  return (
    <>
      <PageHero eyebrow="Our impact" title="Small numbers," italic="honest numbers.">
        <p className="text-lg leading-relaxed text-forest/80">
          We're a young initiative — but every figure below is traceable to a specific event,
          donation or partner. Transparency is the currency of trust. From our first fundraiser
          to our latest community health camp, every milestone reflects our commitment to
          meaningful impact.
        </p>
      </PageHero>

      <section className="bg-cream pb-28">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.08}>
                <div
                  data-cursor-card
                  className="group rounded-3xl border border-forest/10 bg-card p-8 transition-colors duration-300 hover:bg-forest hover:text-cream data-[cursor-active=true]:bg-forest data-[cursor-active=true]:text-cream"
                >
                  <Counter
                    to={s.value}
                    prefix={s.prefix}
                    suffix={s.suffix}
                    className="block font-display text-6xl font-light text-forest transition-colors duration-300 group-hover:text-cream group-data-[cursor-active=true]:text-cream"
                  />
                  <p className="mt-5 text-sm leading-relaxed text-forest/70 transition-colors duration-300 group-hover:text-cream/75 group-data-[cursor-active=true]:text-cream/75">
                    {s.label}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink py-28 text-cream lg:py-36">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <Reveal className="mb-16">
            <p className="mb-3 text-xs uppercase tracking-[0.4em] text-cream/60">Timeline</p>
            <h2 className="font-display text-4xl font-light md:text-6xl">A short story, so far.</h2>
          </Reveal>

          <ol className="relative mx-auto max-w-4xl border-l border-cream/15 pl-8 md:pl-14">
            {timeline.map((t, i) => (
              <Reveal as="li" key={i} delay={i * 0.05} className="relative pb-14 last:pb-0">
                <span className="absolute -left-[42px] mt-2 flex h-4 w-4 items-center justify-center md:-left-[63px]">
                  <span className="absolute inset-0 rounded-full bg-leaf/30" />
                  <span className="h-2 w-2 rounded-full bg-leaf" />
                </span>
                <p className="text-xs uppercase tracking-[0.4em] text-leaf">{t.year}</p>
                <h3 className="mt-2 font-display text-2xl font-medium text-cream md:text-3xl">
                  {t.title}
                </h3>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-cream/70">{t.body}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <NextStepsNavigation
        title="Where to next?"
        subtitle="Explore what drives our numbers and who's behind them."
        steps={[
          {
            href: "/causes",
            label: "Five Causes",
            description: "The threads every number connects back to — education, animals, health, and more.",
          },
          {
            href: "/events",
            label: "Our Events",
            description: "Every fundraiser behind the stats — drawing, speaking, camps, and more.",
          },
          {
            href: "/team",
            label: "Meet the Team",
            description: "The students turning events into impact, one initiative at a time.",
          },
        ]}
      />
    </>
  );
}
