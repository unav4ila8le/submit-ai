import { Bot } from "lucide-react";
import React from "react";

const PageHeader: React.FC = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto w-full max-w-screen-xl items-center justify-between p-4">
        <div className="flex flex-row items-center gap-1">
          <Bot />
          <span className="text-primary mt-1 font-semibold uppercase">
            Submit.ai
          </span>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
