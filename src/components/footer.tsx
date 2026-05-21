import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white">

      <div className="container mx-auto px-4 py-20">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div>
            <h2 className="text-3xl font-bold">
              TravelPro
            </h2>

            <p className="mt-6 text-gray-400">
              Luxury travel experiences crafted for unforgettable memories around the world.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="mb-6 text-xl font-semibold">
              Quick Links
            </h3>

            <div className="flex flex-col gap-4 text-gray-400">
              <Link href="/">Home</Link>
              <Link href="/destinations">Destinations</Link>
              <Link href="/packages">Packages</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-6 text-xl font-semibold">
              Contact
            </h3>

            <div className="space-y-4 text-gray-400">
              <p>Kolkata, India</p>
              <p>+91 9876543210</p>
              <p>travel@example.com</p>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="mb-6 text-xl font-semibold">
              Newsletter
            </h3>

            <div className="space-y-4">
              <input
                placeholder="Your Email"
                className="w-full rounded-xl border border-gray-700 bg-black p-3"
              />

              <button className="w-full rounded-xl bg-white py-3 font-semibold text-black">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="mt-20 border-t border-gray-800 pt-8 text-center text-gray-500">
          © 2026 TravelPro. All rights reserved.
        </div>
      </div>
    </footer>
  );
}