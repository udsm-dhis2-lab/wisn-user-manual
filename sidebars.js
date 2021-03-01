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
    ],
  },
};