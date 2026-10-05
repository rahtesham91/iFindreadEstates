import { Developer, developers } from "@/lib/site";

// Logos are single-colour SVG masks, so they follow the theme (ivory in dark, charcoal in light) and turn gold on hover.
function Logo({ d }: { d: Developer }) {
  // Optical sizing: wide wordmarks sit lower, tall or square marks need more height to look the same weight.
  const h = d.ratio > 5 ? 1.9 : d.ratio > 3.4 ? 2.6 : d.ratio > 2 ? 3.1 : d.ratio > 1.2 ? 4.1 : 4.6;
  const url = `url(/developers/${d.slug}.svg)`;
  return (
    <span
      role="img"
      aria-label={d.name}
      className="block bg-current"
      style={{
        aspectRatio: `${d.ratio}`,
        width: `min(100%, calc(${h}rem * var(--ls) * ${d.ratio}))`,
        WebkitMask: `${url} center / contain no-repeat`,
        mask: `${url} center / contain no-repeat`,
      }}
    />
  );
}

export default function DeveloperGrid({ list = developers }: { list?: Developer[] }) {
  return (
    <ul className="grid grid-cols-2 gap-px border border-line bg-line sm:grid-cols-3 lg:grid-cols-4">
      {list.map((d) => (
        <li key={d.slug} className="bg-ink">
          <div className="group relative flex h-40 flex-col items-center justify-center gap-2 px-5 text-ivory/70 transition-all duration-500 [--ls:0.8] hover:bg-panel hover:text-gold-400 sm:h-48 sm:[--ls:1]">
            <span aria-hidden="true" className="absolute inset-x-6 top-0 h-px scale-x-0 bg-gradient-to-r from-transparent via-gold-400 to-transparent transition-transform duration-500 group-hover:scale-x-100" />
            <div className="flex h-[4.8rem] w-full items-center justify-center">
              <Logo d={d} />
            </div>
            <span className="flex min-h-[1.7rem] items-start text-center text-[0.6rem] uppercase leading-snug tracking-luxe text-mute/80 transition-colors group-hover:text-gold-400">{d.name}</span>
          </div>
        </li>
      ))}
    </ul>
  );
}
