import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import MaxWidthWrapper from './MaxWidthWrapper';

const Hero = () => {
  return (
    <section className="mt-10">
      <MaxWidthWrapper>
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h1 className="text-3xl font-bold">
            Join thousands of inspiring indie makers
          </h1>
          <p className="text-lg text-foreground/80">
            Spotlight for indie makers to showcase their creations to the globe
            in 30 seconds by managing widgets, and insights available for free.
          </p>

          <div className="max-w-2xl mx-auto flex flex-wrap gap-4">
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
              <Link href="/register">
                Join the most creative community &rarr;
              </Link>
            </Button>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Hero;
