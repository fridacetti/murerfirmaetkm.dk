import { storyblokEditable, StoryblokComponent } from "@storyblok/react";

export default function KontaktForside({ blok }: { blok: any }) {
  return (
    <section
      {...storyblokEditable(blok)}
      className="bg-tertiary px-8 py-12 md:px-20 md:py-16 lg:px-36"
    >
      <div className="mx-auto flex max-w-sm flex-col items-center text-center">
        <h2 className="subtitle mb-4 text-tekst1">
          {blok.subtitle}
        </h2>

        {/* mb-7 kan også sættes ned til mb-4 hvis teksten skal tættere på knappen */}
        <p className="bodytext mb-4 whitespace-pre-line text-tekst1/80">
          {blok.text}
        </p>

        {/* mt-8 er ændret til mt-4 for at rykke knappen tættere på teksten */}
        <div className="mt-4 flex justify-center">
          {blok.button?.map((button: any) => (
            <StoryblokComponent blok={button} key={button._uid} />
          ))}
        </div>
      </div>
    </section>
  );
}
