import { storyblokEditable, StoryblokComponent } from "@storyblok/react";

export default function Ydelser({ blok }: { blok: any }) {
  return (
    <div {...storyblokEditable(blok)}>
      <h2>{blok.subtitle}</h2>
       {blok.services?.map((services: any) => (
                  <StoryblokComponent key={services._uid} blok={services} />
                ))}
    </div>
  );
}
