import React, { useState } from 'react';
import Modal from './Modal';

interface Product {
  name: string;
  description: string;
  imageUrl: string;
}

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div className="p-4 bg-white shadow-lg rounded-lg">
      <img src={product.imageUrl} alt={product.name} className="w-full h-60 object-cover rounded-md" />
      <h3 className="mt-2 text-xl font-semibold">{product.name}</h3>
      <p className="text-gray-600">{product.description.slice(0, 50)}...</p>
      <button onClick={handleOpenModal} className="mt-2 text-blue-500 hover:underline">View Product</button>

      {isModalOpen && <Modal onClose={handleCloseModal} product={product} />}
    </div>
  );
};

export default ProductCard;
