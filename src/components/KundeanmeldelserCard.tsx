import { storyblokEditable } from "@storyblok/react";

export default function KundeanmeldelserCard({ blok }: { blok: any }) {
  return (
    <div {...storyblokEditable(blok)}>
      <img src={blok.image?.filename} alt="icon" />
      <h3>{blok.name}</h3>
      <p>{blok.text}</p>
      <p>{blok.rating}</p>
    </div>
  );
}
