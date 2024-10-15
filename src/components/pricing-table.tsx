"use client";

import React from "react";
import { CheckCircle2, CreditCard } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

interface PlanFeatureProps {
  feature: string;
}

const PlanFeature: React.FC<PlanFeatureProps> = ({ feature }) => (
  <li className="flex flex-row gap-2">
    <CheckCircle2 className="h-6 w-6" />
    <p>{feature}</p>
  </li>
);

interface PricingPlanData {
  name: string;
  highlighted: boolean;
  description: string;
  price: number;
  billingCycle: string;
  billingNote: string;
  buttonText: string;
  features: string[];
}

interface PricingPlanProps {
  plan: PricingPlanData;
}

const PricingPlan: React.FC<PricingPlanProps> = ({ plan }) => {
  const {
    name,
    highlighted,
    description,
    price,
    billingCycle,
    billingNote,
    buttonText,
    features,
  } = plan;

  return (
    <div
      className={cn(
        "rounded-2xl bg-card p-6 shadow-lg",
        highlighted ? "border-2 border-primary" : "border",
      )}
    >
      <h3 className={cn("text-2xl", !highlighted && "!text-slate-500")}>
        {name}
      </h3>
      <p className="mt-3">{description}</p>
      <p className="mt-3">
        <span className="text-5xl font-bold text-slate-900 dark:text-white">
          ${price}
        </span>{" "}
        / {billingCycle}
      </p>
      <p className="mt-2 text-xs text-slate-500">{billingNote}</p>
      <Button
        size="xl"
        variant={highlighted ? "default" : "outline"}
        className="mt-6 w-full"
      >
        <CreditCard className="mr-2" /> {buttonText}
      </Button>
      <ul className="mt-6 flex flex-col gap-4">
        {features.map((feature, index) => (
          <PlanFeature key={index} feature={feature} />
        ))}
      </ul>
    </div>
  );
};

interface PricingTableProps {
  plans: PricingPlanData[];
}

const PricingTable: React.FC<PricingTableProps> = ({ plans }) => {
  return (
    <div className="grid grid-cols-1 items-center gap-6 sm:grid-cols-2">
      {plans.map((plan, index) => (
        <PricingPlan key={index} plan={plan} />
      ))}
    </div>
  );
};

export default PricingTable;
