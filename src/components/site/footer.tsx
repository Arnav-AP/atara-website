import { Link } from "@tanstack/react-router";
import { Instagram, Mail, MapPin } from "lucide-react";
import { AtaraMark, AtaraWordmark } from "./logo";
import { Reveal } from "./reveal";

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-ink text-cream/90">
      <div className="pointer-events-none absolute inset-0 opacity-[0.05]">
        <div className="absolute -left-40 -top-40 h-[600px] w-[600px] rounded-full bg-leaf blur-3xl" />
        <div className="absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-palm blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-6 pb-10 pt-24 lg:px-10 lg:pt-32">
        <Reveal className="grid gap-12 border-b border-cream/10 pb-16 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2 text-cream">
              <AtaraMark className="h-10 w-10" />
              <AtaraWordmark className="text-cream" />
            </div>
            <p className="mt-6 max-w-sm font-display text-2xl leading-tight text-cream">
              Inspire with impact. Small hands. Lasting change.
            </p>
            <p className="mt-4 max-w-sm text-sm text-cream/60">
              A student-led social impact initiative under the IB Service as Action
              Programme at Fountainhead Wockhardt Global School, Aurangabad —
              transforming student talent into meaningful social impact.
            </p>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-cream/50">Explore</h4>
            <ul className="mt-5 space-y-3 text-sm">
              {[
                ["About", "/about"],
                ["Our Impact", "/impact"],
                ["Causes", "/causes"],
                ["Events", "/events"],
                ["Team", "/team"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link to={href} className="transition-colors hover:text-leaf">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-cream/50">Act</h4>
            <ul className="mt-5 space-y-3 text-sm">
              {[
                ["Support our mission", "/donate"],
                ["Join Atara", "/join"],
                ["Partners", "/partners"],
                ["News & updates", "/news"],
                ["FAQ", "/faq"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link to={href} className="transition-colors hover:text-leaf">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-cream/50">Reach us</h4>
            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <Instagram className="mt-0.5 h-4 w-4 text-leaf" />
                <a
                  href="https://instagram.com/atara.fwgs"
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors hover:text-leaf"
                >
                  @atara.fwgs
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 text-leaf" />
                <a href="mailto:atara.wgs@gmail.com" className="transition-colors hover:text-leaf">
                  atara.wgs@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 text-leaf" />
                <a
                  href="https://maps.app.goo.gl/Z4FgA49eLYyENNbv7"
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors hover:text-leaf"
                >
                  Fountainhead Wockhardt Global School,
                  <br />
                  Aurangabad, Maharashtra, India
                </a>
              </li>
            </ul>
          </div>
        </Reveal>

        <div className="mt-10 flex flex-col items-start justify-between gap-4 text-xs text-cream/50 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Atara. Built with care by students of Grade 10, FWGS.</p>
          <a href="/sitemap.xml" target="_blank" className="transition-colors hover:text-cream/80">Sitemap</a>
          <p className="text-cream/30">Designed, developed &amp; maintained by Arnav Pardeshi</p>
          <p className="tracking-widest">INSPIRE · WITH · IMPACT</p>
        </div>
      </div>
    </footer>
  );
}
