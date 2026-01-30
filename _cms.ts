import cms from "top/_cms.ts";

// YouTube block definition for CMS
const youtubeBlock = {
  type: "object",
  name: "youtube",
  fields: [
    {
      type: "text",
      name: "youtube",
      description:
        "YouTube video ID. It's in the URL: <code>https://www.youtube.com/watch?v={id}</code> or <code>https://youtu.be/{id}</code>",
    },
    {
      type: "file",
      name: "cover",
      description: "Custom cover image (optional, uses YouTube thumbnail by default)",
    },
    "alt: text",
    "caption: markdown",
    "id: text",
    {
      type: "radio",
      name: "mode",
      options: ["default", "background"],
      description: "Video mode: default shows play button, background autoplays muted",
    },
  ],
};

// Get the existing "Pages" collection and add YouTube block to it
const pagesCollection = cms.collections.get("Pages");
if (pagesCollection) {
  // Find the blocks field and add YouTube to it
  const blocksField = pagesCollection.fields.find(
    (f: { name?: string }) => f.name === "blocks"
  );
  if (blocksField && "fields" in blocksField && Array.isArray(blocksField.fields)) {
    blocksField.fields.push(youtubeBlock);
  }
}

export default cms;
