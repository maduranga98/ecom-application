import Link from 'next/link';
import { Twitter, Instagram, Facebook, Linkedin, Heart, MapPin, Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-beige-200 relative overflow-hidden canvas-texture">
      {/* Decorative top border */}
      <div className="h-2 bg-beige-300"></div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About Section */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <h3 className="text-3xl font-extrabold text-white mb-4">Ceylon Crafts</h3>
            <p className="text-beige-300 leading-relaxed mb-4">
              Bringing the rich heritage of Sri Lankan handmade crafts to the world. Each piece tells a story of tradition and artistry.
            </p>
            <div className="flex items-center gap-2 text-beige-300 text-sm">
              <MapPin className="h-4 w-4" />
              <span>Proudly from Sri Lanka</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 uppercase tracking-wider text-beige-300">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-beige-200 hover:text-white transition-all hover:translate-x-1 inline-block">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-beige-200 hover:text-white transition-all hover:translate-x-1 inline-block">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-beige-200 hover:text-white transition-all hover:translate-x-1 inline-block">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-beige-200 hover:text-white transition-all hover:translate-x-1 inline-block">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h3 className="text-lg font-bold mb-6 uppercase tracking-wider text-beige-300">Customer Care</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-beige-200 hover:text-white transition-all hover:translate-x-1 inline-block">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-beige-200 hover:text-white transition-all hover:translate-x-1 inline-block">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#" className="text-beige-200 hover:text-white transition-all hover:translate-x-1 inline-block">
                  Shipping Info
                </Link>
              </li>
              <li>
                <Link href="#" className="text-beige-200 hover:text-white transition-all hover:translate-x-1 inline-block">
                  Returns & Refunds
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <h3 className="text-lg font-bold mb-6 uppercase tracking-wider text-beige-300">Stay Connected</h3>
            <p className="text-beige-200 mb-4 text-sm">
              Subscribe for exclusive offers and artisan stories
            </p>
            <form className="flex mb-6">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-3 rounded-l-xl text-black bg-beige-100 focus:outline-none focus:ring-2 focus:ring-beige-400 border-2 border-beige-300 placeholder:text-black-lighter"
              />
              <button
                type="submit"
                className="bg-beige-300 hover:bg-beige-400 text-black font-bold py-3 px-6 rounded-r-xl transition-all shadow-handmade border-2 border-beige-300"
              >
                Join
              </button>
            </form>

            {/* Contact info */}
            <div className="space-y-2 text-sm text-beige-200">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-beige-300" />
                <span>hello@ceyloncrafts.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-beige-300" />
                <span>+94 XX XXX XXXX</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-12 pt-8 border-t-2 border-beige-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-beige-300 text-sm text-center md:text-left flex items-center gap-2">
              &copy; {new Date().getFullYear()} Ceylon Crafts. Crafted with <Heart className="h-4 w-4 text-beige-300 fill-beige-300 inline animate-pulse" /> in Sri Lanka
            </p>

            <div className="flex space-x-4">
              <a
                href="#"
                className="text-beige-300 hover:text-white transition-all hover:scale-110 bg-black-light p-2 rounded-full hover:bg-black-lighter border-2 border-beige-700"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-beige-300 hover:text-white transition-all hover:scale-110 bg-black-light p-2 rounded-full hover:bg-black-lighter border-2 border-beige-700"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-beige-300 hover:text-white transition-all hover:scale-110 bg-black-light p-2 rounded-full hover:bg-black-lighter border-2 border-beige-700"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-beige-300 hover:text-white transition-all hover:scale-110 bg-black-light p-2 rounded-full hover:bg-black-lighter border-2 border-beige-700"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative pattern overlay */}
      <div className="absolute inset-0 pattern-dots opacity-5 pointer-events-none"></div>
    </footer>
  );
}
