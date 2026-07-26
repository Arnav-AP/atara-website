import { useEffect } from "react";
import Lenis from "lenis";
import { useReducedMotion } from "@/hooks/use-hydrated";

declare global {
  interface Window {
    __lenis?: Lenis;
  }
}

export function SmoothScroll() {
  const reduced = useReducedMotion();
  useEffect(() => {
    if (reduced) return;
    const lenis = new Lenis({
      duration: 1.15,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    // Expose Lenis instance globally so other components can call lenis.scrollTo()
    window.__lenis = lenis;
    let rafId = 0;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      window.__lenis = undefined;
    };
  }, [reduced]);
  return null;
}