import { storyblokEditable } from "@storyblok/react";

export default function Inkluderet({ blok }: { blok: any }) {
  return (
    <section {...storyblokEditable(blok)} className="md:bg-tertiary rounded-l-lg md:h-[379px] md:p-6 -mr-8 md:-mr-[155px] pr-4 md:pr-[155px] mb-6">
      <h2 className="subtitle mb-4">{blok.subtitle}</h2>

      <p className="bodytext">{blok.text}</p>
    </section>
  );
}
