'use client';

import MaxWidthWrapper from '@/components/shared/MaxWidthWrapper';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import Image from 'next/image';
import Link from 'next/link';
import { TwitterIcon, TwitterShareButton } from 'react-share';

const ProductDetailsPage = ({ params }: { params: { slug: string } }) => {
  console.log(params.slug);
  const product = {
    name: 'App Brews',
    slug: 'app-brews',
    title: 'High-performance smartphone with advanced features',
    description:
      'Smartphone X is designed with cutting-edge technology, featuring a powerful processor, stunning display, and long-lasting battery life.Smartphone X is designed with cutting-edge technology, featuring a powerful processor, stunning display, and long-lasting battery life.Smartphone X is designed with cutting-edge technology, featuring a powerful processor, stunning display, and long-lasting battery life.Smartphone X is designed with cutting-edge technology, featuring a powerful processor, stunning display, and long-lasting battery life.Smartphone X is designed with cutting-edge technology, featuring a powerful processor, stunning display, and long-lasting battery life.Smartphone X is designed with cutting-edge technology, featuring a powerful processor, stunning display, and long-lasting battery life.Smartphone X is designed with cutting-edge technology, featuring a powerful processor, stunning display, and long-lasting battery life.Smartphone X is designed with cutting-edge technology, featuring a powerful processor, stunning display, and long-lasting battery life.Smartphone X is designed with cutting-edge technology, featuring a powerful processor, stunning display, and long-lasting battery life.Smartphone X is designed with cutting-edge technology, featuring a powerful processor, stunning display, and long-lasting battery life.Smartphone X is designed with cutting-edge technology, featuring a powerful processor, stunning display, and long-lasting battery life.Smartphone X is designed with cutting-edge technology, featuring a powerful processor, stunning display, and long-lasting battery life.',
    websiteUrl: 'https://appbrews.co',
    imageUrl: 'https://example.com/smartphone-x-image.jpg',
    likes: 50,
    comments: ['Great phone!', 'Love the camera quality!'],
    pricingModel: 'Fixed',
    tags: ['smartphone', 'technology', 'mobile'],
    youtubeUrl: 'https://www.youtube.com/watch?v=video123',
    isPromoted: true,
    status: 'FEATURED',
    createdBy: {
      id: 'user123',
      name: 'John Doe',
      email: 'john@example.com',
    },
    createdAt: '2024-04-07T12:00:00.000Z',
    updatedAt: '2024-04-07T12:00:00.000Z',
  };
  return (
    <section className="section-padding">
      <MaxWidthWrapper>
        ProductDetailsPage
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-9 h-full bg-background border rounded-xl overflow-hidden p-6">
            <div className="flex justify-between items-center h-auto">
              <div>
                <p>{product.name}</p>
                <p>{product.title}</p>
                {product.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-block  rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
                  >
                    {tag}
                  </span>
                ))}
                <div className="Demo__some-network">
                  <TwitterShareButton
                    url={product.websiteUrl}
                    title={'Smartphone X just joined indie makers!'}
                    className=""
                  >
                    <TwitterIcon size={32} round />
                  </TwitterShareButton>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <Button>{product.status}</Button>
                <Button>{product.likes}</Button>
                <Button asChild variant="outline">
                  <Link href={product.websiteUrl}>Visit Website</Link>
                </Button>
              </div>
            </div>

            <div className="my-10 ">
              <p className="paragraph">{product.description}</p>
            </div>

            <div className="flex gap-4">
              <Image
                src="/assets/images/logo.png"
                height={100}
                width={100}
                alt={product.title}
                className="rounded-full h-12 w-12"
              />
              <div className="w-full space-y-4">
                <Textarea placeholder="comment" />
                <Button>Submit</Button>
              </div>
            </div>
          </div>
          <div className="col-span-3 h-screen bg-rose-500"></div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default ProductDetailsPage;
