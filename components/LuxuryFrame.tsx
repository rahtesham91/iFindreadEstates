import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  priority?: boolean;
  quality?: number;
  sizes?: string;
  className?: string;
  position?: string;
};

const stars = [
  { pos: "-left-3 -top-3", delay: "0s" },
  { pos: "-right-3 -top-3", delay: "0.8s" },
  { pos: "-bottom-3 -right-3", delay: "1.6s" },
  { pos: "-bottom-3 -left-3", delay: "2.4s" },
];

// Photo in a gold frame lit by a moving light, with a soft glow, a shine pass and twinkling corner stars.
export default function LuxuryFrame({ src, alt, priority = false, quality = 92, sizes = "(min-width: 1024px) 42vw, 90vw", className = "", position = "object-top" }: Props) {
  return (
    <div className={`relative ${className}`}>
      <div className="gold-frame">
        <div className="bg-ink p-2 sm:p-3">
          <div className="relative aspect-[4/5] overflow-hidden bg-panel">
            <Image src={src} alt={alt} fill priority={priority} quality={quality} sizes={sizes} className={`object-cover ${position}`} />
            <div aria-hidden="true" className="pointer-events-none absolute inset-2 border border-gold-300/30 sm:inset-3" />
            <span aria-hidden="true" className="frame-shine pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-transparent via-white/25 to-transparent" />
          </div>
        </div>
      </div>
      {stars.map((s) => (
        <svg
          key={s.pos}
          aria-hidden="true"
          viewBox="0 0 24 24"
          style={{ animationDelay: s.delay }}
          className={`frame-star pointer-events-none absolute ${s.pos} h-5 w-5 text-gold-300 drop-shadow-[0_0_6px_rgb(var(--c-gold-300))] sm:h-6 sm:w-6`}
          fill="currentColor"
        >
          <path d="M12 0c.8 6.4 5.6 11.2 12 12-6.4.8-11.2 5.6-12 12-.8-6.4-5.6-11.2-12-12 6.4-.8 11.2-5.6 12-12Z" />
        </svg>
      ))}
    </div>
  );
}
