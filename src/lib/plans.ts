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
      "The flexible option for individuals who want to try our AI tools.",
    price: 0,
    billingCycle: "month",
    billingNote: "billed as $131.88 / year after trial",
    buttonText: "Start Free Trial",
    features: [
      "550 AI Humanization words",
      "550 AI Humanization words",
      "550 AI Humanization words",
      "550 AI Humanization words",
    ],
  },
  {
    name: "Unlimited",
    highlighted: true,
    description:
      "The flexible option for individuals who want to try our AI tools.",
    price: 0,
    billingCycle: "month",
    billingNote: "billed as $131.88 / year after trial",
    buttonText: "Upgrade Plan",
    features: [
      "550 AI Humanization words",
      "550 AI Humanization words",
      "550 AI Humanization words",
      "550 AI Humanization words",
      "550 AI Humanization words",
    ],
  },
];
