import { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import api from '../services/api';

export default function HomePage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api.get('/products?limit=8').then((res) => setProducts(res.data));
  }, []);

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-8">Featured Products</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-4">
          {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
