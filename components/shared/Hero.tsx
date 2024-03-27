import { Button } from '@/components/ui/button';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="mt-10">
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <h1 className="text-4xl font-bold">
          Join thousands of inspiring indie makers
        </h1>
        <p className="text-lg text-muted-foreground">
          Spotlight for indie makers to showcase their creations to the globe in
          30 second by manageing widgets insights and availabe for free.
        </p>
        <Button variant="outline" asChild>
          <Link href="/register">Join the most creative community &rarr;</Link>
        </Button>
      </div>
    </section>
  );
};

export default Hero;
