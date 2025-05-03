import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pranayama - The Science of Breath | ShivaSphere',
  description: 'Explore Pranayama, the yogic practice of breath control, its techniques, benefits, and significance in Hinduism and Yoga philosophy.',
};

export default function PranayamaLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
