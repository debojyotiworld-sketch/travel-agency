import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import DestinationCard from "@/components/destination-card";
import { supabase } from "@/lib/supabase";

async function getDestinations() {

  const { data } = await supabase
    .from("destinations")
    .select("*");

  return data || [];
}

export default async function DestinationsPage() {

  const destinations = await getDestinations();

  return (
    <main className="bg-gray-50">

      <Navbar />

      {/* Hero */}
      <section className="bg-black py-32 text-white">

        <div className="container mx-auto px-4 text-center">

          <p className="uppercase tracking-[0.3em] text-gray-400">
            Explore
          </p>

          <h1 className="mt-6 text-6xl font-bold">
            Destinations
          </h1>
        </div>
      </section>

      {/* Grid */}
      <section className="container mx-auto px-4 py-20">

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {destinations.map((destination) => (
            <DestinationCard
              key={destination.id}
              destination={destination}
            />
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}