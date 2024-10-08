import { Bot } from "lucide-react";
import React from "react";
import { ModeToggle } from "./mode-toggle";

const PageHeader: React.FC = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto flex w-full max-w-screen-xl flex-row items-center justify-between p-4">
        <div className="flex flex-row items-center gap-1">
          <Bot />
          <span className="mt-1 font-semibold uppercase text-primary">
            Submit.ai
          </span>
        </div>
        <ModeToggle />
      </div>
    </div>
  );
};

export default PageHeader;
