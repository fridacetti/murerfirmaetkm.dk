import { storyblokEditable, StoryblokComponent } from "@storyblok/react";

export default function Faq({ blok }: { blok: any }) {
  return (
    <section className="w-full" {...storyblokEditable(blok)}>
      <div className="flex flex-col gap-6 md:grid md:grid-cols-2">
        <h2>{blok.subtitle}</h2>
        <div className="grid grid-cols-2 gap-6">
          {blok.items?.map((item: any) => (
            <StoryblokComponent key={item._uid} blok={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
