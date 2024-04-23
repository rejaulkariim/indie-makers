import MaxWidthWrapper from '@/components/shared/MaxWidthWrapper';
import { getProducts } from '@/lib/actions/product.action';
import HomeSlider from './slaider/HomeSlider';

const Hero = async () => {
  const newProducts = await getProducts('NEW');
  const featuredProducts = await getProducts('FEATURED');

  console.log(newProducts, 'newProducts');
  console.log(featuredProducts, 'featuredProducts');

  return (
    <section className="section-padding">
      <MaxWidthWrapper>
        <div className="text-center space-y-4">
          <h1 className="text-2xl sm:text-4xl font-bold">
            Find The Best Tools Made By{' '}
            <span className="text-purple-600">Indie Makers</span>
          </h1>
          <p className="paragraph">
            The most complete tools database. Discover useful tools for all your
            needs. Updated daily.
          </p>
        </div>

        <div className="my-20">
          <HomeSlider />
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Hero;
