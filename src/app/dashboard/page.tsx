"use client";

import { useEffect, useState } from "react";
import ProtectedRoute from "@/components/protected-route";
import {
    Plane,
    Hotel,
    Map,
    CreditCard,
    Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";
import { useAuth } from "@/context/auth-context";
import { supabase } from "@/lib/supabase";

export default function DashboardPage() {

    const { user } = useAuth();

    const [bookings, setBookings] =
        useState<any[]>([]);

    async function fetchBookings() {

        if (!user) return;

        const { data } =
            await supabase
                .from("bookings")
                .select("*")
                .eq("user_id", user.id)
                .order("booking_date", {
                    ascending: false,
                });

        setBookings(data || []);
    }

    useEffect(() => {
        fetchBookings();
    }, [user]);

    return (
        <ProtectedRoute>
            <main className="min-h-screen bg-black pt-32 text-white">

                {/* Background */}
                <div className="fixed inset-0 -z-10">

                    <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />

                    <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl" />

                </div>

                <div className="container mx-auto px-4">

                    {/* Hero */}
                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 20,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        className="mb-10 flex flex-col justify-between gap-6 rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl lg:flex-row lg:items-center"
                    >

                        <div>

                            <p className="mb-3 uppercase tracking-[0.3em] text-cyan-300">
                                Welcome Back
                            </p>

                            <h1 className="text-5xl font-black">
                                {user?.email?.split("@")[0]}
                            </h1>

                            <p className="mt-4 text-gray-400">

                                Manage your trips, bookings and luxury experiences.

                            </p>
                        </div>

                        <div className="flex gap-4">

                            <div className="rounded-2xl border border-white/10 bg-white/10 p-5">

                                <Plane className="mb-3 h-6 w-6 text-cyan-300" />

                                <h3 className="text-3xl font-bold">
                                    {bookings.length}
                                </h3>

                                <p className="text-sm text-gray-400">
                                    Trips
                                </p>
                            </div>

                            <div className="rounded-2xl border border-white/10 bg-white/10 p-5">

                                <CreditCard className="mb-3 h-6 w-6 text-cyan-300" />

                                <h3 className="text-3xl font-bold">
                                    ₹2.4L
                                </h3>

                                <p className="text-sm text-gray-400">
                                    Spent
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Quick Actions */}
                    <div className="mb-10 grid gap-6 md:grid-cols-3">

                        <motion.a
                            whileHover={{
                                y: -5,
                            }}
                            href="/flights"
                            className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
                        >

                            <Plane className="mb-5 h-10 w-10 text-cyan-300" />

                            <h2 className="text-2xl font-bold">
                                Book Flights
                            </h2>

                            <p className="mt-3 text-gray-400">
                                Explore worldwide destinations.
                            </p>

                        </motion.a>

                        <motion.a
                            whileHover={{
                                y: -5,
                            }}
                            href="/hotels"
                            className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
                        >

                            <Hotel className="mb-5 h-10 w-10 text-cyan-300" />

                            <h2 className="text-2xl font-bold">
                                Luxury Hotels
                            </h2>

                            <p className="mt-3 text-gray-400">
                                Find premium stays.
                            </p>

                        </motion.a>

                        <motion.a
                            whileHover={{
                                y: -5,
                            }}
                            href="/packages"
                            className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
                        >

                            <Map className="mb-5 h-10 w-10 text-cyan-300" />

                            <h2 className="text-2xl font-bold">
                                Tour Packages
                            </h2>

                            <p className="mt-3 text-gray-400">
                                Curated luxury adventures.
                            </p>

                        </motion.a>
                    </div>

                    {/* Recent Bookings */}
                    <div>

                        <div className="mb-8 flex items-center gap-3">

                            <Sparkles className="h-5 w-5 text-cyan-300" />

                            <h2 className="text-3xl font-black">
                                Your Bookings
                            </h2>
                        </div>

                        <div className="grid gap-6">

                            {bookings.map((booking) => (

                                <motion.div
                                    whileHover={{
                                        y: -4,
                                    }}
                                    key={booking.id}
                                    className="flex flex-col justify-between gap-6 rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl lg:flex-row lg:items-center"
                                >

                                    <div>

                                        <div className="mb-3 inline-flex rounded-full bg-cyan-500/20 px-4 py-2 text-sm text-cyan-300">

                                            {booking.booking_type}

                                        </div>

                                        <h3 className="text-2xl font-bold">
                                            {booking.title}
                                        </h3>

                                        <p className="mt-2 text-gray-400">

                                            Travel Date:
                                            {" "}
                                            {booking.travel_date}

                                        </p>
                                    </div>

                                    <div className="flex items-center gap-8">

                                        <div>

                                            <p className="text-sm text-gray-400">
                                                Amount
                                            </p>

                                            <h3 className="text-2xl font-bold">
                                                ₹{booking.amount}
                                            </h3>
                                        </div>

                                        <div className="rounded-full bg-green-500/20 px-5 py-2 text-sm font-medium text-green-400">

                                            {booking.status}

                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
        </ProtectedRoute>
    );
}