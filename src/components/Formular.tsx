"use client";
import { StoryblokComponent, storyblokEditable } from "@storyblok/react";
import Form from "./Form";

export default function Formular({ blok }: { blok: any }) {
  const kontaktInfoItems = blok.kontaktinfo || blok.kontaktInfo || blok.KontaktInfo || [];

  return (
    <div className="grid md:grid-cols-2">
      <div {...storyblokEditable(blok)} className="bg-[#545943] text-white px-8 py-16 md:px-20 lg:px-36">
        <h2 className="mb-4">Send os en besked</h2>
        <Form />
      </div>{" "}
      <div>
        {blok.inkluderet?.map((inkluderet: any) => (
          <StoryblokComponent key={inkluderet._uid} blok={inkluderet} />
        ))}
      </div>
      <div>
        {kontaktInfoItems.map((kontaktinfo: any) => (
          <StoryblokComponent key={kontaktinfo._uid} blok={kontaktinfo} />
        ))}
      </div>
    </div>
  );
}
