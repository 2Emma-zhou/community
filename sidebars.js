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
        type: 'generated-index',
        description: 'This section shows a simple example of what you can do with supOS-CE. Come take a look!.',
    },
        items: [
          'Use Case/OEE Evaluation',
          // 'Getting Started/Deploy supOS',
          // 
        ]
        },
        {
          type: 'category', 
          label: 'Overview',
          link: {
            type: 'generated-index',
            description: 'This section provides guides on basic usage of supOS, and the overview of the system.',
        },
            items: [
              'Basic Guides/UNS Data Integration/What You Need to Know in Advance',
              'Getting Started/Homepage',
            ]
            },
            'Getting Started/Deploy supOS',
            {
          type: 'category', 
          label: 'Namespace',
          link: {
            type: 'generated-index',
            description: 'This section provides guides on how to build data models in supOS.',
        },
            items: [
              'Basic Guides/UNS Data Integration/Data Modeling',
            ]
          },
          {
          type: 'category', 
          label: 'Source Flow',
          link: {
            type: 'generated-index',
            description: 'This section provides guides on how to collect data into supOS.',
        },
            items: [
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
          label: 'Event Flow',
          link: {
            type: 'generated-index',
            description: 'This section provides guides on how to process and display data in supOS.',
        },
            items: [
              'Basic Guides/UNS Data Integration/Data Processing',
              {
          type: 'category', 
          label: 'Common Data Processing Methods',
          link: {
            type: 'generated-index',
            description: 'This section provides guides on general data processing methods.',
        },
            items: [
              'Basic Guides/UNS Data Integration/Common Data Processing Methods/Combining Multiple Sources',
              'Basic Guides/UNS Data Integration/Common Data Processing Methods/Filtering Data',
              'Basic Guides/UNS Data Integration/Common Data Processing Methods/Changing Data',
              'Basic Guides/UNS Data Integration/Common Data Processing Methods/Spliting Data',

            ]
            },
              'Basic Guides/UNS Data Integration/Data Visualization',
              'Basic Guides/UNS Data Integration/Obtaining Data from supOS',

              
              
            ]
            },
            'Basic Guides/UNS Data Integration/Dashboards',
                {
          type: 'category', 
          label: 'Dev Tools',
          link: {
            type: 'generated-index'
        },
            items: [
              'Basic Guides/Database Management/Data Source Management',
              'Basic Guides/Database Management/SQL Editor',
            ]
            },
            {
          type: 'category', 
          label: 'System',
          link: {
            type: 'generated-index'
        },
            items: [
              'Basic Guides/Routing Management',
              'Basic Guides/System Management/User Management',
              'Basic Guides/System Management/Permission Management',
              'Basic Guides/System Management/I18n Management',


            ]
            },
            
              
            'Glossary'
  ],

  // But you can create a sidebar manually
  
  usecase: [
    // 'Use Case/OEE Evaluation',
    'Use Case/PCBA Process Simulation',

    // {
    //   type: 'category',
    //   label: 'Tutorial',
    //   items: ['tutorial-basics/create-a-document'],
    // },
  ],
   
};

export default sidebars;
