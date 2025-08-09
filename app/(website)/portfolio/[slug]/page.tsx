import AdvancedCarousel from "@/app/components/ProjectsDisplay";
import Display from "@/app/components/SimpleDisplay";
import { getProjects } from "@/sanity/sanity-utils";
import { notFound } from "next/navigation";

export const dynamicParams = false;

export async function generateStaticParams() {
  const slugs = ["sketchbook", "personal-work", "commissions", "my-books"];

  return slugs.map((slug) => ({
    slug,
  }));
}

const pages = [
  {
    slug: "sketchbook",
    type: "sketch",
    title: "Sketchbook",
    dataType: "artwork",
  },
  {
    slug: "personal-work",
    type: "illustration",
    title: "Personal Work",
    dataType: "artwork",
  },
  {
    slug: "commissions",
    type: "project",
    title: "Commissions",
    dataType: "project",
  },
  {
    slug: "my-books",
    type: "environment", // You may need to create a new category for books
    title: "My Books",
    dataType: "project",
  },
];

interface PageProps {
  params: {
    slug: string;
  };
}

export default async function PortfolioPage(props: PageProps) {
  const { params } = props;

  const data = pages.find((page) => page.slug === params.slug);

  if (!data) {
    return notFound();
  }

  // Use AdvancedCarousel for project-based categories, Display for artwork-based
  const useAdvancedCarousel = data.dataType === "project";

  let projects = [];
  if (useAdvancedCarousel) {
    projects = await getProjects(data.type);
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-12 text-center">
        <h1 className="mb-4 font-eiko text-4xl font-bold text-gray-900 dark:text-white md:text-5xl">
          {data.title}
        </h1>
      </div>
      <div>
        <Display type={params.slug} />
      </div>

      {/* {useAdvancedCarousel ? (
        <div>
          <AdvancedCarousel type={params.slug} projects={projects} />
        </div>
      ) : (
        <div>
          <Display type={params.slug} />
        </div>
      )} */}
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
