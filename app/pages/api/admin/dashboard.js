import { PrismaClient } from '@prisma/client';
import { getSession } from "next-auth/react";

const prisma = new PrismaClient();

export default async function handler(req, res) {
    const session = await getSession({ req });
    if (!session || session.user.role !== 'ADMIN') {
        res.status(403).json({ message: 'Access denied' });
        return;
    }

    // Your admin-specific logic here
    res.status(200).json({ message: 'Welcome, Admin!' });
}
