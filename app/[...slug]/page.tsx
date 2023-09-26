import { notFound } from "next/navigation"
import { Metadata } from "next"
import { allQuotes } from "contentlayer/generated"
import { MdxComponent } from "components/MdxComponent"

interface QuoteProps {
  params: {
    slug: string[]
  }
}

async function getPageFromParams(params: QuoteProps["params"]) {
  const slug = params?.slug?.join("/")
  const quote = allQuotes.find((quote) => quote.slugAsParams === slug)

  if (!quote) {
    null
  }

  return quote
}

export async function generateMetadata({
  params,
}: QuoteProps): Promise<Metadata> {
  const quote = await getPageFromParams(params)

  if (!quote) {
    return {}
  }

  return {
    title: quote.title,
    description: quote.description,
  }
}

export async function generateStaticParams(): Promise<QuoteProps["params"][]> {
  return allQuotes.map((quote) => ({
    slug: quote.slugAsParams.split("/"),
  }))
}

export default async function PagePage({ params }: QuoteProps) {
  const quote = await getPageFromParams(params)

  if (!quote) {
    notFound()
  }

  return (
    <article className="py-6 prose dark:prose-invert">
      <h1>{quote.title}</h1>
      {quote.description && <p className="text-xl">{quote.description}</p>}
      <hr />
      <MdxComponent code={quote.body.code} />
    </article>
  )
}