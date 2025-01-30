import { Project } from "@/types/Projects";
import { createClient, groq } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

export async function getProjects(): Promise<Project[]> {
  const client = createClient({
    projectId: "cly2k8p2",
    dataset: "production",
    apiVersion: "2021-10-21",
  });

  return await client.fetch(
    groq`*[_type == "project"]{
          _id,
          _createdAt,
          name,
          "slug": slug.current,
          "image": image.asset->url,
          "alt": image.alt,
          url,
          content
        }`,
  );
}
