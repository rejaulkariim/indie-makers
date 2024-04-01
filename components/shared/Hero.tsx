import WishlistForm from '../form/WishlistForm';
import MaxWidthWrapper from './MaxWidthWrapper';

const Hero = () => {
  return (
    <section className="mt-10 flex justify-center">
      <MaxWidthWrapper>
        <div className="text-center max-w-2xl mx-auto space-y-4  mt-16">
          <h1 className="text-3xl md:text-5xl font-bold">
            Spotlight for <span className="text-primary">Indie Makers</span>
          </h1>

          <p className="text-lg text-foreground/80">
            Join the thousands of inspiring indie makers community and showcase
            your creations to the world in just 30 seconds!
          </p>

          {/* <div className="max-w-2xl mx-auto flex flex-wrap gap-4">
            <Image
              src="/rejaul.png"
              height={80}
              width={80}
              alt="users"
              priority
              className="rounded-full"
            />
          </div>
          <div className="mt-10">
            <Button variant="outline" asChild>
              <Link href="/onboarding">
                Join the most creative community &rarr;
              </Link>
            </Button>
          </div> */}
        </div>
        <div className="max-w-xl mx-auto">
          <WishlistForm />
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Hero;
