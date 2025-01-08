import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
});

export const metadata: Metadata = {
  title: "Arno Consultancy | AI Avatars, Package Design & Web Development",
  description: "Transform your brand with cutting-edge AI avatars, stunning package designs, and modern web development solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${jakarta.variable} antialiased font-jakarta`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
