import type { Metadata } from "next";
import { Geist, Geist_Mono, Ubuntu } from "next/font/google";
import "./globals.css";

const ubuntu = Ubuntu({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-ubuntu',
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: 'Arno Consultancy | Digital Marketing & AI Solutions',
    template: '%s | Arno Consultancy'
  },
  description: 'Transform your brand with cutting-edge AI solutions, digital marketing, and web development services. Arno Consultancy helps businesses thrive in the digital age.',
  keywords: ['Digital Marketing', 'AI Solutions', 'Web Development', 'Content Creation', 'Packaging Design', 'Marketing Agency'],
  authors: [{ name: 'Arno Consultancy' }],
  creator: 'Arno Consultancy',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://arnoconsultancy.com',
    title: 'Arno Consultancy | Digital Marketing & AI Solutions',
    description: 'Transform your brand with cutting-edge AI solutions, digital marketing, and web development services.',
    siteName: 'Arno Consultancy',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Arno Consultancy | Digital Marketing & AI Solutions',
    description: 'Transform your brand with cutting-edge AI solutions, digital marketing, and web development services.',
    creator: '@arnoconsultancy',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    // Add other verification codes as needed
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${ubuntu.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
