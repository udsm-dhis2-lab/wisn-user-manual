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
        items: ['users/users', 'users/user-account'],
      },
      {
        type: 'category',
        label: 'Analytics',
        items: ['Analytics/analytics', 'Analytics/analytics-moh'],
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
          'LGA_Redistribution/lga-redistribution-introduction',
          'LGA_Redistribution/lga-redistribution-home',
          'LGA_Redistribution/surplus-identification',
          'LGA_Redistribution/lga-recommended-redistribution',
          'LGA_Redistribution/lga-customization-and-confirmation',
          'LGA_Redistribution/lga-verification',
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

      {
        type: 'category',
        label: 'LGA_Permit_Request',
        items: [
          'LGA_Permit_Request/enter-budget-allocation-lga',
          'LGA_Permit_Request/cadre-ceiling-lga',
          'LGA_Permit_Request/lga-new-upgraded-facility',
          'LGA_Permit_Request/lga-pri-optimization-with-full-automated-cadres',
          'LGA_Permit_Request/lga-user-assisted-cadre',
          'LGA_Permit_Request/lga-prioritized-allocation',
          'LGA_Permit_Request/permit-overview-lga',
          'LGA_Permit_Request/home-lga',
        ],
      },
      {
        type: 'category',
        label: 'period',
        items: ['period/home-period'],
      },
      {
        type: 'category',
        label: 'facility_user',
        items: [
          'facility_user/home-facility-user',
          'facility_user/user-budget-ceiling',
          'facility_user/user-cadre-ceiling',
          'facility_user/user-pri-for-fac-ceiling',
          'facility_user/user-specialist-pri',
          'facility_user/user-uac',
        ],
      },
      {
        type: 'category',
        label: 'moh-central-user',
        items: [
          'moh/home/moh-home',
          'moh/permit_allocation/automated-pri-moh',
          'moh/permit_allocation/available-permit-moh',
          'moh/permit_allocation/final-decision-moh',
          'moh/permit_allocation/non-specialist-pri-moh',
          'moh/permit_allocation/permit-allocation-moh-home',
          'moh/permit_allocation/specialist-pri-moh',
          'moh/permit_allocation/uac-moh',
        ],
      },
      {
        type: 'category',
        label: 'moh-facility-user',
        items: [
          'facility_user_moh/home/home-facility-user-moh',
          'facility_user_moh/permit_requests-moh-facillity/permit-request-home',
          'facility_user_moh/permit_requests-moh-facillity/user-budget-ceiling-moh',
          'facility_user_moh/permit_requests-moh-facillity/user-cadre-ceiling-moh',
          'facility_user_moh/permit_requests-moh-facillity/user-pri-for-fac-ceiling-moh',
          'facility_user_moh/permit_requests-moh-facillity/user-specialist-pri-moh',
          'facility_user_moh/permit_requests-moh-facillity/user-non-specialist-pri-moh',
          'facility_user_moh/permit_requests-moh-facillity/user-uac-moh',
          'facility_user_moh/permit_requests-moh-facillity/final-decision-moh',
        ],
      },
    ],
  },
}
