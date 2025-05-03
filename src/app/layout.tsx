import type { Metadata } from 'next';
import { Geist } from 'next/font/google'; // Removed Geist_Mono as it wasn't explicitly used
import './globals.css';
import { cn } from '@/lib/utils';
import Header from '@/components/layout/header';
import { Toaster } from "@/components/ui/toaster";
import { Noto_Sans_Devanagari } from 'next/font/google'; // Import Noto Sans Devanagari

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

// Load Noto Sans Devanagari font
const notoSansDevanagari = Noto_Sans_Devanagari({
  weight: ['400', '700'], // Specify weights you need
  subsets: ['devanagari'],
  variable: '--font-noto-sans-devanagari', // Define CSS variable
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'ShivaSphere',
  description: 'A digital temple dedicated to Mahadeva - Lord Shiva.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
         {/* Google Font link removed as we are using next/font */}
      </head>
      <body
        className={cn(
          geistSans.variable,
          notoSansDevanagari.variable, // Add Devanagari font variable
          'antialiased min-h-screen flex flex-col bg-background font-sans' // Base font
        )}
      >
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8">{children}</main>
        <Toaster />
      </body>
    </html>
  );
}
