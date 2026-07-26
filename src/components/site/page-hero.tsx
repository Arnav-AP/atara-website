import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { RevealText } from "./reveal";

export function PageHero({
  eyebrow,
  title,
  italic,
  children,
}: {
  eyebrow: string;
  title: string;
  italic?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-cream pt-40 pb-24 lg:pt-56 lg:pb-32">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="pointer-events-none absolute inset-x-0 top-0 mx-auto h-[500px] max-w-6xl opacity-30 blur-3xl"
        style={{
          background:
            "radial-gradient(ellipse at 50% 30%, rgb(52 181 63 / 0.34), transparent 70%)",
        }}
      />
      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 text-xs uppercase tracking-[0.4em] text-forest/60"
        >
          {eyebrow}
        </motion.p>
        <RevealText
          as="h1"
          delay={0.2}
          stagger={0.06}
          text={title}
          className="font-display text-[clamp(2.6rem,8vw,7rem)] font-light leading-[0.95] text-forest text-balance"
        />
        {italic ? (
          <RevealText
            as="h1"
            delay={0.4}
            stagger={0.06}
            text={italic}
            className="font-display text-[clamp(2.6rem,8vw,7rem)] font-light italic leading-[0.95] text-leaf text-balance"
          />
        ) : null}
        {children ? <div className="mt-10 max-w-2xl">{children}</div> : null}
      </div>
    </section>
  );
}
