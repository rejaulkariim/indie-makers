'use server';

import { CheckoutTransactionParams, CreateTransactionParams } from '@/types';
import { redirect } from 'next/navigation';
import Stripe from 'stripe';
import { db } from '../db';
import { updateCredits } from './user.action';

export async function checkoutCredits(transaction: CheckoutTransactionParams) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

  const amount = Number(transaction.amount) * 100;

  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price_data: {
          currency: 'usd',
          unit_amount: amount,
          product_data: {
            name: transaction.plan,
          },
        },
        quantity: 1,
      },
    ],
    metadata: {
      plan: transaction.plan,
      credits: transaction.credits,
      buyerId: transaction.buyerId,
    },
    mode: 'payment',
    success_url: `${process.env.NEXT_PUBLIC_SERVER_URL}/user/dashboard/profile`,
    cancel_url: `${process.env.NEXT_PUBLIC_SERVER_URL}/`,
  });

  redirect(session.url!);
}

export async function createTransaction(transaction: CreateTransactionParams) {
  console.log('Transaction data:', transaction);
  try {
    const newTransaction = await db.transaction.create({
      data: {
        ...transaction,
        buyerId: transaction.buyerId,
      },
    });

    console.log('New transaction:', newTransaction);

    const updatedCredits = await updateCredits(
      transaction.buyerId,
      transaction.credits
    );

    console.log('Updated credits:', updatedCredits);

    return JSON.parse(JSON.stringify(newTransaction));
  } catch (error) {
    console.log('Error:', error);
  }
}
