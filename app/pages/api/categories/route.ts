import { NextResponse } from 'next/server';
import prisma from '../../../../lib/prisma';  // Ensure the path to prisma is correct

export async function GET() {
  try {
    // Fetch categories along with their associated items
    const categories = await prisma.category.findMany({
      include: {
        items: true,  // Fetch items related to the category
      },
    });

    return NextResponse.json(categories);
  } catch (error) {
    console.error("Error fetching categories:", error);
    return NextResponse.json({ error: "Failed to fetch categories" }, { status: 500 });
  }
}
