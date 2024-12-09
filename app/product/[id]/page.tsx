import prisma from "../../../lib/prisma"; // Ensure prisma is configured correctly
import Image from "next/image";
import { notFound } from "next/navigation";

export default async function ProductPage({ params }: { params: { id: string } }) {
  const productId = parseInt(params.id);

  // Fetch product details
  const product = await prisma.palladiumShoe.findUnique({
    where: { id: productId },
  });

  if (!product) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto p-6 flex flex-col items-center">
      {/* Product Image */}
      <div className="w-full flex justify-center">
        <Image
          src={product.imageUrl}
          alt={product.name}
          width={400}
          height={400}
          className="rounded-lg shadow-lg"
          priority={true}
        />
      </div>

      {/* Product Info */}
      <div className="mt-8 text-center">
        <h1 className="text-4xl font-bold text-gray-800">{product.name}</h1>
        <p className="text-lg text-gray-600 mt-4">{product.description}</p>
        <p className="text-3xl text-green-500 font-semibold mt-4">${product.price}</p>
        <p className="text-md text-gray-500 mt-2">Condition: {product.condition}</p>
        {product.size && <p className="text-md text-gray-500 mt-1">Size: {product.size}</p>}
      </div>
    </div>
  );
}
