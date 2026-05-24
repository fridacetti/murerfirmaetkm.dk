import { storyblokEditable } from "@storyblok/react";

export default function KontaktForside({ blok }: { blok: any }) {
  return (
    <section className="w-full" {...storyblokEditable(blok)}>
      <div className="flex flex-col gap-6 md:grid md:grid-cols-2">
        <h2>{blok.subtitle}</h2>
        <p>{blok.text}</p>
        {blok.button_text && <a href={blok.button_link?.url}>{blok.button_text}</a>}
      </div>
    </section>
  );
}
