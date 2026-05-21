import { getStoryblokApi, StoryblokComponent } from "@storyblok/react";

export default async function DynamicPage(props: { params: Promise<{ slug?: string[] }> }) {
  const { slug } = await props.params;

  const resolvedSlug = slug ? slug.join("/") : "home";

  const storyblokApi = getStoryblokApi();
  const { data } = await storyblokApi.get(`cdn/stories/${resolvedSlug}`, {
    version: "draft",
  });

  return (
    <main>
      <StoryblokComponent blok={data.story.content} />
    </main>
  );
}
