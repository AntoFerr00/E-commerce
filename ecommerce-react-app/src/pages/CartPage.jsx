import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, clearCart } from '../app/slices/cartSlice';
import { Link } from 'react-router-dom';

export default function CartPage() {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);

  if (cart.length === 0) {
    return (
      <div className="container mx-auto py-10 text-center">
        <h1 className="text-xl">Your cart is empty!</h1>
        <Link className="mt-4 inline-block text-blue-600" to="/products">Shop Products</Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-10 bg-white shadow rounded-lg p-6">
      <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>
      {cart.map(item => (
        <div key={item.id} className="flex justify-between items-center border-b py-4">
          <div className="flex items-center gap-4">
            <img src={item.image} className="w-16 h-16 object-contain"/>
            <div>
              <p className="font-semibold">{item.title}</p>
              <p className="text-sm text-gray-600">${item.price} × {item.quantity}</p>
            </div>
          </div>
          <button className="text-red-500 hover:text-red-700" onClick={() => dispatch(removeFromCart(item.id))}>
            Remove
          </button>
        </div>
      ))}
      <div className="mt-6 text-xl font-bold">Total: ${totalPrice}</div>
      <button className="mt-4 px-4 py-2 bg-red-600 text-white rounded" onClick={() => dispatch(clearCart())}>
        Clear Cart
      </button>
      <Link className="ml-4 px-4 py-2 bg-green-600 text-white rounded" to="/checkout">
        Checkout
      </Link>
    </div>
  );
}
