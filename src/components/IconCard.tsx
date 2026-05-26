import { storyblokEditable } from "@storyblok/react";
import { HiOutlineClipboardList } from "react-icons/hi";
import { LuSmile } from "react-icons/lu";
import { GiLaurels } from "react-icons/gi";
import { PiTreeBold } from "react-icons/pi";
import { AiOutlineFire } from "react-icons/ai";
import { FaRegLightbulb } from "react-icons/fa";

const icons = {
  check: HiOutlineClipboardList,
  laurels: GiLaurels,
  tree: PiTreeBold,
  fire: AiOutlineFire,
  light: FaRegLightbulb,
  smile: LuSmile,
};

export default function Iconcard({ blok }: { blok: any }) {
  const Icon = icons[blok.icon as keyof typeof icons];

  return (
    <div {...storyblokEditable(blok)} className="flex flex-col items-center gap-1">
      {Icon && <Icon className="text-2xl text-cta" />}
      <span className="text-[10px] uppercase tracking-wide">{blok.label}</span>
    </div>
  );
}
