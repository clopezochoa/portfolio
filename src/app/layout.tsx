import type { Metadata } from "next";
import "./globals.css";
import Providers from "./providers";
import { keywords } from "./content";
import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata: Metadata = {
  title: "Carlos López-Ochoa",
  description: "Frontend Developer",
  keywords: keywords
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <SpeedInsights />
      <Providers>
        <body className="bg-dark">
          {children}
        </body>
      </Providers>
    </html>
  );
}
