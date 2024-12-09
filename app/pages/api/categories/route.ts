import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const categories = [
    {
      id: 1,
      name: "New Arrivals",
      items: [
        {
          id: 1,
          name: "Palladium 1",
          price: 200,
          condition: "New",
          imageUrl: "/images/shoe1.jpg", // Correct image path
          description: "Stylish Palladium shoes for everyday wear",
        },
        {
          id: 2,
          name: "Palladium 2",
          price: 250,
          condition: "New",
          imageUrl: "https://via.placeholder.com/300", // External placeholder image
          description: "Premium Palladium shoes for outdoor adventures",
        },
      ],
    },
  ];

  res.status(200).json(categories);
}
