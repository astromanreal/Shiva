
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hasta Mudras (Hand Gestures) | ShivaSphere',
  description: 'Explore various Hasta Mudras (hand gestures) used in Yoga and Meditation, their meanings, and descriptions.',
};

export default function MudrasLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
