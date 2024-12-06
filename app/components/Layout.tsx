import React from "react";
import Link from "next/link";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">PALLADIUM ECO</h1>
          <p className="text-sm">Your eco-friendly shopping experience</p>
        </div>
      </header>

      {/* Navbar */}
      <nav className="bg-gray-200 p-2 flex justify-around">
        <Link href="/" className="text-blue-600 hover:underline">Home</Link>
        <Link href="/products" className="text-blue-600 hover:underline">Products</Link>
        <Link href="/contact" className="text-blue-600 hover:underline">Contact</Link>
      </nav>

      {/* Main Content */}
      <main className="flex-1 p-4">{children}</main>

      {/* Footer */}
      <footer className="bg-blue-600 text-white p-4 text-center">
        <p>&copy; 2024 PALLADIUM ECO. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;
