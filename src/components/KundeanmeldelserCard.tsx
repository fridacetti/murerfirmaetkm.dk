import { storyblokEditable } from "@storyblok/react";
import { IoStarSharp } from "react-icons/io5";

export default function KundeanmeldelserCard({ blok }: { blok: any }) {
  return (
    <article {...storyblokEditable(blok)} className="flex min-h-[255px] flex-col items-center rounded bg-secondary px-8 py-7 text-center text-tekst2">
      <img src={blok.image.filename} alt={blok.image.alt} className="avatar-image mb-4 h-24 w-24 object-cover" />

      <h3 className="sectiontitle mb-3">{blok.name}</h3>

      <p className="bodytext mb-5 max-w-[230px] text-tekst2/80">“{blok.text}”</p>

      <div className="mt-auto flex gap-2 text-3xl text-[#FFF47A]">
        {Array.from({ length: Number(blok.rating) || 5 }).map(
          (
            _,
            starIndex, //gnorer værdien, men brug nummeret på stjernen.
          ) => (
            <IoStarSharp key={starIndex} />
          ),
        )}
      </div>
    </article>
  );
}
