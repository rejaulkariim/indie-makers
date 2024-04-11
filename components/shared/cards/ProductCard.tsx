import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { ExternalLink, Heart } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const ProductCard = ({ product }: { product: any }) => {
  return (
    <Card className="rounded-2xl border-2 border-accent">
      {/* <Link
        href={`/tools/${product.slug}`}
        className="absolute inset-0"
        aria-hidden="true"
      /> */}
      <CardHeader>
        <div className="overflow-hidden">
          <Image
            src={product.imageUrl || ''}
            height={100}
            width={100}
            alt="logo"
            className="object-contain h-14 w-14 rounded-xl border"
          />
        </div>
        <CardTitle className="text-lg">{product.name}</CardTitle>
        <CardDescription className="h-12">
          {product.shortDescription}
        </CardDescription>
      </CardHeader>

      <CardContent className="flex justify-between items-center">
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
      </CardContent>
    </Card>
  );
};

export default ProductCard;
