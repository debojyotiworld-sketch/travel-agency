import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import PackageCard from "@/components/package-card";
import { supabase } from "@/lib/supabase";

async function getPackages() {
  const { data } = await supabase
    .from("packages")
    .select("*");

  return data || [];
}

export default async function PackagesPage() {

  const packages = await getPackages();

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
            Travel Packages
          </h1>
        </div>
      </section>

      {/* Packages */}
      <section className="container mx-auto px-4 py-20">

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {packages.map((pkg) => (
            <PackageCard
              key={pkg.id}
              pkg={pkg}
            />
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}