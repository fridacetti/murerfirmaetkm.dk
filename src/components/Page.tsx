import { storyblokEditable, StoryblokComponent } from "@storyblok/react";

export default function Page({ blok }: { blok: any }) {

  return (
    <main {...storyblokEditable(blok)}>
      {blok.body?.map((nestedBlok: any, index: number) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} index={index} />
      ))}
    </main>
  );
}
