module.exports = {
  someSidebar: {
    'WISN + POA Guid': [
      'intro',
      {
        type: 'category',
        label: 'Home',
        items: ['home/home'],
      },
      {
        type: 'category',
        label: 'Permit Allocations',
        items: [
          'popsm/popsm-budget',
          'popsm/supply-constraints',
          'popsm/new-upgraded-facilities',
          'popsm/initial-optimization',
          'popsm/user-assisted-cadre',
          'popsm/final-allocation',
        ],
      },
      {
        type: 'category',
        label: 'Ad-Hoc Allocations',
        items: [
          'ad-hoc/ad-hoc',
          'ad-hoc/approved-cadres',
          'ad-hoc/facilities',
          'ad-hoc/initial-optimization',
          'ad-hoc/user-assisted-cadre',
          'ad-hoc/final-allocation',
        ],
      },
      {
        type: 'category',
        label: 'System Setup',
        items: ['system/cadre'],
      },

      {
        type: 'category',
        label: 'Debug',
        items: ['debug/wisn', 'debug/hrh', 'debug/hmis', 'debug/cadre-average'],
      },
      {
        type: 'category',
        label: 'User Module',
        items: ['users/users'],
      },
      {
        type: 'category',
        label: 'Analytics',
        items: ['Analytics/analytics'],
      },
      {
        type: 'category',
        label: 'Redistribution',
        items: [
          'Redistribution/home-redistribution',
          'Redistribution/redistribution-introduction',
          'Redistribution/surplus-identification',
          'Redistribution/verification',
          'Redistribution/recommended-redistribution',
          'Redistribution/customization-and-confirmation',
        ],
      },
      {
        type: 'category',
        label: 'LGA-Redistribution',
        items: [
          'LGA-Redistribution/lga-redistribution-introduction',
          'LGA-Redistribution/lga-redistribution-home',
          'LGA-Redistribution/surplus-identification',
          'LGA-Redistribution/lga-recommended-redistribution',
          'LGA-Redistribution/lga-customization-and-confirmation',
          'LGA-Redistribution/lga-verification',
        ],
      },
      {
        type: 'category',
        label: 'Permit_Request',
        items: [
          'Permit_Request/enter-budget-allocation',
          'Permit_Request/cadre-ceiling',
          'Permit_Request/new-upgraded-facility',
          'Permit_Request/pri-optimization-with-fac',
          'Permit_Request/pri-optimization-with-uac',
          'Permit_Request/prioritized-allocation',
        ],
      },
    ],
  },
}
