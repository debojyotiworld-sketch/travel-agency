import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Footer from "@/components/footer";
import DestinationCard from "@/components/destination-card";
import PackageCard from "@/components/package-card";
import { supabase } from "@/lib/supabase";

async function getDestinations() {
  const { data } = await supabase
    .from("destinations")
    .select("*")
    .limit(6);

  return data || [];
}

async function getFeaturedPackages() {
  const { data } = await supabase
    .from("packages")
    .select("*")
    .eq("is_featured", true)
    .limit(3);

  return data || [];
}

export default async function HomePage() {
  const destinations = await getDestinations();
  const packages = await getFeaturedPackages();

  return (
    <main>
      <Navbar />

      <Hero />

      {/* Destinations */}
      <section className="bg-gray-50 py-24">
        <div className="container mx-auto px-4">

          <div className="mb-14 text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-blue-600">
              Top Destinations
            </p>

            <h2 className="mt-4 text-5xl font-bold">
              Popular Places
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-gray-600">
              Explore our most loved travel destinations around the world.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {destinations.map((destination) => (
              <DestinationCard
                key={destination.id}
                destination={destination}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Packages */}
      <section className="py-24">
        <div className="container mx-auto px-4">

          <div className="mb-14 text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-blue-600">
              Best Packages
            </p>

            <h2 className="mt-4 text-5xl font-bold">
              Featured Tours
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-gray-600">
              Handpicked luxury travel experiences crafted for unforgettable memories.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {packages.map((pkg) => (
              <PackageCard
                key={pkg.id}
                pkg={pkg}
              />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}