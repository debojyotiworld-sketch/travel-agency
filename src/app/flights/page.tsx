import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import FlightCard from "@/components/flight-card";
import FlightSearch from "@/components/flight-search";
import FlightFilters from "@/components/flight-filters";
import { supabase } from "@/lib/supabase";

async function getFlights(searchParams: any) {
  let query = supabase
    .from("flights")
    .select(`
      *,
      airlines (name, logo_url),
      from_airport:airports!flights_from_airport_id_fkey (city, code, name),
      to_airport:airports!flights_to_airport_id_fkey (city, code, name)
    `);

  if (searchParams.from) {
    query = query.eq("from_airport_id", searchParams.from);
  }

  if (searchParams.to) {
    query = query.eq("to_airport_id", searchParams.to);
  }

  if (searchParams.stops) {
    query = query.eq("stops", Number(searchParams.stops));
  }

  if (searchParams.maxPrice) {
    query = query.lte("price", Number(searchParams.maxPrice));
  }

  return (await query.order("departure_time")).data || [];
}

export default async function FlightsPage({
  searchParams,
}: {
  searchParams: any;
}) {
  const flights = await getFlights(searchParams);

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />

      {/* HERO */}
      <section className="bg-black py-28 text-white">
        <div className="container mx-auto px-4">
          <p className="uppercase tracking-[0.3em] text-gray-400">
            Flight Booking
          </p>

          <h1 className="mt-6 text-6xl font-bold">
            Search Flights
          </h1>

          {/* SEARCH BAR */}
          <div className="mt-10">
            <FlightSearch />
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid gap-10 lg:grid-cols-4">
          
          {/* FILTERS SIDEBAR */}
          <div className="lg:col-span-1">
            <FlightFilters />
          </div>

          {/* FLIGHT RESULTS */}
          <div className="space-y-6 lg:col-span-3">
            {flights.length === 0 ? (
              <div className="text-center py-10 bg-white rounded-lg border">
                <p className="text-gray-500">No flights found for your search criteria.</p>
              </div>
            ) : (
              flights.map((flight: any) => (
                <FlightCard
                  key={flight.id}
                  flight={{
                    id: flight.id,
                    airline: flight.airlines?.name,
                    from: `${flight.from_airport?.city} (${flight.from_airport?.code})`,
                    to: `${flight.to_airport?.city} (${flight.to_airport?.code})`,
                    departure: new Date(
                      flight.departure_time
                    ).toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    }),
                    arrival: new Date(
                      flight.arrival_time
                    ).toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    }),
                    duration: flight.duration,
                    stops:
                      flight.stops === 0
                        ? "Non-stop"
                        : `${flight.stops} Stop${flight.stops > 1 ? 's' : ''}`,
                    price: flight.price,
                  }}
                />
              ))
            )}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}