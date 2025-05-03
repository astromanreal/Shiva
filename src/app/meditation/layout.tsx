import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Path of Dhyana (Meditation) | ShivaSphere',
  description: 'Explore the practice of meditation (Dhyana), its connection to Adiyogi Shiva, benefits, and techniques for inner peace and wisdom.',
};

export default function MeditationLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
