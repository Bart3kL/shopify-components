export interface PricingPlansProps {
  plans: {
    name: string;
    badge: string | null;
    description: string;
    priceLabel: string;
    buttonLabel: string;
    buttonDisabled: boolean;
    buttonLink: string;
    features: {
      label: string;
      info?: string;
    }[];
  }[];
}
