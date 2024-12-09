import { NextResponse } from "next/server";

export async function GET() {
  // Product data
  const products = [
    {
      id: 1,
      name: "Palladium 1",
      price: 150,
      condition: "New",
      imageUrl: "",
      description: "Stylish and durable shoes for all terrains.",
    },
    {
      id: 2,
      name: "Palladium 2",
      price: 160,
      condition: "New",
      imageUrl: "https://via.placeholder.com/300",
      description: "Perfect for outdoor adventures.",
    },
    {
      id: 3,
      name: "Palladium Classic 1",
      price: 100,
      condition: "Used",
      imageUrl: "https://via.placeholder.com/300",
      description: "Vintage design with a classic touch.",
    },
    {
      id: 4,
      name: "Palladium Classic 2",
      price: 120,
      condition: "Used",
      imageUrl: "https://via.placeholder.com/300",
      description: "Great for casual and formal outings.",
    },
  ];

  // Categorize products into "New Arrivals" and "Old Classics"
  const categories = [
    {
      id: 1,
      name: "New Arrivals",
      items: products.filter((product) => product.condition === "New"),
    },
    {
      id: 2,
      name: "Old Classics",
      items: products.filter((product) => product.condition === "Used"),
    },
  ];

  // Respond with categorized data
  return NextResponse.json(categories);
}
