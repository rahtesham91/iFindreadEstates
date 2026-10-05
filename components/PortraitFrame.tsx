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

// Photo with a single thin gold border.
export default function PortraitFrame({ src, alt, priority = false, quality = 92, sizes = "(min-width: 1024px) 42vw, 90vw", className = "", position = "object-top" }: Props) {
  return (
    <div className={`relative aspect-[4/5] overflow-hidden border border-gold-500/50 bg-panel ${className}`}>
      <Image src={src} alt={alt} fill priority={priority} quality={quality} sizes={sizes} className={`object-cover ${position}`} />
    </div>
  );
}
