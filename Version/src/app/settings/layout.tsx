// src/app/settings/layout.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Settings | ShivaSphere',
  description: 'Configure your preferences for ShivaSphere.',
};

export default function SettingsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
