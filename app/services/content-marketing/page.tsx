import type { Metadata } from 'next';
import ContentMarketingContent from './ContentMarketingContent';

export const metadata: Metadata = {
  title: 'Content Marketing Services | Arno Consultancy',
  description: 'Create engaging content that connects with your audience and drives results. Our expert team delivers strategic content marketing solutions across all platforms.',
  openGraph: {
    title: 'Content Marketing Services | Arno Consultancy',
    description: 'Create engaging content that connects with your audience and drives results. Our expert team delivers strategic content marketing solutions across all platforms.',
  }
}

export default function ContentMarketingPage() {
  return <ContentMarketingContent />;
} 