// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'supOS CE',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/freezonex logo.svg',

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: '2Emma-zhou', // Usually your GitHub org/user name.
  projectName: 'community', // Usually your repo name.

  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'ignore',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
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
          sidebarPath: './sidebars.js',
          routeBasePath: '/'
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: false,
      // {
      //     showReadingTime: true,
      //     feedOptions: {
      //       type: ['rss', 'atom'],
      //       xslt: true,
      //     },
      //     // Please change this to your repo.
      //     // Remove this to remove the "edit this page" links.
      //     editUrl:
      //       'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
      //     // Useful options to enforce blogging best practices
      //     onInlineTags: 'warn',
      //     onInlineAuthors: 'warn',
      //     onUntruncatedBlogPosts: 'warn',
      //   },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],
  // themes: ['@docusaurus/theme-search-algolia'],
  plugins: [
    require.resolve("plugin-image-zoom"),  //zoom images in document
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // algolia: {
      //   appId: '29I8LAXY53',
      //   apiKey: '420807d466741ad059d2c9aa0d68e28d',
      //   indexName: 'work-related',
      //   contextualSearch: true,
      //   externalUrlRegex: 'external\\.com|domain\\.com',
      //   searchParameters: {},
      //   searchPagePath: 'search',
      // },
      // Replace with your project's social card
      // image: 'img/docusaurus-social-card.jpg',
      zoom: {  //image zoom config
        selector: '.mdx img',
        config: {
          // options you can specify via https://github.com/francoischalifour/medium-zoom#usage
          background: {
            light: 'rgb(255, 255, 255)',
            dark: 'rgb(50, 50, 50)'
          }
        }
      },
      navbar: {
        title: '',
        logo: {
          alt: 'supOS',
          src: 'img/supOS.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Doc',
          },
          {
            type: 'docSidebar',
            sidebarId: 'usecase',
            position: 'left',
            label: 'Use Case',
          },
          // {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://supos.ai',
            label: 'supOS Site',
            position: 'right',
          },
        ],
      },
      // footer: {
      //   style: 'dark',
      //   links: [
      //     {
      //       title: 'Docs',
      //       items: [
      //         {
      //           label: 'Tutorial',
      //           to: '/docs/intro',
      //         },
      //       ],
      //     },
      //     {
      //       title: 'Community',
      //       items: [
      //         {
      //           label: 'Stack Overflow',
      //           href: 'https://stackoverflow.com/questions/tagged/docusaurus',
      //         },
      //         {
      //           label: 'Discord',
      //           href: 'https://discordapp.com/invite/docusaurus',
      //         },
      //         {
      //           label: 'X',
      //           href: 'https://x.com/docusaurus',
      //         },
      //       ],
      //     },
      //     {
      //       title: 'More',
      //       items: [
      //         {
      //           label: 'Blog',
      //           to: '/blog',
      //         },
      //         {
      //           label: 'GitHub',
      //           href: 'https://github.com/facebook/docusaurus',
      //         },
      //       ],
      //     },
      //   ],
      //   copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      // },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
