import AdvancedCarousel from "@/app/components/advancedCarousel";
import Display from "@/app/components/display";
import { notFound } from "next/navigation";

export const dynamicParams = false;

type PageType = "environemnts" | "illustrations" | "sketchbook" | "projects";

export async function generateStaticParams() {
  const slugs = ["environments", "illustrations", "sketchbook", "projects"];

  return slugs.map((slug) => ({
    slug,
  }));
}

const pages = [
  {
    slug: "environments",
    type: "environment",
    title: "Environments",
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
  let isTrue: boolean;

  const data = pages.find((page) => page.slug === params.slug);
  // console.log(data);

  if (!data) {
    return notFound();
  }
  params.slug === "projects" || params.slug === "environments"
    ? (isTrue = true)
    : (isTrue = false);

  return (
    <div>
      {isTrue ? (
        <div>
          <AdvancedCarousel type={params.slug} />
        </div>
      ) : (
        <div>
          <Display type={params.slug} />
        </div>
      )}
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
