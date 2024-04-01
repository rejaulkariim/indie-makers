import Toolbar from '@/components/design/toolbar/Toolbar';
import MaxWidthWrapper from '@/components/shared/MaxWidthWrapper';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ShieldCheck } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { ReactNode } from 'react';

interface LayoutProps {
  params: {
    id: string;
  };
  children: ReactNode;
}

const Layout = ({ params, children }: LayoutProps) => {
  return (
    <section>
      <MaxWidthWrapper className="max-w-4xl mx-auto">
        <Image
          src="/assets/images/cover.png"
          height={300}
          width={1200}
          alt="cover"
          priority
          className="object-cover w-full rounded-2xl mt-4"
        />
        <div className="relative -top-[3rem] px-6">
          <div className="flex justify-between items-center">
            <Image
              src="/rejaul.png"
              height={120}
              width={120}
              alt="user"
              className="rounded-full border-4 border-white h-24 w-24"
            />
            <Button className="relative top-8 bg-black text-white">
              Follow
            </Button>
          </div>
          <div>
            <h1 className="text-xl sm:text-2xl font-bold inline-flex items-center">
              Rejaul Karim <ShieldCheck className="size-6 ml-2 text-blue-500" />
            </h1>
            <p className="text-lg text-gray-600">@rejaulkarim</p>
            <p className="text-sm text-gray-500">Open Source Developer</p>
            <p>
              <span className="text-sm hover:underline cursor-pointer">
                83 Following{' '}
              </span>
              <span className="text-sm hover:underline cursor-pointer">
                36.3K Followers
              </span>
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4 py-6 max-w-md">
            <Input placeholder="email" className="flex-grow" />
            <Button className="w-full sm:w-72">Join Wishlist</Button>
          </div>
        </div>

        <div>
          <div className="flex justify-center items-center gap-4">
            <Link href={`/${params.id}`}>Home</Link>
            <Link href={`/${params.id}/showcase`}>Showcase</Link>
            <Link href={`/${params.id}/shop`}>Shop</Link>
            <Link href={`/${params.id}/about`}>About</Link>
          </div>

          <div className="mb-32 mt-10">{children}</div>
        </div>
      </MaxWidthWrapper>
      <Toolbar />
    </section>
  );
};

export default Layout;
