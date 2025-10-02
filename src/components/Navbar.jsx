import React from 'react';
import { Camera, Sparkles } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur bg-white/60 border-b border-yellow-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-yellow-400 grid place-items-center shadow-sm">
            <Camera className="h-5 w-5 text-black" />
          </div>
          <span className="font-semibold tracking-tight text-lg">Snap Vibes</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#features" className="hover:text-black text-gray-600">Features</a>
          <a href="#download" className="hover:text-black text-gray-600">Download</a>
          <a href="#community" className="hover:text-black text-gray-600">Community</a>
        </nav>
        <div className="flex items-center gap-3">
          <button className="hidden sm:inline-flex items-center gap-2 rounded-full border border-yellow-300 bg-yellow-100 px-4 py-2 text-sm font-medium text-black hover:bg-yellow-200 transition">
            <Sparkles className="h-4 w-4" />
            Try Lenses
          </button>
          <button className="inline-flex items-center rounded-full bg-black text-white px-4 py-2 text-sm font-medium hover:bg-gray-900 transition">
            Get the App
          </button>
        </div>
      </div>
    </header>
  );
}
