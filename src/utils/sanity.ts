import { createClient } from "@sanity/client";
import imageUrlBuilder, { type SanityImageSource } from '@sanity/image-url'
import { PUBLIC_SANITY_PROJECT_ID } from "$env/static/public";

export const SanityClient = createClient({
	projectId: PUBLIC_SANITY_PROJECT_ID,
	dataset: "production",
	useCdn: true,
	apiVersion: "2026-03-01",
});
const builder = imageUrlBuilder(SanityClient)
export const urlFor = (source: SanityImageSource) => {
	return builder.image(source)
};
