import nav from "./nav";
import sidebar from "./sidebar";

export default {
  base: "/algo/",
  markdown: {
    theme: "material-palenight",
    lineNumbers: true,
  },
  themeConfig: {
    siteTitle: "ALGO",
    nav: nav(),
    sidebar: sidebar(),
    socialLinks: [
      { icon: "github", link: "https://github.com/Huauauaa/algo" },
      { icon: "twitter", link: "..." },
      { icon: "discord", link: "..." },
    ],
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2022-present Huauauaa",
    },
    lastUpdatedText: "Updated Date",
    editLink: {
      repo: "Huauauaa/algo",
      dir: "docs",
      text: "Edit this page on GitHub",
    },
  },
};
