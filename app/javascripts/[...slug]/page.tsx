import Comment from "components/Comment";
import { MdxComponent } from "components/MdxComponent";
import { allJavaScripts } from "contentlayer/generated";
import { format, parseISO } from "date-fns";
import { Metadata } from "next";
import { notFound } from "next/navigation";

interface JavaScriptProps {
  params: {
    slug: string[];
  };
}

async function getJavascriptFromParams(params: JavaScriptProps["params"]) {
  const slug = params?.slug?.join("/");
  const javascript = allJavaScripts.find((javascript) => javascript.slugAsParams === slug);

  if (!javascript) {
    null;
  }

  return javascript;
}

export async function generateMetadata({ params }: JavaScriptProps): Promise<Metadata> {
  const javascript = await getJavascriptFromParams(params);

  if (!javascript) {
    return {};
  }

  return {
    title: javascript.title,
    description: javascript.description,
  };
}

export async function generateStaticParams(): Promise<JavaScriptProps["params"][]> {
  return allJavaScripts.map((javascript) => ({
    slug: javascript.slugAsParams.split("/"),
  }));
}

export default async function JavaScriptPage({ params }: any) {
  const javascript = await getJavascriptFromParams(params);

  if (!javascript) {
    notFound();
  }

  return (
    <article className="mx-auto max-w-xl py-8 font-medium prose dark:prose-invert">
      <div className="mb-8">
        <p className="text-xl">{javascript.title}</p>
        <time dateTime={javascript.date} className="mb-1 text-sm text-gray-400">
          {format(parseISO(javascript.date), "LLLL d, yyyy")}
        </time>
      </div>
      <div className="my-4">
        <MdxComponent code={javascript.body.code} />
      </div>
      <Comment />
    </article>
  );
}
