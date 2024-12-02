import React from 'react';
import { useAuth } from '../context/auth-context'; // Adjust the path based on your directory structure
import CategoryCard from './CategoryCard'; // Adjust the path based on your directory structure

const categories = [
  // Your categories data here
];

const Home = () => {
  const { user, handleLogin, handleLogout } = useAuth();

  return (
    <div className="flex flex-col h-screen">
      <div className="p-4 bg-gray-200">
        <h1 className="text-3xl font-bold text-gray-800">Welcome to the PALLADIUM ECO!</h1>
        <p className="text-lg text-gray-700">Explore our latest collections and exclusive offers below.</p>
      </div>
      {!user ? (
        <div className="flex-1 overflow-auto p-4">
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button onClick={() => handleLogin('email@example.com', 'password')}>Login</button>
        </div>
      ) : (
        <div className="flex-1 overflow-auto p-4">
          <p>Welcome, {user.email}</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
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
