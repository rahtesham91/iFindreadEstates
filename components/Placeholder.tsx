type Props = {
  label: string;
  size?: string;
  className?: string;
};

// Stand-in for a photo. Swap for <Image> once the real picture is supplied.
export default function Placeholder({ label, size, className = "" }: Props) {
  const background = /\b(absolute|fixed)\b/.test(className);
  const position = background ? "" : "relative";
  const align = background ? "items-end justify-end p-6" : "items-center justify-center";
  return (
    <div
      className={`${position} flex ${align} overflow-hidden border border-line bg-panel ${className}`}
      role="img"
      aria-label={`Image placeholder: ${label}`}
    >
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, #D2AF63 0, #D2AF63 1px, transparent 1px, transparent 14px)",
        }}
      />
      <div className={`relative ${background ? "hidden text-right sm:block" : "px-6 text-center"}`}>
        <svg viewBox="0 0 24 24" className={`mb-3 h-7 w-7 text-gold-500 ${background ? "ml-auto" : "mx-auto"}`} fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true">
          <rect x="3" y="4" width="18" height="16" rx="1" />
          <circle cx="9" cy="10" r="1.6" />
          <path d="M3 17l5-4 4 3 3-2 6 4" />
        </svg>
        <p className="text-[0.7rem] font-medium uppercase tracking-luxe text-gold-400">Image</p>
        <p className="mt-1 text-sm text-mute">{label}</p>
        {size && <p className="mt-0.5 text-xs text-mute/60">{size}</p>}
      </div>
    </div>
  );
}
