"use server";

import prisma from "@/db/prisma";

export async function getLike() {
  try {
    const user =
      (await prisma.user.findFirst()) ||
      (await prisma.user.create({ data: { like: 0 } }));
    return user.like;
  } catch {
    return 0;
  }
}

export async function incrementLike() {
  try {
    let user = await prisma.user.findFirst();
    user = await prisma.user.update({
      where: { id: user?.id },
      data: {
        like: { increment: 1 },
      },
    });
    return user.like;
  } catch {
    return getLike();
  }
}
