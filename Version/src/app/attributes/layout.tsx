
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Attributes of Mahadeva | ShivaSphere',
  description: 'Explore the symbolic attributes associated with Lord Shiva, such as the Third Eye, Crescent Moon, Trident, and more.',
};

export default function AttributesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
