import { SanityClient } from "../utils/sanity";
import type { Experience } from "$lib/types/sanity";
import type { Project } from "$lib/types/sanity";
import type { PageLoad } from "./$types";

export const load: PageLoad = async () => {
	const experiences: Experience[] = await SanityClient.fetch(
		`*[_type == "experience"] | order(startDate)`,
    );

	const projectLists: Project[] = await SanityClient.fetch(
		`*[_type == "project"] | order(order asc) {
    title, "slug": slug.current, summary, coverImage, techStack, featured
  }`,
    );

	const projects: Project[] = await SanityClient.fetch(
		`*[_type == "project"]`,
	);
	return { experiences, projectLists, projects };
};
