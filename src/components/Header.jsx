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
    <header className="bg-beige-100 backdrop-blur-lg sticky top-0 z-50 border-b-2 border-black shadow-handmade">
      {/* Top announcement bar */}
      <div className="bg-black text-white text-center py-2.5 px-4 text-sm font-medium tracking-wide">
        <Sparkles className="inline h-4 w-4 mr-2" />
        Authentic Sri Lankan Handmade Crafts - Free Shipping Over $50
        <Sparkles className="inline h-4 w-4 ml-2" />
      </div>

      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="relative">
            <div className="text-4xl font-extrabold text-black tracking-tight">
              Ceylon Crafts
            </div>
            <div className="text-xs font-medium text-black-light tracking-widest uppercase mt-1">
              Handmade in Sri Lanka
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-black hover:text-black-lighter font-semibold transition-all duration-300 relative group">
            Home
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link href="/products" className="text-black hover:text-black-lighter font-semibold transition-all duration-300 relative group">
            Products
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link href="/about" className="text-black hover:text-black-lighter font-semibold transition-all duration-300 relative group">
            About
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link href="/contact" className="text-black hover:text-black-lighter font-semibold transition-all duration-300 relative group">
            Contact
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-300"></span>
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
            <div className="relative hidden md:block">
                <input
                type="text"
                placeholder="Search crafts..."
                className="pl-10 pr-4 py-2.5 border-2 border-black rounded-full w-56 focus:outline-none focus:ring-2 focus:ring-black-lighter focus:border-black transition-all duration-300 bg-white text-black placeholder:text-black-lighter shadow-handmade canvas-texture"
                />
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-black" />
            </div>

          <Link href="/wishlist" className="relative p-2 rounded-full hover:bg-beige-300 transition-all duration-300 group">
            <Heart className="h-6 w-6 text-black group-hover:text-black-lighter transition-colors" />
            {wishlist.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-black text-white text-xs rounded-full h-5 w-5 flex items-center justify-center shadow-lg animate-pulse font-bold">
                {wishlist.length}
              </span>
            )}
          </Link>
          <Link href="/cart" className="relative p-2 rounded-full hover:bg-beige-300 transition-all duration-300 group">
            <ShoppingCart className="h-6 w-6 text-black group-hover:text-black-lighter transition-colors" />
            {cartItemCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-black text-white text-xs rounded-full h-5 w-5 flex items-center justify-center shadow-lg font-bold">
                {cartItemCount}
              </span>
            )}
          </Link>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 rounded-md hover:bg-beige-300 transition-colors">
              {isMenuOpen ? <X className="h-6 w-6 text-black" /> : <Menu className="h-6 w-6 text-black" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-beige-100 backdrop-blur-lg pb-4 px-4 space-y-2 border-t-2 border-black">
            <Link href="/" className="block text-black hover:bg-beige-300 py-3 px-4 rounded-lg font-semibold transition-all" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link href="/products" className="block text-black hover:bg-beige-300 py-3 px-4 rounded-lg font-semibold transition-all" onClick={() => setIsMenuOpen(false)}>Products</Link>
            <Link href="/about" className="block text-black hover:bg-beige-300 py-3 px-4 rounded-lg font-semibold transition-all" onClick={() => setIsMenuOpen(false)}>About</Link>
            <Link href="/contact" className="block text-black hover:bg-beige-300 py-3 px-4 rounded-lg font-semibold transition-all" onClick={() => setIsMenuOpen(false)}>Contact</Link>
            <div className="relative pt-2">
                <input
                type="text"
                placeholder="Search crafts..."
                className="pl-10 pr-4 py-2.5 border-2 border-black rounded-full w-full focus:outline-none focus:ring-2 focus:ring-black-lighter transition-all bg-white text-black placeholder:text-black-lighter canvas-texture"
                />
                <Search className="absolute left-3 top-1/2 h-5 w-5 text-black" style={{marginTop: '4px'}} />
            </div>
        </div>
      )}
    </header>
  );
}
