declare module "bun" {
  interface Env {
    NODE_ENV: "development" | "production";
    PORT: number;
    HOSTNAME: string;
    [key: string]: string | number | boolean;
  }
}
