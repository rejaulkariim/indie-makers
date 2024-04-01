'use server';

import { db } from '@/lib/db';

export async function createWishlist(email: string) {
  try {
    const existingWishlist = await db.wishlist.findFirst({
      where: { email },
    });

    if (existingWishlist) {
      return { success: false, message: 'This email already subscribed' };
    }

    const newEmail = await db.wishlist.create({ data: { email } });

    return {
      success: true,
      message: 'Thank you for subscribing!',
      data: JSON.parse(JSON.stringify(newEmail)),
    };
  } catch (error) {
    console.log(error);
  }
}
