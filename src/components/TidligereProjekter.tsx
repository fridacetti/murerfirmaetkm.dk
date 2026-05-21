import { storyblokEditable } from "@storyblok/react";

export default function TidligereProjekter({ blok }: { blok: any }) {
  return (
    <section className="w-full" {...storyblokEditable(blok)}>
      <div className="flex flex-col gap-6 md:grid md:grid-cols-2">
        <h2>{blok.subtitle}</h2>
        <img src={blok.image?.filename} alt={blok.image?.alt} />
        <img src={blok.image?.filename} alt={blok.image?.alt} />
        <img src={blok.image?.filename} alt={blok.image?.alt} />
        <img src={blok.image?.filename} alt={blok.image?.alt} />
        <img src={blok.image?.filename} alt={blok.image?.alt} />
      </div>
    </section>
  );
}
