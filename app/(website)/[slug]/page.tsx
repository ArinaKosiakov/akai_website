import { notFound } from "next/navigation";

export const dynamicParams = false;

type PageType = "environement" | "character" | "illustration" | "sketchbook";

export async function generateStaticParams() {
  const slugs = ["environements", "characters"];

  return slugs.map((slug) => ({
    slug,
  }));
}

const pages = [
  {
    slug: "environements",
    type: "environement",
    title: "Environements",
  },
  {
    slug: "characters",
    type: "character",
    title: "Characters",
  },
];

interface PageProps {
  params: {
    slug: string;
  };
}

export default function PortfolioPage(props: PageProps) {
  const { params } = props;

  const data = pages.find((page) => page.slug === params.slug);

  if (!data) {
    return notFound();
  }

  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.type}</p>
    </div>
  );
}

/**
 * / (portfolio)
 * /about
 * /contacts
 * /[slug] -> ["environements", "characters", "illustrations", "sketchbook"]
 *
 * <Environement />
 */
