import Layout from "./components/Layout";
import Image from "next/image";
import Link from "next/link";

interface PalladiumShoe {
  id: number;
  name: string;
  price: number;
  condition: string;
  imageUrl: string;
  description: string;
}

interface Category {
  id: number;
  name: string;
  items: PalladiumShoe[];
}

async function getCategories(): Promise<Category[]> {
  return [
    {
      id: 1,
      name: "New Arrivals",
      items: [
        {
          id: 1,
          name: "Palladium 1",
          price: 150,
          condition: "New",
          imageUrl: "/images/shoe1.jpg", // Local image
          description: "Stylish Palladium shoes for everyday wear",
        },
        {
          id: 2,
          name: "Palladium 2",
          price: 160,
          condition: "New",
          imageUrl: "/images/shoe2.png", // Local image
          description: "Premium Palladium shoes for outdoor adventures",
        },
      ],
    },
    {
      id: 2,
      name: "Old Classics",
      items: [
        {
          id: 3,
          name: "Palladium Classic 1",
          price: 100,
          condition: "Used",
          imageUrl: "/images/shoe3.png", // Local image
          description: "Vintage Palladium shoes with character.",
        },
        {
          id: 4,
          name: "Palladium Classic 2",
          price: 120,
          condition: "Used",
          imageUrl: "/images/shoe4.png", // Local image
          description: "Classic Palladium shoes for enthusiasts.",
        },
      ],
    },
  ];
}

export default async function Home() {
  const categories = await getCategories(); // Fetch categories on the server

  return (
    <Layout>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {categories.map((category) => (
          <div key={category.id}>
            <h2 className="text-xl font-bold">{category.name}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {category.items.map((item) => (
                <div key={item.id} className="border rounded-lg p-4">
                  <Image
                    src={item.imageUrl}
                    alt={item.name}
                    width={300}
                    height={300}
                    className="w-full h-64 object-cover mb-4"
                  />
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="text-gray-600">${item.price}</p>
                  <p className="text-sm text-gray-500">{item.condition}</p>
                  <Link href={`/product/${item.id}`}>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded mt-4">
                      View Product
                    </button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
}
