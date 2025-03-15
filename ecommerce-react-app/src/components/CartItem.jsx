import { useDispatch } from 'react-redux';
import { removeFromCart } from '../app/slices/cartSlice';
import { Link } from 'react-router-dom';

export default function CartItem({ item }) {
  const dispatch = useDispatch();

  return (
    <div className="flex justify-between items-center border-b py-3">
      <div className="flex items-center gap-4">
        <img src={item.image} alt={item.title} className="w-16 h-16 object-contain"/>
        <div>
          <Link to={`/products/${item.id}`} className="font-semibold hover:underline">
            {item.title}
          </Link>
          <p className="text-sm text-gray-600">
            ${item.price} × {item.quantity}
          </p>
        </div>
      </div>
      <button 
        className="text-red-500 hover:text-red-700"
        onClick={() => dispatch(removeFromCart(item.id))}
      >
        Remove
      </button>
    </div>
  );
}
