"use client";

import { useEffect, useRef, useState } from "react";

const clips = ["/home/video/hero-1", "/home/video/hero-2", "/home/video/hero-3"];

// Silent background clips played one after another in an endless loop, cross-fading between them.
// Without motion (reduced-motion setting) the page just shows the poster photo behind this component.
export default function HeroVideo() {
  const refs = useRef<(HTMLVideoElement | null)[]>([]);
  const [active, setActive] = useState(0);
  const [ready, setReady] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    setEnabled(!window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  useEffect(() => {
    if (!enabled) return;
    const v = refs.current[active];
    if (!v) return;
    v.currentTime = 0;
    v.play().catch(() => {});
  }, [active, enabled]);

  if (!enabled) return null;

  return (
    <div aria-hidden="true" className={`absolute inset-0 -z-[15] transition-opacity duration-700 ${ready ? "opacity-100" : "opacity-0"}`}>
      {clips.map((src, i) => (
        <video
          key={src}
          ref={(el) => {
            refs.current[i] = el;
          }}
          muted
          playsInline
          disablePictureInPicture
          preload={i === 0 ? "auto" : "metadata"}
          autoPlay={i === 0}
          tabIndex={-1}
          onPlaying={() => i === 0 && setReady(true)}
          onEnded={() => setActive((a) => (a + 1) % clips.length)}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${active === i ? "opacity-100" : "opacity-0"}`}
        >
          <source src={`${src}.mp4`} type="video/mp4" />
          <source src={`${src}.webm`} type="video/webm" />
        </video>
      ))}
    </div>
  );
}
