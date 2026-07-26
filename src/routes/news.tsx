import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Calendar } from "lucide-react";
import { PageHero } from "@/components/site/page-hero";
import { Reveal } from "@/components/site/reveal";
import { NextStepsNavigation } from "@/components/site/next-steps";
import { updates } from "@/lib/atara-content";

export const Route = createFileRoute("/news")({
  head: () => ({
    meta: [
      { title: "News & Updates — Atara" },
      { name: "description", content: "Campaign updates, milestones and behind-the-scenes stories from Atara." },
      { property: "og:title", content: "News & Updates — Atara" },
      { property: "og:description", content: "Campaign updates, milestones and behind-the-scenes stories from Atara." },
    ],
  }),
  component: NewsPage,
});

function NewsPage() {
  return (
    <>
      <PageHero eyebrow="News & updates" title="Fresh from" italic="the field.">
        <p className="text-lg leading-relaxed text-forest/80">
          Campaign updates, milestones, and behind-the-scenes stories from every initiative Atara runs.
        </p>
      </PageHero>

      {/* ── Campaign Update Cards ── */}
      <section className="bg-cream pb-24 lg:pb-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 perspective-scene">
            {updates.map((update, i) => (
              <Reveal key={update.title} delay={i * 0.06}>
                <Link
                  to={update.link}
                  target={update.link.startsWith("http") ? "_blank" : undefined}
                  rel={update.link.startsWith("http") ? "noreferrer" : undefined}
                  data-cursor="hover"
                  className="group relative block h-full overflow-hidden rounded-[2rem] border border-forest/10 bg-card transition-all duration-500 hover:border-leaf/50 hover:shadow-[0_20px_40px_-20px_rgb(4_97_90_/_0.15)] hover:-translate-y-1"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={update.image}
                      alt=""
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                    <div className="absolute left-4 top-4">
                      <span className="inline-block rounded-full bg-forest/80 px-3 py-1 text-[0.6rem] uppercase tracking-[0.2em] text-cream backdrop-blur-sm">
                        {update.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-xs text-forest/50">
                      <Calendar className="h-3 w-3" />
                      {update.date}
                    </div>
                    <h3 className="mt-3 font-display text-xl font-medium text-forest group-hover:text-leaf transition-colors">
                      {update.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-forest/70">
                      {update.body}
                    </p>
                    <div className="mt-4 flex items-center gap-1 text-xs font-medium text-leaf">
                      {update.cta || "Read more"} <ArrowUpRight className="h-3 w-3" />
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <NextStepsNavigation
        title="Where to next?"
        subtitle="Explore our events and causes while the newsroom launches."
        steps={[
          {
            href: "/events",
            label: "Our Events",
            description: "Drawing competitions, speaking meets, health camps — all upcoming and past.",
          },
          {
            href: "/causes",
            label: "Our Causes",
            description: "Five causes we champion — education, animals, health, awareness, community.",
          },
          {
            href: "/impact",
            label: "Our Impact",
            description: "Transparent numbers behind every initiative.",
          },
        ]}
      />
    </>
  );
}

