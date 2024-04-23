import MaxWidthWrapper from '@/components/shared/MaxWidthWrapper';

const DashboardPage = () => {
  return (
    <section className="section-padding">
      <MaxWidthWrapper>
        <h1 className="h1-bold">Welcome back Admin</h1>

        <div className="my-4 flex justify-between items-center">
          <h1 className="text-lg font-bold">Create a new quotation</h1>

          <div>
            <div className="hidden md:block">xxxxx</div>

            <div className="block md:hidden">xxxxx</div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default DashboardPage;
