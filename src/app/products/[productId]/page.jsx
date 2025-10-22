'use client';

import { useState } from 'react';
import Link from 'next/link';
import { products } from '@/data/products';
import { Star, Heart, ShoppingCart } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { useWishlist } from '@/context/WishlistContext';
import ProductCard from '@/components/ProductCard';

export default function ProductDetailPage({ params }) {
  const product = products.find((p) => p.id === parseInt(params.productId));
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const [selectedImage, setSelectedImage] = useState(product?.images[0]);

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-4xl font-bold text-gray-800">Product not found</h1>
        <Link href="/products" className="text-blue-500 hover:underline mt-4 inline-block">
          &larr; Back to Products
        </Link>
      </div>
    );
  }

  const handleToggleWishlist = () => {
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
        stars.push(<Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />);
      } else {
        stars.push(<Star key={i} className="h-5 w-5 text-gray-300" />);
      }
    }
    return stars;
  };

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4);

  return (
    <div className="bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Product Image Gallery */}
          <div className="flex flex-col gap-4">
            <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
              <img
                src={selectedImage}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-300 transform hover:scale-105"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(image)}
                  className={`rounded-lg overflow-hidden border-2 ${selectedImage === image ? 'border-blue-500' : 'border-transparent'}`}
                >
                  <img
                    src={image}
                    alt={`${product.name} thumbnail ${index + 1}`}
                    className="w-full h-24 object-cover cursor-pointer"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h1 className="text-4xl font-extrabold text-gray-900 mb-2">{product.name}</h1>
            <div className="flex items-center mb-4">
              <div className="flex items-center">
                {renderStars()}
              </div>
              <p className="text-gray-600 ml-2">({product.reviews} reviews)</p>
            </div>
            <p className="text-3xl font-bold text-gray-800 mb-6">${product.price.toFixed(2)}</p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">{product.description}</p>

            {/* Product Features */}
            <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Features</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                    {product.details.map((detail, index) => (
                        <li key={index}>{detail}</li>
                    ))}
                </ul>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center space-x-4 mb-8">
              <button
                onClick={() => addToCart(product)}
                className="flex-1 bg-slate-800 hover:bg-slate-900 text-white font-bold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center justify-center gap-2"
              >
                <ShoppingCart className="h-5 w-5" />
                Add to Cart
              </button>
              <button
                onClick={handleToggleWishlist}
                className="p-3 bg-white rounded-full shadow-md hover:bg-red-100 transition-colors"
              >
                <Heart
                  className={`h-6 w-6 ${isProductInWishlist ? 'text-red-500 fill-current' : 'text-gray-700'}`}
                />
              </button>
            </div>

            <Link href="/products" className="text-gray-600 hover:text-gray-800 font-semibold flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 mr-1"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
                Back to Products
            </Link>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">You Might Also Like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {relatedProducts.map(relatedProduct => (
                    <ProductCard key={relatedProduct.id} product={relatedProduct} />
                ))}
            </div>
        </div>
      </div>
    </div>
  );
}
