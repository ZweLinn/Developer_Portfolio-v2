import { error } from "@sveltejs/kit";
import { SanityClient } from "$utils/sanity";
import type { Project } from "$lib/types/sanity";
import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ params }) => {
	const project: Project | null = await SanityClient.fetch(
		`*[_type == "project" && slug.current == $slug][0]`,
		{ slug: params.slug },
	);

	if (!project) {
		error(404, "Project not found");
	}

	return { project };
};
