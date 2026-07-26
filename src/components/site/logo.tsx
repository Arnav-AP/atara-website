import { motion } from "framer-motion";

export function AtaraMark({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <img
      src="/atara-logo.png"
      alt="Atara"
      className={`object-contain ${className}`}
      aria-hidden="true"
      draggable={false}
    />
  );
}

export function AtaraWordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`font-display text-[1.35rem] font-semibold tracking-[0.25em] ${className}`}>
      ATARA
    </span>
  );
}

export function AtaraLogo({ className = "" }: { className?: string }) {
  return (
    <motion.div
      className={`flex items-center gap-2 ${className || "text-forest"}`}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <AtaraMark className="h-9 w-9" />
      <AtaraWordmark />
    </motion.div>
  );
}
