import { storyblokEditable } from "@storyblok/react";
import { HiPhone, HiMail } from "react-icons/hi";

const icons = {
  phone: HiPhone,
  mail: HiMail,
};

export default function HeroCard({ blok }: { blok: any }) {
  const Icon = icons[blok.icon as keyof typeof icons];

  return (
    <div {...storyblokEditable(blok)} className="flex flex-col gap-1 min-w-0">
      {/* TOP LINJE: Kun Ikon og overskrift – items-center tvinger dem på linje */}
      <div className="flex items-center gap-2">
        {Icon && <Icon className="h-7 w-7 shrink-0 text-cta" />}
        <h3 className="sectiontitle text-tekst1 m-0">{blok.sectiontitle}</h3>
      </div>

      {/* BUND BLOK: Tekst og numre stables under top-linjen */}
      {/* pl-8 rykker teksten ind, så den flugter med "T" i Telefon og "E" i E-mail */}
      <div className="pl-8 flex flex-col gap-0.5">
        {blok.text && <p className="bodytext m-0 truncate text-tekst1">{blok.text}</p>}
        {blok.text2 && <p className="bodytext m-0 truncate text-tekst1">{blok.text2}</p>}
      </div>
    </div>
  );
}
