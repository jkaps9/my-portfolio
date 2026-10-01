// @ts-check
import { defineConfig, fontProviders } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://www.joshfkaplan.com",
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: "Anta",
      cssVariable: "--font-headers",
      weights: [400, 500, 600, 700, 800],
    },
    {
      provider: fontProviders.fontsource(),
      name: "Poppins",
      cssVariable: "--font-body",
      weights: [400, 500],
    },
  ],
});
