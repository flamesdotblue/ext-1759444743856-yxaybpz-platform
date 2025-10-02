import React from 'react';
import { Twitter, Instagram, Github, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="community" className="border-t border-yellow-100 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 grid gap-8 md:grid-cols-3">
        <div>
          <h5 className="font-semibold text-lg">Snap Vibes</h5>
          <p className="mt-2 text-sm text-gray-700 max-w-sm">
            A playful, privacy-first way to capture and share the world around you. Built for the moment.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-8">
          <div>
            <h6 className="text-sm font-semibold text-black">Product</h6>
            <ul className="mt-3 space-y-2 text-sm text-gray-700">
              <li><a className="hover:text-black" href="#features">Features</a></li>
              <li><a className="hover:text-black" href="#download">Download</a></li>
              <li><a className="hover:text-black" href="#">Lens Studio</a></li>
            </ul>
          </div>
          <div>
            <h6 className="text-sm font-semibold text-black">Company</h6>
            <ul className="mt-3 space-y-2 text-sm text-gray-700">
              <li><a className="hover:text-black" href="#">About</a></li>
              <li><a className="hover:text-black" href="#">Careers</a></li>
              <li><a className="hover:text-black" href="#">Support</a></li>
            </ul>
          </div>
        </div>
        <div>
          <h6 className="text-sm font-semibold text-black">Stay in the loop</h6>
          <form className="mt-3 flex gap-2">
            <input type="email" placeholder="Your email" className="w-full rounded-full border border-black/10 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-300" />
            <button className="rounded-full bg-black text-white px-4 py-2 text-sm font-medium hover:bg-gray-900 transition">Subscribe</button>
          </form>
          <div className="mt-4 flex items-center gap-3 text-gray-700">
            <a href="#" aria-label="Twitter" className="hover:text-black"><Twitter className="h-5 w-5" /></a>
            <a href="#" aria-label="Instagram" className="hover:text-black"><Instagram className="h-5 w-5" /></a>
            <a href="#" aria-label="GitHub" className="hover:text-black"><Github className="h-5 w-5" /></a>
            <a href="#" aria-label="Email" className="hover:text-black"><Mail className="h-5 w-5" /></a>
          </div>
        </div>
      </div>
      <div className="border-t border-yellow-100 py-6 text-center text-xs text-gray-600">
        © {new Date().getFullYear()} Snap Vibes. All rights reserved.
      </div>
    </footer>
  );
}
