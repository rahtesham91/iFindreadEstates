import Image from "next/image";

type Props = {
  variant?: "compact" | "stacked";
  className?: string;
  priority?: boolean;
};

// Traced vector logo. "light" files have the grey parts switched to ivory so they read on black.
export default function Logo({ variant = "compact", className = "", priority = false }: Props) {
  if (variant === "stacked") {
    return (
      <Image
        src="/brand/logo-full-light.svg"
        alt="iFind Real Estate L.L.C. Finding Value. Building Trust."
        width={460}
        height={480}
        priority={priority}
        className={className}
        unoptimized
      />
    );
  }
  return (
    <span className={`flex items-center gap-3 ${className}`}>
      <Image
        src="/brand/logo-icon-light.svg"
        alt=""
        width={235}
        height={270}
        priority={priority}
        className="h-11 w-auto sm:h-12"
        unoptimized
      />
      <Image
        src="/brand/logo-name-light.svg"
        alt="iFind Real Estate L.L.C."
        width={450}
        height={140}
        priority={priority}
        className="h-9 w-auto sm:h-10"
        unoptimized
      />
    </span>
  );
}
