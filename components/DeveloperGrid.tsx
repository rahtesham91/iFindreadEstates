import Image from "next/image";
import { Developer, developers } from "@/lib/site";

const corners = ["-left-[5px] -top-[5px]", "-right-[5px] -top-[5px]", "-bottom-[5px] -left-[5px]", "-bottom-[5px] -right-[5px]"];

// Every card is the same size: a white logo plate inside a gold frame with a double line and corner jewels.
export default function DeveloperGrid({ list = developers }: { list?: Developer[] }) {
  return (
    <ul className="grid grid-cols-2 gap-x-4 gap-y-6 sm:grid-cols-3 sm:gap-x-6 sm:gap-y-8 lg:grid-cols-4">
      {list.map((d) => (
        <li key={d.slug}>
          <figure className="group relative bg-gradient-to-br from-gold-400 via-gold-300/60 to-gold-500 p-[1.5px] shadow-[0_18px_40px_-26px_rgb(90_60_10/0.55)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_28px_55px_-22px_rgb(var(--c-gold-500)/0.7)]">
            <div className="relative overflow-hidden bg-white">
              <Image
                src={`/developers/${d.slug}.webp`}
                alt={`${d.name} logo`}
                width={800}
                height={480}
                quality={95}
                sizes="(min-width: 1024px) 22vw, (min-width: 640px) 30vw, 46vw"
                className="block h-auto w-full"
              />
              <span aria-hidden="true" className="pointer-events-none absolute inset-1.5 border border-gold-500/35 transition-colors duration-500 group-hover:border-gold-400/80 sm:inset-2" />
              <span aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-0 w-1/3 -translate-x-full skew-x-[-18deg] bg-gradient-to-r from-transparent via-gold-300/25 to-transparent transition-transform duration-[900ms] ease-out group-hover:translate-x-[320%]" />
            </div>
            <figcaption className="border-t border-gold-500/40 bg-ink px-2 py-3 text-center text-[0.58rem] font-medium uppercase leading-snug tracking-luxe text-gold-400 sm:text-[0.64rem]">
              {d.name}
            </figcaption>
            {corners.map((c) => (
              <span key={c} aria-hidden="true" className={`absolute ${c} h-[9px] w-[9px] rotate-45 bg-gold-400 shadow-[0_0_6px_rgb(var(--c-gold-400)/0.8)]`} />
            ))}
          </figure>
        </li>
      ))}
    </ul>
  );
}
