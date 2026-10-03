"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { interests, whatsappLink } from "@/lib/site";

type Msg = { from: "bot" | "me"; text: string };
type Step = "interest" | "name" | "phone" | "sending" | "done";

const GREETING = "Hello! How may I assist you today?";
const QUICK = interests.slice(0, 5);
const SEEN_KEY = "ifind-chat-seen";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<Step>("interest");
  const [msgs, setMsgs] = useState<Msg[]>([{ from: "bot", text: GREETING }]);
  const [input, setInput] = useState("");
  const lead = useRef({ interest: "", name: "", phone: "" });
  const endRef = useRef<HTMLDivElement>(null);

  // Open automatically once per browser session, shortly after the page loads.
  useEffect(() => {
    let seen = false;
    try {
      seen = sessionStorage.getItem(SEEN_KEY) === "1";
    } catch {}
    if (seen) return;
    const t = setTimeout(() => {
      setOpen(true);
      try {
        sessionStorage.setItem(SEEN_KEY, "1");
      } catch {}
    }, 4000);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [msgs, open]);

  const say = (m: Msg) => setMsgs((prev) => [...prev, m]);

  function pickInterest(value: string) {
    lead.current.interest = value;
    say({ from: "me", text: value });
    say({ from: "bot", text: "Wonderful. May I have your name, please?" });
    setStep("name");
  }

  async function submit(e: FormEvent) {
    e.preventDefault();
    const value = input.trim();
    if (!value) return;
    setInput("");

    if (step === "name") {
      lead.current.name = value;
      say({ from: "me", text: value });
      say({ from: "bot", text: `Thank you, ${value}. What is the best phone or WhatsApp number to reach you on?` });
      setStep("phone");
      return;
    }

    if (step === "phone") {
      say({ from: "me", text: value });
      lead.current.phone = value;
      setStep("sending");
      try {
        const res = await fetch("/api/inquiry", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...lead.current, message: "Chat enquiry", source: "chat" }),
        });
        const json = (await res.json()) as { ok: boolean; error?: string };
        if (!res.ok || !json.ok) throw new Error(json.error ?? "failed");
        say({ from: "bot", text: "Thank you. One of our consultants will contact you shortly." });
        setStep("done");
      } catch (err) {
        const reason = err instanceof Error && err.message !== "failed" ? err.message : "";
        say({ from: "bot", text: reason || "Sorry, that did not go through. Please check the number or message us on WhatsApp." });
        setStep(reason ? "phone" : "done");
      }
    }
  }

  const inputStep = step === "name" || step === "phone";

  return (
    <>
      <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3">
        {open && (
          <section
            aria-label="Chat with iFind"
            className="flex h-[min(30rem,calc(100dvh-8rem))] w-[calc(100vw-2.5rem)] max-w-sm flex-col border border-gold-500/50 bg-ink shadow-2xl"
          >
            <header className="flex items-center justify-between border-b border-line bg-char px-5 py-4">
              <div>
                <p className="font-serif text-xl text-ivory">iFind</p>
                <p className="text-[0.68rem] uppercase tracking-luxe text-gold-400">Finding Value. Building Trust.</p>
              </div>
              <button type="button" onClick={() => setOpen(false)} aria-label="Close chat" className="p-1 text-mute hover:text-gold-300">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                  <path d="M6 6l12 12M18 6L6 18" />
                </svg>
              </button>
            </header>

            <div className="flex-1 space-y-3 overflow-y-auto px-5 py-5" aria-live="polite">
              {msgs.map((m, i) => (
                <div key={i} className={`flex ${m.from === "me" ? "justify-end" : "justify-start"}`}>
                  <p
                    className={`max-w-[85%] px-4 py-2.5 text-sm leading-relaxed ${
                      m.from === "me" ? "bg-gold-400 text-ink" : "border border-line bg-panel text-ivory"
                    }`}
                  >
                    {m.text}
                  </p>
                </div>
              ))}
              {step === "interest" && (
                <div className="flex flex-wrap gap-2 pt-1">
                  {QUICK.map((q) => (
                    <button
                      key={q}
                      type="button"
                      onClick={() => pickInterest(q)}
                      className="border border-gold-500/60 px-3.5 py-2 text-xs text-ivory transition-colors hover:border-gold-300 hover:text-gold-300"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              )}
              {step === "done" && (
                <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn-ghost w-full !py-3">
                  Chat on WhatsApp
                </a>
              )}
              <div ref={endRef} />
            </div>

            {inputStep && (
              <form onSubmit={submit} className="flex gap-2 border-t border-line p-3">
                <label htmlFor="chat-input" className="sr-only">
                  {step === "name" ? "Your name" : "Your phone number"}
                </label>
                <input
                  id="chat-input"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  type={step === "phone" ? "tel" : "text"}
                  autoComplete={step === "phone" ? "tel" : "name"}
                  placeholder={step === "name" ? "Your name" : "Phone / WhatsApp"}
                  className="field !py-3"
                  autoFocus
                />
                <button type="submit" className="btn-gold !px-4" aria-label="Send">
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M4 12h14M13 6l6 6-6 6" />
                  </svg>
                </button>
              </form>
            )}
          </section>
        )}

        <div className="flex items-center gap-3">
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="flex h-14 w-14 items-center justify-center border border-gold-500/60 bg-ink text-gold-400 shadow-xl transition-colors hover:border-gold-300 hover:text-gold-300"
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden="true">
              <path d="M12.04 2a9.9 9.9 0 0 0-8.5 14.9L2 22l5.2-1.5A9.9 9.9 0 1 0 12.04 2Zm0 18.1a8.2 8.2 0 0 1-4.2-1.15l-.3-.18-3.1.9.93-3-.2-.31a8.2 8.2 0 1 1 6.87 3.74Zm4.5-6.1c-.25-.12-1.46-.72-1.69-.8-.23-.09-.39-.12-.56.12s-.64.8-.78.96c-.15.17-.29.19-.54.06a6.7 6.7 0 0 1-1.98-1.22 7.4 7.4 0 0 1-1.37-1.7c-.14-.25 0-.38.1-.5.11-.11.25-.29.37-.43.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.43-.06-.12-.56-1.35-.77-1.85-.2-.48-.4-.42-.56-.42h-.48c-.17 0-.43.06-.66.31s-.87.85-.87 2.07.89 2.4 1.01 2.57c.12.17 1.75 2.67 4.24 3.74.59.26 1.06.41 1.42.52.6.19 1.14.16 1.57.1.48-.07 1.46-.6 1.67-1.17.2-.58.2-1.07.14-1.17-.06-.1-.23-.17-.48-.29Z" />
            </svg>
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close chat" : "Open chat"}
            aria-expanded={open}
            className="flex h-14 w-14 items-center justify-center bg-gold-400 text-ink shadow-xl transition-colors hover:bg-gold-300"
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
              <path d="M4 5h16v11H9l-5 4V5Z" />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}
