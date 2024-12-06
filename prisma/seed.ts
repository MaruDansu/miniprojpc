import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.category.create({
    data: {
      name: 'New Arrivals',
      items: {
        create: [
          { name: 'Air Jordan 1', price: 200, condition: 'New', size: 10 },
          { name: 'Air Jordan 4', price: 250, condition: 'New', size: 9 },
        ],
      },
    },
  });

  await prisma.category.create({
    data: {
      name: 'Used Classics',
      items: {
        create: [
          { name: 'Nike Dunk Low', price: 180, condition: 'Used', size: 8 },
          { name: 'Yeezy Boost 350', price: 300, condition: 'Used', size: 11 },
        ],
      },
    },
  });

  await prisma.category.create({
    data: {
      name: 'Souvenirs and Trinkets',
      items: {
        create: [
          { name: 'Eiffel Tower Miniature', price: 20, condition: 'New' },
          { name: 'Handmade Wooden Bowl', price: 35, condition: 'New' },
        ],
      },
    },
  });

  console.log('Database seeded successfully!');
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
