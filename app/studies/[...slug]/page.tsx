import Comment from "components/Comment";
import { MdxComponent } from "components/MdxComponent";
import { allStudies } from "contentlayer/generated";
import { format, parseISO } from "date-fns";
import { Metadata } from "next";
import { notFound } from "next/navigation";

interface StudyProps {
  params: {
    slug: string[];
  };
}

async function getStudyFromParams(params: StudyProps["params"]) {
  const slug = params?.slug?.join("/");
  const study = allStudies.find((study) => study.slugAsParams === slug);

  if (!study) {
    null;
  }

  return study;
}

export async function generateMetadata({ params }: StudyProps): Promise<Metadata> {
  const study = await getStudyFromParams(params);

  if (!study) {
    return {};
  }

  return {
    title: study.title,
    description: study.description,
  };
}

export async function generateStaticParams(): Promise<StudyProps["params"][]> {
  return allStudies.map((study) => ({
    slug: study.slugAsParams.split("/"),
  }));
}

export default async function StudyPage({ params }: any) {
  const study = await getStudyFromParams(params);

  if (!study) {
    notFound();
  }

  return (
    <article className="mx-auto max-w-xl py-8 font-medium prose dark:prose-invert">
      <div className="mb-8">
        <p className="text-xl">{study.title}</p>
        <time dateTime={study.date} className="mb-1 text-sm text-gray-400">
          {format(parseISO(study.date), "LLLL d, yyyy")}
        </time>
      </div>
      <div className="my-4">
        <MdxComponent code={study.body.code} />
      </div>
      <Comment />
    </article>
  );
}
