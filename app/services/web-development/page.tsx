import type { Metadata } from 'next';
import WebDevContent from './WebDevContent';

export const metadata: Metadata = {
  title: 'Web Development Services | Arno Consultancy',
  description: 'Create stunning, responsive websites that drive results. Our expert team delivers custom web solutions that combine beautiful design with powerful functionality.',
  openGraph: {
    title: 'Web Development Services | Arno Consultancy',
    description: 'Create stunning, responsive websites that drive results. Our expert team delivers custom web solutions that combine beautiful design with powerful functionality.',
  }
}

export default function WebDevelopmentPage() {
  return <WebDevContent />;
} 