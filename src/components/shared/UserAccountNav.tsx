import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { authOptions } from '@/lib/auth';
import { getServerSession } from 'next-auth';
import Image from 'next/image';
import LoginButton from './button/LoginButton';
import LogoutButton from './button/LogoutButton';

const UserAccountNav = async () => {
  const currentUser = await getServerSession(authOptions);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        {currentUser ? (
          <div className="flex items-center gap-4">
            <Image
              src={currentUser?.user?.image || ''}
              height={100}
              width={100}
              alt={currentUser?.user?.name || 'User'}
              className="h-8 w-8 object-contain rounded-full cursor-pointer focus:ring"
            />
          </div>
        ) : (
          <>
            <LoginButton />
          </>
        )}
      </DropdownMenuTrigger>

      <DropdownMenuContent className="mr-10 border-none w-64" side="bottom">
        {currentUser ? (
          <>
            <LogoutButton />
          </>
        ) : null}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserAccountNav;
