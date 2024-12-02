
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import cookie from 'cookie';

const prisma = new PrismaClient();

export default async function handle(req, res) {
  const { email, password } = req.body;
  const user = await prisma.user.findUnique({
    where: { email }
  });

  if (user && bcrypt.compareSync(password, user.password)) {
    const token = sign(
      { email: user.email, id: user.id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: '8h' }
    );

    res.setHeader('Set-Cookie', cookie.serialize('auth', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== 'development',
      maxAge: 60 * 60 * 8, // 8 hours
      path: '/',
    }));

    res.json({ message: "Login successful" });
  } else {
    res.status(401).json({ error: "Invalid email or password" });
  }
}
