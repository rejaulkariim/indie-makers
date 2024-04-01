/**
 * v0 by Vercel.
 * @see https://v0.dev/t/aLUPWlh
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from '@/components/ui/button';
import { authOptions } from '@/lib/auth';
import { Layers2, Link, Mail, Share, ShoppingBag, User } from 'lucide-react';
import { getServerSession } from 'next-auth';
import Image from 'next/image';

export default async function Toolbar() {
  const currentUser = await getServerSession(authOptions);

  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 flex items-center justify-center rounded-full bg-white shadow-xl border p-2 max-w-max mx-auto w-full">
      <div className="flex justify-betweeng gap-4 items-center">
        <Button className="rounded-full" size="icon">
          <Share />
        </Button>
        <Button className="rounded-full" size="icon">
          <Layers2 />
        </Button>
        <Button className="rounded-full" size="icon">
          <ShoppingBag />
        </Button>
        <Button className="rounded-full" size="icon">
          <Mail />
        </Button>
        <Button className="rounded-full" size="icon">
          <Link />
        </Button>

        {currentUser ? (
          <Image
            src={currentUser?.user?.image}
            height={30}
            width={30}
            alt={currentUser?.user?.name}
            className="rounded-full cursor-pointer focus:ring-2 focus:ring-primary-500"
          />
        ) : (
          <User />
        )}
      </div>
    </div>
  );
}
