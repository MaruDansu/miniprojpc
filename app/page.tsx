import React from 'react';
import Head from 'next/head';
import CategoryCard from './components/CategoryCard';

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
  ];

  return (
    <>
      <Head>
        <title>Palladium ECO</title>
      </Head>

      <div className="bg-gray-100 min-h-screen p-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg mb-6">
            <h1 className="text-xl font-bold text-green-800 mb-2">Welcome to the PALLADIUM ECO!</h1>
            <p>This sub-store of PALLADIUM is dedicated to showcasing categories of shoes with a focus on a green aesthetic.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {categories.map(category => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
