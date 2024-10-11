"use client";

import { CheckCircle2, CreditCard } from "lucide-react";
import { Button } from "./ui/button";

const PricingTable = () => {
  return (
    <div className="grid grid-cols-2 gap-6">
      <div className="rounded-2xl border bg-card p-6 shadow-lg">
        <h3 className="text-2xl">Free</h3>
        <p className="mt-3">
          The flexible option for individuals who want to try our AI tools.
        </p>
        <p className="mt-3">
          <span className="text-5xl font-bold text-slate-900 dark:text-white">
            $0
          </span>{" "}
          / month
        </p>
        <p className="mt-2 text-xs text-slate-500">
          billed as $131.88 / year after trial
        </p>
        <Button size="xl" variant="outline" className="mt-6 w-full">
          <CreditCard className="mr-2" /> Start Free Trial
        </Button>
        <ul className="mt-6 flex flex-col gap-4">
          <li className="flex flex-row gap-2">
            <CheckCircle2 className="h-6 w-6" />
            <p>550 AI Humanization words</p>
          </li>
          <li className="flex flex-row gap-2">
            <CheckCircle2 className="h-6 w-6" />
            <p>550 AI Humanization words</p>
          </li>
          <li className="flex flex-row gap-2">
            <CheckCircle2 className="h-6 w-6" />
            <p>550 AI Humanization words</p>
          </li>
          <li className="flex flex-row gap-2">
            <CheckCircle2 className="h-6 w-6" />
            <p>550 AI Humanization words</p>
          </li>
        </ul>
      </div>
      <div className="rounded-2xl border bg-card p-6 shadow-lg">
        <h3 className="text-2xl">Free</h3>
        <p className="mt-3">
          The flexible option for individuals who want to try our AI tools.
        </p>
        <p className="mt-3">
          <span className="text-5xl font-bold text-slate-900 dark:text-white">
            $0
          </span>{" "}
          / month
        </p>
        <p className="mt-2 text-xs text-slate-500">
          billed as $131.88 / year after trial
        </p>
        <Button size="xl" variant="outline" className="mt-6 w-full">
          <CreditCard className="mr-2" /> Start Free Trial
        </Button>
        <ul className="mt-6 flex flex-col gap-4">
          <li className="flex flex-row gap-2">
            <CheckCircle2 className="h-6 w-6" />
            <p>550 AI Humanization words</p>
          </li>
          <li className="flex flex-row gap-2">
            <CheckCircle2 className="h-6 w-6" />
            <p>550 AI Humanization words</p>
          </li>
          <li className="flex flex-row gap-2">
            <CheckCircle2 className="h-6 w-6" />
            <p>550 AI Humanization words</p>
          </li>
          <li className="flex flex-row gap-2">
            <CheckCircle2 className="h-6 w-6" />
            <p>550 AI Humanization words</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PricingTable;
