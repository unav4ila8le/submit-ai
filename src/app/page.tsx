import LogoCarousel from "@/components/logo-carousel";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Pencil } from "lucide-react";

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-screen-xl px-4">
      <div className="mx-auto w-full max-w-4xl text-center">
        <h1 className="text-5xl sm:text-7xl">
          Supercharge Your Writing With AI
        </h1>
        <p className="mt-8 text-xl">
          Transform AI-generated content into 100% human text with Submit AI.
          Save time on your writing, boost efficiency, and bypass AI detectors
          like TurnItIn and GPTZero.
        </p>
        <Button size="xl" className="mt-10">
          <Pencil className="mr-2" />
          Get Started
          <span className="ml-1 text-base text-white/60">- for free</span>
        </Button>
        <div className="mt-6 flex flex-row items-center justify-center gap-2">
          <div className="flex flex-row items-center -space-x-2">
            <Avatar className="h-8 w-8 ring-2 ring-background">
              <AvatarImage
                src="https://i.pravatar.cc/64"
                alt="User profile picture"
              />
            </Avatar>
            <Avatar className="h-8 w-8 ring-2 ring-background">
              <AvatarImage
                src="https://i.pravatar.cc/64"
                alt="User profile picture"
              />
            </Avatar>
            <Avatar className="h-8 w-8 ring-2 ring-background">
              <AvatarImage
                src="https://i.pravatar.cc/64"
                alt="User profile picture"
              />
            </Avatar>
          </div>
          <p>Join 500,000+ writers</p>
        </div>
      </div>
      <div className="mt-10 h-[640px] bg-gray-200">tool goes here</div>
      <div className="mt-12 text-center">
        <div className="mb-4 flex flex-row justify-center gap-2">
          <CheckCircle2 className="text-gray-500" />
          <h2 className="font-medium text-gray-500 dark:text-gray-400">
            Used by Students & Writers Around the World
          </h2>
        </div>
        <LogoCarousel />
      </div>
    </div>
  );
}
