"use client";

import { storyblokEditable } from "@storyblok/react";
import Form from "./Form";
import KontaktInfo from "./KontaktInfo";
import Inkluderet from "./Inkluderet";

export default function Formular({ blok }: { blok: any }) {
  return (
    <section {...storyblokEditable(blok)} className="grid grid-cols-1 md:grid-cols-2 bg-[#F5EDE0]">
      {/* Venstre side */}
      <div className="bg-[#545943] text-white px-6 py-12 md:px-20 lg:px-36">
        <h2 className="mb-4 text-2xl md:text-3xl font-bold text-center md:text-left">Send os en besked</h2>
        <Form />
      </div>

    {/* Højre side */}
      <div className="flex flex-col gap-8 md:ml-[159px] px-8 py-10">

        {/* Inkluderet – først på mobil, sidst på desktop */}
        <div className="order-1 md:order-2">
          {blok.inkluderet?.map((item: any) => (
            <Inkluderet key={item._uid} blok={item} />
          ))}
        </div>

        {/* Kontaktinfo – sidst på mobil, først på desktop */}
        <div className="order-2 md:order-1">
          {blok.kontaktinfo?.map((item: any) => (
            <KontaktInfo key={item._uid} blok={item} />
          ))}
        </div>
        </div>
    </section>
  );
}
