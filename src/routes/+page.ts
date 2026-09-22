import { SanityClient } from "../utils/sanity";
import type { Experience } from "$lib/types/sanity";
import type { PageLoad } from "./$types";

export const load: PageLoad = async () => {
	const experiences: Experience[] = await SanityClient.fetch(
		`*[_type == "experience"] | order(startDate)`,
	);
	return { experiences };
};
