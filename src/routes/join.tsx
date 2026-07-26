import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/page-hero";
import { Reveal } from "@/components/site/reveal";
import { NextStepsNavigation } from "@/components/site/next-steps";

export const Route = createFileRoute("/join")({
  head: () => ({
    meta: [
      { title: "Join Atara" },
      { name: "description", content: "Become a volunteer, collaborator or student leader with Atara." },
      { property: "og:title", content: "Join Atara" },
      { property: "og:description", content: "Become a volunteer, collaborator or student leader with Atara." },
    ],
  }),
  component: () => (
    <>
      <PageHero eyebrow="Join Atara" title="Bring your energy," italic="borrow ours." />
      <section className="bg-cream pb-32">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-10">
          <Reveal>
            <p className="text-lg leading-relaxed text-forest/80">
              Volunteer sign-ups, chapter applications and student leader roles open soon. Meanwhile, drop us a line and we'll get you into the next onboarding cohort.
            </p>
            <a href="mailto:atara.wgs@gmail.com" className="mt-8 inline-flex items-center gap-2 rounded-full bg-forest px-6 py-3 text-sm font-medium text-cream hover:bg-ink">
              Email atara.wgs@gmail.com →
            </a>
          </Reveal>
        </div>
      </section>

      <NextStepsNavigation
        title="Where to next?"
        subtitle="Get in touch or learn more about who we are."
        steps={[
          {
            href: "/contact",
            label: "Contact Us",
            description: "Send us a message — we'll match you with the right role.",
          },
          {
            href: "/about",
            label: "About Atara",
            description: "Our story, mission, vision, and values before you join.",
          },
          {
            href: "/team",
            label: "Meet the Team",
            description: "The students you'd be working alongside.",
          },
        ]}
      />
    </>
  ),
});