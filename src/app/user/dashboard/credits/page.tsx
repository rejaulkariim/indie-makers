import Image from 'next/image';

import Checkout from '@/components/checkout/Checkout';
import Header from '@/components/shared/header/Header';
import { Button } from '@/components/ui/button';
import { plans } from '@/constants';

const Credits = async () => {
  const user = 'true';
  return (
    <>
      <Header
        title="Buy Credits"
        subtitle="Choose a credit package that suits your needs!"
      />

      <section>
        <ul className="grid grid-cols-2 md:grid-cols-3">
          {plans.map((plan) => (
            <li key={plan.name} className="">
              <div className="flex flex-col justify-center gap-3">
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
                  buyerId={user}
                />
              )}
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default Credits;
