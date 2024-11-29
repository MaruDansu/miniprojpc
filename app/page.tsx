import React from 'react';
import CategoryCard from './components/CategoryCard'; // Ensure this path matches your project structure

const Home = () => {
  const categories = [
    {
      id: 1,
      name: "New Arrivals",
      items: [
        { id: 1, name: "Air Jordan 1", price: 200, condition: "New", size: 10 },
        { id: 2, name: "Air Jordan 4", price: 250, condition: "New", size: 9 },
      ],
    },
    {
      id: 2,
      name: "Used Classics",
      items: [
        { id: 3, name: "Nike Dunk Low", price: 180, condition: "Used", size: 8 },
        { id: 4, name: "Yeezy Boost 350", price: 300, condition: "Used", size: 11 },
      ],
    },
    {
      id: 3,
      name: "Souvenirs and Trinkets",
      items: [
        { id: 5, name: "Eiffel Tower Miniature", price: 20, condition: "New" },
        { id: 6, name: "Handmade Wooden Bowl", price: 35, condition: "New" },
      ],
    }
  ];

  return (
    <div className="flex flex-col h-screen">
      <div className="p-4 bg-gray-200">
        <h1 className="text-3xl font-bold text-gray-800">Welcome to the PALLADIUM ECO!</h1>
        <p className="text-lg text-gray-700">Explore our latest collections and exclusive offers below.</p>
      </div>
      <div className="flex-1 overflow-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
          {categories.filter(category => category.name !== 'Souvenirs and Trinkets').map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
      <div className="flex-1 overflow-auto bg-gray-100 p-4">
        {categories.filter(category => category.name === 'Souvenirs and Trinkets').map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
};

export default Home;
