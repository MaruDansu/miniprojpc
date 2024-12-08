"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/router"; // For dynamic routing
import Layout from "../../components/Layout"; // Path to Layout component

interface PalladiumShoe {
  id: number;
  name: string;
  price: number;
  condition: string;
  size?: number;
  imageUrl: string;
  description: string;
}

const ProductDetails = () => {
  const router = useRouter();
  const { id } = router.query;  // Get the dynamic 'id' from the URL
  const [product, setProduct] = useState<PalladiumShoe | null>(null);

  useEffect(() => {
    if (id) {
      const fetchProduct = async () => {
        try {
          // Mock data - replace with actual API call to fetch product by ID
          const products = [
            {
              id: 1,
              name: "Palladium 1",
              price: 200,
              condition: "New",
              imageUrl: "/images/shoe1.jpg",
              description: "Stylish Palladium shoes for everyday wear",
            },
            {
              id: 2,
              name: "Palladium 2",
              price: 250,
              condition: "New",
              imageUrl: "/images/shoe2.png",
              description: "Premium Palladium shoes for outdoor adventures",
            },
            // Add more products here...
          ];

          const product = products.find((prod) => prod.id === parseInt(id as string));
          setProduct(product || null);
        } catch (error) {
          console.error("Error fetching product:", error);
        }
      };

      fetchProduct();
    }
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <Layout>
      <div className="flex flex-col items-center p-6 space-y-4">
        {/* Product Image */}
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-96 h-96 object-cover rounded-lg mb-4"
        />

        {/* Product Details */}
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          <p className="text-lg text-gray-700">{product.description}</p>
          <p className="text-xl text-green-500 mt-2">${product.price}</p>
          <p className="text-sm text-gray-500">Condition: {product.condition}</p>
          {product.size && <p className="text-sm text-gray-500">Size: {product.size}</p>}
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetails;
