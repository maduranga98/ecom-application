'use client';

import { useWishlist } from '@/context/WishlistContext';
import Link from 'next/link';
import ProductCard from '@/components/ProductCard';

export default function WishlistPage() {
  const { wishlist, clearWishlist } = useWishlist();

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">My Wishlist</h1>
      {wishlist.length === 0 ? (
        <div className="text-center">
          <p className="text-gray-600 text-lg mb-6">Your wishlist is empty.</p>
          <Link href="/products" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg">
            Explore Products
          </Link>
        </div>
      ) : (
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {wishlist.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <button 
              onClick={() => clearWishlist()} 
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-lg"
            >
              Clear Wishlist
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
