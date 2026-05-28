import Link from "next/link";
import { storyblokEditable, StoryblokComponent } from "@storyblok/react";

export default function YdelserCard({ blok }: { blok: any }) {
  const href = blok.link?.cached_url || blok.link?.url || "#";

  return (
    <div {...storyblokEditable(blok)} className="image-radius group relative aspect-[290/391] overflow-hidden text-left">
      {blok.image?.filename && <img src={blok.image.filename} alt={blok.image.alt} className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />}

      <div className="absolute inset-0 bg-tekst1/35 transition-colors duration-300 group-hover:bg-tekst1/50" />

      <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 px-6 text-center">
        <h3 className="sectiontitle text-tekst2">{blok.sectiontitle}</h3>

        <div className="opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 z-20 relative">
          {blok.button?.map((button: any) => (
            <StoryblokComponent blok={button} key={button._uid} />
          ))}
        </div>

        <Link href={`/${href}`} className="absolute inset-0 z-10" aria-label={blok.sectiontitle} />
      </div>
    </div>
  );
}
