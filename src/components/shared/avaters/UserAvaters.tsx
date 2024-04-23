import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { authOptions } from '@/lib/auth';
import { getServerSession } from 'next-auth';
import Image from 'next/image';
import LogoutButton from '../button/LogoutButton';

const UserAvaters = async () => {
  const currentUser = await getServerSession(authOptions);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Image
          src={currentUser?.user?.image || ''}
          height={100}
          width={100}
          alt={currentUser?.user?.name || 'User image'}
          className="h-8 w-8 object-contain rounded-full cursor-pointer focus:ring"
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="border-none w-52 p-2 bg-rose-500">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem asChild>
          <LogoutButton />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserAvaters;
