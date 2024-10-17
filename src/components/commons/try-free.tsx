"use client";

import { Pencil } from "lucide-react";
import { Button } from "../ui/button";

const TryFree = () => {
  return (
    <div className="mx-auto max-w-4xl text-center">
      <h2 className="mt-4 text-4xl sm:text-6xl/tight">
        Start writing with Submit AI today!
      </h2>
      <p className="mt-6 text-xl">
        Join over 3 million students and writers who write using Submit AI.
      </p>
      <Button size="xl" className="group mt-6">
        <Pencil className="mr-2" />
        Get Started
        <span className="ml-1 text-base text-white/60 transition-all group-hover:text-white">
          - it's free
        </span>
      </Button>
    </div>
  );
};

export default TryFree;
