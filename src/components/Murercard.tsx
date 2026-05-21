import { storyblokEditable } from "@storyblok/react";

export default function Murercard({ blok }: { blok: any }) {
  return (
    <section className="w-full" {...storyblokEditable(blok)}>
      <div className="flex flex-col gap-6 md:grid md:grid-cols-2">
        <h1>{blok.title}</h1>
        <p>{blok.text}</p>
        {blok.image?.filename && <img src={blok.image.filename} alt={blok.image.alt || ""} />}
      </div>
    </section>
  );
}
