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
        <h1 className="text-3xl font-bold text-black mb-4">Your cart is empty</h1>
        <Link href="/products" className="bg-black hover:bg-black-light text-white font-bold py-3 px-6 rounded-lg border-2 border-black shadow-handmade">
          Shop Now
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center text-black mb-12">My Cart</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <div className="bg-white rounded-lg shadow-handmade-lg border-2 border-black">
            {cart.map((product) => (
              <div key={product.id} className="flex items-center justify-between p-6 border-b last:border-b-0 border-black/20">
                <div className="flex items-center gap-6">
                  <img src={product.image} alt={product.name} className="w-24 h-24 object-cover rounded-lg border-2 border-black" />
                  <div>
                    <Link href={`/products/${product.id}`} className="text-lg font-semibold text-black hover:text-black-lighter">{product.name}</Link>
                    <p className="text-black-light">${product.price.toFixed(2)}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                        <button onClick={() => handleDecrement(product)} className="p-1 rounded-full bg-white border-2 border-black hover:bg-black hover:text-white transition-all">
                            <Minus className="h-4 w-4" />
                        </button>
                        <span className='font-semibold text-black'>{product.quantity}</span>
                        <button onClick={() => addToCart(product)} className="p-1 rounded-full bg-white border-2 border-black hover:bg-black hover:text-white transition-all">
                            <Plus className="h-4 w-4" />
                        </button>
                    </div>
                  <button onClick={() => handleRemoveFromCart(product.id)} className="text-black hover:text-black-lighter">
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 flex justify-end">
            <button onClick={clearCart} className="bg-black hover:bg-black-light text-white font-bold py-2 px-4 rounded-lg border-2 border-black shadow-handmade">
              Clear Cart
            </button>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-handmade-lg border-2 border-black p-6 h-fit">
          <h2 className="text-2xl font-semibold mb-6 text-black">Order Summary</h2>
          <div className="flex justify-between mb-4">
            <span className="text-black-light">Subtotal</span>
            <span className="font-semibold text-black">${total.toFixed(2)}</span>
          </div>
          <div className="flex justify-between mb-6">
            <span className="text-black-light">Shipping</span>
            <span className="font-semibold text-black">$0.00</span>
          </div>
          <div className="border-t-2 border-black/20 pt-4 flex justify-between font-bold text-xl text-black">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <button className="w-full mt-8 bg-black hover:bg-black-light text-white font-bold py-3 px-6 rounded-lg border-2 border-black shadow-handmade transition-all">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
