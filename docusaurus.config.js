module.exports = {
  title: "WISN + POA",
  tagline: "WISN + POA user guide manual",
  url: "https://hisptz.github.io/wisn-user-manual/",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "hisptz",
  projectName: "wisn-user-manual",
  themeConfig: {
    navbar: {
      title: "WISN + POA",
      logo: {
        alt: "My Site Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          to: "docs/",
          activeBasePath: "docs",
          label: "Manual",
          position: "left",
        },
        {
          href: "https://github.com/hisptz/wisn-user-manual/",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      copyright: `Copyright © ${new Date().getFullYear()} UDSM-DHIS.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/hisptz/wisn-user-manual/edit/main/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
