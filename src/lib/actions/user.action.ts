import { db } from '../db';

// USE CREDITS
export async function updateCredits(userId: string, creditFee: number) {
  try {
    const updatedUserCredits = await db.user.update({
      where: { id: userId },
      data: { credits: { increment: creditFee } },
    });

    if (!updatedUserCredits) throw new Error('User credits update failed');

    return JSON.parse(JSON.stringify(updatedUserCredits));
  } catch (error) {
    console.log(error);
  }
}
