import type { Metadata } from "next";
import "./globals.css";
import { defaultColors } from "../../tailwind.config";
import Providers from "./providers";

export const metadata: Metadata = {
  title: "Carlos López-Ochoa",
  description: "Frontend Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{backgroundColor:defaultColors.dark}}>
      <Providers>
        <body>{children}</body>
      </Providers>
    </html>
  );
}
