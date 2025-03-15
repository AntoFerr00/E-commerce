import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../app/slices/cartSlice';
import api from '../services/api';

export default function ProductDetailPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    api.get(`/products/${id}`).then(res => setProduct(res.data));
  }, [id]);

  if (!product) return <div className="container mx-auto py-10">Loading...</div>;

  return (
    <div className="container mx-auto py-12 grid md:grid-cols-2 gap-10 items-center">
      <img src={product.image} alt={product.title} className="w-full h-auto max-h-[400px] object-contain bg-white shadow-sm rounded p-8"/>
      <div>
        <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
        <p className="text-xl text-green-600 font-bold mb-4">${product.price}</p>
        <p className="mb-6">{product.description}</p>
        <button 
          onClick={() => dispatch(addToCart(product))}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition-colors"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
