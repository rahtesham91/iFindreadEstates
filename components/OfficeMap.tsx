"use client";

import { useI18n } from "./I18nProvider";

const QUERY = "iFind Real Estate LLC, Churchill Tower, Business Bay, Dubai, UAE";

// Google Maps embed (no API key needed). The CSS filter re-tints the map to the site's warm cream and gold palette.
export default function OfficeMap({ className = "" }: { className?: string }) {
  const { lang, dict } = useI18n();
  const q = encodeURIComponent(QUERY);
  return (
    <div className={`flex flex-col ${className}`}>
      <div className="relative min-h-[20rem] flex-1 overflow-hidden border border-gold-500/50 bg-char">
        <iframe
          title={dict.contact.mapTitle}
          src={`https://www.google.com/maps?q=${q}&hl=${lang}&z=16&output=embed`}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
          className="absolute inset-0 h-full w-full border-0 [filter:grayscale(1)_sepia(0.5)_saturate(1.4)_hue-rotate(-8deg)_contrast(0.95)_brightness(1.02)]"
        />
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-gold-500/10 mix-blend-multiply" />
      </div>
      <a
        href={`https://www.google.com/maps/search/?api=1&query=${q}`}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-gold-400 transition-colors hover:text-gold-300"
      >
        {dict.contact.openMap}
        <svg viewBox="0 0 24 8" className="h-2 w-6 rtl:-scale-x-100" fill="none" stroke="currentColor" aria-hidden="true"><path d="M0 4h22M18 1l4 3-4 3" /></svg>
      </a>
    </div>
  );
}
