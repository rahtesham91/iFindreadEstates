"use client";

import Image from "next/image";
import { TeamMember, memberContact } from "@/lib/site";

type Props = { member: TeamMember; compact?: boolean; priority?: boolean };

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0" fill="currentColor" aria-hidden="true">
      <path d="M12.04 2a9.9 9.9 0 0 0-8.5 14.9L2 22l5.2-1.5a9.9 9.9 0 1 0 4.84-18.5Zm0 18.1a8.2 8.2 0 0 1-4.2-1.15l-.3-.18-3.1.9.93-3-.2-.31a8.2 8.2 0 1 1 6.87 3.74Zm4.5-6.1c-.25-.12-1.46-.72-1.69-.8-.23-.09-.39-.12-.56.12s-.64.8-.78.96c-.15.17-.29.19-.54.06a6.7 6.7 0 0 1-1.98-1.22 7.4 7.4 0 0 1-1.37-1.7c-.14-.25 0-.38.1-.5.11-.11.25-.29.37-.43.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.43-.06-.12-.56-1.35-.77-1.85-.2-.48-.4-.42-.56-.42h-.48c-.17 0-.43.06-.66.31s-.87.85-.87 2.07.89 2.4 1.01 2.57c.12.17 1.75 2.67 4.24 3.74.59.26 1.06.41 1.42.52.6.19 1.14.16 1.57.1.48-.07 1.46-.6 1.67-1.17.2-.58.2-1.07.14-1.17-.06-.1-.23-.17-.48-.29Z" />
    </svg>
  );
}

export default function TeamCard({ member, compact = false, priority = false }: Props) {
  const { tel, wa } = memberContact(member);

  return (
    <article className="group flex h-full flex-col border border-line bg-char transition-all duration-500 hover:-translate-y-1 hover:border-gold-500/70 hover:shadow-[0_25px_60px_-25px_rgb(var(--c-gold-500)/0.45)]">
      {/* Photo */}
      <div className="relative aspect-[4/5] overflow-hidden bg-panel">
        <Image
          src={member.photo}
          alt={`${member.name}, ${member.role}`}
          fill
          priority={priority}
          quality={90}
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 50vw"
          className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
        <div className="pointer-events-none absolute inset-0 border-b-2 border-gold-500/0 transition-colors duration-500 group-hover:border-gold-400/80" />
      </div>

      {/* Details */}
      <div className={`flex flex-1 flex-col ${compact ? "px-4 pb-4 pt-3 sm:px-5 sm:pb-5" : "px-6 pb-6 pt-4"}`}>
        <h3 className={`font-serif leading-tight ${compact ? "text-xl sm:text-2xl" : "text-[1.7rem]"}`}>{member.name}</h3>
        <p className={`mt-2 font-medium uppercase text-gold-400 ${compact ? "" : "sm:min-h-[2.6rem]"} ${compact ? "text-[0.62rem] tracking-[0.16em] sm:text-[0.68rem] sm:tracking-luxe" : "text-[0.7rem] tracking-luxe"}`}>{member.role}</p>
        <div className="mt-4 h-px w-full bg-gradient-to-r from-gold-500/70 via-line to-transparent" />

        {!compact && (member.brn || member.email) && (
          <dl className="mt-4 space-y-1.5 text-[0.78rem] text-mute">
            {member.brn && (
              <div className="flex gap-2">
                <dt className="font-medium uppercase tracking-[0.14em] text-gold-500">BRN</dt>
                <dd>{member.brn}</dd>
              </div>
            )}
            {member.email && (
              <div>
                <dt className="sr-only">Email</dt>
                <dd>
                  <a href={`mailto:${member.email}`} className="break-all transition-colors hover:text-gold-400">
                    {member.email}
                  </a>
                </dd>
              </div>
            )}
          </dl>
        )}

        {/* Contact buttons: always pinned to the bottom of the card */}
        <div className={`mt-auto grid grid-cols-2 gap-2 ${compact ? "pt-4" : "pt-5"}`}>
          <a
            href={tel}
            aria-label={`Call ${member.name}`}
            className="inline-flex items-center justify-center gap-2 border border-gold-500/70 px-2 py-3 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-ivory transition-colors hover:border-gold-300 hover:text-gold-300"
          >
            <PhoneIcon />
            <span>Call</span>
          </a>
          <a
            href={wa}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`WhatsApp ${member.name}`}
            className="inline-flex items-center justify-center gap-2 bg-gold-400 px-2 py-3 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-ink transition-colors hover:bg-gold-300"
          >
            <WhatsAppIcon />
            <span>{compact ? "Chat" : "WhatsApp"}</span>
          </a>
        </div>
      </div>
    </article>
  );
}
