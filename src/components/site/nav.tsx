import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { AtaraLogo } from "./logo";
import { Magnetic } from "./magnetic";

const links = [
  { to: "/about", label: "About" },
  { to: "/impact", label: "Impact" },
  { to: "/causes", label: "Causes" },
  { to: "/events", label: "Events" },
  { to: "/team", label: "Team" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const path = useRouterState({ select: (s) => s.location.pathname });
  // Once the mobile menu opens it sits on the brochure-paper overlay, so the
  // header must switch out of its dark-hero treatment immediately.
  const isOnDarkHero = path === "/" && !scrolled && !open;

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [path]);

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        data-cursor-tone={isOnDarkHero ? "dark" : "light"}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "backdrop-blur-xl bg-cream/70 border-b border-forest/10"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-4 lg:px-10">
          <Link to="/" className="shrink-0">
            <AtaraLogo className={isOnDarkHero ? "text-cream" : "text-forest"} />
          </Link>
          <nav className="hidden items-center gap-1 lg:flex">
            {links.map((l) => {
              const active = path === l.to || path.startsWith(l.to + "/");
              return (
                <Link
                  key={l.to}
                  to={l.to}
                  className={`group relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    isOnDarkHero ? "text-cream/85 hover:text-cream" : "text-forest/85 hover:text-forest"
                  }`}
                >
                  <span className="relative z-10">{l.label}</span>
                  {active ? (
                    <motion.span
                      layoutId="nav-pill"
                      className={`absolute inset-0 rounded-full ${isOnDarkHero ? "bg-cream/12" : "bg-forest/8"}`}
                      transition={{ type: "spring", stiffness: 260, damping: 26 }}
                    />
                  ) : null}
                </Link>
              );
            })}
          </nav>
          <div className="flex items-center gap-3">
            <Link
              to="/donate"
              className="hidden lg:inline-flex"
            >
              <Magnetic strength={0.4}>
                <span className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-colors ${
                  isOnDarkHero
                    ? "bg-cream text-forest shadow-[0_10px_30px_-12px_rgb(0_91_84_/_0.65)] hover:bg-leaf"
                    : "bg-forest text-cream shadow-[0_10px_30px_-12px_rgb(4_97_90_/_0.6)] hover:bg-ink"
                }`}>
                  Support us
                  <span aria-hidden>→</span>
                </span>
              </Magnetic>
            </Link>
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
              className={`inline-flex h-10 w-10 items-center justify-center rounded-full border lg:hidden ${
                isOnDarkHero ? "border-cream/30 text-cream" : "border-forest/20 text-forest"
              }`}
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            data-cursor-tone="light"
            className="fixed inset-0 z-40 bg-cream/95 backdrop-blur-xl lg:hidden"
          >
            <div className="flex h-full flex-col items-center justify-center gap-6 px-6">
              {links.map((l, i) => (
                <motion.div
                  key={l.to}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i }}
                >
                  <Link
                    to={l.to}
                    className="font-display text-4xl font-medium text-forest"
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}
              <Magnetic strength={0.4}>
                <Link
                  to="/donate"
                  className="mt-4 inline-flex items-center gap-2 rounded-full bg-forest px-6 py-3 text-cream"
                >
                  Support us →
                </Link>
              </Magnetic>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
