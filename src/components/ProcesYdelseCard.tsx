import { storyblokEditable } from "@storyblok/react";

export default function ProcesYdelseCard({ blok }: { blok: any }) {
  return (
    <div {...storyblokEditable(blok)}>
      <h1>{blok.number}</h1>
      <h2>{blok.subtitle}</h2>
      <p>{blok.text}</p>
    </div>
  );
}
