import { hydrateRoot } from "react-dom/client";
import { Route } from "./routes";

hydrateRoot(
	document.body,
	<Route/>,
);
