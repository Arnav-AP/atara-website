import type { ReactNode } from "react";
import { SiteNav } from "./nav";
import { SiteFooter } from "./footer";
import { SmoothScroll } from "./smooth-scroll";
import { CustomCursor } from "./cursor";
import { Preloader } from "./preloader";
import { ScrollProgress } from "./scroll-progress";
import { ScrollToTopButton } from "./scroll-to-top";
import { Toaster } from "@/components/ui/sonner";

export function SiteChrome({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-cream text-ink">
      <Preloader />
      <SmoothScroll />
      <ScrollProgress />
      <CustomCursor />
      <SiteNav />
      <main>{children}</main>
      <SiteFooter />
      <ScrollToTopButton />
      <Toaster position="bottom-right" />
    </div>
  );
}
