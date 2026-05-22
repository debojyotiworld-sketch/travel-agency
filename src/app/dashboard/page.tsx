"use client";

import { useEffect, useState } from "react";
import { useAuth } from "@/context/auth-context";
import { useRouter } from "next/navigation";
import { 
  User, Mail, Phone, Calendar, Plane, Hotel, Bus, Briefcase, 
  Clock, ShieldCheck, LogOut, X, MapPin
} from "lucide-react";

export default function DashboardPage() {
  const { user, logout } = useAuth();
  const router = useRouter();
  const [bookings, setBookings] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) {
      router.push("/login");
      return;
    }

    const fetchUserBookings = async () => {
      try {
        setTimeout(() => {
          setBookings([
            {
              id: "BKG-9082",
              type: "flight",
              title: "Kolkata (CCU) to Mumbai (BOM)",
              price: 14500,
              date: "May 28, 2026",
              status: "completed",
              paymentId: "pay_Rzp9O2k1Lp8"
            },
            {
              id: "BKG-3419",
              type: "hotel",
              title: "Taj Lands End - Sea View Suite",
              price: 28900,
              date: "May 29 - Jun 01, 2026",
              status: "completed",
              paymentId: "pay_Rzp3X7m2Wq9"
            }
          ]);
          setLoading(false);
        }, 800);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchUserBookings();
  }, [user, router]);

  if (!user) return null;

  const getIcon = (type: string) => {
    switch (type) {
      case "flight": return <Plane className="h-5 w-5 text-blue-500" />;
      case "hotel": return <Hotel className="h-5 w-5 text-amber-500" />;
      case "bus": return <Bus className="h-5 w-5 text-emerald-500" />;
      default: return <Briefcase className="h-5 w-5 text-purple-500" />;
    }
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center p-4 pt-24 pb-12 overflow-hidden">
      
      {/* 1. Stunning Travel Background Image with subtle pulse animation */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center animate-pulse"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80')",
          animationDuration: '20s'
        }} 
      />
      
      {/* 2. Wizard-type Blur Overlay (Dark & Glassy) */}
      <div className="absolute inset-0 z-0 bg-indigo-950/40 backdrop-blur-[8px]" />

      {/* 3. Glassmorphism Dialog Modal Container */}
      <div className="relative z-10 w-full max-w-5xl bg-white/90 backdrop-blur-2xl rounded-[2.5rem] shadow-[0_10px_40px_rgba(0,0,0,0.3)] border border-white/50 overflow-hidden flex flex-col md:flex-row animate-in zoom-in-95 duration-500">
        
        {/* Close Dialog Button */}
        <button 
          onClick={() => router.push("/")}
          className="absolute top-6 right-6 p-2 bg-gray-100/80 text-gray-500 hover:text-black hover:bg-white rounded-full shadow-sm transition-all z-20 backdrop-blur-md"
        >
          <X size={20} />
        </button>

        {/* Left Side: Profile Sidebar (Frosted Light Blue) */}
        <div className="md:w-1/3 bg-blue-50/60 p-8 border-b md:border-b-0 md:border-r border-white/50 relative backdrop-blur-sm">
          <div className="flex flex-col items-center text-center mt-4">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-tr from-blue-600 to-indigo-500 text-white font-bold text-3xl shadow-lg shadow-blue-500/30 mb-4 ring-4 ring-white/50">
              {user.name ? user.name[0].toUpperCase() : "U"}
            </div>
            <h2 className="text-xl font-bold text-gray-900">{user.name}</h2>
            <span className="inline-flex items-center gap-1 text-xs text-blue-700 font-bold mt-2 bg-white/80 px-3 py-1.5 rounded-full shadow-sm border border-blue-100">
              <ShieldCheck size={14} className="text-blue-600" /> Premium Member
            </span>
          </div>

          <div className="mt-10 space-y-4">
            <div className="flex items-start gap-3 text-sm bg-white/60 p-3 rounded-xl border border-white/50 shadow-sm">
              <Mail className="text-blue-500 mt-0.5 shrink-0" size={18} />
              <div className="overflow-hidden">
                <p className="text-[11px] text-gray-500 font-bold uppercase tracking-wider">Email</p>
                <p className="text-gray-800 truncate font-medium">{user.email}</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3 text-sm bg-white/60 p-3 rounded-xl border border-white/50 shadow-sm">
              <Phone className="text-blue-500 mt-0.5 shrink-0" size={18} />
              <div>
                <p className="text-[11px] text-gray-500 font-bold uppercase tracking-wider">Phone</p>
                <p className="text-gray-800 font-medium">{user.phone || "+91 98765 43210"}</p>
              </div>
            </div>

            <div className="flex items-start gap-3 text-sm bg-white/60 p-3 rounded-xl border border-white/50 shadow-sm">
              <MapPin className="text-blue-500 mt-0.5 shrink-0" size={18} />
              <div>
                <p className="text-[11px] text-gray-500 font-bold uppercase tracking-wider">Location</p>
                <p className="text-gray-800 font-medium">India</p>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <button 
              onClick={logout}
              className="w-full flex items-center justify-center gap-2 rounded-xl bg-red-500/10 text-red-600 px-4 py-3 text-sm font-bold hover:bg-red-500 hover:text-white transition-all shadow-sm"
            >
              <LogOut size={16} /> Secure Sign Out
            </button>
          </div>
        </div>

        {/* Right Side: Bookings & Activity (Translucent White) */}
        <div className="md:w-2/3 p-8 bg-white/80 min-h-[500px]">
          <div className="flex items-center gap-3 border-b border-gray-200/60 pb-5 mb-6">
            <div className="bg-gradient-to-br from-blue-100 to-indigo-50 p-3 rounded-xl text-blue-600 shadow-sm border border-blue-100">
              <Calendar size={22} />
            </div>
            <div>
              <h2 className="text-2xl font-black text-gray-900 tracking-tight">Your Travel Vault</h2>
              <p className="text-sm text-gray-500 mt-0.5">Manage your upcoming magical trips and itineraries.</p>
            </div>
          </div>

          {loading ? (
            <div className="py-20 flex flex-col items-center justify-center">
              <div className="h-10 w-10 border-4 border-gray-200 border-t-blue-600 rounded-full animate-spin mb-4 shadow-lg" />
              <p className="text-sm text-gray-500 font-medium animate-pulse">Summoning your itineraries...</p>
            </div>
          ) : bookings.length === 0 ? (
            <div className="text-center py-16 bg-white/60 rounded-2xl border border-dashed border-gray-300">
              <Plane className="mx-auto h-12 w-12 text-gray-300 mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-1">Your vault is empty</h3>
              <p className="text-sm text-gray-500 mb-6">Time to pack your bags and plan your next adventure!</p>
              <button 
                onClick={() => router.push("/")}
                className="bg-blue-600 text-white px-6 py-2.5 rounded-xl text-sm font-bold shadow-lg hover:bg-blue-700 hover:shadow-blue-600/30 transition-all"
              >
                Start Exploring
              </button>
            </div>
          ) : (
            <div className="space-y-4 max-h-[450px] overflow-y-auto pr-2 custom-scrollbar">
              {bookings.map((booking) => (
                <div 
                  key={booking.id} 
                  className="group flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 rounded-2xl border border-white/60 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-500/10 transition-all bg-white/70 backdrop-blur-md"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white border border-gray-100 shadow-sm group-hover:scale-110 shrink-0 transition-transform duration-300">
                      {getIcon(booking.type)}
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[10px] font-bold text-gray-500 bg-gray-100 px-2 py-0.5 rounded uppercase tracking-wider">
                          {booking.type}
                        </span>
                        <span className="text-[10px] text-gray-400 font-mono">{booking.id}</span>
                      </div>
                      <h3 className="text-sm font-bold text-gray-900 group-hover:text-blue-600 transition-colors">{booking.title}</h3>
                      <div className="flex items-center gap-3 text-xs text-gray-500 mt-1.5 font-medium">
                        <span className="flex items-center gap-1"><Clock size={12} className="text-gray-400" /> {booking.date}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex sm:flex-col items-center sm:items-end justify-between border-t sm:border-t-0 border-gray-100/50 pt-3 sm:pt-0 shrink-0">
                    <p className="text-lg font-black text-blue-600 drop-shadow-sm">₹{booking.price.toLocaleString("en-IN")}</p>
                    <span className="inline-flex items-center gap-1 text-[10px] bg-green-100/80 text-green-700 font-bold px-2.5 py-1 rounded-md mt-1.5 uppercase border border-green-200/50 shadow-sm">
                      <ShieldCheck size={12} /> Confirmed
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
}