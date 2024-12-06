import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.category.create({
    data: {
      name: "New Arrivals",
      items: {
        create: [
          {
            name: "Palladium 1",
            price: 150,
            condition: "New",
            size: 10,
            imageUrl: "https://via.placeholder.com/300",  // Provide a default image URL
            description: "A stylish Palladium shoe.",
          },
          {
            name: "Palladium 2",
            price: 160,
            condition: "New",
            size: 9,
            imageUrl: "https://via.placeholder.com/300",
            description: "Palladium's latest design.",
          },
          // Add more shoes as needed
        ],
      },
    },
  });

  // You can add more categories and shoes here as well
}

main()
  .catch((e) => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
