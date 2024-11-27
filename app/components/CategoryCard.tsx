import React from 'react';

interface Sneaker {
  id: number;
  name: string;
  price: number;
  condition: string;
  size: number;
}

interface Category {
  id: number;
  name: string;
  items: Sneaker[];
}

const CategoryCard: React.FC<{ category: Category }> = ({ category }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-5 m-3">
      <h2 className="text-xl font-bold text-gray-800 mb-3">{category.name}</h2>
      {category.items.map((item) => (
        <div key={item.id} className="p-3 hover:bg-gray-100 rounded-md">
          <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
          <p className="text-gray-600">${item.price} - Size {item.size} - {item.condition}</p>
        </div>
      ))}
    </div>
  );
};

export default CategoryCard;
