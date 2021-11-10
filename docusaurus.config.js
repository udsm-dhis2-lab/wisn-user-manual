module.exports = {
  title: "WISN + POA",
  tagline: "WISN + POA user guide manual",
  url: "https://udsm-dhis2-project.github.io/wisn-user-manual/",
  baseUrl: "/wisn-user-manual/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "udsm-dhis2-project",
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
          editUrl:
            "https://github.com/udsm-dhis2-project/wisn-user-manual/edit/main/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
