import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: "content",

  title: "Node Pulse Admiral",
  description: "Manage your servers fleet with ease",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      {
        text: "Contact Us",
        link: "/contact-us",
      },
    ],

    sidebar: [
      {
        text: "Docs",
        items: [
          { text: "Getting Started", link: "/getting-started" },
          { text: "Contact Us", link: "/contact-us" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
