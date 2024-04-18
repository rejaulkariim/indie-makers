import MaxWidthWrapper from '@/components/shared/MaxWidthWrapper';
import { siteConfig } from '@/config/site';
import Link from 'next/link';

const BusinessPage = () => {
  return (
    <section className="section-padding">
      <MaxWidthWrapper className="max-w-3xl mx-auto">
        <Link href={siteConfig.links.twitter} target="_blank">
          <div className="border px-6 py-8 rounded-2xl space-y-2">
            {/* <h1 className="text-2xl font-bold">Want to List your tool?</h1> */}
            <p>
              We are working on a form to submit your tool to our directory. In
              the meantime, you can send us an direct messsage on twitter.
            </p>
          </div>
        </Link>
        {/* <SubmitProductForm /> */}
      </MaxWidthWrapper>
    </section>
  );
};

export default BusinessPage;
