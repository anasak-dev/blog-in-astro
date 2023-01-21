/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#29416B",
        secondary: "#01204E",
        heading_sm: "#FF8232",
        cta: "#4B70F3",
        light: "#FFEFDD",
        dark: "#101929",
        "cta-dark": "#375BDD",
      },
      boxShadow: {
        ak_shadow_sm: "0px 2.25081px 16.8811px rgba(0, 0, 0, 0.12)",
      },
      lineHeight: {
        ak_normal: "1.7",
      },
      fontSize: {
        xl: "57px",
        xxl: "56px",
        sm: "19px",
        md: "26px",
        xs: "16px",
      },
    },
  },
  plugins: [],
};
