
import { useRouter } from 'next/router';

export async function getServerSideProps(context) {
  const { id } = context.params;  // Get the product ID from the URL
  const res = await fetch(`https://api.example.com/products/${id}`);
  const product = await res.json();

  if (!product) {
    return { notFound: true };  // Return 404 if product not found
  }

  return { props: { product } };  // Pass the product data as a prop
}

const ProductPage = ({ product }) => {
  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      {/* Add more details like image, reviews, etc. */}
    </div>
  );
};

export default ProductPage;
