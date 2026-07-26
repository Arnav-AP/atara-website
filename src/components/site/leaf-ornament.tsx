export function LeafOrnament({
  className = "",
  flip = false,
}: {
  className?: string;
  flip?: boolean;
}) {
  return (
    <svg
      viewBox="0 0 240 240"
      className={className}
      style={flip ? { transform: "scaleX(-1)" } : undefined}
      aria-hidden="true"
    >
      <g fill="currentColor" fillOpacity="0.85">
        <path d="M10 10 C 60 20, 100 60, 110 130 C 90 90, 60 60, 10 40 Z" />
        <path d="M20 30 C 70 45, 110 90, 120 160 C 100 130, 70 100, 20 80 Z" opacity="0.7" />
        <path d="M40 10 C 90 30, 130 80, 140 150 C 120 120, 90 90, 40 70 Z" opacity="0.5" />
      </g>
      <g fill="none" stroke="currentColor" strokeWidth="1" strokeOpacity="0.6">
        <path d="M10 10 C 60 40, 100 90, 110 130" />
        <path d="M20 30 C 70 60, 110 110, 120 160" />
      </g>
    </svg>
  );
}

export function FrondFrame({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute inset-0 text-leaf ${className}`}>
      <LeafOrnament className="absolute -top-6 -left-6 h-40 w-40 animate-sway" />
      <LeafOrnament flip className="absolute -top-6 -right-6 h-40 w-40 animate-sway" />
      <LeafOrnament className="absolute -bottom-6 -left-6 h-40 w-40 rotate-180 animate-sway" />
      <LeafOrnament flip className="absolute -bottom-6 -right-6 h-40 w-40 rotate-180 animate-sway" />
    </div>
  );
}