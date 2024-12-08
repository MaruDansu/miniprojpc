import React from 'react';

interface ModalProps {
  onClose: () => void;
  product: { name: string; description: string; imageUrl: string };
}

const Modal: React.FC<ModalProps> = ({ onClose, product }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold">{product.name}</h2>
          <button onClick={onClose} className="text-xl text-gray-500">&times;</button>
        </div>
        <img src={product.imageUrl} alt={product.name} className="my-4 w-full h-60 object-cover rounded-md" />
        <p className="text-gray-700">{product.description}</p>
      </div>
    </div>
  );
};

export default Modal;
