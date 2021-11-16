module.exports = {
  someSidebar: {
    "WISN + POA Guid": [
      "intro",
      {
        type: "category",
        label: "Home",
        items: ["home/home"],
      },
      {
        type: "category",
        label: "Permit Allocations",
        items: [
          "popsm/popsm-budget",
          "popsm/supply-constraints",
          "popsm/new-upgraded-facilities",
          "popsm/initial-optimization",
          "popsm/user-assisted-cadre",
          "popsm/final-allocation",
        ],
      },
      {
        type: "category",
        label: "Ad-Hoc Allocations",
        items: [
          "ad-hoc/ad-hoc",
          "ad-hoc/approved-cadres",
          "ad-hoc/facilities",
          "ad-hoc/initial-optimization",
          "ad-hoc/user-assisted-cadre",
          "ad-hoc/final-allocation",
        ],
      },
      {
        type: "category",
        label: "System Setup",
        items: ["system/cadre"],
      },

      {
        type: "category",
        label: "Debug",
        items: ["debug/wisn", "debug/hrh", "debug/hmis", "debug/cadre-average"],
      },
      {
        type: "category",
        label: "User Module",
        items: ["users/users"],
      },
      {
        type: "category",
        label: "Analytics",
        items: ["Analytics/Analytics"],
      },
      {
        type: "category",
        label: "Redistribution",
        items: ["Redistribution/home","Redistribution/introduction", 
        "Redistribution/Surplus-Identification", "Redistribution/Verification", 
        "Redistribution/Customization-Confirmation"],
      },
      {
        type: "category",
        label: "LGA-Redistribution",
        items: ["LGA-Redistribution/LGA_Redistribution_introduction","LGA-Redistribution/LGA_Redistribution_home",
        "LGA-Redistribution/LGA_Surplus-Identification", "LGA-Redistribution/LGA_Recommended_Redistribution",
      "LGA-Redistribution/LGA_Customization_And_Confirmation", "LGA-Redistribution/LGA_Verification"],
      },
      {
        type: "category",
        label: "Permit_Request",
        items: ["Permit_Request/Enter_Budget_Allocation","Permit_Request/Cadre_Ceiling",
         "Permit_Request/New_and_Upgraded_Facilities", "Permit_Request/PRI_Optimization_With_FAC", 
         "Permit_Request/Permit_UAC","Permit_Request/Prioritized_Allocation"],
      },
    ],
  },
};