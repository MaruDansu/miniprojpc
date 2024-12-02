"use client";

import React, { useState } from 'react';
import Layout from './components/Layout'; 
import CategoryCard from './components/CategoryCard';

interface User {
  username: string;
}

const Home = () => {
  const [user, setUser] = useState<User | null>(null);
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleLogin = () => {
    console.log('Login attempt:', username, password);
    setUser({ username });
  };

  const handleLogout = () => {
    console.log('User logged out');
    setUser(null);
  };

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
    },
  ];

  return (
    <Layout>
      
      <div className="flex justify-end space-x-2 mb-4">
        {!user ? (
          <>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
              className="border rounded p-1"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="border rounded p-1"
            />
            <button
              onClick={handleLogin}
              className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
            >
              Login
            </button>
          </>
        ) : (
          <>
            <p className="text-gray-800">Hello, {user.username}!</p>
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
            >
              Logout
            </button>
          </>
        )}
      </div>

      {/* Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {categories
          .filter((category) => category.name !== "Souvenirs and Trinkets")
          .map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
      </div>

      {/* Souvenirs and Trinkets */}
      <div className="bg-gray-100 p-4 mt-4">
        {categories
          .filter((category) => category.name === "Souvenirs and Trinkets")
          .map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
      </div>
    </Layout>
  );
};

export default Home;
