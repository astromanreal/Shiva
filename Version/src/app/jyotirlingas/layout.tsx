
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dvādaśa Jyotirlinga | ShivaSphere',
  description: 'Explore the 12 sacred Jyotirlingas, the eternal flames representing Lord Shiva across India.',
};

export default function JyotirlingasLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Basic layout structure, can add specific elements later if needed
  return <>{children}</>;
}
