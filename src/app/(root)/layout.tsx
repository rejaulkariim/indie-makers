import Navbar from '@/components/shared/Navbar';
import Footer from '@/components/shared/footer/Footer';
import { ReactNode } from 'react';

const HomeLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="relative h-full">
      <Navbar />
      <main className="relative flex flex-col min-h-screen mt-[3.5rem]">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default HomeLayout;
