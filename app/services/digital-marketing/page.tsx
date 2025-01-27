import type { Metadata } from 'next';
import MarketingContent from './MarketingContent';

export const metadata: Metadata = {
  title: 'Digital Marketing Services | Arno Consultancy',
  description: 'Transform your online presence with data-driven digital marketing strategies. Our expert team delivers measurable results through SEO, social media, and targeted campaigns.',
  openGraph: {
    title: 'Digital Marketing Services | Arno Consultancy',
    description: 'Transform your online presence with data-driven digital marketing strategies. Our expert team delivers measurable results through SEO, social media, and targeted campaigns.',
  }
}

export default function DigitalMarketingPage() {
  return <MarketingContent />;
} 