import type { Context } from "elysia";
import { renderToReadableStream } from "react-dom/server";
import { Route } from "./routes";

export async function handleRequest({}: Context) {
	const stream = await renderToReadableStream(<Route />, {
		bootstrapModules: ["/_dist/main.js"],
		bootstrapScripts: ["/_dist/client.js"],

	});
	await stream.allReady;
	return new Response(stream, {
		headers: {
			"Content-Type": "text/html",
		},
	});
}
