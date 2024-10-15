"use client";

import { Pencil } from "lucide-react";
import { Button } from "../ui/button";

const TryFree = () => {
  return (
    <div className="mx-auto max-w-4xl text-center">
      <h2 className="mt-4 text-4xl sm:text-6xl/tight">
        Try Submit AI for free today
      </h2>
      <p className="mt-6 text-xl">
        Join 500,000+ students and writers who use Submit AI's AI content tools
        to write faster and bypass AI detection.
      </p>
      <Button size="xl" className="group mt-6">
        <Pencil className="mr-2" />
        Get Started
        <span className="ml-1 text-base text-white/60 transition-all group-hover:text-white">
          - for free
        </span>
      </Button>
    </div>
  );
};

export default TryFree;
