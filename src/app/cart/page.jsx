'use client';

import { useCart } from '@/context/CartContext';
import Link from 'next/link';
import { Plus, Minus, Trash2 } from 'lucide-react';

export default function CartPage() {
  const { cart, removeFromCart, clearCart, addToCart } = useCart();

  const handleRemoveFromCart = (productId) => {
    removeFromCart(productId);
  };
  
  const handleDecrement = (product) => {
    if (product.quantity > 1) {
        addToCart({ ...product, quantity: product.quantity - 1 });
    } else {
        removeFromCart(product.id)
    }
  }

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  if (cart.length === 0) {
    return (
      <div className="text-center py-20">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Your cart is empty</h1>
        <Link href="/products" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg">
          Shop Now
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">My Cart</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <div className="bg-white rounded-lg shadow-md">
            {cart.map((product) => (
              <div key={product.id} className="flex items-center justify-between p-6 border-b last:border-b-0">
                <div className="flex items-center gap-6">
                  <img src={product.image} alt={product.name} className="w-24 h-24 object-cover rounded-lg" />
                  <div>
                    <Link href={`/products/${product.id}`} className="text-lg font-semibold text-gray-800 hover:text-blue-600">{product.name}</Link>
                    <p className="text-gray-600">${product.price.toFixed(2)}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                        <button onClick={() => handleDecrement(product)} className="p-1 rounded-full bg-gray-200 hover:bg-gray-300">
                            <Minus className="h-4 w-4" />
                        </button>
                        <span className='font-semibold'>{product.quantity}</span>
                        <button onClick={() => addToCart(product)} className="p-1 rounded-full bg-gray-200 hover:bg-gray-300">
                            <Plus className="h-4 w-4" />
                        </button>
                    </div>
                  <button onClick={() => handleRemoveFromCart(product.id)} className="text-red-500 hover:text-red-700">
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 flex justify-end">
            <button onClick={clearCart} className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg">
              Clear Cart
            </button>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 h-fit">
          <h2 className="text-2xl font-semibold mb-6">Order Summary</h2>
          <div className="flex justify-between mb-4">
            <span className="text-gray-600">Subtotal</span>
            <span className="font-semibold">${total.toFixed(2)}</span>
          </div>
          <div className="flex justify-between mb-6">
            <span className="text-gray-600">Shipping</span>
            <span className="font-semibold">$0.00</span>
          </div>
          <div className="border-t pt-4 flex justify-between font-bold text-xl">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <button className="w-full mt-8 bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
