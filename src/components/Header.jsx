'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Search, ShoppingCart, Heart, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { useWishlist } from '@/context/WishlistContext';

export default function Header() {
  const { cart } = useCart();
  const { wishlist } = useWishlist();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="bg-white/80 backdrop-blur-lg sticky top-0 z-50 border-b border-gray-200">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-3xl font-bold text-gray-900 tracking-tight">
          Handmade Haven
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-gray-600 hover:text-slate-900 font-medium transition-colors">Home</Link>
          <Link href="/products" className="text-gray-600 hover:text-slate-900 font-medium transition-colors">Products</Link>
          <Link href="/about" className="text-gray-600 hover:text-slate-900 font-medium transition-colors">About</Link>
          <Link href="/contact" className="text-gray-600 hover:text-slate-900 font-medium transition-colors">Contact</Link>
        </nav>

        <div className="flex items-center space-x-4">
            <div className="relative hidden md:block">
                <input
                type="text"
                placeholder="Search..."
                className="pl-10 pr-4 py-2 border rounded-full w-48 focus:outline-none focus:ring-2 focus:ring-slate-400 transition-all duration-300"
                />
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            </div>

          <Link href="/wishlist" className="relative p-2 rounded-full hover:bg-gray-100 transition-colors">
            <Heart className="h-6 w-6 text-gray-600" />
            {wishlist.length > 0 && (
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center animate-pulse">
                {wishlist.length}
              </span>
            )}
          </Link>
          <Link href="/cart" className="relative p-2 rounded-full hover:bg-gray-100 transition-colors">
            <ShoppingCart className="h-6 w-6 text-gray-600" />
            {cartItemCount > 0 && (
              <span className="absolute top-0 right-0 bg-slate-800 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {cartItemCount}
              </span>
            )}
          </Link>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 rounded-md hover:bg-gray-100 transition-colors">
              {isMenuOpen ? <X className="h-6 w-6 text-gray-800" /> : <Menu className="h-6 w-6 text-gray-800" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-lg pb-4 px-4 space-y-2">
            <Link href="/" className="block text-gray-800 hover:bg-gray-100 py-2 px-3 rounded-md font-medium" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link href="/products" className="block text-gray-800 hover:bg-gray-100 py-2 px-3 rounded-md font-medium" onClick={() => setIsMenuOpen(false)}>Products</Link>
            <Link href="/about" className="block text-gray-800 hover:bg-gray-100 py-2 px-3 rounded-md font-medium" onClick={() => setIsMenuOpen(false)}>About</Link>
            <Link href="/contact" className="block text-gray-800 hover:bg-gray-100 py-2 px-3 rounded-md font-medium" onClick={() => setIsMenuOpen(false)}>Contact</Link>
            <div className="relative pt-2">
                <input
                type="text"
                placeholder="Search..."
                className="pl-10 pr-4 py-2 border rounded-full w-full focus:outline-none focus:ring-2 focus:ring-slate-400 transition-shadow"
                />
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 pt-2" />
            </div>
        </div>
      )}
    </header>
  );
}
