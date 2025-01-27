import type { Metadata } from 'next';
import AIAvatarsContent from './AIAvatarsContent';

export const metadata: Metadata = {
  title: 'AI Avatar Services | Arno Consultancy',
  description: 'Transform your brand with cutting-edge AI avatar solutions. Create personalized, engaging digital representations that connect with your audience.',
  openGraph: {
    title: 'AI Avatar Services | Arno Consultancy',
    description: 'Transform your brand with cutting-edge AI avatar solutions. Create personalized, engaging digital representations that connect with your audience.',
  }
}

export default function AIAvatarsPage() {
  return <AIAvatarsContent />;
} 