const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(
  module.exports = {
    title: "MTI: Du Codex",
    tagline: "A helpful guide to Dual Universe",
    url: "https://codex.madistouch.industries",
    baseUrl: "/",
    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",
    favicon: "img/favicon.ico",
    organizationName: "Madis-Touch-Industries", // Usually your GitHub org/user name.
    projectName: "codex", // Usually your repo name.
    presets: [
      [
        /** @type {import('@docusaurus/preset-classic').Options} */
        "@docusaurus/preset-classic",
        {
          docs: {
            sidebarPath: require.resolve("./sidebars.js"),
            // Please change this to your repo.
            editUrl:
              "https://github.com/Madis-Touch-Industries/codex/edit/main/website/",
          },
          blog: {
            showReadingTime: true,
            // Please change this to your repo.
            editUrl:
              "https://github.com/Madis-Touch-Industries/codex/edit/main/website/blog/",
          },
          theme: {
            customCss: require.resolve("./src/css/custom.css"),
          },
        },
      ],
    ],
    themeConfig:
      /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
      ({
        algolia: {
          apiKey: process.env.ALGOLIA_KEY,
          indexName: process.env.INDEX_NAME,
          // Optional: see doc section below
          contextualSearch: true,
          // Optional: see doc section below
          appId: process.env.ALGOLIA_APP_ID,
          // Optional: Algolia search parameters
          searchParameters: {},
          //... other Algolia params
        },
        googleAnalytics: {
          trackingID: process.env.GA_TRACKING_ID, // Optional fields.
          anonymizeIP: true, // Should IPs be anonymized?
        },
        navbar: {
          title: "MTI: DU Codex",
          items: [
            {
              type: "doc",
              docId: "intro",
              position: "left",
              label: "Tutorial",
            },
            {
              type: "doc",
              docId: "intro",
              position: "left",
              label: "Lua",
            },
            // { to: "/blog", label: "Blog", position: "left" },
            {
              href: "https://github.com/Madis-Touch-Industries",
              label: "GitHub",
              position: "right",
            },
          ],
        },
        footer: {
          style: "dark",
          links: [
            {
              title: "Docs",
              items: [
                {
                  label: "Tutorial",
                  to: "/docs/intro",
                },
              ],
            },
            {
              title: "Community",
              items: [
                {
                  label: "Youtube",
                  href: "https://www.youtube.com/channel/UC-BSmRuKpDNCoDF91TUP6WQ",
                },
                {
                  label: "Discord",
                  href: "https://discord.madistouch.industries",
                },
                {
                  label: "Twitter",
                  href: "https://twitter.com/docusaurus",
                },
              ],
            },
            {
              title: "More",
              items: [
                {
                  label: "GitHub",
                  href: "https://github.com/Madis-Touch-Industries",
                },
              ],
            },
          ],
          copyright: `Copyright © ${new Date().getFullYear()} MTI. Built with ♥.`,
        },
        prism: {
          theme: lightCodeTheme,
          darkTheme: darkCodeTheme,
        },
      }),
  }
);
