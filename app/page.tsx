

import SneakerCard from './components/SneakerCard';

export default function Home() {
  
  const featuredSneakers = [
    { id: 1, name: "Air Jordan 1", price: 200, condition: "New", size: 10 },
    { id: 2, name: "Air Jordan 4", price: 250, condition: "Used", size: 9 },
  ];

  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4 ">PALLADIUM Eco SHOES </h1>
      <h1 className="text-2xl font-bold mb-4">Featured Sneakers</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {featuredSneakers.map((sneaker) => (
          <SneakerCard key={sneaker.id} sneaker={sneaker} />
        ))}
      </div>
    </main>
  );
}
