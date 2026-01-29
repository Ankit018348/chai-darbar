import React, { useState } from "react";
import { Mail, Instagram, Facebook, Twitter } from "lucide-react";

export default function App() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    setSubmitted(true);
    setEmail("");
    setLoading(false);

    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <main className="min-h-screen bg-amber-50 text-amber-950 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-300/40 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-300/40 rounded-full blur-3xl -z-10" />

      <header className="sticky top-0 z-50 bg-amber-50/80 backdrop-blur border-b border-amber-200">
        <nav className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src="/chai-logo.png"
              alt="Chai Darbar Logo"
              className="h-10 w-auto object-contain"
            />
            <h1 className="text-xl sm:text-2xl font-serif font-bold">
              Chai Darbar
            </h1>
          </div>

          <div className="flex items-center gap-2 text-sm text-amber-700">
            <span>Coming Soon</span>
            <span className="w-2 h-2 bg-amber-600 rounded-full animate-pulse" />
          </div>
        </nav>
      </header>

      <section className="max-w-5xl mx-auto px-4 py-24 flex flex-col items-center text-center">
        <div className="mb-12 relative">
          <div className="absolute inset-0 bg-amber-300/30 rounded-full blur-2xl" />
          <img
            src="/chai-logo.png"
            alt="Chai Darbar Hero Logo"
            className="
    relative
    h-40 md:h-60
    w-auto
    drop-shadow-2xl
    animate-[float_6s_ease-in-out_infinite]
  "
          />
        </div>

        <h2 className="text-4xl sm:text-5xl md:text-7xl font-serif font-bold mb-6">
          Brew the Royal Tradition
        </h2>

        <p className="text-sm italic tracking-widest text-amber-700 mb-6">
          where tradition meets perfection
        </p>

        <p className="text-lg text-amber-800 max-w-2xl mb-10">
          Experience premium instant chai inspired by royal Indian households.
          Rich flavours, authentic spices, and elegance in every sip.
        </p>

        <div className="flex items-center gap-2 px-6 py-3 rounded-full bg-amber-100 border border-amber-300 mb-12">
          <span className="w-2 h-2 bg-amber-600 rounded-full animate-pulse" />
          <span className="text-sm font-medium text-amber-700">
            Launching Soon
          </span>
        </div>

        <div className="w-full max-w-md mb-16">
          {submitted ? (
            <div className="p-6 rounded-xl bg-green-100 border border-green-300">
              <p className="text-green-700 font-medium">
                ✓ Thanks! We’ll notify you at launch.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <div className="relative">
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-6 py-4 rounded-xl border border-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-400"
                />
                <Mail className="absolute right-4 top-4 w-5 h-5 text-amber-600" />
              </div>

              <button
                disabled={loading}
                className="px-8 py-4 rounded-xl bg-amber-700 text-white font-medium hover:bg-amber-800 transition disabled:opacity-60"
              >
                {loading ? "Notifying..." : "Notify Me"}
              </button>
            </form>
          )}
        </div>

        <div className="w-32 h-px bg-gradient-to-r from-transparent via-amber-500/70 to-transparent mb-14" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mb-20">
          <div className="flex flex-col items-center text-center group">
            <div className="w-12 h-12 bg-amber-200 rounded-full flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
              <span className="text-2xl">🫖</span>
            </div>
            <h3 className="font-serif font-semibold mb-2">Premium Quality</h3>
            <p className="text-sm text-amber-700">
              Crafted with the finest spices and tea leaves
            </p>
          </div>

          <div className="flex flex-col items-center text-center group">
            <div className="w-12 h-12 bg-amber-200 rounded-full flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
              <span className="text-2xl">👑</span>
            </div>
            <h3 className="font-serif font-semibold mb-2">Royal Recipe</h3>
            <p className="text-sm text-amber-700">
              Inspired by authentic royal Indian traditions
            </p>
          </div>

          <div className="flex flex-col items-center text-center group">
            <div className="w-12 h-12 bg-amber-200 rounded-full flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
              <span className="text-2xl">⚡</span>
            </div>
            <h3 className="font-serif font-semibold mb-2">Instant Brew</h3>
            <p className="text-sm text-amber-700">
              Ready in minutes, pure convenience
            </p>
          </div>
        </div>

        <p className="text-xs tracking-[0.3em] uppercase text-amber-700">
          a legacy in every sip
        </p>
      </section>

      <footer className="border-t border-amber-200 py-12 bg-amber-50">
        <div className="flex flex-col items-center gap-6">
          <div className="flex gap-4">
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-amber-100 border border-amber-300 flex items-center justify-center hover:bg-amber-200"
            >
              <Instagram className="w-5 h-5 text-amber-700" />
            </a>

            <a
              href="#"
              className="w-10 h-10 rounded-full bg-amber-100 border border-amber-300 flex items-center justify-center hover:bg-amber-200"
            >
              <Facebook className="w-5 h-5 text-amber-700" />
            </a>

            <a
              href="#"
              className="w-10 h-10 rounded-full bg-amber-100 border border-amber-300 flex items-center justify-center hover:bg-amber-200"
            >
              <Twitter className="w-5 h-5 text-amber-700" />
            </a>
          </div>

          <p className="text-sm text-amber-700">
            © 2026 Chai Darbar. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
