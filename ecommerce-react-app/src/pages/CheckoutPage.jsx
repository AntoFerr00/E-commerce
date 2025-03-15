import { useSelector, useDispatch } from 'react-redux';
import { clearCart } from '../app/slices/cartSlice';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function CheckoutPage() {
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
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold mb-6">Checkout</h1>
      <div className="grid md:grid-cols-2 gap-6">
        
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-bold mb-4">Order Summary</h2>
          {cart.map(item => (
            <div key={item.id} className="flex items-center justify-between mb-4">
              <img src={item.image} className="w-12 h-12 object-contain"/>
              <span className="flex-1 ml-4">{item.title}</span>
              <span className="text-gray-600">{item.quantity} × ${item.price}</span>
            </div>
          ))}
          <div className="border-t pt-4 font-bold">
            Total: ${totalPrice}
          </div>
        </div>

        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-bold mb-4">Shipping Information</h2>
          <form 
            onSubmit={(e) => {
              e.preventDefault();
              alert("Order placed successfully!");
              dispatch(clearCart());
            }}
            className="space-y-3"
          >
            <input className="border rounded p-2 w-full" placeholder="Full Name" required />
            <input className="border rounded p-2 w-full" placeholder="Address" required />
            <input className="border rounded p-2 w-full" placeholder="City" required />
            <input className="border rounded p-2 w-full" placeholder="Postal Code" required />
            <input className="border rounded p-2 w-full" placeholder="Email" type="email" required />
            <button 
              type="submit"
              className="mt-4 w-full bg-green-600 text-white py-2 rounded"
            >
              Place Order
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}
