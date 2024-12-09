// app/layout.tsx
import Link from "next/link";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <nav className="p-4 bg-gray-100 flex justify-between items-center">
          {/* Website Title */}
          <h1 className="text-2xl font-bold text-green-600">PALLADIUM ECO</h1>

          {/* Navigation Links and Buttons */}
          <div className="flex items-center space-x-4">
            <Link href="/login">
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Login
              </button>
            </Link>
            <Link href="/register">
              <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
                Register
              </button>
            </Link>
          </div>
        </nav>

        {/* Main Content */}
        <main className="p-4">{children}</main>
      </body>
    </html>
  );
}
