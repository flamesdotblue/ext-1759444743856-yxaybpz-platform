import React from 'react';
import { Camera, Map, Sparkles, Shield } from 'lucide-react';

const features = [
  {
    icon: Camera,
    title: 'Stories that Pop',
    desc: 'Share moments that shine with bold captions, playful stickers, and looping fun.'
  },
  {
    icon: Sparkles,
    title: 'AR Lenses',
    desc: 'Transform your world in real-time with expressive, creator-made augmented effects.'
  },
  {
    icon: Map,
    title: 'Snap Map',
    desc: 'Discover friends and hotspots nearby with privacy-first location controls.'
  },
  {
    icon: Shield,
    title: 'Privacy by Design',
    desc: 'You control your data. Robust tools to manage who sees what and for how long.'
  }
];

export default function Features() {
  return (
    <section id="features" className="relative py-20">
      <div className="absolute inset-0 -z-[0] pointer-events-none bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-yellow-100 via-transparent to-transparent"></div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-black">Designed for Self-Expression</h2>
          <p className="mt-3 text-gray-700">
            Everything you need to capture, remix, and share your world in the moment.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div key={f.title} className="group rounded-2xl border border-yellow-100 bg-white p-6 shadow-sm hover:shadow-md transition">
              <div className="h-12 w-12 rounded-xl bg-yellow-200 grid place-items-center text-black mb-4">
                <f.icon className="h-6 w-6" />
              </div>
              <h3 className="font-semibold text-lg">{f.title}</h3>
              <p className="mt-2 text-sm text-gray-700">{f.desc}</p>
              <div className="mt-4 text-sm font-medium text-black/70 opacity-0 group-hover:opacity-100 transition">
                Learn more →
              </div>
            </div>
          ))}
        </div>

        <div id="download" className="mt-16 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-black/10 p-6 bg-white">
            <h4 className="font-semibold text-lg">Get the App</h4>
            <p className="mt-2 text-sm text-gray-700">Available on iOS and Android. Join millions sharing life as it happens.</p>
            <div className="mt-4 flex gap-3">
              <a className="inline-flex items-center rounded-full bg-black text-white px-4 py-2 text-sm font-medium hover:bg-gray-900 transition" href="#">App Store</a>
              <a className="inline-flex items-center rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-medium hover:bg-black/5 transition" href="#">Google Play</a>
            </div>
          </div>
          <div className="rounded-2xl border border-yellow-200 p-6 bg-yellow-50">
            <h4 className="font-semibold text-lg">Create with Lenses</h4>
            <p className="mt-2 text-sm text-gray-700">Level up your snaps with trending AR effects and community-made filters.</p>
            <div className="mt-4 flex gap-3">
              <a className="inline-flex items-center rounded-full bg-yellow-400 text-black px-4 py-2 text-sm font-semibold hover:bg-yellow-300 transition" href="#">Open Lens Studio</a>
              <a className="inline-flex items-center rounded-full border border-yellow-300 bg-white px-4 py-2 text-sm font-medium hover:bg-yellow-100 transition" href="#">Browse Lenses</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
