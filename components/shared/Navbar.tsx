import { Icons } from '@/components/shared/icons/Icons';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/button';
import MaxWidthWrapper from './MaxWidthWrapper';

const Navbar = () => {
  return (
    <header className="bg-background h-14 flex justify-center items-center w-full fixed inset-0 border-b z-40">
      <MaxWidthWrapper>
        <nav className="flex justify-between items-center w-full">
          <div className="flex items-center gap-3">
            <Image
              src="/assets/images/logo.png"
              height={40}
              width={40}
              alt="indie makers logo"
              className="object-contain rounded-2xl"
            />
            <h1 className="text-2xl font-bold">Indie Makers</h1>
          </div>

          <div className="flex gap-2 items-center">
            {/* <FeedbackDialog /> */}
            <span className="bg-gray-200 px-3 py-2 text-xs rounded-full">
              Beta
            </span>

            <Button size="icon" variant="ghost" asChild>
              <Link
                href="https://github.com/rejaulkariim/indie-makers"
                target="_blank"
              >
                <Icons.gitHub className="size-5" />
              </Link>
            </Button>

            {/* <div>
              <UserAccountNav />
            </div> */}
          </div>
        </nav>
      </MaxWidthWrapper>
    </header>
  );
};

export default Navbar;
