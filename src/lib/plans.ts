export interface pricingPlanData {
  name: string;
  highlighted: boolean;
  description: string;
  price: number;
  billingCycle: string;
  billingNote: string;
  buttonText: string;
  features: string[];
}

export const plansData: pricingPlanData[] = [
  {
    name: "Free",
    highlighted: false,
    description:
      "Get full access to all our tools and features at an affordable monthly or annual price.",
    price: 0,
    billingCycle: "month",
    billingNote: "billed as $131.88 / year after trial",
    buttonText: "Start Free Trial",
    features: [
      "550 AI Humanization words",
      "250 Words per Generation",
      "Limited AI Features",
      "Limited AI Detection Bypass",
    ],
  },
  {
    name: "Unlimited",
    highlighted: true,
    description:
      "Take your writing productivity and quality to the next level with our unlimited plan.",
    price: 10.99,
    billingCycle: "month",
    billingNote: "billed as $131.88 / year after trial",
    buttonText: "Upgrade Plan",
    features: [
      "Unlimited Humanizations",
      "Unlimited Content Generations",
      "2500 Words per Generation",
      "Bypass Advanced AI Detectors",
      "Unlimited AI Content Detection",
    ],
  },
];
