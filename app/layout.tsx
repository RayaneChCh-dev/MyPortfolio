import type { Metadata } from "next";
import "./globals.css";
import { Figtree } from "next/font/google";

const font = Figtree({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "Portfolio - Web and Mobile Developer",
  description: "A showcase of my projects and skills in web and mobile development, featuring React, Next.js, Kotlin, and Java.",
  authors: { name: "Your Name" }, // Replace with your actual name
  keywords: [
    "web development",
    "mobile app development",
    "React",
    "Next.js",
    "Kotlin",
    "Java",
    "portfolio",
    "frontend developer",
    "software developer"
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={font.className}
      >
        {children}
      </body>
    </html>
  );
}
