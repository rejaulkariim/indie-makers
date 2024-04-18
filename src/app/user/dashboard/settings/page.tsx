import MaxWidthWrapper from '@/components/shared/MaxWidthWrapper';
import { getAuthSession } from '@/lib/auth';

const SettingsPage = async () => {
  const session = await getAuthSession();

  return (
    <section>
      <MaxWidthWrapper>
        <h1>{session?.user.name}</h1>
      </MaxWidthWrapper>
    </section>
  );
};

export default SettingsPage;
