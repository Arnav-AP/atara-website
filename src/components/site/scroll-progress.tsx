import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed inset-x-0 top-0 z-[90] h-[3px] origin-left bg-leaf shadow-[0_2px_16px_rgb(52_181_63_/_0.65)]"
      style={{ scaleX }}
    />
  );
}
