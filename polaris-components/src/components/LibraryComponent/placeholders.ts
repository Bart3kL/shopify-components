import content from "./content.json";

export const DEMO_PROPS = {
  stats1: {
    title: "Monthly email usage",
    metrics: [
      { label: "Total emails sent", value: 42 },
      { label: "Automated emails", value: 12 },
      { label: "Marketing emails", value: 30 },
      { label: "Total cost", value: "$15.00" },
    ],
    footerText: "Shopify Email includes 10,000 free emails each month.",
    footerLinkText: "Learn more",
    footerLinkUrl:
      "https://help.shopify.com/en/manual/promoting-marketing/create-marketing/shopify-email/shopify-email-cost",
  },
  "card-list": {
    cardTitle: "Popular free themes",
    cardDesc:
      "Made with core features you can easily customize—no coding needed.",
    exploreTitle: "Explore more themes",
    exploreDesc: "Browse over 80 free and paid professionally designed themes.",
    exploreBtnText: "Visit Theme Store",
    exploreBtnUrl: "https://themes.shopify.com/themes",
    cards: [
      {
        name: "Dawn",
        author: "Shopify",
        img: "https://cdn.shopify.com/theme-store/zx2c5zmpirbt8e0j4p4smtb1oa2d.jpg",
        url: "https://themes.shopify.com/themes/dawn",
      },
      {
        name: "Spotlight",
        author: "Shopify",
        img: "https://cdn.shopify.com/theme-store/9tv2f6wnl8gnbj5ij7r9n6pqjkgg.jpg",
        url: "https://themes.shopify.com/themes/spotlight",
      },
      {
        name: "Craft",
        author: "Shopify",
        img: "https://cdn.shopify.com/theme-store/c3peyg24s6fbbms3okaxo16z8vxi.jpg",
        url: "https://themes.shopify.com/themes/craft",
      },
      {
        name: "Sense",
        author: "Shopify",
        img: "https://cdn.shopify.com/theme-store/ur5h7ldgxzfahkxo8u8dtswef5hh.jpg",
        url: "https://themes.shopify.com/themes/sense",
      },
      {
        name: "Refresh",
        author: "Shopify",
        img: "https://cdn.shopify.com/theme-store/69xng5ongse13u5vlxpkdl8hzl6e.jpg",
        url: "https://themes.shopify.com/themes/refresh",
      },
    ],
  },
  "rich-text-editor": {
    content,
  },
  "search-engine-listing": {
    shopName: "XX xx xx",
    url: "https://xxx.myshopify.com › products › soap-dish",
    title: "AUTOGRAF Soap Dish",
    metaTitle: "AUTOGRAF Soap Dish",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy te",
    handle: "soap-dish",
    urlPrefix: "products/",
    price: "$27.00 USD",
  },
  "pricing-plans": {
    plans: [
      {
        name: "Basic",
        badge: null,

        description: "For small teams and startups",
        priceLabel: "$25 USD",
        buttonLabel: "Not available for Shopify Plus",
        buttonDisabled: true,
        buttonLink: "",
        features: [
          {
            label: "Pickup point selection after checkout",
            info: "Customers select the pickup point after payment, on the Thank you page",
          },
          { label: "35 countries" },
          { label: "40+ carriers" },
          { label: "24 languages" },
          { label: "Email support" },
          { label: "Express checkout support" },
          { label: "Easy integration with third parties" },
          { label: "Change pickup point in Shopify Admin" },
          { label: "Select pickup point in Shopify POS" },
          {
            label: "Automate with Shopify Flow",
            info: "Create custom flows such as tagging orders with pickup point delivery",
          },
          { label: "GDPR compliant" },
        ],
        note: null,
      },
      {
        name: "Premium",
        badge: "14 days trial",

        description: "For growing companies",
        priceLabel: "$49 USD",
        buttonLabel: "Select plan",
        buttonDisabled: false,
        buttonLink: "",
        features: [
          { label: "Everything in Basic, plus" },
          { label: "Pickup point selection in checkout" },
          { label: "Chat support" },
          { label: "Custom endpoint" },
        ],
        note: null,
      },
      {
        name: "Enterprise",
        badge: null,

        description: "For enterprise-grade needs",
        priceLabel: "$350 USD",
        buttonLabel: "Select plan",
        buttonDisabled: false,
        buttonLink: "mailto:support@example.com",
        features: [
          { label: "Everything in Premium, plus" },
          { label: "99.99% uptime SLA" },
          { label: "Advanced support" },
          { label: "Security and legal review" },
          { label: "Customizations" },
          { label: "Custom integrations" },
        ],
        note: null,
      },
    ],
  },
};
