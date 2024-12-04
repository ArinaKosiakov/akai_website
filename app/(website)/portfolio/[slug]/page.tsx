import { notFound } from "next/navigation";

export const dynamicParams = false;

type PageType = "environements" | "illustrations" | "sketchbook" | "projects";

export async function generateStaticParams() {
  const slugs = ["environements", "illustrations", "sketchbook", "projects"];

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
    slug: "sketchbook",
    type: "sketchbook",
    title: "Sketchbook",
  },
  {
    slug: "projects",
    type: "project",
    title: "Projects",
  },
  {
    slug: "illustrations",
    type: "illustration",
    title: "Illustrations",
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
  console.log(data);

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
