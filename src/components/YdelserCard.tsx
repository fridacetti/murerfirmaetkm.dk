import { storyblokEditable } from "@storyblok/react";

export default function YdelserCard({ blok }: { blok: any }) {
  return (
    <div {...storyblokEditable(blok)}>
         <h3>{blok.sectiontitle}</h3>
      <img src={blok.image.filename} alt="image" />
    </div>
  );
}
