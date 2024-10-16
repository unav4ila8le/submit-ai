import { Bot } from "lucide-react";
import Link from "next/link";

const PageFooter: React.FC = () => {
  return (
    <footer className="bg-primary py-8">
      <div className="mx-auto w-full max-w-screen-xl p-4">
        <nav className="grid w-full grid-cols-12 gap-8 text-white lg:gap-4">
          <div className="col-span-12 lg:col-span-6">
            <Link
              href="/"
              className="flex flex-row items-center gap-1 transition-all hover:text-white/80"
            >
              <Bot className="h-8 w-8" />
              <span className="mt-1 text-xl font-semibold uppercase">
                Submit.ai
              </span>
            </Link>
            <p className="mt-3 text-xl font-medium text-white/80">
              Supercharge Your Writing With AI
            </p>
          </div>
          <div className="col-span-12 sm:col-span-4 lg:col-span-2">
            <h4 className="mb-3 text-lg font-semibold text-white">Products</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  className="text-white/80 transition-all hover:text-white"
                  href="#"
                >
                  AI Humanizer
                </Link>
              </li>
              <li>
                <Link
                  className="text-white/80 transition-all hover:text-white"
                  href="#"
                >
                  AI Detector
                </Link>
              </li>
              <li>
                <Link
                  className="text-white/80 transition-all hover:text-white"
                  href="#"
                >
                  AI Bypass
                </Link>
              </li>
              <li>
                <Link
                  className="text-white/80 transition-all hover:text-white"
                  href="#"
                >
                  AI Essay Writer
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-span-12 sm:col-span-4 lg:col-span-2">
            <h4 className="mb-3 text-lg font-semibold text-white">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  className="text-white/80 transition-all hover:text-white"
                  href="/about"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  className="text-white/80 transition-all hover:text-white"
                  href="#"
                >
                  Affiliate Program
                </Link>
              </li>
              <li>
                <Link
                  className="text-white/80 transition-all hover:text-white"
                  href="/blog"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-span-12 sm:col-span-4 lg:col-span-2">
            <h4 className="mb-3 text-lg font-semibold text-white">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  className="text-white/80 transition-all hover:text-white"
                  href="/about"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  className="text-white/80 transition-all hover:text-white"
                  href="#"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <div className="mt-16 border-t border-white/20 pt-8">
          <p className="text-white/60">
            Copyright © 2025 Submit AI, LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default PageFooter;
