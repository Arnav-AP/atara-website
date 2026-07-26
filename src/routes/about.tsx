import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/page-hero";
import { Reveal } from "@/components/site/reveal";
import { NextStepsNavigation } from "@/components/site/next-steps";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Atara — A student-led social impact initiative" },
      { name: "description", content: "How Atara was founded, our mission, vision, and values." },
      { property: "og:title", content: "About Atara" },
      { property: "og:description", content: "How Atara was founded, our mission, vision, and values." },
    ],
  }),
  component: AboutPage,
});

const values = [
  { title: "Empathy first", body: "We start every project by listening — to teachers, NGOs, families, and animals with nobody to speak for them." },
  { title: "Student-led", body: "Atara is planned, hosted and reported by students. Adults advise; we lead." },
  { title: "Traceable impact", body: "Every rupee, every hour and every donation is tied to a specific school, NGO or beneficiary." },
  { title: "Creativity as service", body: "Drawing, speaking, writing, filming — we treat creative expression as our best tool for social change." },
];

function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About Atara" title="A quiet revolution" italic="of young changemakers.">
        <p className="text-lg leading-relaxed text-forest/80">
          ATARA is a student-led social impact initiative as part of the IB Service as Action (SA) Programme at Fountainhead Wockhardt Global School. Established with the vision of transforming student talent into meaningful social impact, ATARA creates opportunities for young people to showcase their abilities, build confidence, develop leadership skills, strengthen collaboration, and contribute positively to society through purpose driven events and initiatives.
        </p>
      </PageHero>

      <section className="bg-cream pb-24 lg:pb-32">
        <div className="mx-auto max-w-4xl px-6 lg:px-10">
          <div className="space-y-16">

            <Reveal>
              <h2 className="font-display text-4xl font-light text-forest md:text-5xl">Who we are</h2>
              <p className="mt-5 text-lg leading-relaxed text-forest/80">
                At the heart of ATARA is the belief that education extends beyond the classroom and that every student has the potential to become a changemaker. Through creative competitions, community events, and fundraising initiatives, ATARA empowers students to use their talents to support meaningful causes while fostering empathy, responsibility, and a spirit of service.
              </p>
              <p className="mt-5 text-lg leading-relaxed text-forest/80">
                The funds raised through ATARA's initiatives are channelled towards projects that create a lasting impact within the community, including educational support, charitable donations, and collaborations with local organisations. Every event reflects our commitment to inspiring young leaders to combine creativity with compassion and transform ideas into meaningful action.
              </p>
              <p className="mt-5 text-lg leading-relaxed text-forest/80">
                More than an initiative, ATARA is a movement that encourages students to lead with purpose, serve with empathy, and create a legacy of positive change one initiative at a time.
              </p>
            </Reveal>

            <Reveal>
              <h2 className="font-display text-4xl font-light text-forest md:text-5xl">Our vision</h2>
              <p className="mt-5 text-lg leading-relaxed text-forest/80">
                At ATARA, our vision is to build a more compassionate, socially conscious, and empowered community by inspiring young individuals to become active changemakers. We believe that every student has the ability to create meaningful impact, and that leadership is best demonstrated through service, empathy, and purposeful action. By providing platforms that combine creativity, collaboration, and community engagement, we encourage students to look beyond themselves and contribute towards causes that truly matter.
              </p>
            </Reveal>

            <Reveal>
              <h2 className="font-display text-4xl font-light text-forest md:text-5xl">Our mission</h2>
              <p className="mt-5 text-lg leading-relaxed text-forest/80">
                Our mission extends beyond fundraising. Through every initiative, we strive to raise awareness about the remarkable work carried out by non-governmental organisations (NGOs), the challenges faced by underprivileged communities, and the importance of animal welfare and environmental responsibility. By connecting students with real-world social issues, we aim to cultivate empathy, inspire informed action, and foster a lifelong commitment to serving society.
              </p>
              <p className="mt-5 text-lg leading-relaxed text-forest/80">
                We envision a future where young people recognise that meaningful change begins with small, purposeful actions. Whether through participating in an event, volunteering their time, supporting a cause, or inspiring others to get involved, every contribution has the potential to create a lasting ripple effect. At ATARA, we believe that when compassion is transformed into action, communities grow stronger, lives are changed, and a better future becomes possible for everyone.
              </p>
            </Reveal>

            <Reveal>
              <h2 className="font-display text-4xl font-light text-forest md:text-5xl">Values we lead with</h2>
              <div className="mt-8 grid gap-px overflow-hidden rounded-3xl border border-forest/10 md:grid-cols-2">
                {values.map((v) => (
                  <div key={v.title} className="bg-card p-8">
                    <h3 className="font-display text-2xl font-medium text-forest">{v.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-forest/75">{v.body}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal>
              <h2 className="font-display text-4xl font-light text-forest md:text-5xl">Founder's Message</h2>
              <div className="mt-6 rounded-3xl border border-forest/10 bg-card p-8 md:p-12">
                <p className="text-lg leading-relaxed text-forest/80">
                  ATARA was never created to be just another student initiative.
                </p>
                <p className="mt-4 text-lg leading-relaxed text-forest/80">
                  It was founded on the belief that leadership begins with compassion, that service creates lasting impact, and that young people have the power to shape the communities around them.
                </p>
                <p className="mt-4 text-lg leading-relaxed text-forest/80">
                  Every initiative, every event, and every act of service reflects our commitment to creating opportunities where students don't just learn about change — they become the reason it happens.
                </p>
                <p className="mt-4 text-lg leading-relaxed text-forest/80">
                  ATARA is a reminder that meaningful impact is not defined by age, experience, or resources. It is defined by the courage to take the first step, the determination to keep moving forward, and the willingness to serve others with purpose.
                </p>
                <p className="mt-4 text-lg leading-relaxed text-forest/80">
                  May every person who walks through these walls be inspired to dream bigger, lead with integrity, and leave the world better than they found it.
                </p>
                <div className="mt-8 border-t border-forest/10 pt-6">
                  <p className="font-display text-xl italic text-leaf">
                    "Impact begins with one decision to care."
                  </p>
                  <p className="mt-3 text-sm text-forest/70">
                    — Aditya Sawargonkar<br />
                    Founder, ATARA
                  </p>
                </div>
              </div>
            </Reveal>

          </div>
        </div>
      </section>

      <NextStepsNavigation
        title="Where to next?"
        subtitle="Keep exploring Atara's work and community."
        steps={[
          {
            href: "/impact",
            label: "Our Impact",
            description: "See every rupee, event, and partnership we've stewarded since day one.",
          },
          {
            href: "/causes",
            label: "Five Causes",
            description: "Education, animal welfare, healthcare, awareness, community — dive deeper.",
          },
          {
            href: "/team",
            label: "Meet the Team",
            description: "The students behind every initiative, event, and partnership.",
          },
        ]}
      />
    </>
  );
}