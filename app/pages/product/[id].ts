import { NextApiRequest, NextApiResponse } from "next";

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
  // Add more products here
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  const product = products.find((product) => product.id === parseInt(id as string));

  if (product) {
    res.status(200).json(product);
  } else {
    res.status(404).json({ message: "Product not found" });
  }
}
