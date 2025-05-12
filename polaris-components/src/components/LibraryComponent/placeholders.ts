import content from "./content.json";
import {
  MarketsIcon,
  EmailIcon,
  CalculatorIcon,
  ChatIcon,
  BookOpenIcon,
  PlayCircleIcon,
  PersonIcon,
} from "@shopify/polaris-icons";

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
  "shortcuts-section": {
    shortcuts: [
      {
        href: "https://www.shopify.com",
        icon: EmailIcon,
        title: "E-mail and SMS marketing in checkout ",
        subtitle: "Ask your customers for their marketing preferences",
      },
      {
        href: "https://www.shopify.com",
        icon: MarketsIcon,
        title: "Shopify",
        subtitle: "Your online store",
      },
      {
        href: "https://www.shopify.com",
        icon: CalculatorIcon,
        title: "Double opt-in for marketing",
        subtitle: "Ask your customers to confirm their contact details",
      },
    ],
    title: "Marketing",
    infoUrl: "https://www.shopify.com",
  },
  "setup-guide": {
    completedTasks: 2,
    totalTasks: 7,
    header: "Setup guide",
    description:
      "Use this personalized guide to get your store up and running.",
    onDismiss: () => alert("dismissed!"),

    tasks: [
      {
        id: "add_product",
        label: "Add your first product",
        complete: true,
        description:
          "Write a description, add photos, and set pricing for the products you plan to sell.",
        learnMoreUrl:
          "https://help.shopify.com/en/manual/products/add-update-products",
        actions: [
          {
            label: "Add product",
            primary: true,
            onClick: () => alert("Add product clicked"),
          },
          {
            label: "Import products",
            onClick: () => alert("Import clicked"),
          },
        ],
        imageUrl:
          "https://cdn.shopify.com/b/shopify-guidance-dashboard-public/t8hbyt59p6p6pkzyqtwbtgavxx7h.svgz",
      },
      {
        id: "customize_theme",
        label: "Customize your online store",
        complete: false,
        description:
          "Choose a theme and add your logo, colors, and images to reflect your brand.",
        learnMoreUrl:
          "https://help.shopify.com/manual/online-store/themes/customizing-themes",
        actions: [
          {
            label: "Customize theme",
            primary: true,
            onClick: () => alert("Customize theme"),
          },
        ],
        imageUrl:
          "https://cdn.shopify.com/b/shopify-guidance-dashboard-public/t8hbyt59p6p6pkzyqtwbtgavxx7h.svgz",
      },
      {
        id: "customize_domain",
        label: "Customize your domain",
        complete: false,
        description:
          "Set up your store’s domain to make it easy for customers to find you.",
        learnMoreUrl: "https://help.shopify.com/manual/domains/add-a-domain",
        actions: [
          {
            label: "Add domain",
            primary: true,
            onClick: () => alert("Add domain"),
          },
        ],
        imageUrl:
          "https://cdn.shopify.com/b/shopify-guidance-dashboard-public/9gnwpzees69n0q6498x38zx1u.svgz",
      },
      {
        id: "review_shipping",
        label: "Review your shipping rates",
        complete: false,
        description:
          "Set up your shipping rates so you can start selling to customers.",
        learnMoreUrl:
          "https://help.shopify.com/manual/shipping/setting-up-and-managing-your-shipping",
        actions: [
          {
            label: "Set shipping",
            primary: true,
            onClick: () => alert("Set shipping"),
          },
        ],
        imageUrl:
          "https://cdn.shopify.com/b/shopify-guidance-dashboard-public/zy0owqndmo2zb1va8cwwu6kub.svgz",
      },
      {
        id: "shopify_payments",
        label: "Set up Shopify Payments",
        complete: false,
        description:
          "Activate Shopify Payments to accept credit card payments instantly.",
        learnMoreUrl:
          "https://help.shopify.com/manual/payments/shopify-payments",
        actions: [
          {
            label: "Set up payments",
            primary: true,
            onClick: () => alert("Set up payments"),
          },
        ],
        imageUrl:
          "https://cdn.shopify.com/b/shopify-guidance-dashboard-public/rjexx5ytjim70bne52wv8t3eha.svgz",
      },
      {
        id: "pick_plan",
        label: "Pick a plan",
        complete: true,
        description:
          "Choose a Shopify plan with the right features for your new business.",
        learnMoreUrl:
          "https://help.shopify.com/manual/your-account/pricing-plans",
        actions: [
          {
            label: "Pick a plan",
            primary: true,
            onClick: () => alert("Pick a plan"),
          },
        ],
        imageUrl:
          "https://cdn.shopify.com/b/shopify-guidance-dashboard-public/q6n53zls1e0q7k0ig31hh844z.png",
      },
      {
        id: "place_test_order",
        label: "Place a test order",
        complete: false,
        description:
          "Create a test order to make sure your checkout is working.",
        learnMoreUrl: "https://help.shopify.com/manual/orders/create-orders",
        actions: [
          {
            label: "Create test order",
            primary: true,
            onClick: () => alert("Create test order"),
          },
        ],
        imageUrl:
          "https://cdn.shopify.com/b/shopify-guidance-dashboard-public/x1uxrnbfpqqjznj6czv7peij79.svgz",
      },
    ],
  },
  "card-list2": {
    title: "Support channels",
    items: [
      {
        id: "live-chat",
        icon: ChatIcon,
        heading: "Live chat",
        description: "24/7 live chat support, instant replies.",
        action: {
          label: "Open chat",
          onClick: () => alert("Open chat!"),
        },
      },
      {
        id: "help-center",
        icon: BookOpenIcon,
        heading: "Help center",
        description: "Find answers in our detailed manuals.",
        action: {
          label: "Visit help center",
          url: "https://www.shopify.com/pl",
          external: true,
        },
      },
      {
        id: "video-tutorial",
        icon: PlayCircleIcon,
        heading: "Video tutorial",
        description: "Have fun learning with concise video tutorials.",
        action: {
          label: "Watch tutorial",
          url: "https://www.shopify.com/pl",
          external: true,
        },
      },
      {
        id: "community",
        icon: PersonIcon,
        heading: "PageFly community",
        description: "Get the latest updates, deals, tips, and more.",
        action: {
          label: "Join community",
          url: "https://www.shopify.com/pl",
          external: true,
        },
      },
    ],
  },
};
