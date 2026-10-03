import Image from "next/image";

type Props = {
  variant?: "compact" | "stacked";
  className?: string;
  priority?: boolean;
};

// Traced vector logo. The "light" files have the grey parts switched to ivory so they read on black;
// the "dark" files keep the original grey for light backgrounds. CSS shows the right one per theme.
function Pair({
  name,
  width,
  height,
  alt,
  className,
  priority,
}: {
  name: string;
  width: number;
  height: number;
  alt: string;
  className: string;
  priority: boolean;
}) {
  return (
    <>
      <Image src={`/brand/${name}-light.svg`} alt={alt} width={width} height={height} priority={priority} unoptimized className={`hidden dark:block ${className}`} />
      <Image src={`/brand/${name}-dark.svg`} alt={alt} width={width} height={height} priority={priority} unoptimized className={`dark:hidden ${className}`} />
    </>
  );
}

export default function Logo({ variant = "compact", className = "", priority = false }: Props) {
  if (variant === "stacked") {
    return (
      <span className={`block ${className}`}>
        <Pair name="logo-full" width={460} height={480} alt="iFind Real Estate L.L.C. Finding Value. Building Trust." className="h-auto w-full" priority={priority} />
      </span>
    );
  }
  return (
    <span className={`flex items-center gap-3 ${className}`}>
      <Pair name="logo-icon" width={235} height={270} alt="" className="h-11 w-auto sm:h-12" priority={priority} />
      <Pair name="logo-name" width={450} height={140} alt="iFind Real Estate L.L.C." className="h-9 w-auto sm:h-10" priority={priority} />
    </span>
  );
}
