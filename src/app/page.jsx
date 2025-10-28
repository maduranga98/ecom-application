"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { Star, Shield, Gift, Truck } from "lucide-react";
import { getFeaturedProducts } from "@/services/productService";

export default function Home() {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchFeaturedProducts() {
      try {
        setLoading(true);
        const products = await getFeaturedProducts(4);
        setFeaturedProducts(products);
      } catch (error) {
        console.error("Failed to fetch featured products:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchFeaturedProducts();
  }, []);

  const testimonials = [
    {
      quote:
        "The clay pottery set I ordered is absolutely stunning. You can feel the craftsmanship in every piece!",
      author: "Amara P.",
      rating: 5,
    },
    {
      quote:
        "The coconut shell bowls are beautiful and eco-friendly. Perfect for my kitchen and a great conversation starter!",
      author: "David M.",
      rating: 5,
    },
    {
      quote:
        "The wood carving I purchased is a true work of art. The detail and quality exceeded my expectations!",
      author: "Priya S.",
      rating: 5,
    },
  ];

  const categories = [
    {
      name: "Clay Pottery",
      description: "Handcrafted ceramic art",
      href: "/products",
      image:
        "https://images.unsplash.com/photo-1551893138-b53634b706c5?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Coconut Shell",
      description: "Eco-friendly creations",
      href: "/products",
      image:
        "https://images.unsplash.com/photo-1587300003388-59208cc962cb?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Wood Carvings",
      description: "Traditional artistry",
      href: "/products",
      image:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2558&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Home Decor",
      description: "Ornamental treasures",
      href: "/products",
      image:
        "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2669&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <div className="bg-coconut-50">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center min-h-[700px] text-white"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-clay-900/80 via-clay-800/70 to-coconut-900/80"></div>
        <div className="absolute inset-0 pattern-dots"></div>

        <div className="relative container mx-auto px-4 h-full min-h-[700px] flex flex-col items-center justify-center text-center">
          <div className="max-w-4xl">
            <div className="inline-block mb-6 px-6 py-2 bg-saffron-500/90 backdrop-blur-sm rounded-full text-sm font-bold uppercase tracking-wider animate-fade-in-down">
              Authentic Sri Lankan Craftsmanship
            </div>

            <h1 className="text-6xl md:text-7xl font-extrabold leading-tight mb-6 animate-fade-in-down">
              Discover the Art of
              <span className="block text-saffron-300 mt-2">Handmade Ceylon</span>
            </h1>

            <p className="text-xl md:text-2xl font-light mb-10 text-coconut-100 max-w-2xl mx-auto animate-fade-in-up">
              Each piece tells a story of tradition, passion, and the skilled hands of Sri Lankan artisans
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up">
              <Link
                href="/products"
                className="bg-gradient-to-r from-clay-600 to-clay-700 hover:from-clay-700 hover:to-clay-800 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-artisan-xl btn-artisan text-lg"
              >
                Explore Collection
              </Link>
              <Link
                href="/about"
                className="bg-white/10 backdrop-blur-sm border-2 border-white/30 hover:bg-white/20 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 text-lg"
              >
                Our Story
              </Link>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
              <div className="w-1 h-3 bg-white/50 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20 bg-white pattern-texture relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-clay-600 font-semibold uppercase tracking-wider text-sm">Curated Selection</span>
            <h2 className="text-5xl font-extrabold text-gradient-warm mt-2 mb-4">
              Featured Handcrafts
            </h2>
            <p className="text-coconut-600 text-lg max-w-2xl mx-auto">
              Discover our handpicked selection of authentic Sri Lankan artisan pieces
            </p>
          </div>

          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[...Array(4)].map((_, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-artisan-lg overflow-hidden border-2 border-coconut-200"
                >
                  <div className="h-64 skeleton-artisan"></div>
                  <div className="p-5">
                    <div className="h-6 skeleton-artisan rounded mb-3"></div>
                    <div className="h-4 skeleton-artisan rounded mb-4 w-3/4"></div>
                    <div className="h-10 skeleton-artisan rounded"></div>
                  </div>
                </div>
              ))}
            </div>
          ) : featuredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {featuredProducts.map((product, index) => (
                <div key={product.id} style={{animationDelay: `${index * 100}ms`}} className="animate-fade-in-up">
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-coconut-600 text-lg">
              No featured products available at the moment.
            </p>
          )}

          <div className="text-center mt-16">
            <Link
              href="/products"
              className="inline-block bg-gradient-to-r from-clay-600 to-clay-700 hover:from-clay-700 hover:to-clay-800 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 shadow-artisan-lg hover:shadow-artisan-xl transform hover:scale-105 btn-artisan"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-br from-coconut-100 to-clay-50 relative overflow-hidden">
        <div className="absolute inset-0 pattern-dots opacity-40"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <span className="text-clay-600 font-semibold uppercase tracking-wider text-sm">Our Promise</span>
            <h2 className="text-5xl font-extrabold text-gradient-clay mt-2 mb-4">
              Why Ceylon Crafts?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="flex flex-col items-center text-center bg-white rounded-2xl p-8 shadow-artisan-lg hover:shadow-artisan-xl transition-all duration-300 border-2 border-coconut-200 hover:border-clay-300 group">
              <div className="bg-gradient-to-br from-clay-100 to-clay-200 p-6 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                <Shield size={48} className="text-clay-600" />
              </div>
              <h3 className="text-2xl font-bold text-coconut-900 mb-3">
                Authentic Craftsmanship
              </h3>
              <p className="text-coconut-700 leading-relaxed">
                Every piece is handcrafted by skilled Sri Lankan artisans using traditional techniques passed down through generations.
              </p>
            </div>

            <div className="flex flex-col items-center text-center bg-white rounded-2xl p-8 shadow-artisan-lg hover:shadow-artisan-xl transition-all duration-300 border-2 border-coconut-200 hover:border-clay-300 group">
              <div className="bg-gradient-to-br from-tropical-100 to-tropical-200 p-6 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                <Gift size={48} className="text-tropical-600" />
              </div>
              <h3 className="text-2xl font-bold text-coconut-900 mb-3">
                One-of-a-Kind Pieces
              </h3>
              <p className="text-coconut-700 leading-relaxed">
                Each item is unique with its own character, making them perfect as meaningful gifts or cherished home additions.
              </p>
            </div>

            <div className="flex flex-col items-center text-center bg-white rounded-2xl p-8 shadow-artisan-lg hover:shadow-artisan-xl transition-all duration-300 border-2 border-coconut-200 hover:border-clay-300 group">
              <div className="bg-gradient-to-br from-saffron-100 to-saffron-200 p-6 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                <Truck size={48} className="text-saffron-600" />
              </div>
              <h3 className="text-2xl font-bold text-coconut-900 mb-3">
                Worldwide Delivery
              </h3>
              <p className="text-coconut-700 leading-relaxed">
                We carefully package and ship your handmade treasures worldwide, ensuring they arrive safely at your doorstep.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Shop by Category Section */}
      <section className="py-20 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-clay-600 font-semibold uppercase tracking-wider text-sm">Explore Collections</span>
            <h2 className="text-5xl font-extrabold text-gradient-warm mt-2 mb-4">
              Shop by Category
            </h2>
            <p className="text-coconut-600 text-lg max-w-2xl mx-auto">
              Browse our carefully curated collections of traditional Sri Lankan handicrafts
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category, index) => (
              <Link key={category.name} href={category.href}>
                <div
                  className="group relative rounded-2xl overflow-hidden shadow-artisan-lg hover:shadow-artisan-xl transition-all duration-500 border-2 border-coconut-200 hover:border-clay-400 card-hover-lift"
                  style={{animationDelay: `${index * 100}ms`}}
                >
                  <div className="relative h-80 overflow-hidden">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-clay-900/90 via-clay-800/60 to-transparent"></div>

                    {/* Content overlay */}
                    <div className="absolute inset-0 flex flex-col items-center justify-end p-6 text-center">
                      <h3 className="text-3xl font-extrabold text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                        {category.name}
                      </h3>
                      <p className="text-coconut-100 text-sm font-medium mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {category.description}
                      </p>
                      <div className="w-16 h-1 bg-saffron-400 rounded-full group-hover:w-24 transition-all duration-300"></div>
                    </div>

                    {/* Corner decoration */}
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-saffron-400/30 to-transparent rounded-bl-3xl"></div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-clay-50 to-coconut-100 relative overflow-hidden">
        <div className="absolute inset-0 pattern-texture opacity-50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <span className="text-clay-600 font-semibold uppercase tracking-wider text-sm">Happy Customers</span>
            <h2 className="text-5xl font-extrabold text-gradient-clay mt-2 mb-4">
              Love from Around the World
            </h2>
            <p className="text-coconut-600 text-lg max-w-2xl mx-auto">
              See what our customers say about their Ceylon Crafts experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-artisan-lg hover:shadow-artisan-xl transition-all duration-300 border-2 border-coconut-200 hover:border-clay-300 group relative overflow-hidden"
              >
                {/* Decorative quote mark */}
                <div className="absolute top-4 right-4 text-8xl text-clay-100 font-serif leading-none">"</div>

                <div className="relative z-10">
                  <div className="flex justify-center mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-6 w-6 text-saffron-500 group-hover:scale-110 transition-transform"
                        fill="currentColor"
                        style={{transitionDelay: `${i * 50}ms`}}
                      />
                    ))}
                  </div>

                  <p className="text-coconut-800 text-lg leading-relaxed mb-6 italic">
                    "{testimonial.quote}"
                  </p>

                  <div className="flex items-center justify-end">
                    <div className="text-right">
                      <p className="font-bold text-clay-700 text-lg">
                        {testimonial.author}
                      </p>
                      <div className="w-12 h-1 bg-gradient-to-r from-transparent to-clay-400 ml-auto mt-1"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
