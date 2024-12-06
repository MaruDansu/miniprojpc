import React from "react";

// Define the PalladiumShoe and Category interfaces
interface PalladiumShoe {
  id: number;
  name: string;
  price: number;
  condition: string;
  size?: number;
}

interface Category {
  id: number;
  name: string;
  items: PalladiumShoe[];
}

const CategoryCard: React.FC<{ category: Category }> = ({ category }) => {
  return (
    <div className="border rounded-lg p-4 shadow-sm">
      <h2 className="text-xl font-bold mb-3">{category.name}</h2>
      <ul>
        {category.items.map((item) => (
          <li key={item.id} className="mb-2">
            <h3 className="text-lg font-semibold">{item.name}</h3>
            <p>Price: ${item.price}</p>
            <p>Condition: {item.condition}</p>
            {item.size && <p>Size: {item.size}</p>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryCard;
