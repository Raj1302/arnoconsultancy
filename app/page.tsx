import type { Metadata } from 'next';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomeContent from "./components/HomeContent";

export const metadata: Metadata = {
  title: 'Digital Marketing & AI Solutions Agency | Arno Consultancy',
  description: 'Partner with Arno Consultancy for innovative digital marketing, AI solutions, and web development services that drive real business growth.',
  openGraph: {
    title: 'Digital Marketing & AI Solutions Agency | Arno Consultancy',
    description: 'Partner with Arno Consultancy for innovative digital marketing, AI solutions, and web development services that drive real business growth.',
  }
}

export default function Home() {
  return (
    <>
      <Navbar />
      <HomeContent />
      <Footer />
    </>
  );
}
