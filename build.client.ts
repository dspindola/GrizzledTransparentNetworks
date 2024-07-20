await Bun.build({
	entrypoints: ["src/app/entry.client.tsx"],
	target: "browser",
	outdir: "dist",
	naming: "client.[ext]",
	format: "esm",
	define: {
	},
	loader: {
		".tsx": "tsx",
	}
})

await Bun.build({
	entrypoints: ["src/app/routes/index.tsx"],
	target: "browser",
	outdir: "dist",
	naming: "main.[ext]",
	format: "esm",
	define: {
	},
	loader: {
		".tsx": "tsx",
	}
})