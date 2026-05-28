import { storyblokEditable, StoryblokComponent } from "@storyblok/react";

export default function Murercard({ blok, index = 0 }: { blok: any; index?: number }) {
  // % 2 tjekker om kortets nummer er lige eller ulige.
  // Lige kort får billedet til venstre, ulige kort får billedet til højre.
  const imageSide = index % 2 === 0 ? "left" : "right";

  // Her tjekkes om billedet ligger til højre.
  const showHeading = imageSide === "right";
  const shadowSide = imageSide === "right" ? "left-7" : "-left-7";

  const image = (
    // md:mr-0 skubber billedet mod højre på desktop. md:ml-0 skubber billedet mod venstre.
    <div className={`relative mx-auto w-full max-w-[385px] ${imageSide === "right" ? "md:mr-0" : "md:ml-0"}`}> 
      <div className={`absolute top-7 h-full w-full rounded bg-tertiary ${shadowSide}`} />

      <img
        src={blok.image.filename}
        alt={blok.image.alt || blok.title || "Murer"}
        className="relative z-10 aspect-square w-full object-cover"
      />
    </div>
  );

  const content = (
    <div className="max-w-3xl">
      <h3 className="sectiontitle mb-4 text-tekst1">{blok.title}</h3>

      <div className="space-y-5 whitespace-pre-line text-tekst1/90">
        <p className="bodytext">{blok.text}</p>
      </div>

      {/* ikoner fra storyblok*/}
      <div className="mt-6 flex gap-8 text-cta">
        {blok.icons?.map((nestedBlok: any) => ( //denne linje tjekker om der er ikoner i blokken, og hvis ja, så map'er den igennem dem. Hvert ikon er et "nestedBlok", og for hvert ikon renderes en StoryblokComponent 
          <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
        ))}
      </div>
    </div>
  );

  return (
    <section {...storyblokEditable(blok)} className={`bg-primary px-8 md:px-20 lg:px-36 ${showHeading ? "py-16" : "pb-16"}`}>
      <div className="mx-auto max-w-7xl">
        {showHeading && <h2 className="subtitle mb-16 text-tekst1">To fagfolk - én fælles passion</h2>}

        {/* === tjekker om imageSide er præcis "left". Hvis ja, bruges layoutet med billedet først. */}
        <article className={`grid items-center gap-12 md:gap-16 lg:gap-20 ${imageSide === "left" ? "md:grid-cols-[minmax(320px,385px)_minmax(0,1fr)]" : "md:grid-cols-[minmax(0,1fr)_minmax(320px,385px)]"}`}>
          {/* Her bestemmer === om billedet eller teksten skal vises først. */}
          {imageSide === "left" ? ( 
            <>
              <div className="md:order-1">{image}</div>
              <div className="md:order-2">{content}</div>
            </>
          ) : (
            <>
              <div>{content}</div>
              <div>{image}</div>
            </>
          )}
        </article>
      </div>
    </section>
  );
}
