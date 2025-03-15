import { Link } from 'react-router-dom';

export default function ProductCard({ product }) {
  return (
    <div className="border rounded-lg shadow-sm bg-white p-2">
      <div className="w-full h-24 flex justify-center items-center overflow-hidden">
        <img 
          src={product.image} 
          alt={product.title} 
          className="object-contain h-full w-full"
        />
      </div>
      <div className="mt-2 text-center">
        <h3 className="text-sm font-semibold truncate">{product.title}</h3>
        <p className="text-sm font-bold text-green-600">${product.price}</p>
        <a href={`/products/${product.id}`} className="text-xs text-blue-600 hover:underline">
          View Product
        </a>
      </div>
    </div>
  );
}
