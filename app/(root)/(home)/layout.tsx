import Navbar from '@/components/shared/Navbar';
import { ReactNode } from 'react';

const HomeLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Navbar />
      <main className="mt-[3.5rem]"> {children}</main>
    </div>
  );
};

export default HomeLayout;
