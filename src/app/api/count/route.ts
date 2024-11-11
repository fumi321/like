import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const user =
      (await prisma.user.findFirst()) ||
      (await prisma.user.create({ data: { like: 0 } }));
    return NextResponse.json(user);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to get user: " + error },
      { status: 500 },
    );
  }
}

export async function POST() {
  try {
    const user = await prisma.user.findFirst();
    if (!user) {
      throw new Error("User not found");
    }
    const updatedUser = await prisma.user.update({
      where: { id: user.id },
      data: { like: user.like + 1 },
    });
    return NextResponse.json(updatedUser);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to update like count: " + error },
      { status: 500 },
    );
  }
}
