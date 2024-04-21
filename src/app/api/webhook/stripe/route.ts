// import { createOrder } from '@/lib/actions/order.action';
import { createProductIntoDb } from '@/lib/actions/product.action';
import { NextResponse } from 'next/server';
import stripe from 'stripe';

export async function POST(request: Request) {
  const body = await request.text();

  const sig = request.headers.get('stripe-signature') as string;
  const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET!;

  let event;

  try {
    event = stripe.webhooks.constructEvent(body, sig, endpointSecret);
  } catch (err) {
    return NextResponse.json({ message: 'Webhook error', error: err });
  }

  // Get the ID and type
  const eventType = event.type;

  // CREATE
  if (eventType === 'checkout.session.completed') {
    const { metadata } = event.data.object;

    const product = {
      name: metadata?.name,
      slug: metadata?.slug,
      title: metadata?.title,
      description: metadata?.description,
      websiteUrl: metadata?.websiteUrl,
      pricingModel: metadata?.pricingModel,
      youtubeUrl: metadata?.youtubeUrl,
      imageUrl: metadata?.uploadedImageUrl,
    };

    const newProduct = await createProductIntoDb({ product });

    return NextResponse.json({ message: 'OK', transaction: newProduct });
  }

  return new Response('', { status: 200 });
}
