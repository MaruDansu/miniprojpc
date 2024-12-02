import React, { useState } from 'react';
import CategoryCard from '../components/CategoryCard';

const Home = () => {
  // State hooks for managing form data and user session
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Handle user registration
  const handleRegister = async () => {
    // Simulate a registration API call
    console.log('Registering', email, password);
    // For demonstration, simply set the user as logged in
    setUser({ email });
    alert("Registered and logged in as: " + email);
  };

  // Handle user login
  const handleLogin = async () => {
    // Simulate a login API call
    console.log('Logging in', email, password);
    // For demonstration, simply set the user as logged in
    setUser({ email });
    alert("Logged in as: " + email);
  };

  // Handle user logout
  const handleLogout = () => {
    console.log('Logging out');
    // Clear the user session
    setUser(null);
    alert("Logged out");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Welcome to Our Website!</h1>
      {!user ? (
        <div>
          <input
            type="email"
            value={email}
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
            style={{ marginRight: "10px", padding: "8px" }}
          />
          <input
            type="password"
            value={password}
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
            style={{ marginRight: "10px", padding: "8px" }}
          />
          <button onClick={handleLogin} style={{ marginRight: "10px", padding: "8px" }}>Login</button>
          <button onClick={handleRegister} style={{ padding: "8px" }}>Register</button>
        </div>
      ) : (
        <div>
          <h2>Hello, {user.email}</h2>
          <button onClick={handleLogout} style={{ padding: "8px" }}>Logout</button>
        </div>
      )}
    </div>
  );
};

export default Home;
