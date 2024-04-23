import Header from '@/components/shared/header/Header';
import { getAuthSession } from '@/lib/auth';
import Image from 'next/image';

const Profile = async () => {
  const session = await getAuthSession();

  return (
    <>
      <Header title="Profile" />

      <section className="profile">
        <div className="flex flex-col gap-4">
          <p className="p-14-medium md:p-16-medium">CREDITS AVAILABLE</p>
          <div className="mt-4 flex items-center gap-4">
            <Image
              src="/assets/icons/coins.svg"
              alt="coins"
              width={50}
              height={50}
              className="size-9 md:size-12"
            />
            <h2 className="h2-bold text-dark-600">{session?.user?.credits}</h2>
            <h2 className="text-xl text-muted-foreground">50</h2>
          </div>
        </div>

        <div className="profile-image-manipulation">
          <p className="p-14-medium md:p-16-medium">Submitted tools</p>
          <div className="mt-4 flex items-center gap-4">
            <Image
              src="/assets/icons/photo.svg"
              alt="coins"
              width={50}
              height={50}
              className="size-9 md:size-12"
            />
            {/* <h2 className="h2-bold text-dark-600">{images?.data.length}</h2> */}
          </div>
        </div>
      </section>

      <section className="mt-8 md:mt-14">
        {/* <Collection
          images={images?.data}
          totalPages={images?.totalPages}
          page={page}
        /> */}
      </section>
    </>
  );
};

export default Profile;
