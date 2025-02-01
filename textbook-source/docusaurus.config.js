// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const {themes} = require('prism-react-renderer');
const lightTheme = themes.github;
const darkTheme = themes.github;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Understanding Legal Technology',
  tagline: 'Coding Legal Software using Docassemble',
  favicon: '/textbook/img/favicon.ico',

  // Set the production url of your site here
  url: 'https://flinderslaw.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/textbook/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'FlindersLaw', // Usually your GitHub org/user name.
  projectName: 'textbook', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/Flinders_University_Logo_Horizontal_RGB_Master.png',
      navbar: {
        title: 'Understanding Legal Technology',
        logo: {
          alt: 'Flinders University Logo',
          src: 'img/Flinders_University_Logo_Horizontal_RGB_Master.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'textbookSidebar',
            position: 'left',
            label: 'Textbook',
          },
          {
            type: 'docSidebar',
            sidebarId: 'codingExercisesSidebar',
            position: 'left',
            label: 'Coding Exercises',
          },
          {
            type: 'docSidebar',
            position: 'left',
            sidebarId: 'recipesSidebar',
            label: 'Bits, Pieces and Recipes'
          },
          /* Not currently used
          {
            type: 'docSidebar',
            position: 'left',
            sidebarId: 'tbHelpSidebar',
            label: 'Textbook Help',
          }, */
          // This was used in 2024 but will not be used in 2025
          // {
          //   type: 'docSidebar',
          //   position: 'left',
          //   sidebarId: 'assessmentSidebar',
          //   label: 'Assessments',
          // },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Resources',
            items: [
              {
                label: 'Docassemble Server',
                href: 'https://docassemble.flinders.edu.au'
              },
              {
                label: 'Docassemble Manual',
                href: 'https://docassemble.org/docs.html',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Docassemble Slack',
                href: 'https://docassemble.slack.com',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Canvas',
                href: 'https://canvas.flinders.edu.au',
              }
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Flinders University. Built with Docusaurus.`,
      },
      prism: {
        theme: lightTheme,
        darkTheme: darkTheme,
        additionalLanguages: ['bash', 'diff', 'json', 'python'],
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      algolia: {
        appId: 'E707TIU8AU',
        apiKey: '62783a1bb20ada3fd86e34175888e5c5',
        indexName: 'Understanding Legal Technology',
        insights: true,
        debug: true,
      },
    }),

    markdown: {
      mermaid: true,
    },

    themes: ['@docusaurus/theme-mermaid'],
};

module.exports = config;