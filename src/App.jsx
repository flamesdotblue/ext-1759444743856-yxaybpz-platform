import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 via-white to-white text-gray-900">
      <Navbar />
      <Hero />
      <Features />
      <Footer />
    </div>
  );
}
