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
        "The ceramic mug I bought is absolutely beautiful and so well-made. It's my new favorite!",
      author: "Sarah L.",
      rating: 5,
    },
    {
      quote:
        "I love the woven basket I purchased. It's perfect for storing my blankets and looks great in my living room.",
      author: "Michael B.",
      rating: 5,
    },
    {
      quote:
        "The knit beanie is so soft and warm. I've gotten so many compliments on it!",
      author: "Emily R.",
      rating: 5,
    },
  ];

  const categories = [
    {
      name: "Home Goods",
      href: "/products",
      image:
        "https://images.unsplash.com/photo-1597315598282-3c1626476166?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Accessories",
      href: "/products",
      image:
        "https://images.unsplash.com/photo-1543261986-e525f435b861?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Apparel",
      href: "/products",
      image:
        "https://images.unsplash.com/photo-1522201949034-507737b95713?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Pottery",
      href: "/products",
      image:
        "https://images.unsplash.com/photo-1551893138-b53634b706c5?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-[600px] text-white"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1594950493864-87a35a609f98?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center text-center p-4">
          <h1 className="text-6xl font-extrabold leading-tight mb-4 animate-fade-in-down">
            Find Your Next Handmade Treasure
          </h1>
          <p className="text-2xl font-light mb-8 animate-fade-in-up">
            Discover unique, handcrafted goods from talented artisans.
          </p>
          <Link
            href="/products"
            className="bg-slate-800 text-white font-bold py-4 px-10 rounded-full hover:bg-slate-900 transition-colors duration-300 transform hover:scale-105 animate-bounce"
          >
            Shop Now
          </Link>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Featured Products
          </h2>

          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[...Array(4)].map((_, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-lg overflow-hidden animate-pulse"
                >
                  <div className="h-56 bg-gray-300"></div>
                  <div className="p-4">
                    <div className="h-6 bg-gray-300 rounded mb-2"></div>
                    <div className="h-4 bg-gray-300 rounded mb-4 w-3/4"></div>
                    <div className="h-8 bg-gray-300 rounded"></div>
                  </div>
                </div>
              ))}
            </div>
          ) : featuredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-600">
              No featured products available.
            </p>
          )}

          <div className="text-center mt-12">
            <Link
              href="/products"
              className="bg-slate-800 text-white font-bold py-3 px-8 rounded-full hover:bg-slate-900 transition-colors duration-300"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Why Choose Handmade Haven?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="flex flex-col items-center">
              <Shield size={48} className="text-slate-800 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Quality Craftsmanship
              </h3>
              <p className="text-gray-700">
                Every item is handmade with care by skilled artisans, ensuring
                the highest quality and attention to detail.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <Gift size={48} className="text-slate-800 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Unique Products
              </h3>
              <p className="text-gray-700">
                Discover one-of-a-kind treasures that you won't find anywhere
                else, perfect for gifts or your own home.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <Truck size={48} className="text-slate-800 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Fast & Reliable Shipping
              </h3>
              <p className="text-gray-700">
                We offer fast and reliable shipping, so you can enjoy your
                handmade goods as soon as possible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Shop by Category Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Shop by Category
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category) => (
              <Link key={category.name} href={category.href}>
                <div className="block group relative rounded-lg overflow-hidden shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <h3 className="text-2xl font-bold text-white uppercase tracking-wider">
                      {category.name}
                    </h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            What Our Customers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
              >
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-yellow-400"
                      fill="currentColor"
                    />
                  ))}
                </div>
                <p className="text-gray-700 text-lg italic mb-4">
                  "{testimonial.quote}"
                </p>
                <p className="font-bold text-gray-800 text-right">
                  - {testimonial.author}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
