import { createFileRoute } from "@tanstack/react-router";
import { Heart } from "lucide-react";
import { PageHero } from "@/components/site/page-hero";
import { Reveal } from "@/components/site/reveal";
import { NextStepsNavigation } from "@/components/site/next-steps";
import upiQr from "@/assets/images/UPI QR Code Image.jpeg";

export const Route = createFileRoute("/donate")({
  head: () => ({
    meta: [
      { title: "Support our mission — Atara" },
      { name: "description", content: "Every rupee goes toward a specific event, school, NGO or beneficiary." },
      { property: "og:title", content: "Support Atara" },
      { property: "og:description", content: "Every rupee goes toward a specific event, school, NGO or beneficiary." },
    ],
  }),
  component: DonatePage,
});

function DonatePage() {
  return (
    <>
      <PageHero eyebrow="Support our mission" title="Fund a specific" italic="act of kindness.">
        <p className="text-lg leading-relaxed text-forest/80">
          Atara doesn't pool money into a vague "general fund." Every rupee you give is earmarked for a current campaign.
        </p>
      </PageHero>

      <section className="bg-cream pb-32">
        <div className="mx-auto grid max-w-[1200px] gap-12 px-6 lg:grid-cols-[1.1fr_1fr] lg:px-10">
          <Reveal className="space-y-6">
            {[
              { title: "Education", body: "₹500 buys a digital writing tablet for a Zilla Parishad student in Gokulwadi." },
              { title: "Animal welfare", body: "₹250 stocks and refills a summer water station for stray animals with APLA." },
              { title: "Healthcare", body: "₹1,000 supports Thalassemia patients through our partner SSBB NGO." },
            ].map((row) => (
              <div key={row.title} className="rounded-2xl border border-forest/10 bg-card p-6">
                <p className="text-xs uppercase tracking-[0.3em] text-leaf">{row.title}</p>
                <p className="mt-3 text-lg leading-relaxed text-forest">{row.body}</p>
              </div>
            ))}
          </Reveal>

          <Reveal delay={0.1}>
            <div className="sticky top-32 rounded-3xl border border-forest/10 bg-forest p-8 text-cream lg:p-10">
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-leaf">
                <Heart className="h-4 w-4" /> Give once
              </div>
              <h2 className="mt-4 font-display text-4xl font-light">Scan to donate</h2>

              {/* UPI QR Code — scan to donate */}
              <div className="mt-8 flex items-center justify-center rounded-2xl border-2 border-dashed border-cream/20 bg-cream/5 p-10">
                <img
                  src={upiQr}
                  alt="Scan to donate via UPI"
                  className="h-64 w-64 rounded-xl object-contain"
                />
              </div>

              <p className="mt-6 text-center text-sm text-cream/70">
                Scan the QR code above to donate via UPI. Any amount makes a difference.
              </p>

              <p className="mt-4 text-center text-xs text-cream/50">
                Questions? Reach out at{" "}
                <a href="mailto:atara.wgs@gmail.com" className="underline hover:text-leaf">
                  atara.wgs@gmail.com
                </a>
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <NextStepsNavigation
        title="Where to next?"
        subtitle="See the impact of every rupee and the causes you support."
        steps={[
          {
            href: "/impact",
            label: "Our Impact",
            description: "Transparent numbers — every rupee, event, and partnership tracked.",
          },
          {
            href: "/causes",
            label: "Five Causes",
            description: "Education, animal welfare, healthcare, awareness, community.",
          },
          {
            href: "/events",
            label: "Our Events",
            description: "The fundraisers and competitions your donation powers.",
          },
        ]}
      />
    </>
  );
}