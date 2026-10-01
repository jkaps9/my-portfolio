// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://www.joshfkaplan.com",
  integrations: [icon()],
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: "Anta",
      cssVariable: "--font-headers",
      weights: [400],
    },
    {
      provider: fontProviders.fontsource(),
      name: "Poppins",
      cssVariable: "--font-body",
      weights: [400, 500],
    },
  ],
});
