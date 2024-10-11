import { Tag, Pencil } from "lucide-react";
import PricingTable from "@/components/pricing-table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import TryFree from "@/components/commons/try-free";

export default function Page() {
  return (
    <div className="mx-auto mt-28 w-full max-w-screen-xl px-4 md:mt-32">
      <div className="mx-auto w-full max-w-[936px] text-center">
        <Badge
          size="lg"
          className="gap-2 bg-green-500/30 font-bold uppercase text-green-500"
        >
          <Tag /> Pricing
        </Badge>
        <h1 className="mt-4 text-4xl sm:text-6xl/tight">
          Select a plan that works for you
        </h1>
        <p className="mt-6 text-xl">
          Gain access to all of our tools and features for a low monthly or
          annual price. No hidden fees. Cancel anytime.
        </p>
        <div className="mt-8 text-start">
          <PricingTable />
        </div>
      </div>
      <div className="my-24 md:my-40">
        <TryFree />
      </div>
    </div>
  );
}
