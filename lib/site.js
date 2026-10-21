export const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

export const PRODUCTS = [
  {
    index: "01",
    name: "Voice-to-Workspace Sync",
    path: "/clarity-dispatch",
    tag: "VOICE-TO-CRM",
    description:
      "Speak your notes aloud, and our system automatically organizes and logs them directly into your Notion or workspace. Zero typing.",
  },
  {
    index: "02",
    name: "LinkedIn Post Generator",
    path: "/linkedin-engine",
    tag: "THOUGHT-TO-POST",
    description:
      "Pick a current news topic or a personal event, and our engine instantly writes a structured, publish-ready LinkedIn post for you.",
  },
  {
    index: "03",
    name: "Digital Catalog Builder",
    path: "/product-catalogue",
    tag: "SHOWCASE",
    description:
      "Create a clean, restaurant-style digital menu or product catalog for your business that loads instantly and is easy to share.",
  },
  {
    index: "04",
    name: "Custom Business Automations",
    path: "/custom-inventory",
    tag: "TRACKING",
    description:
      "Integrated software for your entire operation. For example, we build fully custom inventory management systems that sync your stock across all your platforms.",
  },
];

export const NAV = {
  products: PRODUCTS,
  resources: [
    { name: "Trust & Security", path: "/security" },
    { name: "Legal Hub", path: "/legal" },
  ],
};
