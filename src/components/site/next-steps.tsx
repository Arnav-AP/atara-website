import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { Reveal } from "./reveal";
import { Magnetic } from "./magnetic";

interface NextStep {
  href: string;
  label: string;
  description: string;
}

interface NextStepsNavigationProps {
  title: string;
  subtitle: string;
  steps: NextStep[];
}

export function NextStepsNavigation({ title, subtitle, steps }: NextStepsNavigationProps) {
  return (
    <section className="relative overflow-hidden bg-cream py-28 lg:py-36">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <Reveal className="mb-16 text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-forest/60 mb-4">Continue your journey</p>
          <h2 className="font-display text-4xl font-light leading-[1.15] text-forest md:text-6xl">
            {title}
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-forest/80">{subtitle}</p>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((step, i) => (
            <Reveal key={step.href} delay={i * 0.08}>
              <Link
                to={step.href}
                className="group relative block rounded-3xl border border-forest/10 bg-card p-7 lg:p-8 transition-all duration-500 hover:border-leaf/50 hover:shadow-[0_20px_40px_-20px_rgb(4_97_90_/_0.15)] hover:-translate-y-1"
              >
                <div className="flex items-start justify-between gap-4 mb-6">
                  <span className="text-xs uppercase tracking-[0.3em] text-leaf">
                    Next step
                  </span>
                  <motion.span
                    layoutId={`arrow-${step.href}`}
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-forest/10 text-forest transition-all group-hover:bg-forest group-hover:text-cream"
                  >
                    <ArrowUpRight className="h-4 w-4" />
                  </motion.span>
                </div>
                <h3 className="font-display text-2xl font-medium text-forest mb-3 group-hover:text-leaf transition-colors">
                  {step.label}
                </h3>
                <p className="text-base leading-relaxed text-forest/70">
                  {step.description}
                </p>
              </Link>
            </Reveal>
          ))}
        </div>

        {/* Full-width CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <Magnetic strength={0.4}>
            <Link
              to="/donate"
              className="inline-flex items-center gap-3 rounded-full bg-forest px-8 py-4 text-sm font-medium text-cream transition-all hover:bg-ink hover:shadow-[0_10px_30px_-12px_rgb(4_97_90_/_0.6)]"
            >
              Support our mission
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
            </Link>
          </Magnetic>
        </motion.div>
      </div>
    </section>
  );
}