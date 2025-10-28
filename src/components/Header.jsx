'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Search, ShoppingCart, Heart, Menu, X, Sparkles } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { useWishlist } from '@/context/WishlistContext';

export default function Header() {
  const { cart } = useCart();
  const { wishlist } = useWishlist();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="bg-coconut-50/98 backdrop-blur-lg sticky top-0 z-50 border-b border-clay-300 shadow-artisan">
      {/* Top announcement bar */}
      <div className="bg-gradient-to-r from-clay-700 via-clay-600 to-wood-700 text-coconut-50 text-center py-2.5 px-4 text-sm font-medium tracking-wide">
        <Sparkles className="inline h-4 w-4 mr-2" />
        Authentic Sri Lankan Handmade Crafts - Free Shipping Over $50
        <Sparkles className="inline h-4 w-4 ml-2" />
      </div>

      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="relative">
            <div className="text-4xl font-extrabold text-gradient-clay tracking-tight">
              Ceylon Crafts
            </div>
            <div className="text-xs font-medium text-clay-600 tracking-widest uppercase mt-1">
              Handmade in Sri Lanka
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-coconut-900 hover:text-clay-700 font-semibold transition-all duration-300 relative group">
            Home
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-clay-700 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link href="/products" className="text-coconut-900 hover:text-clay-700 font-semibold transition-all duration-300 relative group">
            Products
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-clay-700 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link href="/about" className="text-coconut-900 hover:text-clay-700 font-semibold transition-all duration-300 relative group">
            About
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-clay-700 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link href="/contact" className="text-coconut-900 hover:text-clay-700 font-semibold transition-all duration-300 relative group">
            Contact
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-clay-700 group-hover:w-full transition-all duration-300"></span>
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
            <div className="relative hidden md:block">
                <input
                type="text"
                placeholder="Search crafts..."
                className="pl-10 pr-4 py-2.5 border border-clay-300 rounded-full w-56 focus:outline-none focus:ring-2 focus:ring-clay-600 focus:border-clay-600 transition-all duration-300 bg-white text-coconut-900 placeholder:text-coconut-500 shadow-artisan"
                />
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-coconut-600" />
            </div>

          <Link href="/wishlist" className="relative p-2 rounded-full hover:bg-clay-200 transition-all duration-300 group">
            <Heart className="h-6 w-6 text-clay-700 group-hover:text-clay-800 transition-colors" />
            {wishlist.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-gradient-to-br from-clay-600 to-clay-800 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center shadow-lg animate-pulse font-bold">
                {wishlist.length}
              </span>
            )}
          </Link>
          <Link href="/cart" className="relative p-2 rounded-full hover:bg-clay-200 transition-all duration-300 group">
            <ShoppingCart className="h-6 w-6 text-clay-700 group-hover:text-clay-800 transition-colors" />
            {cartItemCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-gradient-to-br from-saffron-600 to-saffron-800 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center shadow-lg font-bold">
                {cartItemCount}
              </span>
            )}
          </Link>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 rounded-md hover:bg-clay-100 transition-colors">
              {isMenuOpen ? <X className="h-6 w-6 text-clay-700" /> : <Menu className="h-6 w-6 text-clay-700" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-coconut-50/98 backdrop-blur-lg pb-4 px-4 space-y-2 border-t border-clay-300">
            <Link href="/" className="block text-coconut-900 hover:bg-clay-200 py-3 px-4 rounded-lg font-semibold transition-all" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link href="/products" className="block text-coconut-900 hover:bg-clay-200 py-3 px-4 rounded-lg font-semibold transition-all" onClick={() => setIsMenuOpen(false)}>Products</Link>
            <Link href="/about" className="block text-coconut-900 hover:bg-clay-200 py-3 px-4 rounded-lg font-semibold transition-all" onClick={() => setIsMenuOpen(false)}>About</Link>
            <Link href="/contact" className="block text-coconut-900 hover:bg-clay-200 py-3 px-4 rounded-lg font-semibold transition-all" onClick={() => setIsMenuOpen(false)}>Contact</Link>
            <div className="relative pt-2">
                <input
                type="text"
                placeholder="Search crafts..."
                className="pl-10 pr-4 py-2.5 border border-clay-300 rounded-full w-full focus:outline-none focus:ring-2 focus:ring-clay-600 transition-all bg-white text-coconut-900 placeholder:text-coconut-500"
                />
                <Search className="absolute left-3 top-1/2 h-5 w-5 text-coconut-600" style={{marginTop: '4px'}} />
            </div>
        </div>
      )}
    </header>
  );
}
