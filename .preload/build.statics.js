await Bun.$`bun tailwindcss -i ./src/assets/tailwind.css -o ./dist/assets/_tailwind.css`;

const content = await Bun.file("./dist/assets/_tailwind.css").text();

await Bun.write(
  "./src/app/tailwind.css.ts",
  `export const tailwind = \`${content}\`;`
);
