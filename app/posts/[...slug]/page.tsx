import Comment from "components/Comment";
import { MdxComponent } from "components/MdxComponent";
import { allPosts } from "contentlayer/generated";
import { format, parseISO } from "date-fns";
import { Metadata } from "next";
import { notFound } from "next/navigation";

interface PostProps {
  params: {
    slug: string[];
  };
}

async function getPostFromParams(params: PostProps["params"]) {
  const slug = params?.slug?.join("/");
  const post = allPosts.find((post) => post.slugAsParams === slug);

  if (!post) {
    null;
  }

  return post;
}

export async function generateMetadata({ params }: PostProps): Promise<Metadata> {
  const post = await getPostFromParams(params);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.description,
  };
}

export async function generateStaticParams(): Promise<PostProps["params"][]> {
  return allPosts.map((post) => ({
    slug: post.slugAsParams.split("/"),
  }));
}

export default async function PostPage({ params }: any) {
  const post = await getPostFromParams(params);

  if (!post) {
    notFound();
  }

  return (
    <article className="mx-auto max-w-xl py-8 font-medium prose dark:prose-invert">
      <div className="mb-8">
        <p className="text-xl">{post.title}</p>
        <time dateTime={post.date} className="mb-1 text-sm text-gray-400">
          {format(parseISO(post.date), "LLLL d, yyyy")}
        </time>
      </div>
      <div className="my-4">
        <MdxComponent code={post.body.code} />
        <Comment />
      </div>
    </article>
  );
}
