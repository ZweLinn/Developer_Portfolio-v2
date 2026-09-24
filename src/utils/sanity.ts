import { createClient } from "@sanity/client";
import imageUrlBuilder, { type SanityImageSource } from '@sanity/image-url'

export const SanityClient = createClient({
	projectId: "ytompvz5",
	dataset: "production",
	useCdn: true,
	apiVersion: "2026-03-01",
});
const builder = imageUrlBuilder(SanityClient)
export const urlFor = (source: SanityImageSource) => {
	return builder.image(source)
};
