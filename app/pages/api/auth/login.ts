import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../../lib/prisma";
import bcrypt from "bcryptjs";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { username, password } = req.body;
    try {
      const user = await prisma.user.findUnique({
        where: {
          username,
        },
      });

      if (user && (await bcrypt.compare(password, user.password))) {
        res.status(200).json({ message: "Login successful", user });
      } else {
        res.status(401).json({ error: "Invalid credentials" });
      }
    } catch (error) {
      res.status(500).json({ error: "Error logging in" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
