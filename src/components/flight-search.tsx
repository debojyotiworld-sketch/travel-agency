"use client";

import { useRouter, useSearchParams } from "next/navigation";

export default function FlightSearch() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const from = formData.get("from") as string;
    const to = formData.get("to") as string;

    const params = new URLSearchParams(searchParams.toString());
    
    if (from) params.set("from", from);
    else params.delete("from");
    
    if (to) params.set("to", to);
    else params.delete("to");

    router.push(`?${params.toString()}`, { scroll: false });
  };

  return (
    <form 
      onSubmit={handleSearch}
      className="flex flex-col md:flex-row gap-4 bg-white p-4 rounded-xl shadow-lg text-black max-w-4xl"
    >
      <div className="flex-1">
        <label htmlFor="from" className="block text-sm font-medium text-gray-500 mb-1">From</label>
        <input
          type="text"
          id="from"
          name="from"
          placeholder="Airport ID (e.g. JFK)"
          defaultValue={searchParams.get("from") || ""}
          className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="flex-1">
        <label htmlFor="to" className="block text-sm font-medium text-gray-500 mb-1">To</label>
        <input
          type="text"
          id="to"
          name="to"
          placeholder="Airport ID (e.g. LAX)"
          defaultValue={searchParams.get("to") || ""}
          className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="flex items-end">
        <button 
          type="submit"
          className="w-full md:w-auto px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
        >
          Search
        </button>
      </div>
    </form>
  );
}