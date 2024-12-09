
import { NextRequest, NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function POST(req: NextRequest) {
  const res = NextResponse.json({ message: 'Logout successful' });

 
  return res;
}
