import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { cn } from "@/lib/utils";
import PageHeader from "@/components/page-header";
import { ThemeProvider } from "@/components/context/theme-provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

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
        className={cn("min-h-screen font-sans antialiased", inter.variable)}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <header>
            <PageHeader />
          </header>
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
