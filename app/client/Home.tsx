// app/client/Home.tsx
import React, { useState } from 'react';
import CategoryCard from '../components/CategoryCard';

interface Category {
  id: number;
  name: string;
  items: Item[];
}

interface Item {
  id: number;
  name: string;
  price: number;
  condition: string;
  size?: number;
}

const categories: Category[] = [
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

interface User {
  email: string;
}

interface LoginForm {
  email: string;
  password: string;
}

const Home = () => {
  const [user, setUser] = useState<User | null>(null);

  const handleLogin = async (formData: LoginForm) => {
    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    const data = await response.json();
    if (data.user) {
      setUser(data.user);
    } else {
      alert(data.message); 
    }
  };

  const handleLogout = async () => {
    const response = await fetch('/api/auth/logout', { method: 'POST' });
    const data = await response.json();
    if (data.message === 'Logout successful') {
      setUser(null);
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const email = (event.currentTarget.elements.namedItem('email') as HTMLInputElement).value;
    const password = (event.currentTarget.elements.namedItem('password') as HTMLInputElement).value;
    handleLogin({ email, password });
  };

  return (
    <div className="flex flex-col h-screen">
      <div className="p-4 bg-gray-200">
        <h1 className="text-3xl font-bold text-gray-800">Welcome to the PALLADIUM ECO!</h1>
        <p className="text-lg text-gray-700">Explore our latest collections and exclusive offers below.</p>
      </div>
      {!user ? (
        <form onSubmit={handleSubmit}>
          <input type="email" name="email" required placeholder="Email" />
          <input type="password" name="password" required placeholder="Password" />
          <button type="submit">Login</button>
        </form>
      ) : (
        <>
          <div>Hello, {user.email}</div>
          <button onClick={handleLogout}>Logout</button>
        </>
      )}
      <div className="flex-1 overflow-auto bg-gray-100 p-4">
        {categories.map(category => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
};

export default Home;
