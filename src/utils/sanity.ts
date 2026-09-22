import { createClient } from "@sanity/client";

export const SanityClient = createClient({
	projectId: "ytompvz5",
	dataset: "production",
	useCdn: true,
	apiVersion: "2026-03-01",
});
