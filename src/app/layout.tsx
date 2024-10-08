import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import PageHeader from "@/components/page-header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Submit.ai",
  description: "Submit.ai - Best AI Detection Remover | Bypass AI Detection",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn("min-h-screen font-sans antialiased", inter.className)}
      >
        <header>
          <PageHeader />
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
