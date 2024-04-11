import SubmitProductForm from '@/components/form/SubmitProductForm';
import MaxWidthWrapper from '@/components/shared/MaxWidthWrapper';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

const SubmitProductPage = async () => {
  const session = await getServerSession();
  if (!session?.user) {
    redirect('/login');
  }

  console.log(session, 'session');
  return (
    <section className="section-padding">
      <MaxWidthWrapper>
        <div className="text-center max-w-xl mx-auto space-y-3 mb-10">
          <h1 className="text-xl sm:text-2xl font-bold text-foreground">
            Submit App Instently
          </h1>
          <p className="paragraph">
            Got an AI product that isn&apos;t in our database yet? Submit it
            here and reach over 2.3M monthly users.
          </p>
          <p className="paragraph">
            Get listed instantly for a one-time fee of $9 USD. After submission,
            you can also promote your listing to the top of search results.
          </p>
        </div>
        <SubmitProductForm type="Create" />
      </MaxWidthWrapper>
    </section>
  );
};

export default SubmitProductPage;
