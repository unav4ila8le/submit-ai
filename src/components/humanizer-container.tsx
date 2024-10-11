"use client";

import { Copy, Expand, Flag, GraduationCap, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";

const HumanizerContainer = () => {
  return (
    <div className="flex min-h-[640px] flex-col rounded-2xl border bg-card shadow-lg">
      <div className="flex flex-row items-center justify-between gap-2 border-b px-4 py-3">
        <div className="flex flex-row items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-green-500"></div>
          <p>Waiting for your input...</p>
        </div>
        <RadioGroup
          defaultValue="option1"
          className="flex flex-row items-center gap-2"
        >
          <Label htmlFor="option1" className="relative">
            <RadioGroupItem
              id="option1"
              value="option1"
              className="peer absolute h-full w-full rounded-none opacity-0"
            />
            <Button
              variant="outline"
              className="peer-aria-checked:bg-primary peer-aria-checked:text-white"
            >
              Easy <Info className="ml-2 h-4 w-4" />
            </Button>
          </Label>
          <Label htmlFor="option2" className="relative">
            <RadioGroupItem
              id="option2"
              value="option2"
              className="peer absolute h-full w-full rounded-none opacity-0"
            />
            <Button
              variant="outline"
              className="peer-aria-checked:bg-primary peer-aria-checked:text-white"
            >
              Medium <Info className="ml-2 h-4 w-4" />
            </Button>
          </Label>
          <Label htmlFor="option3" className="relative">
            <RadioGroupItem
              id="option3"
              value="option3"
              className="peer absolute h-full w-full rounded-none opacity-0"
            />
            <Button
              variant="outline"
              className="peer-aria-checked:bg-primary peer-aria-checked:text-white"
            >
              Aggressive <Info className="ml-2 h-4 w-4" />
            </Button>
          </Label>
        </RadioGroup>
        <div className="flex items-center gap-2">
          <Switch id="pro-engine" />
          <Label htmlFor="pro-engine">Pro Engine</Label>
          <Info className="h-4 w-4" />
        </div>
      </div>
      <div className="flex flex-grow flex-row divide-x">
        <div className="flex w-1/2 flex-col">
          <Textarea
            autosize
            placeholder="To rewrite or check your content, type or paste it here and click on the buttons below."
            className="h-full flex-grow rounded-none !border-none bg-transparent p-4 text-base text-slate-900 !outline-none !ring-0 !ring-offset-0 dark:text-white"
          />
          <div className="sticky bottom-0 mx-4 flex flex-row items-center justify-between bg-card py-3">
            <p className="font-medium">
              <span className="text-slate-500">0</span> Words = 0 chars
            </p>
            <div className="flex flex-row items-center gap-2">
              <Button variant="shadow">
                <GraduationCap className="mr-2" /> Humanize
              </Button>
              <Button variant="outline">
                <Flag className="mr-2" /> Check for AI
              </Button>
            </div>
          </div>
        </div>
        <div className="flex w-1/2 flex-col">
          <p className="h-full flex-grow p-4 text-slate-400 dark:text-slate-600">
            Your humanized content will appear here.
          </p>
          <div className="sticky bottom-0 mx-4 flex flex-row items-center justify-between bg-card py-3">
            <p>0 Words</p>
            <div className="flex flex-row gap-2">
              <Button size="icon" variant="ghost">
                <Expand />
              </Button>
              <Button size="icon" variant="ghost">
                <Copy />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HumanizerContainer;
