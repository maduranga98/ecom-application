'use client';

import Link from 'next/link';
import { Heart, ShoppingCart, Star, Sparkles } from 'lucide-react';
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
        stars.push(<Star key={i} className="h-4 w-4 text-black fill-black" />);
      } else {
        stars.push(<Star key={i} className="h-4 w-4 text-beige-400" />);
      }
    }
    return stars;
  };

  return (
    <div className="bg-white rounded-2xl shadow-handmade-lg overflow-hidden card-hover-lift group flex flex-col border-2 border-black hover:border-black-lighter transition-all duration-300">
      <Link href={`/products/${product.id}`} className="block flex flex-col flex-grow">
        <div className="relative h-64 overflow-hidden" style={{backgroundColor: '#BA9256'}}>
          {/* Handmade badge */}
          <div className="absolute top-3 left-3 bg-black text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg z-10 flex items-center gap-1 border-2 border-white">
            <Sparkles className="h-3 w-3" />
            Handmade
          </div>

          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />

          <button
            onClick={handleToggleWishlist}
            className="absolute top-3 right-3 p-2.5 bg-white/95 backdrop-blur-sm rounded-full shadow-handmade hover:bg-white transition-all duration-300 z-10 hover:scale-110 border-2 border-black"
          >
            <Heart
              className={`h-5 w-5 transition-all ${isProductInWishlist ? 'text-black fill-black scale-110' : 'text-black'}`}
            />
          </button>

          {/* Decorative corner accent */}
          <div className="absolute bottom-0 right-0 w-16 h-16" style={{background: 'linear-gradient(to top left, rgba(186, 146, 86, 0.3), transparent)'}}></div>
        </div>

        <div className="p-5 flex flex-col flex-grow bg-white">
          <h3 className="text-lg font-bold text-black mb-2 line-clamp-2 group-hover:text-black-lighter transition-colors">
            {product.name}
          </h3>

          <div className="flex items-center mb-3">
            <div className="flex items-center">
              {renderStars()}
            </div>
            <p className="text-black-light ml-2 text-sm font-medium">
              ({product.reviews})
            </p>
          </div>

          <div className="flex items-baseline gap-2 mb-4">
            <p className="text-3xl font-extrabold text-black">
              ${product.price.toFixed(2)}
            </p>
            <span className="text-sm text-black-light font-medium">USD</span>
          </div>

          <div className="mt-auto">
             <button
              onClick={handleAddToCart}
              className="w-full bg-black hover:bg-black-light text-white font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 shadow-handmade hover:shadow-handmade-lg border-2 border-black"
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
