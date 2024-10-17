"use client";

import { Copy, Expand, Flag, GraduationCap, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";

interface HumanizationStrengthOptionProps {
  value: string;
  label: string;
}

const HumanizationStrengthOption: React.FC<HumanizationStrengthOptionProps> = ({
  value,
  label,
}) => (
  <Label htmlFor={value} className="relative">
    <RadioGroupItem
      id={value}
      value={value}
      className="peer absolute h-full w-full rounded-none opacity-0"
    />
    <Button
      variant="outline"
      className="w-full peer-aria-checked:bg-primary peer-aria-checked:text-white"
    >
      {label}
      <Dialog>
        <DialogTrigger asChild>
          <Info className="z-10 ml-2 h-4 w-4" />
        </DialogTrigger>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle>What is the Humanization Strength?</DialogTitle>
          </DialogHeader>
          <div>
            <h4>Light</h4>
            <p>
              For use in Blogs, marketing materials, or any place where AI tools
              need to detect text. It's a great choice for clear and
              easy-to-understand writing.
            </p>
          </div>
          <div>
            <h4>Moderate</h4>
            <p>
              This offers the perfect blend between human-like writing and
              top-notch quality. It's ideal for those who want a balance that
              combines the best of both worlds.
            </p>
          </div>
          <div>
            <h4>Heavy</h4>
            <p>
              If you're dealing with AI detectors that are either too forceful
              or inconsistent, this option is for you. It provides a more human
              touch, making it suitable for situations where a more natural feel
              is required.{" "}
              <span className="text-slate-900 dark:text-slate-100">
                We recommend using this option for most text, as it's the most
                effective. If you're experiencing quality issues, please lower
                the strength.
              </span>
            </p>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="ghost">Close</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </Button>
  </Label>
);

const HumanizerContainer: React.FC = () => {
  return (
    <div className="flex min-h-[640px] flex-col rounded-2xl border bg-card shadow-lg">
      <div className="flex flex-col items-center justify-between gap-4 border-b px-4 py-3 md:flex-row">
        <div className="flex flex-row items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-green-500"></div>
          <p>Input your text below</p>
        </div>
        <RadioGroup
          defaultValue="option1"
          className="flex w-full flex-col gap-2 sm:w-auto sm:flex-row"
        >
          <HumanizationStrengthOption value="option1" label="Light" />
          <HumanizationStrengthOption value="option2" label="Moderate" />
          <HumanizationStrengthOption value="option3" label="Heavy" />
        </RadioGroup>
        <div className="flex items-center gap-2">
          <Switch id="pro-engine" />
          <Label htmlFor="pro-engine">Ultra Mode</Label>
          <Dialog>
            <DialogTrigger asChild>
              <Info className="h-4 w-4 cursor-pointer" />
            </DialogTrigger>
            <DialogContent className="max-w-md">
              <DialogHeader>
                <DialogTitle>What is the Ultra Mode?</DialogTitle>
                <DialogDescription>Pro Feature</DialogDescription>
              </DialogHeader>
              <p>
                Our Ultra Mode is an exclusive feature available only to our
                "Pro" subscribers, representing a major upgrade from our
                previous version with improvements of over 10 times the
                capability. This engine should only be used if you would like to
                bypass the most advanced AI detectors on the market, as this
                model is slower and gives more varied outputs than basic.
              </p>
              <DialogFooter>
                <DialogClose asChild>
                  <Button variant="ghost">Close</Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <div className="flex flex-grow flex-col divide-y sm:flex-row md:divide-x md:divide-y-0">
        <div className="flex w-full flex-col md:w-1/2">
          <Textarea
            autosize
            placeholder="Type or paste your content here and click on the buttons below to rewrite or check for AI content."
            className="h-full min-h-[256px] flex-grow rounded-none !border-none bg-transparent p-4 text-base text-slate-900 !outline-none !ring-0 !ring-offset-0 dark:text-white"
          />
          <div className="sticky bottom-0 mx-4 flex flex-col flex-wrap justify-between gap-2 bg-card py-3 md:flex-row md:items-center">
            <p className="font-medium">
              <span className="text-slate-500">0</span> Words = 0 chars
            </p>
            <div className="flex flex-row flex-wrap gap-2">
              <Button variant="shadow" className="w-full md:w-auto">
                <GraduationCap className="mr-2" /> Humanize
              </Button>
              <Button variant="outline" className="w-full md:w-auto">
                <Flag className="mr-2" /> AI Check
              </Button>
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col md:w-1/2">
          <p className="h-full flex-grow p-4 text-slate-400 dark:text-slate-600">
            Your humanized, AI-undetectable content will appear here.
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
