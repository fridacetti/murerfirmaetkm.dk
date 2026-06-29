import { storyblokEditable } from "@storyblok/react";

export default function Murercard({ blok }: { blok: any }) {
  return (
    <section {...storyblokEditable(blok)} className="bg-primary px-8 py-14 md:px-20 lg:px-36">
      <div className="mx-auto max-w-7xl text-center text-tekst1">
        <h2 className="text-2xl font-bold mb-4 text-left">{blok.title}</h2>
        <p className="text-gray-700 mb-12 text-left">{blok.description}</p>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-20">
          {/* Person 1 */}
          <div className="flex flex-col items-start">
            <h3 className="font-semibold mb-6 text-left">{blok.name1}</h3>

            <div className="relative w-full md:max-w-[500px]">
              <div className="absolute inset-0 translate-x-6 translate-y-6 rounded-lg bg-tertiary" />

              {blok.image1?.filename ? <img src={blok.image1.filename} alt={blok.name1} className="relative z-10 aspect-square w-full object-cover shadow-md" /> : <div className="relative z-10 flex aspect-square w-full items-center justify-center rounded-lg bg-gray-200 text-gray-600">Intet billede</div>}
            </div>
          </div>

          {/* Person 2 */}
          <div className="flex flex-col items-start">
            <h3 className="font-semibold mb-6 text-left">{blok.name2}</h3>

            <div className="relative w-full md:max-w-[500px]">
              <div className="absolute inset-0 translate-x-6 translate-y-6 rounded-lg bg-tertiary" />

              {blok.image2?.filename ? <img src={blok.image2.filename} alt={blok.name2} className="relative z-10 aspect-square w-full object-cover shadow-md" /> : <div className="relative z-10 flex aspect-square w-full items-center justify-center rounded-lg bg-gray-200 text-gray-600">Intet billede</div>}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
