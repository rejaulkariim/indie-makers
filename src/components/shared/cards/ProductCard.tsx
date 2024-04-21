import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Heart } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const ProductCard = ({ product }: { product: any }) => {
  return (
    <div className="max-w-3xl mx-auto w-full rounded-2xl px-4 py-6 border">
      {/* <Link
        href={`/tools/${product.slug}`}
        className="absolute inset-0"
        aria-hidden="true"
      /> */}
      <div className="overflow-hidden">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="h-16 w-16">
              <Image
                src={product.imageUrl}
                height={80}
                width={80}
                alt="tools"
                className="object-cover rounded-2xl"
              />
            </div>
            <div className="">
              <h1 className="font-bold">{product.name}</h1>
              <p className="paragraph">{product.shortDescription}</p>

              <div className="flex gap-2 items-center mt-2">
                <Heart className="size-4 text-purple-700" />
                <p className="text-sm text-purple-700">{product.likes}</p>
                <small className="text-[10px] border rounded-xl px-2 py-0.5 text-white bg-purple-700">
                  {product.status}
                </small>
              </div>
            </div>
          </div>

          <Link
            href={''}
            className={cn(
              buttonVariants({ variant: 'outline' }),
              'rounded-full text-blue-500 px-5'
            )}
          >
            Get
          </Link>
        </div>
      </div>

      {/* <CardContent className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <Heart className="size-4 text-purple-700" />
          <p className="text-sm text-purple-700">{product.likes}</p>
          <small className="text-[10px] border rounded-xl px-2 py-0.5 text-white bg-purple-700">
            {product.status}
          </small>
        </div>
        <div>
          <Link
            href={`${product.websiteUrl}?referrer=indiemakers`}
            target="_blank"
            className="size-4 text-purple-700"
          >
            <ExternalLink className="size-5" />
          </Link>
        </div>
      </CardContent> */}
    </div>
  );
};

export default ProductCard;
