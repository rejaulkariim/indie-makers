import { Icons } from '@/components/shared/icons/Icons';
import { siteConfig } from '@/config/site';
import Link from 'next/link';
import { getAuthSession } from '../../lib/auth';
import MaxWidthWrapper from './MaxWidthWrapper';
import UserAvaters from './avaters/UserAvaters';
import LoginButton from './button/LoginButton';

const Navbar = async () => {
  const session = await getAuthSession();

  return (
    <header className="bg-background h-14 flex justify-center items-center w-full fixed inset-0 z-40 border-b border-muted">
      <MaxWidthWrapper>
        <nav className="flex justify-between items-center w-full">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Icons.logo className="h-8 w-8" />
            <span className="hidden font-bold sm:inline-block">
              {siteConfig.name}
            </span>
          </Link>

          <div className="flex gap-3 items-center">
            {/* <FeedbackDialog /> */}
            {/* <span className="bg-gray-200 px-3 py-2 text-xs rounded-full">
              Beta
            </span> */}

            {/* <Link href="/user/dashboard">Dashboard</Link> */}
            {/* 
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={cn(
                  buttonVariants({
                    variant: 'ghost',
                    size: 'icon',
                  })
                )}
              >
                <Icons.gitHub className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </div>
            </Link>
            <Link
              href={siteConfig.links.twitter}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={cn(
                  buttonVariants({
                    variant: 'ghost',
                    size: 'icon',
                  })
                )}
              >
                <Icons.twitter className="h-3 w-3 fill-current" />
                <span className="sr-only">Twitter</span>
              </div>
            </Link>

            <ModeToggle /> */}

            <div>{session?.user ? <UserAvaters /> : <LoginButton />}</div>
          </div>
        </nav>
      </MaxWidthWrapper>
    </header>
  );
};

export default Navbar;
