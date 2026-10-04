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

// Photo with a gold offset frame and corner marks. Padding on the wrapper keeps the frame inside the page width.
export default function PortraitFrame({ src, alt, priority = false, quality = 92, sizes = "(min-width: 1024px) 42vw, 90vw", className = "", position = "object-top" }: Props) {
  return (
    <div className={`relative pb-4 pr-4 sm:pb-6 sm:pr-6 ${className}`}>
      <div aria-hidden="true" className="absolute bottom-0 right-0 top-5 w-[calc(100%-1.25rem)] border border-gold-500/55 sm:top-7 sm:w-[calc(100%-1.75rem)]" />
      <div className="relative aspect-[4/5] overflow-hidden bg-panel shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)]">
        <Image src={src} alt={alt} fill priority={priority} quality={quality} sizes={sizes} className={`object-cover ${position}`} />
        <div aria-hidden="true" className="pointer-events-none absolute inset-3 border border-gold-300/25 sm:inset-4" />
      </div>
      {/* corner marks */}
      <span aria-hidden="true" className="absolute left-[-0.4rem] top-[-0.4rem] h-6 w-6 border-l-2 border-t-2 border-gold-400 sm:h-8 sm:w-8" />
      <span aria-hidden="true" className="absolute bottom-[calc(1rem-0.4rem)] right-[calc(1rem-0.4rem)] h-6 w-6 border-b-2 border-r-2 border-gold-400 sm:bottom-[calc(1.5rem-0.4rem)] sm:right-[calc(1.5rem-0.4rem)] sm:h-8 sm:w-8" />
    </div>
  );
}
