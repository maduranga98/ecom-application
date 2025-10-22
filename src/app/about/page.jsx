'use client';

import { Shield, Heart, Users, Target } from 'lucide-react';

export default function AboutPage() {
  const team = [
    { name: 'Jane Doe', role: 'Founder & CEO', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { name: 'John Smith', role: 'Head of Operations', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { name: 'Emily Johnson', role: 'Lead Designer', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2562&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-cover bg-center py-32 text-white" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="container mx-auto px-4 relative text-center">
          <h1 className="text-5xl font-extrabold">About Handmade Haven</h1>
          <p className="mt-4 text-xl max-w-3xl mx-auto">We are passionate about connecting talented artisans with customers who appreciate unique, handcrafted goods.</p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Story</h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-4">Handmade Haven was born from a simple idea: to create a place where craftsmanship and creativity could be celebrated. We wanted to build a community that supports artisans and provides customers with access to high-quality, one-of-a-kind products.</p>
                    <p className="text-lg text-gray-700 leading-relaxed">Our journey began in a small workshop, and thanks to our amazing community, we've grown into a thriving online marketplace. We are dedicated to our mission of preserving traditional crafts and supporting the artisans who make them.</p>
                </div>
                <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
                    <img src="https://images.unsplash.com/photo-1496247749411-ac07e35c82a5?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Artisan workshop" className="w-full h-full object-cover" />
                </div>
            </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
              <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Our Values</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
                  <div className="flex flex-col items-center">
                      <Shield size={48} className="text-slate-800 mb-4" />
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">Authenticity</h3>
                      <p className="text-gray-700">We guarantee that every product is genuinely handcrafted by talented artisans.</p>
                  </div>
                  <div className="flex flex-col items-center">
                      <Heart size={48} className="text-slate-800 mb-4" />
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">Passion</h3>
                      <p className="text-gray-700">We are passionate about our craft and dedicated to offering the best handmade products.</p>
                  </div>
                  <div className="flex flex-col items-center">
                      <Users size={48} className="text-slate-800 mb-4" />
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">Community</h3>
                      <p className="text-gray-700">We believe in building a strong community that supports artisans and craft lovers.</p>
                  </div>
                  <div className="flex flex-col items-center">
                      <Target size={48} className="text-slate-800 mb-4" />
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">Quality</h3>
                      <p className="text-gray-700">We are committed to providing high-quality products that you will love for years to come.</p>
                  </div>
              </div>
          </div>
      </section>

      {/* Meet the Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Meet the Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {team.map((member) => (
              <div key={member.name} className="bg-white rounded-lg shadow-lg overflow-hidden text-center transform hover:-translate-y-2 transition-transform duration-300">
                <div className="relative h-64">
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900">{member.name}</h3>
                  <p className="text-gray-600 font-semibold">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
