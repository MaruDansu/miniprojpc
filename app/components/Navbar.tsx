"use client";

import { useSession, signOut } from "next-auth/react";
import Link from "next/link";

export default function Navbar() {
  const { data: session } = useSession();

  return (
    <nav className="p-4 bg-gray-100 flex justify-between items-center">
      {/* Title */}
      <h1 className="text-2xl font-bold text-blue-600">PALLADIUM ECO</h1>

      {/* Buttons */}
      <div className="flex items-center space-x-4">
        {!session ? (
          <>
            <Link href="/login">
              <button className="bg-blue-500 text-white px-4 py-2 rounded">
                Login
              </button>
            </Link>
            <Link href="/register">
              <button className="bg-green-500 text-white px-4 py-2 rounded">
                Register
              </button>
            </Link>
          </>
        ) : (
          <>
            <p className="text-gray-700">Hello, {session.user.name}</p>
            <button
              onClick={() => signOut()}
              className="bg-red-500 text-white px-4 py-2 rounded"
            >
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
}
