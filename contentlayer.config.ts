import { ComputedFields, defineDocumentType, makeSource } from "contentlayer/source-files";
import rehypePrettyCode from "rehype-pretty-code";
import remarkGfm from "remark-gfm";

const computedFields: ComputedFields = {
  slug: {
    type: "string",
    resolve: (doc) => `/${doc._raw.flattenedPath}`,
  },
  slugAsParams: {
    type: "string",
    resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/"),
  },
};

export const Quote = defineDocumentType(() => ({
  name: "Quote",
  filePathPattern: `quotes/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    date: {
      type: "date",
      required: true,
    },
    description: {
      type: "string",
    },
  },
  computedFields,
}));

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `posts/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    date: {
      type: "date",
      required: true,
    },
    description: {
      type: "string",
    },
  },
  computedFields,
}));

export const Algorithm = defineDocumentType(() => ({
  name: "Algorithm",
  filePathPattern: `algorithms/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    date: {
      type: "date",
      required: true,
    },
    description: {
      type: "string",
    },
  },
  computedFields,
}));

export const JavaScript = defineDocumentType(() => ({
  name: "JavaScript",
  filePathPattern: `javascripts/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    date: {
      type: "date",
      required: true,
    },
    description: {
      type: "string",
    },
  },
  computedFields,
}));

const options = {
  // theme: "one-dark-pro",
  theme: "rose-pine-moon",
};

const rehypeOptions = {
  theme: "slack-dark",
  keepBackground: true,
};

export default makeSource({
  contentDirPath: "./content",
  documentTypes: [Post, Quote, Algorithm, JavaScript],
  mdx: {
    // remarkPlugins: [remarkGfm],
    rehypePlugins: [[rehypePrettyCode, options]],
  },
});
