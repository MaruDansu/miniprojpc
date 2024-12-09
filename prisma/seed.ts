// prisma/seed.ts

import prisma from '../lib/prisma';
import bcrypt from 'bcryptjs';

async function main() {
  // Create Categories
  const newArrivals = await prisma.category.create({
    data: { name: 'New Arrivals' },
  });

  const usedClassics = await prisma.category.create({
    data: { name: 'Used Classics' },
  });

  const souvenirs = await prisma.category.create({
    data: { name: 'Souvenirs and Trinkets' },
  });

  // Create PalladiumShoes
  await prisma.palladiumShoe.createMany({
    data: [
      {
        name: 'Palladium 1',
        price: 200,
        condition: 'New',
        size: 10,
        description: 'Stylish Palladium shoes for everyday wear',
        imageUrl: '/images/shoe1.jpg',
        categoryId: newArrivals.id,
      },
      {
        name: 'Palladium 2',
        price: 250,
        condition: 'New',
        size: 9,
        description: 'Premium Palladium shoes for outdoor adventures',
        imageUrl: '/images/shoe2.png',
        categoryId: newArrivals.id,
      },
      {
        name: 'Palladium 3',
        price: 180,
        condition: 'Used',
        size: 8,
        description: 'Classic Palladium shoes in used condition',
        imageUrl: '/images/shoe3.png',
        categoryId: usedClassics.id,
      },
      {
        name: 'Palladium 4',
        price: 300,
        condition: 'Used',
        size: 11,
        description: 'Retro Palladium shoes for vintage lovers',
        imageUrl: '/images/shoe4.png',
        categoryId: usedClassics.id,
      },
      {
        name: 'Miniature Palladium',
        price: 20,
        condition: 'New',
        description: 'Collectible Palladium miniature for display',
        imageUrl: '/images/cat.png',
        categoryId: souvenirs.id,
      },
    ],
  });

  // Create an Admin User
  const hashedPassword = await bcrypt.hash('adminpassword', 10);

  await prisma.user.create({
    data: {
      username: 'admin',
      password: hashedPassword,
      role: 'admin',
    },
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
