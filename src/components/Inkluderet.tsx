import { storyblokEditable } from "@storyblok/react";

export default function Inkluderet({ blok }: { blok: any }) {
  return (
    <section className="bg-tertiary rounded-lg shadow p-6 md:p-8 max-w-xl mx-auto" {...storyblokEditable(blok)}>
      <h2 className="subtitle">{blok.subtitle}</h2>
      <p className="bodytext">{blok.text}</p>
    </section>
  );
}
