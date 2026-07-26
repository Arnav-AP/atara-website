import { useState, useEffect, useCallback } from "react";
import { ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Magnetic } from "./magnetic";

export function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 600);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = useCallback(() => {
    const lenis = window.__lenis;
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-8 right-8 z-50"
        >
          <Magnetic strength={0.3}>
            <button
              onClick={scrollToTop}
              aria-label="Scroll to top"
              data-cursor="hover"
              className="flex h-12 w-12 items-center justify-center rounded-full bg-forest text-cream shadow-lg shadow-forest/25 backdrop-blur-sm transition-colors hover:bg-leaf focus:outline-none focus:ring-2 focus:ring-forest focus:ring-offset-2 focus:ring-offset-cream"
            >
              <ArrowUp className="h-5 w-5" />
            </button>
          </Magnetic>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
