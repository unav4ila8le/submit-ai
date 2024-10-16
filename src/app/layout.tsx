import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "@/components/context/theme-provider";
import { cn } from "@/lib/utils";
import PageHeader from "@/components/page-header";
import PageFooter from "@/components/page-footer";

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
        className={cn(
          "min-h-screen font-sans antialiased transition-all",
          inter.variable,
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <PageHeader />
          <main>{children}</main>
          <PageFooter />
        </ThemeProvider>
      </body>
    </html>
  );
}
