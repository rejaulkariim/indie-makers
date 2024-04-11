import { authOptions } from '@/lib/auth';
import { getServerSession } from 'next-auth';
import Image from 'next/image';

const UserAvaters = async () => {
  const currentUser = await getServerSession(authOptions);

  return (
    <div className="flex items-center gap-4">
      <Image
        src={currentUser?.user?.image || ''}
        height={100}
        width={100}
        alt={currentUser?.user?.name || 'User'}
        className="h-8 w-8 object-contain rounded-full cursor-pointer focus:ring"
      />
    </div>
  );
};

export default UserAvaters;
