import Navbar from '@/components/shared/Navbar';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Event Rater',
  description:
    'Discover and rate the best events around the world. Join our community today!',
  icons: '',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
    </div>
  );
}
