"use client";

import Link from "next/link";
import { 
  Plane, 
  Mail, 
  Phone, 
  MapPin, 
  ArrowRight,
  ShieldCheck,
  Clock
} from "lucide-react";

export default function Footer() {
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for subscribing to Mallick Travels newsletter!");
  };

  return (
    <footer className="relative border-t border-white/10 bg-gradient-to-b from-slate-950 via-black to-black text-gray-400 pt-16 pb-6">
      
      {/* Background Decorative Glow */}
      <div className="absolute top-0 left-1/4 h-64 w-64 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 h-64 w-64 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4">
        
        {/* Top Section: Brand & Newsletter Subscription */}
        <div className="grid gap-8 pb-12 border-b border-white/10 lg:grid-cols-3 items-center">
          <div className="lg:col-span-1">
            <Link href="/" className="group flex items-center gap-3 mb-3">
              <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 shadow-lg">
                <Plane className="h-5 w-5 text-white" />
              </div>
              <h2 className="text-xl font-black tracking-tight text-white">Mallick Travels</h2>
            </Link>
            <p className="text-sm max-w-sm">
              Experience world-class luxury travel with curated itineraries, premium flight cabins, and handpicked 5-star hotels.
            </p>
          </div>

          {/* Premium Newsletter Box */}
          <div className="lg:col-span-2 w-full">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md md:flex md:items-center md:justify-between gap-6">
              <div className="mb-4 md:mb-0">
                <h3 className="text-md font-bold text-white mb-1">Subscribe to Luxury Offers</h3>
                <p className="text-xs text-gray-400">Get secret deals, custom packages, and tour discounts weekly.</p>
              </div>
              <form onSubmit={handleSubscribe} className="flex flex-1 max-w-md gap-2">
                <input
                  type="email"
                  required
                  placeholder="Your Email Address"
                  className="h-11 w-full rounded-xl border border-white/10 bg-black/40 px-4 text-sm text-white outline-none transition focus:border-blue-500"
                />
                <button type="submit" className="h-11 rounded-xl bg-blue-600 px-5 text-sm font-semibold text-white transition hover:bg-blue-700 flex items-center gap-1 shrink-0">
                  Join <ArrowRight size={14} />
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Middle Section: Links Grid */}
        <div className="grid gap-8 py-12 sm:grid-cols-2 md:grid-cols-4">
          
          {/* Services Column */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">Our Services</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/flights" className="hover:text-white transition">Book Luxury Flights</Link></li>
              <li><Link href="/hotels" className="hover:text-white transition">Premium Hotel Stays</Link></li>
              <li><Link href="/buses" className="hover:text-white transition">Intercity Premium Buses</Link></li>
              <li><Link href="/packages" className="hover:text-white transition">Holiday Tour Packages</Link></li>
            </ul>
          </div>

          {/* Destinations Column */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">Popular Escapes</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/destinations" className="hover:text-white transition">Darjeeling Hills</Link></li>
              <li><Link href="/destinations" className="hover:text-white transition">Digha Sea Beach</Link></li>
              <li><Link href="/destinations" className="hover:text-white transition">Maldives Luxury Atolls</Link></li>
              <li><Link href="/destinations" className="hover:text-white transition">Goa Beach Resorts</Link></li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">Company Info</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/about" className="hover:text-white transition">About Mallick Travels</Link></li>
              <li><Link href="/contact" className="hover:text-white transition">Contact Desk</Link></li>
              <li><Link href="/dashboard" className="hover:text-white transition">Customer Dashboard</Link></li>
              <li className="flex items-center gap-1 text-xs text-emerald-400 mt-2 font-medium">
                <ShieldCheck size={14} /> IATA Certified Agency
              </li>
            </ul>
          </div>

          {/* Contact / Help Column */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">Luxury Support</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-blue-400 shrink-0 mt-0.5" />
                <span>Salt Lake Sector V, Kolkata, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-blue-400 shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-blue-400 shrink-0" />
                <span>support@mallicktravels.luxury</span>
              </li>
              <li className="flex items-center gap-2 text-xs text-gray-500 font-medium">
                <Clock size={12} className="text-gray-500" /> Desk open 24/7/365
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Section: Payment Badges, Socials & Legal */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Copyright note */}
          <div className="text-xs text-gray-500 order-3 md:order-1">
            © {new Date().getFullYear()} Mallick Travels Private Limited. All Rights Reserved.
          </div>

          {/* Trusted Payment Partners */}
          <div className="flex flex-wrap items-center gap-3 order-1 md:order-2">
            <span className="text-[11px] uppercase tracking-wider text-gray-500 mr-1 font-bold">Secure Partners:</span>
            <div className="rounded-md border border-white/5 bg-white/5 px-2 py-1 text-[10px] font-bold text-gray-400 select-none">RAZORPAY</div>
            <div className="rounded-md border border-white/5 bg-white/5 px-2 py-1 text-[10px] font-bold text-gray-400 select-none">VISA</div>
            <div className="rounded-md border border-white/5 bg-white/5 px-2 py-1 text-[10px] font-bold text-gray-400 select-none">MASTERCARD</div>
            <div className="rounded-md border border-white/5 bg-white/5 px-2 py-1 text-[10px] font-bold text-gray-400 select-none">UPI SEAMLESS</div>
          </div>

          {/* Social Icons Panel - Inline SVGs Used to Bypass Lucide Bugs */}
          <div className="flex items-center gap-4 order-2 md:order-3">
            {/* Facebook */}
            <Link href="#" aria-label="Facebook" className="h-8 w-8 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-600 transition">
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z"/>
              </svg>
            </Link>

            {/* Twitter / X */}
            <Link href="#" aria-label="Twitter" className="h-8 w-8 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-black transition">
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </Link>

            {/* Instagram */}
            <Link href="#" aria-label="Instagram" className="h-8 w-8 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gradient-to-tr from-yellow-500 via-red-500 to-purple-500 transition">
              <svg className="h-4 w-4 stroke-current fill-none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </Link>

            {/* Linkedin */}
            <Link href="#" aria-label="LinkedIn" className="h-8 w-8 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-700 transition">
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </Link>
          </div>

        </div>

      </div>
    </footer>
  );
}