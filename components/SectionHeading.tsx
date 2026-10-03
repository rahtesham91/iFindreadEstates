type Props = {
  eyebrow?: string;
  title: string;
  text?: string;
  align?: "left" | "center";
  className?: string;
};

export default function SectionHeading({ eyebrow, title, text, align = "left", className = "" }: Props) {
  const center = align === "center";
  return (
    <div className={`${center ? "mx-auto text-center" : ""} max-w-2xl ${className}`}>
      {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
      <h2 className="h-display text-4xl sm:text-5xl">{title}</h2>
      <div className={`gold-rule mt-6 ${center ? "mx-auto" : ""}`} />
      {text && <p className="mt-6 text-base leading-relaxed text-mute sm:text-lg">{text}</p>}
    </div>
  );
}
