// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Law in a Digital Age',
  tagline: 'Textbook',
  favicon: '/img/favicon.ico',

  // Set the production url of your site here
  url: 'https://your-docusaurus-test-site.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

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
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Law in a Digital Age',
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
            label: 'Coding Exercises'
          },
          {
            type: 'docSidebar',
            sidebarId: 'recipesSidebar',
            position: 'left',
            label: 'Coding Recipes'
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/LLAW3301',
            label: 'Digital Age GitHub',
            position: 'right',
          },
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
              {
                label: 'Digital Age GitHub',
                href: 'https://github.com/LLAW3301',
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
              {
                label: 'Blog (TBC)',
                to: '/blog',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'FLO',
                href: 'https://flo.flinders.edu.au',
              },
              {
                label: 'Canvas',
                href: 'https://canvas.flinders.edu.au',
              }
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Flinders University. Built with Docusaurus.`,
      },
      /*prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },*/
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
    }),

    markdown: {
      mermaid: true,
    },

    themes: ['@docusaurus/theme-mermaid'],
};

module.exports = config;