import React from "react";
import Link from "next/link";

// Define the PalladiumShoe interface
interface PalladiumShoe {
  id: number;
  name: string;
  price: number;
  condition: string;
  size?: number;
  imageUrl: string;
  description: string;
}

// Define the Category interface
interface Category {
  id: number;
  name: string;
  items: PalladiumShoe[];
}

const CategoryCard: React.FC<{ category: Category }> = ({ category }) => {
  return (
    <div className="category-card">
      <h2 className="text-xl font-semibold mb-4">{category.name}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-items-center">
        {category.items.map((item) => (
          <div
            key={item.id}
            className="bg-white border rounded-lg shadow-lg overflow-hidden p-4 max-w-xs w-full"
          >
            {/* Image */}
            <img
              src={item.imageUrl}
              alt={item.name}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
            <p className="text-gray-600 mb-2">{item.condition}</p>
            <p className="text-green-500 font-semibold mb-4">${item.price}</p>

            {/* View Product Button */}
            <Link href={`/product/${item.id}`}>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 w-full">
                View Product
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryCard;
