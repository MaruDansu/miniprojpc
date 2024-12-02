



const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
      <div className="flex flex-col min-h-screen">
        {/* Header */}
        <header className="bg-blue-600 text-white p-4">
          <h1 className="text-2xl font-bold">PALLADIUM ECO</h1>
        </header>
  
        {/* Navbar */}
        <nav className="bg-gray-200 p-2 flex justify-around">
          <a href="/" className="text-blue-600 hover:underline">Home</a>
          <a href="/products" className="text-blue-600 hover:underline">Products</a>
          <a href="/about" className="text-blue-600 hover:underline">About Us</a>
          <a href="/contact" className="text-blue-600 hover:underline">Contact</a>
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
  