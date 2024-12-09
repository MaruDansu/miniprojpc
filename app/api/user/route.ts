import { NextRequest, NextResponse } from 'next/server';
import prisma from '../../../lib/prisma'; // Adjust the path if necessary

interface UserResponse {
  id: number;
  username: string;
  role: string; // Adjust if you have more fields
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const username = searchParams.get('username');

  if (!username) {
    return NextResponse.json({ error: 'Username is required' }, { status: 400 });
  }

  // Query user by username since we removed email from the schema
  const user: UserResponse | null = await prisma.user.findUnique({
    where: { username },
    select: {
      id: true,
      username: true,
      role: true,
    },
  });

  if (!user) {
    return NextResponse.json({ error: 'User not found' }, { status: 404 });
  }

  return NextResponse.json({ user });
}
