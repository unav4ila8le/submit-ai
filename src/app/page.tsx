import { Bot, CheckCircle2, CircleHelpIcon, Pencil, Star } from "lucide-react";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import LogoCarousel from "@/components/logo-carousel";
import HumanizerContainer from "@/components/humanizer-container";
import FAQSchema from "@/components/schema/faq-schema";

import { faqs } from "@/lib/faqs";
import TryFree from "@/components/commons/try-free";

export default function Home() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <div className="mx-auto mt-28 w-full max-w-screen-xl px-4 md:mt-32">
        <div className="mx-auto w-full max-w-4xl text-center">
          <h1 className="text-5xl/tight sm:text-7xl/tight">
            AI-Powered Writing at Your Fingertips
          </h1>
          <p className="mt-8 text-xl">
            Transform AI-generated content into human text with Submit AI. Write
            faster and boost your productivity—all 100% undetectable by TurnItIn
            and other AI detectors.
          </p>
          <Button size="xl" className="group mt-10">
            <Pencil className="mr-2" />
            Get Started
            <span className="ml-1 text-base text-white/60 transition-all group-hover:text-white">
              - it's free
            </span>
          </Button>
          <div className="mt-6 flex flex-row items-center justify-center gap-2">
            <div className="flex flex-row items-center -space-x-2">
              <Avatar className="h-8 w-8 outline outline-2 outline-background">
                <AvatarImage
                  src="https://i.pravatar.cc/64"
                  alt="User profile picture"
                />
              </Avatar>
              <Avatar className="h-8 w-8 outline outline-2 outline-background">
                <AvatarImage
                  src="https://i.pravatar.cc/64"
                  alt="User profile picture"
                />
              </Avatar>
              <Avatar className="h-8 w-8 outline outline-2 outline-background">
                <AvatarImage
                  src="https://i.pravatar.cc/64"
                  alt="User profile picture"
                />
              </Avatar>
            </div>
            <p>Join 3,000,000+ writers</p>
          </div>
        </div>
        <div className="mt-10">
          <HumanizerContainer />
        </div>
        <div className="mt-12 text-center">
          <div className="mb-4 flex flex-row justify-center gap-2">
            <CheckCircle2 className="text-slate-500" />
            <h3 className="font-medium text-slate-500 dark:text-slate-400">
              Used by Students & Academics Around the World
            </h3>
          </div>
          <LogoCarousel />
        </div>
        <div className="mt-24 md:mt-40">
          <div className="mx-auto max-w-4xl text-center">
            <Badge
              size="lg"
              className="gap-2 bg-primary/30 font-bold uppercase text-primary"
            >
              <Bot /> Complete AI Toolset
            </Badge>
            <h2 className="mt-6 text-4xl sm:text-6xl/tight">
              Your Ultimate AI Writing Assistant
            </h2>
            <p className="mt-6 text-xl">
              Features built to accelerate your writing and boost your
              productivity.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-2">
            <div>
              <div className="h-80 bg-slate-200 dark:bg-slate-700"></div>
              <h3 className="mt-6 text-3xl">AI Humanizer + Bypass</h3>
              <p className="mt-2">
                Transform AI-generated content using our humanizer to pass AI
                content detectors like TurnItIn and GPTZero.
              </p>
            </div>
            <div>
              <div className="h-80 bg-slate-200 dark:bg-slate-700"></div>
              <h3 className="mt-6 text-3xl">AI Writer</h3>
              <p className="mt-2">
                Generate an essay, research paper, article, or any other type of
                content within seconds, with in-text citations from real
                articles, journals, and websites.
              </p>
            </div>
            <div>
              <div className="h-80 bg-slate-200 dark:bg-slate-700"></div>
              <h3 className="mt-6 text-3xl">AI Content Detector</h3>
              <p className="mt-2">
                Write with confidence—use our AI detector to see your content
                passes AI checks from the leading AI detection tools, including
                TurnItIn.
              </p>
            </div>
            <div>
              <div className="h-80 bg-slate-200 dark:bg-slate-700"></div>
              <h3 className="mt-6 text-3xl">Content Export</h3>
              <p className="mt-2">
                Copy your content straight our of the editor or export as a Word
                document.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-24 md:mt-40">
          <div className="mx-auto max-w-4xl text-center">
            <Badge
              size="lg"
              className="gap-2 bg-yellow-500/30 font-bold uppercase text-yellow-500"
            >
              <Star /> Reviews
            </Badge>
            <h2 className="mt-6 text-4xl sm:text-6xl/tight">
              Join 3 Million Others Using Submit AI
            </h2>
            <p className="mt-6 text-xl">
              Generate essays, research papers, articles and other types of
              content within seconds—all completely AI-undetectable.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-3">
            <div className="aspect-[9/16] max-h-[80vh] w-full bg-slate-200 dark:bg-slate-700"></div>
            <div className="aspect-[9/16] max-h-[80vh] w-full bg-slate-200 dark:bg-slate-700"></div>
            <div className="aspect-[9/16] max-h-[80vh] w-full bg-slate-200 dark:bg-slate-700"></div>
          </div>
          <div className="mx-auto mt-16 grid max-w-3xl grid-cols-4 items-start gap-8 xl:max-w-full">
            <div className="col-span-4 rounded-2xl border bg-card p-6 shadow-lg xl:col-span-2">
              <blockquote className="text-lg font-semibold text-slate-900 dark:text-slate-100 sm:text-xl">
                “I used to spend hours manually rewriting my text to bypass AI
                detectors, but Submit AI has simplified the entire process for
                me and gives me the peace of mind I need. Thank you Submit AI!”
              </blockquote>
              <div className="mt-5 flex flex-row items-center gap-2 xl:mt-16">
                <Avatar className="h-10 w-10">
                  <AvatarImage
                    src="https://i.pravatar.cc/64"
                    alt="User profile picture"
                  />
                </Avatar>
                <div>
                  <div className="font-semibold text-slate-900 dark:text-slate-100">
                    Jordan Brown
                  </div>
                  <div>@thejordanbrown</div>
                </div>
              </div>
            </div>
            <div className="col-span-4 rounded-2xl border bg-card p-6 shadow-lg md:col-span-2 xl:order-first xl:col-span-1">
              <blockquote className="text-lg text-slate-700 dark:text-slate-300">
                “I didn't think Submit AI would be able to create the quality of
                content I needed. Now it's part of my daily workflow. I love
                it.”
              </blockquote>
              <div className="mt-5 flex flex-row items-center gap-2">
                <Avatar className="h-10 w-10">
                  <AvatarImage
                    src="https://i.pravatar.cc/64"
                    alt="User profile picture"
                  />
                </Avatar>
                <div>
                  <div className="font-semibold text-slate-900 dark:text-slate-100">
                    Alex Harper
                  </div>
                  <div>@aharper_</div>
                </div>
              </div>
            </div>
            <div className="col-span-4 rounded-2xl border bg-card p-6 shadow-lg md:col-span-2 xl:col-span-1">
              <blockquote className="text-lg text-slate-700 dark:text-slate-300">
                “Submit AI has been a game-changer for me as a busy college
                student. It saves me so much time on essay writing by using AI!”
              </blockquote>
              <div className="mt-5 flex flex-row items-center gap-2">
                <Avatar className="h-10 w-10">
                  <AvatarImage
                    src="https://i.pravatar.cc/64"
                    alt="User profile picture"
                  />
                </Avatar>
                <div>
                  <div className="font-semibold text-slate-900 dark:text-slate-100">
                    Jordan Brown
                  </div>
                  <div>@thejordanbrown</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-24 md:mt-40">
          <div className="mx-auto max-w-4xl text-center">
            <Badge
              size="lg"
              className="gap-2 bg-green-500/30 font-bold uppercase text-green-500"
            >
              <CircleHelpIcon /> Support
            </Badge>
            <h2 className="mt-6 text-4xl sm:text-6xl/tight">
              Frequently Asked Questions
            </h2>
            <p className="mt-6 text-xl">
              Find answers to the most common questions about Submit AI.
            </p>
          </div>
          <div className="mt-10 flex flex-col gap-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="rounded-xl border bg-card p-4 shadow-md"
              >
                <h4 className="text-lg font-normal !text-primary">
                  {faq.question}
                </h4>
                <p>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="my-24 md:my-40">
          <TryFree />
        </div>
      </div>
    </>
  );
}
