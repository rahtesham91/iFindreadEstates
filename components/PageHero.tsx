import Placeholder from "./Placeholder";

type Props = { eyebrow: string; title: string; text: string; imageLabel: string };

export default function PageHero({ eyebrow, title, text, imageLabel }: Props) {
  return (
    <section className="relative isolate overflow-hidden border-b border-line pt-20">
      <Placeholder label={imageLabel} size="1920 x 800" className="absolute inset-0 -z-20 !border-0" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r rtl:bg-gradient-to-l from-ink via-ink/85 to-ink/40" />
      <div className="container-page py-24 sm:py-32 lg:py-40">
        <p className="eyebrow mb-5">{eyebrow}</p>
        <h1 className="h-display max-w-3xl text-5xl sm:text-6xl lg:text-7xl">{title}</h1>
        <div className="gold-rule mt-8" />
        <p className="mt-8 max-w-xl text-lg leading-relaxed text-ivory/80">{text}</p>
      </div>
    </section>
  );
}
