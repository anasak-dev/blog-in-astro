import { defineConfig } from "astro/config";
import image from "@astrojs/image";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";
import compress from "astro-compress";
import { resolve } from "path";

// https://astro.build/config

// https://astro.build/config
export default defineConfig({
  sitemap: true,
  site: "https://anasniazi.com/",
  outDir: "public2",
  publicDir: "static2",
  integrations: [
    tailwind({
      // Example: Disable injecting a basic `base.css` import on every page.
      // Useful if you need to define and/or import your own custom `base.css`.
      config: { applyBaseStyles: false },
    }),
    compress(),
    image({
      serviceEntryPoint: "@astrojs/image/sharp",
    }),
  ],

  vite: {
    build: {
      rollupOptions: {
        output: {
          assetFileNames: (assetInfo) => {
            let extType = assetInfo.name.split(".").at(1);
            let name = "";
            if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
              extType = "img";
            }
            if (assetInfo.name == "app.js") {
              name = "index.js";
            }
            return `assets/${extType}/[name]-[hash][extname]`;
          },

          chunkFileNames: "assets/js/[name]-[hash].js",

          entryFileNames: "assets/js/index.js",
        },
      },
    },
  },
});
