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
            type: 'generated-index',
            description: 'This section provides guides on basic usage of supOS, including management of UNS, database, system...',
        },
            items: [
              {
          type: 'category', 
          label: 'UNS Data Integration',
          link: {
            type: 'generated-index',
            description: 'This section provides guides on how to build UNS data models and connect to corresponding data sources.',
        },
            items: [
              'Basic Guides/UNS Data Integration/Data Modeling',
              'Basic Guides/UNS Data Integration/Data Source Connection',
              {
          type: 'category', 
          label: 'Common Data Sources',
          link: {
            type: 'generated-index',
            description: 'This section provides guides on how to connect to various common data sources.',
        },
            items: [
              'Basic Guides/UNS Data Integration/Common Data Sources/Connecting OPC UA',
              'Basic Guides/UNS Data Integration/Common Data Sources/Connecting OPC DA',
              'Basic Guides/UNS Data Integration/Common Data Sources/Connecting Modbus',
              'Basic Guides/UNS Data Integration/Common Data Sources/Connecting MQTT',
              'Basic Guides/UNS Data Integration/Common Data Sources/Connecting File',
              'Basic Guides/UNS Data Integration/Common Data Sources/Connecting RestAPI',
            ]
            },
            ]
            },
            {
          type: 'category', 
          label: 'Database Management',
          link: {
            type: 'generated-index'
        },
            items: [
              'Basic Guides/Database Management/Database Connection',
              'Basic Guides/Database Management/Data Query',
            ]
            },
            {
          type: 'category', 
          label: 'System Management',
          link: {
            type: 'generated-index'
        },
            items: [
              'Basic Guides/System Management/Permission Management',
              'Basic Guides/System Management/User Management',
            ]
            },
            
              'Basic Guides/Application Management',
            ]
            },
            'Glossary'
  ],

  // But you can create a sidebar manually
  
  usecase: [
    'Use Case/OEE Evaluation',
    'Use Case/PCBA Process Simulation',

    // {
    //   type: 'category',
    //   label: 'Tutorial',
    //   items: ['tutorial-basics/create-a-document'],
    // },
  ],
   
};

export default sidebars;
