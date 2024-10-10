import { Bot, CheckCircle2, CircleHelpIcon, Pencil, Star } from "lucide-react";

import LogoCarousel from "@/components/logo-carousel";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import FAQSchema from "@/components/schema/faq-schema";

import { faqs } from "@/lib/faqs";

export default function Home() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <div className="mx-auto mt-28 w-full max-w-screen-xl px-4 md:mt-32">
        <div className="mx-auto w-full max-w-4xl text-center">
          <h1 className="text-5xl/tight sm:text-7xl/tight">
            Supercharge Your Writing With AI
          </h1>
          <p className="mt-8 text-xl">
            Transform AI-generated content into 100% human text with Submit AI.
            Save time on your writing, boost efficiency, and bypass AI detectors
            like TurnItIn and GPTZero.
          </p>
          <Button size="xl" className="group mt-10">
            <Pencil className="mr-2" />
            Get Started
            <span className="ml-1 text-base text-white/60 transition-all group-hover:text-white">
              - for free
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
            <p>Join 500,000+ writers</p>
          </div>
        </div>
        <div className="mt-10 h-[640px] bg-slate-200 dark:bg-slate-700">
          tool goes here
        </div>
        <div className="mt-12 text-center">
          <div className="mb-4 flex flex-row justify-center gap-2">
            <CheckCircle2 className="text-slate-500" />
            <h3 className="font-medium text-slate-500 dark:text-slate-400">
              Used by Students & Writers Around the World
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
              <Bot /> Complete AI Toolkit
            </Badge>
            <h2 className="mt-6 text-4xl sm:text-6xl/tight">
              Ultimate Writing Assistant
            </h2>
            <p className="mt-6 text-xl">
              Features built to enhance your writing capabilities and save you
              time.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-2">
            <div>
              <div className="h-80 bg-slate-200 dark:bg-slate-700"></div>
              <h3 className="mt-6 text-3xl">AI Humanizer & Paraphraser</h3>
              <p className="mt-2">
                Humanize AI-generated content to bypass AI detectors like
                GPTZero, TurnItIn, and more. Ensure your content is undetectable
                by all AI detectors.
              </p>
            </div>
            <div>
              <div className="h-80 bg-slate-200 dark:bg-slate-700"></div>
              <h3 className="mt-6 text-3xl">AI Writer</h3>
              <p className="mt-2">
                Organize and generate your next paper, article, or more within
                seconds, with support for custom in-text citations from the
                internet.
              </p>
            </div>
            <div>
              <div className="h-80 bg-slate-200 dark:bg-slate-700"></div>
              <h3 className="mt-6 text-3xl">AI Detector</h3>
              <p className="mt-2">
                Check your content for free to see if it gets picked up by AI
                detectors with a 99.8% accuracy rate. Our AI detector has
                industry-leading accuracy.
              </p>
            </div>
            <div>
              <div className="h-80 bg-slate-200 dark:bg-slate-700"></div>
              <h3 className="mt-6 text-3xl">Quick Export</h3>
              <p className="mt-2">
                Quickly export your generated content to multiple supported
                formats of your choice such as Google Docs, Microsoft Word, etc.
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
              Join 500,000+ writers using Phrasly
            </h2>
            <p className="mt-6 text-xl">
              Phrasly has helped write over 250 million words. From academic
              essays, journals, to top-ranking articles - all bypassing AI
              detectors.
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
                detectors, but Phrasly has simplified the entire process for me
                and gives me the peace of mind I need. Thank you Phrasly!”
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
                “I didn't think Phrasly would be able to create the quality of
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
                “Phrasly has been a game-changer for me as a busy college
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
              Find answers to the most common questions about Phrasly.
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
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mt-4 text-4xl sm:text-6xl/tight">
              Try Phrasly for free today
            </h2>
            <p className="mt-6 text-xl">
              Join 500,000+ students and writers who use Phrasly's AI content
              tools to write faster and bypass AI detection.
            </p>
            <Button size="xl" className="group mt-6">
              <Pencil className="mr-2" />
              Get Started
              <span className="ml-1 text-base text-white/60 transition-all group-hover:text-white">
                - for free
              </span>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
