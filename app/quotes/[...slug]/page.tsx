import { notFound } from "next/navigation";
import { Metadata } from "next";
import { allQuotes } from "contentlayer/generated";
import { MdxComponent } from "components/mdx-component";

interface PageProps {
  params: {
    slug: string[];
  };
}

// ====================================================================================================================
// URL 파라미터로부터 페이지 슬러그를 추출한다.
// `allQuotes` 배열에서 해당 슬러그와 일치하는 페이지를 찾는다.
// ====================================================================================================================
async function getPageFromParams(params: PageProps["params"]) {
  const slug = params?.slug?.join("/");
  const page = allQuotes.find((page) => page.slugAsParams === slug);

  if (!page) {
    null;
  }

  return page;
}

// ====================================================================================================================
// 페이지의 메타데이터(제목, 설명)를 생성한다.
// ====================================================================================================================
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const page = await getPageFromParams(params);

  if (!page) {
    return {};
  }

  return {
    title: page.title,
    description: page.description,
  };
}

// ====================================================================================================================
// 정적 생성을 위한 모든 가능한 경로 파라미터를 생성한다.
// ====================================================================================================================
export async function generateStaticParams(): Promise<PageProps["params"][]> {
  return allQuotes.map((page) => ({
    slug: page.slugAsParams.split("/"),
  }));
}

// ====================================================================================================================
// 메인 페이지 컴포넌트로, 파라미터를 받아 해당 페이지 내용을 렌더링한다.
// 페이지가 없으면 404 에러를 표시한다.
// 페이지 제목, 설명, 그리고 MDX 컨텐츠를 렌더링한다.
// ====================================================================================================================
export default async function PagePage({ params }: PageProps) {
  const page = await getPageFromParams(params);

  if (!page) {
    notFound();
  }

  return (
    <article className="py-6 prose dark:prose-invert">
      <h1>{page.title}</h1>
      {page.description && <p className="text-xl">{page.description}</p>}
      <hr />
      <MdxComponent code={page.body.code} />
    </article>
  );
}
