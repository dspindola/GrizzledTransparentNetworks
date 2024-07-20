import { getSandpackCssText } from "@codesandbox/sandpack-react" with {
    type: "macro",
};

const css = getSandpackCssText();

export const sandpack = css;