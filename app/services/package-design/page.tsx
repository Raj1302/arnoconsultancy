import type { Metadata } from 'next';
import PackageDesignContent from './PackageDesignContent';

export const metadata: Metadata = {
  title: 'Package Design Services | Arno Consultancy',
  description: 'Create stunning, memorable packaging designs that make your products stand out. Our expert team combines creativity with strategic thinking to deliver impactful packaging solutions.',
  openGraph: {
    title: 'Package Design Services | Arno Consultancy',
    description: 'Create stunning, memorable packaging designs that make your products stand out. Our expert team combines creativity with strategic thinking to deliver impactful packaging solutions.',
  }
}

export default function PackageDesignPage() {
  return <PackageDesignContent />;
} 