"use client";

import { useState } from "react";

import Link from "next/link";

import { useRouter } from "next/navigation";

import {
  Plane,
  Sparkles,
  Globe2,
} from "lucide-react";

import { motion } from "framer-motion";

import { supabase } from "@/lib/supabase";

export default function SignupPage() {

  const router = useRouter();

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  async function handleSignup() {

    setLoading(true);

    const { error } =
      await supabase.auth.signUp({
        email,
        password,
      });

    if (error) {
      alert(error.message);
      setLoading(false);
      return;
    }

    router.push("/login");

    setLoading(false);
  }

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black px-4">

      {/* Background Image */}
      <div className="absolute inset-0">

        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2000"
          alt="Travel"
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* Animated Blobs */}
      <motion.div
        animate={{
          x: [0, 50, 0],
          y: [0, -40, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
        className="absolute left-0 top-0 h-72 w-72 rounded-full bg-blue-600/30 blur-3xl"
      />

      <motion.div
        animate={{
          x: [0, -40, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
        }}
        className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl"
      />

      {/* Floating Plane */}
      <motion.div
        animate={{
          y: [0, -15, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
        className="absolute right-20 top-20 hidden lg:block"
      >

        <Plane className="h-16 w-16 text-white/20" />

      </motion.div>

      {/* Main Container */}
      <div className="relative z-10 grid w-full max-w-6xl overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/10 shadow-2xl backdrop-blur-2xl lg:grid-cols-2">

        {/* LEFT */}
        <div className="hidden flex-col justify-between p-10 lg:flex">

          {/* Logo */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            className="flex items-center gap-4"
          >

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 shadow-xl">

              <Globe2 className="h-6 w-6 text-white" />

            </div>

            <div>

              <h1 className="text-3xl font-black text-white">
                TravelPro
              </h1>

              <p className="text-xs uppercase tracking-[0.4em] text-gray-300">
                Premium Travel
              </p>
            </div>
          </motion.div>

          {/* Hero */}
          <motion.div
            initial={{
              opacity: 0,
              x: -40,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
            }}
          >

            <p className="mb-5 uppercase tracking-[0.4em] text-cyan-300">
              EXPLORE THE WORLD
            </p>

            <h2 className="max-w-lg text-5xl font-black leading-tight text-white">

              Your Dream
              Vacation
              Starts Here.

            </h2>

            <p className="mt-6 max-w-md text-base leading-relaxed text-gray-300">

              Book luxury hotels, flights,
              tours and unforgettable travel
              experiences worldwide.

            </p>

            {/* Features */}
            <div className="mt-8 flex gap-4">

              <motion.div
                whileHover={{
                  y: -5,
                }}
                className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-lg"
              >

                <h3 className="text-2xl font-bold text-white">
                  200+
                </h3>

                <p className="text-sm text-gray-300">
                  Destinations
                </p>
              </motion.div>

              <motion.div
                whileHover={{
                  y: -5,
                }}
                className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-lg"
              >

                <h3 className="text-2xl font-bold text-white">
                  50K+
                </h3>

                <p className="text-sm text-gray-300">
                  Travelers
                </p>
              </motion.div>

              <motion.div
                whileHover={{
                  y: -5,
                }}
                className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-lg"
              >

                <h3 className="text-2xl font-bold text-white">
                  4.9★
                </h3>

                <p className="text-sm text-gray-300">
                  Reviews
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Footer */}
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 0.5,
            }}
            className="flex items-center gap-3 text-gray-300"
          >

            <Sparkles className="h-5 w-5 text-cyan-300" />

            Premium travel experiences curated worldwide.

          </motion.div>
        </div>

        {/* RIGHT */}
        <div className="flex items-center justify-center p-8">

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.5,
            }}
            className="w-full max-w-md"
          >

            {/* Mobile Logo */}
            <div className="mb-8 flex items-center gap-4 lg:hidden">

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600">

                <Plane className="h-5 w-5 text-white" />

              </div>

              <div>

                <h1 className="text-2xl font-black text-white">
                  TravelPro
                </h1>

                <p className="text-xs uppercase tracking-[0.3em] text-gray-400">
                  Luxury Travel
                </p>
              </div>
            </div>

            {/* Card */}
            <div className="rounded-[2rem] border border-white/10 bg-black/30 p-8 shadow-2xl backdrop-blur-xl">

              <div className="mb-8">

                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-600/20 px-4 py-2 text-sm text-cyan-300">

                  <Sparkles className="h-4 w-4" />

                  Premium Membership

                </div>

                <h1 className="text-4xl font-black text-white">
                  Create Account
                </h1>

                <p className="mt-3 text-gray-400">

                  Start your luxury travel journey.

                </p>
              </div>

              {/* Inputs */}
              <div className="space-y-5">

                <input
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) =>
                    setEmail(e.target.value)
                  }
                  className="w-full rounded-2xl border border-white/10 bg-white/10 p-4 text-white placeholder:text-gray-400 focus:border-cyan-400 focus:outline-none"
                />

                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) =>
                    setPassword(e.target.value)
                  }
                  className="w-full rounded-2xl border border-white/10 bg-white/10 p-4 text-white placeholder:text-gray-400 focus:border-cyan-400 focus:outline-none"
                />

                {/* Animated Password Strength */}
                <div className="flex gap-2">

                  <motion.div
                    initial={{
                      width: 0,
                    }}
                    animate={{
                      width: "33%",
                    }}
                    className="h-2 rounded-full bg-green-500"
                  />

                  <motion.div
                    initial={{
                      width: 0,
                    }}
                    animate={{
                      width: "33%",
                    }}
                    transition={{
                      delay: 0.2,
                    }}
                    className="h-2 rounded-full bg-green-500"
                  />

                  <div className="h-2 flex-1 rounded-full bg-white/10" />
                </div>

                <motion.button
                  whileHover={{
                    scale: 1.02,
                  }}
                  whileTap={{
                    scale: 0.98,
                  }}
                  onClick={handleSignup}
                  disabled={loading}
                  className="w-full rounded-2xl bg-blue-600 py-4 text-lg font-semibold text-white transition hover:bg-blue-700"
                >

                  {loading
                    ? "Creating..."
                    : "Create Account"}

                </motion.button>
              </div>

              {/* Divider */}
              <div className="my-6 flex items-center gap-4">

                <div className="h-px flex-1 bg-white/10" />

                <span className="text-sm text-gray-400">
                  OR
                </span>

                <div className="h-px flex-1 bg-white/10" />
              </div>

              {/* Google */}
              <motion.button
                whileHover={{
                  y: -2,
                }}
                className="flex w-full items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/10 py-4 font-medium text-white transition hover:bg-white/20"
              >

                <img
                  src="https://www.google.com/favicon.ico"
                  alt="Google"
                  className="h-5 w-5"
                />

                Continue with Google

              </motion.button>

              {/* Footer */}
              <p className="mt-6 text-center text-gray-400">

                Already have an account?

                <Link
                  href="/login"
                  className="ml-2 font-semibold text-cyan-300"
                >
                  Login
                </Link>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}