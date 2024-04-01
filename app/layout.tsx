import { Toaster } from '@/components/ui/sonner';
import { GeistSans } from 'geist/font/sans';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Indie Makers - Showcase your creations to the globe in 30 seconds',
  description:
    'Spotlight for indie makers to showcase their creations to the globe in 30 seconds by managing widgets insights and available for free.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={GeistSans.className}>
        {children}
        <Toaster richColors position="top-right" />
      </body>
    </html>
  );
}
