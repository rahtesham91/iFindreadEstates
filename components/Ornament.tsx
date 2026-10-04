export default function Ornament({ className = "", align = "left" }: { className?: string; align?: "left" | "center" }) {
  return (
    <div className={`flex items-center gap-3 text-gold-400 ${align === "center" ? "justify-center" : ""} ${className}`} aria-hidden="true">
      <span className="h-px w-10 bg-gradient-to-r from-transparent to-gold-500/80 sm:w-16" />
      <svg viewBox="0 0 12 12" className="h-2.5 w-2.5" fill="currentColor">
        <path d="M6 0l6 6-6 6-6-6z" />
      </svg>
      <span className="h-px w-10 bg-gradient-to-l from-transparent to-gold-500/80 sm:w-16" />
    </div>
  );
}
