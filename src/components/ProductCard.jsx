'use client';

import Link from 'next/link';
import { Heart, ShoppingCart, Star } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { useWishlist } from '@/context/WishlistContext';

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
  };

  const handleToggleWishlist = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  const isProductInWishlist = isInWishlist(product.id);

  const renderStars = () => {
    const stars = [];
    const rating = product.rating;
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />);
      } else {
        stars.push(<Star key={i} className="h-4 w-4 text-gray-300" />);
      }
    }
    return stars;
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 group flex flex-col">
      <Link href={`/products/${product.id}`} className="block flex flex-col flex-grow">
        <div className="relative h-56">
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover"
          />
          <button
            onClick={handleToggleWishlist}
            className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-lg hover:bg-red-100 transition-colors z-10"
          >
            <Heart
              className={`h-6 w-6 ${isProductInWishlist ? 'text-red-500 fill-current' : 'text-gray-700'}`}
            />
          </button>
        </div>
        <div className="p-4 flex flex-col flex-grow">
          <h3 className="text-xl font-bold text-gray-900 mb-2 truncate">{product.name}</h3>
          <div className="flex items-center mb-2">
            <div className="flex items-center">
              {renderStars()}
            </div>
            <p className="text-gray-600 ml-2 text-sm">({product.reviews} reviews)</p>
          </div>
          <p className="text-2xl font-extrabold text-gray-900 mb-4">${product.price.toFixed(2)}</p>
          
          <div className="mt-auto">
             <button
              onClick={handleAddToCart}
              className="w-full bg-slate-800 hover:bg-slate-900 text-white font-bold py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors duration-300"
            >
              <ShoppingCart className="h-5 w-5" />
              Add to Cart
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
}
