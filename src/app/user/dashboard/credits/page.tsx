import Image from 'next/image';

import Checkout from '@/components/checkout/Checkout';
import MaxWidthWrapper from '@/components/shared/MaxWidthWrapper';
import Header from '@/components/shared/header/Header';
import { Button } from '@/components/ui/button';
import { plans } from '@/constants';
import { getAuthSession } from '@/lib/auth';

const Credits = async () => {
  const session = await getAuthSession();

  return (
    <section className="section-padding">
      <MaxWidthWrapper>
        <Header
          title="Buy Credits"
          subtitle="Choose a credit package that suits your needs!"
        />

        <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
          {plans.map((plan) => (
            <li key={plan.name} className="border p-8 rounded-2xl">
              <div className="flex flex-col justify-center items-center gap-3">
                <Image src={plan.icon} alt="check" width={50} height={50} />
                <p className="p-20-semibold mt-2 text-purple-500">
                  {plan.name}
                </p>
                <p className="">${plan.price}</p>
                <p className="p-16-regular">{plan.credits} Credits</p>
              </div>

              {/* Inclusions */}
              <ul className="flex flex-col gap-5 py-9">
                {plan.inclusions.map((inclusion) => (
                  <li
                    key={plan.name + inclusion.label}
                    className="flex items-center gap-4"
                  >
                    <Image
                      src={`/assets/icons/${
                        inclusion.isIncluded ? 'check.svg' : 'cross.svg'
                      }`}
                      alt="check"
                      width={24}
                      height={24}
                    />
                    <p className="p-16-regular">{inclusion.label}</p>
                  </li>
                ))}
              </ul>

              {plan.name === 'Free' ? (
                <Button variant="outline">Free Consumable</Button>
              ) : (
                <Checkout
                  plan={plan.name}
                  amount={plan.price}
                  credits={plan.credits}
                  buyerId={session?.user?.id!}
                />
              )}
            </li>
          ))}
        </ul>
      </MaxWidthWrapper>
    </section>
  );
};

export default Credits;
