import type { Metadata } from "next";
import "./globals.css";
import Providers from "./providers";
import { keywords } from "./content";

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
      <Providers>
        <body className="dark-bg">
          {children}
        </body>
      </Providers>
    </html>
  );
}
