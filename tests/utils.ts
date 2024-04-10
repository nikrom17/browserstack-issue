export const getStoryUrls = (json) => {
  const storyIds = Object.keys(json.stories);
  const filteredStoryIds = storyIds.filter(
    (storyId) => !storyId.includes("--docs") && !storyId.includes("comparison")
  );

  return filteredStoryIds.map((storyId) => {
    const search = new URLSearchParams({ viewMode: "story", id: storyId });
    return {
      storyUrl: `http://127.0.0.1:6006/iframe.html?${search.toString()}`,
      storyName: storyId,
    };
  });
};
