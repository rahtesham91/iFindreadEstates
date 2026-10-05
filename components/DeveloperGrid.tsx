import Image from "next/image";
import { Developer, developers } from "@/lib/site";

// Every card is the same size: a white logo plate with a single thin gold border and the name underneath.
export default function DeveloperGrid({ list = developers }: { list?: Developer[] }) {
  return (
    <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4">
      {list.map((d) => (
        <li key={d.slug}>
          <figure className="overflow-hidden border border-gold-500/50 bg-white transition-colors duration-300 hover:border-gold-500">
            <Image
              src={`/developers/${d.slug}.webp`}
              alt={`${d.name} logo`}
              width={800}
              height={480}
              quality={95}
              sizes="(min-width: 1024px) 22vw, (min-width: 640px) 30vw, 46vw"
              className="block h-auto w-full"
            />
            <figcaption className="border-t border-line bg-ink px-2 py-3 text-center text-[0.58rem] font-medium uppercase leading-snug tracking-luxe text-gold-400 sm:text-[0.64rem]">
              {d.name}
            </figcaption>
          </figure>
        </li>
      ))}
    </ul>
  );
}
