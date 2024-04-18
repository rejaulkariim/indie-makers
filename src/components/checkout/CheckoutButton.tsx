import Checkout from '@/components/checkout/Checkout';
import { getAuthSession } from '@/lib/auth';
// import { TStripePlan } from '@/types';

const CheckoutButton = async () => {
  const session = await getAuthSession();

  return (
    <>
      <Checkout />
    </>
  );
};

export default CheckoutButton;
