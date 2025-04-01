import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const interSans = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hire Top Tech Talents Remotely | Wedey – One World, One Team",
  description: "Discover a world of tech talent with Wedey. Hire remote developers, data scientists, and cybersecurity experts in just 48 hours. Build global teams seamlessly.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${interSans.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
