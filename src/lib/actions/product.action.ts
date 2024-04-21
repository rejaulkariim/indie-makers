'use server';

import { getAuthSession } from '@/lib/auth';
import { db } from '@/lib/db';
import { ProductStatus } from '@prisma/client';

export async function createProductIntoDb({ product }: any) {
  const session = await getAuthSession();

  // Check if user is logged in
  if (!session?.user) {
    throw new Error('Unauthorized Access');
  }

  try {
    // Create a new product
    const newProduct = await db.product.create({
      data: {
        ...product,
        createdBy: session.user.id,
      },
    });

    // Return the new product
    return {
      success: true,
      message: 'Product created successfully',
      data: newProduct,
    };
  } catch (error) {
    console.log(error);
  }
}

// Get all products
export async function getProducts(productType: string) {
  try {
    const products = await db.product.findMany({
      where: {
        status: productType as ProductStatus,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    return {
      success: true,
      message: 'Products retrived successfully',
      data: products,
    };
  } catch (error) {
    console.log(error);
  }
}

// Get a single product
// export async function getProduct(slug: string) {
//   try {
//     const product = await db.product.findUnique({
//       where: {
//         slug,
//       },
//     });

//     return {
//       success: true,
//       message: 'Product retrived successfully',
//       data: product,
//     };
//   } catch (error) {
//     console.log(error);
//   }
// }
