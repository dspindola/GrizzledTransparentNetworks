import React from "react";
import { getSandpackCssText } from "@codesandbox/sandpack-react";

const css = getSandpackCssText()

export function App({ children }: { children: React.ReactElement }) {
	return (
		<html lang="en">
			<head>
				<title>app</title>
				<style>{css}</style>
			</head>
			<body>
				{children}
			</body>
		</html>
	);
}
