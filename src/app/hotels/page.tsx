import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import HotelCard from "@/components/hotel-card";
import { supabase } from "@/lib/supabase";

async function getHotels() {

  const { data } = await supabase
    .from("hotels")
    .select("*")
    .order("rating", {
      ascending: false,
    });

  return data || [];
}

export default async function HotelsPage() {

  const hotels = await getHotels();

  return (
    <main className="min-h-screen bg-gray-50">

      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden bg-black py-32 text-white">

        <div className="container mx-auto px-4 text-center">

          <p className="uppercase tracking-[0.4em] text-gray-400">
            Luxury Stays
          </p>

          <h1 className="mt-6 text-6xl font-bold">
            Discover Premium Hotels
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-xl text-gray-300">
            Explore luxury resorts, city hotels, and unforgettable stays around the world.
          </p>

          {/* Search */}
          <div className="mx-auto mt-12 max-w-5xl rounded-3xl bg-white p-6 shadow-2xl">

            <div className="grid gap-4 md:grid-cols-4">

              <input
                placeholder="Destination"
                className="rounded-2xl border p-4 text-black"
              />

              <input
                type="date"
                className="rounded-2xl border p-4 text-black"
              />

              <input
                type="date"
                className="rounded-2xl border p-4 text-black"
              />

              <button className="rounded-2xl bg-blue-600 p-4 font-semibold text-white transition hover:bg-blue-700">
                Search Hotels
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Hotels */}
      <section className="container mx-auto px-4 py-20">

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {hotels.map((hotel: any) => (
            <HotelCard
              key={hotel.id}
              hotel={hotel}
            />
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}