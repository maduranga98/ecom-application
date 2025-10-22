import Link from 'next/link';
import { Twitter, Instagram, Facebook, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <h3 className="text-2xl font-bold mb-4">Handmade Haven</h3>
            <p className="text-gray-400 leading-relaxed">Your one-stop shop for unique, handcrafted goods. We connect you with talented artisans from around the world.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/products" className="text-gray-400 hover:text-white transition-colors">Products</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 uppercase tracking-wider">Legal</h3>
            <ul className="space-y-3">
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Shipping Policy</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Returns & Exchanges</Link></li>
            </ul>
          </div>

          {/* Newsletter Subscription */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <h3 className="text-lg font-semibold mb-4 uppercase tracking-wider">Subscribe to our Newsletter</h3>
            <p className="text-gray-400 mb-4">Get the latest updates on new products and upcoming sales.</p>
            <form className="flex">
              <input type="email" placeholder="Your email" className="w-full px-4 py-2 rounded-l-md text-gray-800 focus:outline-none" />
              <button type="submit" className="bg-slate-700 hover:bg-slate-800 text-white font-bold py-2 px-4 rounded-r-md transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm text-center md:text-left">&copy; {new Date().getFullYear()} Handmade Haven. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-500 hover:text-white transition-colors"><Twitter /></a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors"><Instagram /></a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors"><Facebook /></a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors"><Linkedin /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
