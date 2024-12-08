"use client";

import React, { useState, useEffect } from "react";
import Layout from "./components/Layout";
import CategoryCard from "./components/CategoryCard";
import Link from "next/link";

interface PalladiumShoe {
  id: number;
  name: string;
  price: number;
  condition: string;
  size?: number;
  imageUrl: string;
  description: string;
}

interface Category {
  id: number;
  name: string;
  items: PalladiumShoe[];
}

const Home = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data: Category[] = [
          {
            id: 1,
            name: "New Arrivals",
            items: [
              {
                id: 1,
                name: "Palladium 1",
                price: 200,
                condition: "New",
                size: 10,
                imageUrl: "/images/shoe1.jpg", 
                description: "Stylish Palladium shoes for everyday wear",
              },
              {
                id: 2,
                name: "Palladium 2",
                price: 250,
                condition: "New",
                size: 9,
                imageUrl: "/images/shoe2.png",
                description: "Premium Palladium shoes for outdoor adventures",
              },
            ],
          },
          {
            id: 2,
            name: "Used Classics",
            items: [
              {
                id: 3,
                name: "Palladium 3",
                price: 180,
                condition: "Used",
                size: 8,
                imageUrl: "/images/shoe3.png",
                description: "Classic Palladium shoes in used condition",
              },
              {
                id: 4,
                name: "Palladium 4",
                price: 300,
                condition: "Used",
                size: 11,
                imageUrl: "/images/shoe4.png",
                description: "Retro Palladium shoes for vintage lovers",
              },
            ],
          },
          {
            id: 3,
            name: "Souvenirs and Trinkets",
            items: [
              {
                id: 5,
                name: "Miniature Palladium",
                price: 20,
                condition: "New",
                imageUrl: "/images/cat.png",
                description: "Collectible Palladium miniature for display",
              },
            ],
          },
        ];

        setCategories(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <Layout>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {categories.map((category) => (
          <div key={category.id}>
            <h2 className="text-xl font-bold">{category.name}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {category.items.map((item) => (
                <div key={item.id} className="border rounded-lg p-4">
                  <img src={item.imageUrl} alt={item.name} className="w-full h-64 object-cover mb-4" />
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="text-gray-600">${item.price}</p>
                  <p className="text-sm text-gray-500">{item.condition}</p>
                  <Link href={`/product/${item.id}`}>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded mt-4">
                      View Product
                    </button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Home;
