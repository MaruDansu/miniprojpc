"use client";

import React, { useState } from "react";

interface User {
  username: string;
  role: string; 
}

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (username === "admin" && password === "1") {
      setUser({ username, role: "admin" });
    } else if (username && password) {
      setUser({ username, role: "user" });
    } else {
      alert("Please provide valid credentials!");
    }
  };

  const handleRegister = () => {
    if (username && password) {
      setUser({ username, role: "user" });
      alert("Registration successful!");
    } else {
      alert("Please fill out both fields to register.");
    }
  };

  const handleLogout = () => {
    setUser(null);
    setUsername("");
    setPassword("");
    alert("You have been logged out.");
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">PALLADIUM ECO</h1>
          <p className="text-sm">Your eco-friendly shopping experience</p>
        </div>
        <div>
          {!user ? (
            <div className="flex space-x-2">
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="p-1 rounded"
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="p-1 rounded"
              />
              <button
                onClick={handleLogin}
                className="bg-white text-blue-600 px-2 py-1 rounded hover:bg-gray-200"
              >
                Login
              </button>
              <button
                onClick={handleRegister}
                className="bg-white text-blue-600 px-2 py-1 rounded hover:bg-gray-200"
              >
                Register
              </button>
            </div>
          ) : (
            <div className="flex items-center space-x-4">
              <p>
                Welcome, {user.username} ({user.role})!
              </p>
              <button
                onClick={handleLogout}
                className="bg-white text-blue-600 px-2 py-1 rounded hover:bg-gray-200"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </header>

     {/* head */}
      <nav className="bg-gray-200 p-2 flex justify-around">
        <a href="/" className="text-blue-600 hover:underline">
          Home
        </a>
        <a href="/products" className="text-blue-600 hover:underline">
          Products
        </a>
        {user?.role === "admin" && (
          <a href="/admin" className="text-blue-600 hover:underline">
            Admin Panel
          </a>
        )}
        <a href="/contact" className="text-blue-600 hover:underline">
          Contact
        </a>
      </nav>

      
      <main className="flex-1 p-4">{children}</main>

      {/* Bottom Right Reserved */}
      <footer className="bg-blue-600 text-white p-4 text-center">
        <p>&copy; 2024 PALLADIUM ECO. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;
