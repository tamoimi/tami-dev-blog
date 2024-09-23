import Comment from "components/comment";
import { MdxComponent } from "components/mdx-component";
import { allAlgorithms } from "contentlayer/generated";
import { format, parseISO } from "date-fns";
import { Metadata } from "next";
import { getMDXComponent, useMDXComponent } from "next-contentlayer/hooks";
import { notFound } from "next/navigation";

interface AlgorithmProps {
  params: {
    slug: string[];
  };
}

async function getAlgorithmFromParams(params: AlgorithmProps["params"]) {
  const slug = params?.slug?.join("/");
  const algorithm = allAlgorithms.find((algorithm) => algorithm.slugAsParams === slug);

  if (!algorithm) {
    null;
  }

  return algorithm;
}

export async function generateMetadata({ params }: AlgorithmProps): Promise<Metadata> {
  const algorithm = await getAlgorithmFromParams(params);

  if (!algorithm) {
    return {};
  }

  return {
    title: algorithm.title,
    description: algorithm.description,
  };
}

export async function generateStaticParams(): Promise<AlgorithmProps["params"][]> {
  return allAlgorithms.map((algorithm) => ({
    slug: algorithm.slugAsParams.split("/"),
  }));
}

export default async function StudyPage({ params }: any) {
  const algorithm = await getAlgorithmFromParams(params);

  if (!algorithm) {
    notFound();
  }

  return (
    <article className="mx-auto max-w-xl py-8 font-medium prose dark:prose-invert">
      <div className="mb-8">
        <p className="text-xl">{algorithm.title}</p>
        <time dateTime={algorithm.date} className="mb-1 text-sm text-gray-400">
          {format(parseISO(algorithm.date), "LLLL d, yyyy")}
        </time>
      </div>
      <div className="my-4">
        <MdxComponent code={algorithm.body.code} />
      </div>
      <Comment />
    </article>
  );
}
