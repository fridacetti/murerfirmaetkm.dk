import { storyblokEditable } from "@storyblok/react";

export default function FaqItem({ blok }: { blok: any }) {
  return (
    <div {...storyblokEditable(blok)}>
      <h3>{blok.question}</h3>
      <p>{blok.answer}</p>
    </div>
  );
}
