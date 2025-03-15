import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { useSelector } from 'react-redux';

export default function Navbar() {
  const cart = useSelector(state => state.cart);

  return (
    <nav className="bg-gray-900 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <Link to="/" className="text-2xl font-bold">MyStore</Link>
        <div className="space-x-4 flex items-center">
          <Link to="/" className="hover:text-blue-400">Home</Link>
          <Link to="/products" className="hover:text-blue-400">Products</Link>
          <Link to="/cart" className="flex items-center hover:text-blue-400">
            <ShoppingCart className="mr-1"/>
            Cart ({cart.length})
          </Link>
        </div>
      </div>
    </nav>
  );
}
