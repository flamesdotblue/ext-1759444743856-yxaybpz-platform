import React from 'react';
import Spline from '@splinetool/react-spline';
import { Download } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative w-full" id="home">
      <div className="relative h-[70vh] md:h-[80vh] w-full overflow-hidden">
        <div className="absolute inset-0">
          <Spline
            scene="https://prod.spline.design/ezRAY9QD27kiJcur/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
        </div>

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/40 via-white/10 to-white/70"></div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white to-transparent"></div>

        <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-black drop-shadow-sm">
            Capture Life. Share the Moment.
          </h1>
          <p className="mt-4 max-w-2xl text-base md:text-lg text-gray-700">
            A vibrant playground for your social world — snap, chat, and express yourself with playful 3D vibes and immersive lenses.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a
              href="#download"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-black text-white px-6 py-3 text-sm font-medium hover:bg-gray-900 transition"
            >
              <Download className="h-4 w-4" />
              Download for iOS
            </a>
            <a
              href="#features"
              className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white px-6 py-3 text-sm font-medium hover:bg-black/5 transition"
            >
              Explore Features
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
