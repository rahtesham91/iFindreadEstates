import Image from "next/image";

type Props = { eyebrow: string; title: string; text: string; image?: string; imageAlt?: string };

// With a photo: dark overlay and light text. Without one: a clean cream hero with a soft gold glow.
export default function PageHero({ eyebrow, title, text, image, imageAlt = "" }: Props) {
  return (
    <section className={`relative isolate overflow-hidden border-b border-line pt-20 ${image ? "bg-[#14110d]" : ""}`}>
      {image ? (
        <>
          <Image src={image} alt={imageAlt} fill priority quality={80} sizes="100vw" className="-z-20 object-cover" />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#14110d]/85 via-[#14110d]/55 to-[#14110d]/20 rtl:bg-gradient-to-l" />
        </>
      ) : (
        <div aria-hidden="true" className="absolute inset-0 -z-10" style={{ background: "radial-gradient(56rem 26rem at 12% 0%, rgb(var(--c-gold-500) / 0.16), transparent 62%)" }} />
      )}
      <div className="container-page py-20 sm:py-28 lg:py-32">
        <p className={`eyebrow mb-5 ${image ? "!text-[#E3BF73]" : ""}`}>{eyebrow}</p>
        <h1 className={`t-h1 max-w-3xl ${image ? "text-white" : ""}`}>{title}</h1>
        <div className={`gold-rule mt-7 ${image ? "!bg-[#E3BF73]" : ""}`} />
        <p className={`t-lede mt-7 max-w-xl ${image ? "!text-white/85" : ""}`}>{text}</p>
      </div>
    </section>
  );
}
