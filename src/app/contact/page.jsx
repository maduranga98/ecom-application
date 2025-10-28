'use client';

import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="bg-beige-200 canvas-texture">
      {/* Hero Section */}
      <section className="relative bg-cover bg-center py-32 text-white" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1587560699334-cc426240668f?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-75"></div>
        <div className="container mx-auto px-4 relative text-center">
          <h1 className="text-5xl font-extrabold">Contact Us</h1>
          <p className="mt-4 text-xl max-w-3xl mx-auto text-beige-200">We'd love to hear from you. Whether you have a question, comment, or just want to say hello, feel free to reach out.</p>
        </div>
      </section>

      {/* Contact Form and Information */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-handmade-lg border-2 border-black">
              <h2 className="text-3xl font-bold text-black mb-6">Send Us a Message</h2>
              <form>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <input type="text" placeholder="Your Name" className="w-full p-3 border-2 border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-black-lighter bg-beige-100 text-black placeholder:text-black-lighter" />
                  <input type="email" placeholder="Your Email" className="w-full p-3 border-2 border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-black-lighter bg-beige-100 text-black placeholder:text-black-lighter" />
                </div>
                <textarea placeholder="Your Message" rows="6" className="w-full p-3 border-2 border-black rounded-lg mb-6 focus:outline-none focus:ring-2 focus:ring-black-lighter bg-beige-100 text-black placeholder:text-black-lighter"></textarea>
                <button type="submit" className="w-full bg-black hover:bg-black-light text-white font-bold py-3 px-6 rounded-lg transition-colors shadow-handmade">
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="bg-white p-8 rounded-lg shadow-handmade-lg border-2 border-black">
              <h2 className="text-3xl font-bold text-black mb-6">Contact Information</h2>
              <div className="space-y-6 text-lg">
                <div className="flex items-center">
                  <Mail size={24} className="text-black mr-4" />
                  <a href="mailto:contact@handmadehaven.com" className="text-black-light hover:text-black">contact@handmadehaven.com</a>
                </div>
                <div className="flex items-center">
                  <Phone size={24} className="text-black mr-4" />
                  <span className="text-black-light">+1 (234) 567-890</span>
                </div>
                <div className="flex items-center">
                  <MapPin size={24} className="text-black mr-4" />
                  <span className="text-black-light">123 Craft Lane, Artisan City, 12345</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-96 bg-gray-200">
        <iframe 
            className="w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.223849805963!2d-122.41941548468133!3d37.77492927975883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808580649a374aef%3A0x8677f9e8f23f2f0!2sSan%20Francisco%20City%20Hall!5e0!3m2!1sen!2sus!4v1626359556847!5m2!1sen!2sus"
            allowFullScreen
            loading="lazy">
        </iframe>
      </section>
    </div>
  );
}
