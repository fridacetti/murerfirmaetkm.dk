import { getStoryblokApi, StoryblokComponent } from "@storyblok/react";

export default async function Home() {
  const storyblokApi = getStoryblokApi();
  const { data } = await storyblokApi.get("cdn/stories/home", {
    version: "draft",
  });

  // DEBUG: log story content so we can verify whether a `hero` block is present
  // This prints to the Next.js server console when the page is requested.
  // Remove after debugging.
  // eslint-disable-next-line no-console
  console.log("[storyblok] data.story.content:", JSON.stringify(data?.story?.content, null, 2));

  return (
    <main>
      <StoryblokComponent blok={data.story.content} />
    </main>
  );
}
