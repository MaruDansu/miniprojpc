// pages/api/auth/logout.js
import cookie from 'cookie';

export default async function handle(req, res) {
  res.setHeader('Set-Cookie', cookie.serialize('auth', '', {
    httpOnly: true,
    secure: process.env.NODE_ENV !== 'development',
    expires: new Date(0),
    path: '/',
  }));

  res.json({ message: "Logout successful" });
}
