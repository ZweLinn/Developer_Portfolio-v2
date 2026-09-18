import { createClient } from "@sanity/client";

export const client = createClient({
	projectId: "<your-project-id>",
	dataset: "<your-dataset>",
	useCdn: true,
	apiVersion: "2026-03-01",
});

const QUERY = `*[_type == "post"]`;

try {
	const posts = await client.fetch(QUERY);
	console.log(posts);
} catch (error: unknown) {
	console.error("Query failed:", (error as Error).message);
}
