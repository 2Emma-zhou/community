const sidebars = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Overview',
      link: {
        type: 'generated-index',
        description: 'This section introduces Tier0 concept and primary features. Come take a look!',
      },
      items: [
        'Introduction',
        'Feature List',
      ],
    },
    {
      type: 'category',
      label: 'Quick Start Guide',
      link: {
        type: 'generated-index',
        description: 'This section guides you through the initial setup and configuration of Tier0.',
      },
      items: [
        'Getting Started/Deploy Tier0',
        'Getting Started/Login',
      ],
    },
    {
      type: 'category',
      label: 'How-to Guide',
      link: {
        type: 'generated-index',
        description: 'This section provides guides on how to build data models and use them in Tier0.',
      },
      items: [
        'Basic Guides/UNS Data Integration/Build Data Models',
        'Basic Guides/UNS Data Integration/Connect Data Sources',
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
          ],
        },
      ],
    },
  ],
};

export default sidebars;
