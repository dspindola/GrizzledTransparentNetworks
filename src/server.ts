import { cors } from "@elysiajs/cors";
import { swagger } from "@elysiajs/swagger";
import { Elysia, t } from "elysia";
import { handleRequest } from "./app/entry.server";
import { getSandpackCssText } from "@codesandbox/sandpack-react";

async function* command(shell: string, command: string[]) {
  const lines = Bun.$`${Bun.which(shell)} -c "${command}"`
    .cwd(`${process.cwd()}/.data`)
    .lines();

  for await (const line of lines) {
    yield `${line}\n`;
  }
}

export const app = new Elysia()
  .use(swagger())
  .use(cors())
  .get("/", handleRequest)
  .get("/_dist/client.js", () => Bun.file("dist/client.js"))
  .get("/_dist/main.js", () => Bun.file("dist/main.js"))
  .get("/_dist/sandpack.css", getSandpackCssText)
  .get(
    "/_dist/styles.css",
    async () =>
      await new ShadowRealm().importValue(
        `${process.cwd()}/dist/styles.css.js`,
        "default"
      )
  )
  .post(
    "/shell/command",
    async (ctx) => {
      return new Response(
        // @ts-ignore
        command(ctx.body.shell, ctx.body.command)
      );
    },
    {
      body: t.Object({
        command: t.Array(t.String(), {
          default: ["ls", "|", "to json"],
        }),
        shell: t.String({
          pattern: "(bash|nu|zsh)",
          default: "nu",
        }),
      }),
    }
  );

if (import.meta.main) {
  app.listen(
    {
      hostname: process.env.HOSTNAME || "0.0.0.0",
    },
    (server) => {
      console.log(`Server is running at ${server.url}`);
    }
  );
}
