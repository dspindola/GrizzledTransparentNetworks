import { treaty } from "@elysiajs/eden";
import type { app } from "../server";

type App = typeof app;

const cli = treaty<App>(
  "37dabe8e-6c23-4ce4-9798-ea8b96f84ae4-00-qqe1zm9m0qne.riker.replit.dev"
);

const { data } = await cli.shell.command.post({
  shell: "nu",
  command: ["touch", "app.txt"],
});

console.log(data);
