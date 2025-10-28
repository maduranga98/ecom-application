'use client';

import { useState } from 'react';
import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';
import { Filter, Grid, List, Sparkles } from 'lucide-react';

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState('grid');

  const categories = [
    { id: 'all', name: 'All Products', icon: '🎨' },
    { id: 'pottery', name: 'Clay Pottery', icon: '🏺' },
    { id: 'coconut', name: 'Coconut Shell', icon: '🥥' },
    { id: 'wood', name: 'Wood Carvings', icon: '🪵' },
    { id: 'decor', name: 'Home Decor', icon: '🏠' },
  ];

  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="min-h-screen bg-beige-200 canvas-texture">
      {/* Hero Banner */}
      <section className="relative bg-black text-white py-16 pattern-dots">
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-block mb-4 px-4 py-1.5 bg-beige-300 text-black backdrop-blur-sm rounded-full text-xs font-bold uppercase tracking-wider border-2 border-black shadow-handmade">
            <Sparkles className="inline h-3 w-3 mr-1" />
            Handcrafted Collection
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
            Discover Our Crafts
          </h1>
          <p className="text-xl text-beige-200 max-w-2xl mx-auto">
            Explore our curated collection of authentic Sri Lankan handmade products
          </p>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-beige-200/20 to-transparent"></div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Filter Section */}
        <div className="mb-10">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-8">
            <div>
              <h2 className="text-3xl font-bold text-black mb-2">
                Shop by Category
              </h2>
              <p className="text-black-light">
                {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'} found
              </p>
            </div>

            {/* View Toggle */}
            <div className="flex items-center gap-4">
              <span className="text-sm font-semibold text-black">View:</span>
              <div className="flex gap-2 bg-white rounded-lg p-1 shadow-handmade border-2 border-black">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-md transition-all ${
                    viewMode === 'grid'
                      ? 'bg-black text-white'
                      : 'text-black hover:bg-beige-200'
                  }`}
                >
                  <Grid className="h-5 w-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-md transition-all ${
                    viewMode === 'list'
                      ? 'bg-black text-white'
                      : 'text-black hover:bg-beige-200'
                  }`}
                >
                  <List className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 border-2 shadow-handmade ${
                  selectedCategory === category.id
                    ? 'bg-black text-white border-black scale-105'
                    : 'bg-beige-100 text-black border-black hover:bg-beige-300'
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className={`grid gap-8 ${
            viewMode === 'grid'
              ? 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'
              : 'grid-cols-1'
          }`}>
            {filteredProducts.map((product, index) => (
              <div
                key={product.id}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="inline-block p-8 bg-white rounded-2xl shadow-handmade-lg border-2 border-black">
              <Filter className="h-16 w-16 text-black-lighter mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-black mb-2">
                No products found
              </h3>
              <p className="text-black-light">
                Try selecting a different category
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
