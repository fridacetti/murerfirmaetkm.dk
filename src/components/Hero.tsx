import { storyblokEditable } from "@storyblok/react";

export default function Hero({ blok }: { blok: any }) {
  switch (blok?.variant) {
    case "home":
      return (
        <section {...storyblokEditable(blok)}>
          <h1>{blok.title}</h1>
          <h2>{blok.subtitle}</h2>
          {/* IMAGE */}
          {blok.image?.filename && <img src={blok.image.filename} alt={blok.image.alt || ""} />}

          {/* PRIMARY BUTTON */}
          {blok.primary_button_text && <a href={blok.primary_button_link?.url}>{blok.primary_button_text}</a>}

          {/* SECONDARY BUTTON */}
          {blok.secondary_button_text && <a href={blok.secondary_button_link?.url}>{blok.secondary_button_text}</a>}
        </section>
      );

    case "ydelser":
      return (
        <section {...storyblokEditable(blok)}>
          <h1>{blok.title}</h1>
          <h2>{blok.subtitle}</h2>
          <p>{blok.text}</p>
          {blok.image?.filename && <img src={blok.image.filename} alt={blok.image.alt || ""} />}
            
        </section>
      );

    case "omos":
      return (
        <section {...storyblokEditable(blok)}>
          <h1>{blok.title}</h1>
          <h2>{blok.subtitle}</h2>
          <p>{blok.text}</p>
          {blok.image?.filename && <img src={blok.image.filename} alt={blok.image.alt || ""} />}
          {blok.primary_button_text && <a href={blok.primary_button_link?.url}>{blok.primary_button_text}</a>}
        </section>
      );

    case "kontakt":
      return (
        <section {...storyblokEditable(blok)}>
          <h1>{blok.title}</h1>
          <p>{blok.text}</p>
        </section>
      );

    default:
      return (
        <section {...storyblokEditable(blok)}>
          <h1>{blok?.title || "Hero (no variant)"}</h1>
        </section>
      );
  }
}

