import sharedConfig from "@dub/tailwind-config/tailwind.config.ts";
import type { Config } from "tailwindcss";

const config: Pick<Config, "presets"> = {
  presets: [
    {
      ...sharedConfig,
      content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./node_modules/@dub/ui/**/*.{mjs,js,ts,jsx,tsx}",
      ],
    },
  ],
};

export default config;
