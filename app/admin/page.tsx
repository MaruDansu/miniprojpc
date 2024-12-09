"use client";

import { useState, useEffect } from "react";

interface User {
  id: number;
  username: string;
  role: string;
}

export default function AdminPage() {
  const [users, setUsers] = useState<User[]>([]); // Type `User[]` added

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch("/api/users");
      const data = await response.json();
      setUsers(data); // Ensure the API returns `User[]`
    };

    fetchUsers();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Admin Panel</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <p>User ID: {user.id}</p>
            <p>Username: {user.username}</p>
            <p>Role: {user.role}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
