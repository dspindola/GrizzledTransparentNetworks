import { getSandpackCssText } from "@codesandbox/sandpack-react";
export const SandPackCSS = () => {
	const css = getSandpackCssText();
	return <style id="sandpack">{css}</style>;
};
