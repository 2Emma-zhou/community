// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [
    'Introduction',
    {
      type: 'category', 
      label: 'Getting Started',
      link: {
        type: 'generated-index'
    },
        items: [
          'Getting Started/Deploy supOS',
          'Getting Started/Login',
        ]
        },
        {
          type: 'category', 
          label: 'Basic Guides',
          link: {
            type: 'generated-index'
        },
            items: [
              'Basic Guides/Data Modeling',
              'Basic Guides/Data Source Connection',
              'Basic Guides/Permission Management',
              'Basic Guides/User Management',
              'Basic Guides/Application Management',
            ]
            },
  ],

  // But you can create a sidebar manually
  
  usecase: [
    'Use Case/Data Integration',
    // {
    //   type: 'category',
    //   label: 'Tutorial',
    //   items: ['tutorial-basics/create-a-document'],
    // },
  ],
   
};

export default sidebars;
