import { defineDocumentType, makeSource } from "contentlayer/source-files"
import rehypePrettyCode from "rehype-pretty-code"
import remarkGfm from "remark-gfm"


// export const Page = defineDocumentType(() => ({
//   name: "Page",
//   filePathPattern: `pages/**/*.mdx`,
//   contentType: "mdx",
//   fields: {
//     title: {
//       type: "string",
//       required: true,
//     },
//     description: {
//       type: "string",
//     },
//   },
//   computedFields: {
//     url: { type: 'string', resolve: (post) => `/posts/${post._raw.flattenedPath}` },
//   },
// }))

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    description: {
      type: "string",
    },
    date: {
      type: "date",
      required: true,
    },
  },
  computedFields: {
    url: { type: 'string', resolve: (post) => `/posts/${post._raw.flattenedPath}` },
  },
}))

const options = {
  theme: 'one-dark-pro',
};

export default makeSource({
  contentDirPath: "posts",
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [[rehypePrettyCode, options]],
  }
})

