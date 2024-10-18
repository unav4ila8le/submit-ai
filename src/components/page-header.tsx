import { Bot, Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ModeToggle } from "./mode-toggle";
import Link from "next/link";

const PageHeader: React.FC = () => {
  return (
    <header className="fixed top-0 z-20 w-full bg-white shadow-md dark:bg-[#162032]">
      <nav className="mx-auto flex w-full max-w-screen-xl flex-row flex-nowrap items-center justify-between p-4">
        <div className="flex flex-1">
          <Link
            href="/"
            className="flex flex-row items-center gap-1 text-primary transition-all hover:text-primary/80"
          >
            <Bot className="h-8 w-8" />
            <span className="mt-1 text-xl font-semibold uppercase">
              Submit.ai
            </span>
          </Link>
        </div>
        <div className="hidden flex-row items-center gap-6 lg:flex">
          <Link href="/products" className="transition-all hover:text-primary">
            Products
          </Link>
          <Link href="/pricing" className="transition-all hover:text-primary">
            Pricing
          </Link>
          <Link href="/affiliate" className="transition-all hover:text-primary">
            Affiliate
          </Link>
          <Link href="/blog" className="transition-all hover:text-primary">
            Blog
          </Link>
        </div>
        <div className="hidden flex-1 flex-row items-center justify-end gap-3 lg:flex">
          <ModeToggle />
          <Button variant="ghost">Log in</Button>
          <Button>Start writing</Button>
        </div>
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col gap-6">
                <Link
                  href="/products"
                  className="transition-all hover:text-primary"
                >
                  Products
                </Link>
                <Link
                  href="/pricing"
                  className="transition-all hover:text-primary"
                >
                  Pricing
                </Link>
                <Link
                  href="/affiliate"
                  className="transition-all hover:text-primary"
                >
                  Affiliate
                </Link>
                <Link
                  href="/blog"
                  className="transition-all hover:text-primary"
                >
                  Blog
                </Link>
                <div className="border-t"></div>
                <Link href="#" className="transition-all hover:text-primary">
                  Log In
                </Link>
                <Button className="self-start">Start writing</Button>
                <ModeToggle />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
};

export default PageHeader;
