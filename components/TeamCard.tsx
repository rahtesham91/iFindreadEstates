import Image from "next/image";
import { TeamMember, whatsappLink } from "@/lib/site";

type Props = { member: TeamMember; compact?: boolean; priority?: boolean };

export default function TeamCard({ member, compact = false, priority = false }: Props) {
  return (
    <article className="group flex h-full flex-col">
      <div className="relative aspect-[4/5] overflow-hidden bg-panel">
        <Image
          src={member.photo}
          alt={`${member.name}, ${member.role}`}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
        <div className="pointer-events-none absolute inset-3 border border-gold-400/0 transition-colors duration-500 group-hover:border-gold-400/70" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-ink/40 to-transparent" />
      </div>

      <div className="flex flex-1 flex-col pt-6">
        <h3 className="font-serif text-[1.65rem] leading-tight">{member.name}</h3>
        <p className="mt-1.5 text-[0.7rem] font-medium uppercase tracking-luxe text-gold-400">{member.role}</p>
        <div className="my-4 h-px w-10 bg-gold-500/70" />

        {!compact && (
          <>
            <p className="text-[0.92rem] leading-relaxed text-mute">{member.bio}</p>
            {member.languages && (
              <ul className="mt-4 flex flex-wrap gap-2" aria-label="Languages">
                {member.languages.map((l) => (
                  <li key={l} className="border border-line px-2.5 py-1 text-[0.68rem] uppercase tracking-[0.14em] text-mute">
                    {l}
                  </li>
                ))}
              </ul>
            )}
            {member.brn && <p className="mt-4 text-xs uppercase tracking-[0.14em] text-gold-400">BRN {member.brn}</p>}
            <a
              href={whatsappLink(`Hello, I would like to speak with ${member.name}.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto inline-flex items-center gap-2 pt-6 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-ivory transition-all hover:gap-3 hover:text-gold-300"
            >
              WhatsApp
              <svg viewBox="0 0 24 8" className="h-2 w-6" fill="none" stroke="currentColor" aria-hidden="true">
                <path d="M0 4h22M18 1l4 3-4 3" />
              </svg>
            </a>
          </>
        )}
      </div>
    </article>
  );
}
