import { SanityClient } from "$utils/sanity";
import type { Experience, Project, ProjectLists, Skills , Certifications} from "$lib/types/sanity";
import type { PageLoad } from "./$types";

export const load: PageLoad = async () => {
	const experiences: Experience[] = await SanityClient.fetch(
		`*[_type == "experience"] | order(startDate)`,
	);

	const projectLists: ProjectLists[] = await SanityClient.fetch(
		`*[_type == "project"] | order(order asc) {
    title, "slug": slug.current, summary, coverImage, techStack, featured
  }`,
    );

    const skills: Skills[] = await SanityClient.fetch(`*[_type == "skills"]`);
    const certifications: Certifications[] = await SanityClient.fetch(`*[_type == "certifications"]`);


    const projects: Project[] = await SanityClient.fetch(`*[_type == "project"]`);

	return { experiences, projectLists, projects, skills, certifications };
};
