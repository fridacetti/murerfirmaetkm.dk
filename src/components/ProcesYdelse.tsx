import { storyblokEditable, StoryblokComponent } from "@storyblok/react";

export default function ProcesYdelse({ blok }: { blok: any }) {
  return (
    <section className="w-full" {...storyblokEditable(blok)}>
      <div className="flex flex-col gap-6 md:grid md:grid-cols-2">
        <h2>{blok.subtitle}</h2>
        <p>{blok.text}</p>
        <div className="grid grid-cols-2 gap-6">
          {blok.steps?.map((step: any) => (
            <StoryblokComponent key={step._uid} blok={step} />
          ))}
        </div>
      </div>
    </section>
  );
}
