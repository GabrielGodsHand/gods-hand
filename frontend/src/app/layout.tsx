import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Divine Hand - Celestial Parallax Experience",
  description: "Experience the ethereal touch of celestial wisdom through divine parallax scrolling",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
