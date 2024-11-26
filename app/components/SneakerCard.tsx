interface Sneaker {
    id: number;
    name: string;
    price: number;
    condition: string;
    size: number;
  }
  
  const SneakerCard: React.FC<{ sneaker: Sneaker }> = ({ sneaker }) => {
    return (
      <div className="border rounded-lg shadow-md p-4">
        <h2 className="text-xl font-semibold">{sneaker.name}</h2>
        <p className="text-gray-500">Condition: {sneaker.condition}</p>
        <p className="text-green-500">${sneaker.price}</p>
        <p className="text-gray-500">Size: {sneaker.size}</p>
      </div>
    );
  };
  
  export default SneakerCard;