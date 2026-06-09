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
        'introduction',
        'feature-list',
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
        'getting-started/deploy-tier0',
        'getting-started/login',
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
        'basic-guides/uns-data-integration/build-data-models',
        'basic-guides/uns-data-integration/connect-data-sources',
        {
          type: 'category',
          label: 'Common Data Sources',
          link: {
            type: 'generated-index',
            description: 'This section provides guides on how to connect to various common data sources.',
          },
          items: [
            'basic-guides/uns-data-integration/common-data-sources/connecting-opc-ua',
            'basic-guides/uns-data-integration/common-data-sources/connecting-opc-da',
            'basic-guides/uns-data-integration/common-data-sources/connecting-modbus',
            'basic-guides/uns-data-integration/common-data-sources/connecting-mqtt',
            'basic-guides/uns-data-integration/common-data-sources/connecting-file',
            'basic-guides/uns-data-integration/common-data-sources/connecting-rest-api',
          ],
        },
      ],
    },
  ],
};

export default sidebars;
