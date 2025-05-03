import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Path of Yoga | ShivaSphere',
  description: 'Explore the ancient science of Yoga, its practices like Asana and Pranayama, and its connection to Adiyogi Shiva.',
};

export default function YogaLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
