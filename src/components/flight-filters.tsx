"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect, useTransition } from "react";

export default function FlightFilters() {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  // useTransition prevents the UI from freezing while Next.js fetches new data
  const [isPending, startTransition] = useTransition();

  // Local state for the slider so it moves smoothly without waiting for the server
  const [localPrice, setLocalPrice] = useState(searchParams.get("maxPrice") || "1000");

  const currentStops = searchParams.get("stops");
  const urlPrice = searchParams.get("maxPrice") || "1000";

  // Sync local state if URL changes from somewhere else
  useEffect(() => {
    setLocalPrice(urlPrice);
  }, [urlPrice]);

  const updateFilter = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }
    
    // Wrap router.push in startTransition to keep the UI responsive
    startTransition(() => {
      router.push(`?${params.toString()}`, { scroll: false });
    });
  };

  // Debounce the price slider: only update the URL 400ms after the user STOPS dragging
  useEffect(() => {
    const timer = setTimeout(() => {
      if (localPrice !== urlPrice) {
        updateFilter("maxPrice", localPrice);
      }
    }, 400);

    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [localPrice]);

  const clearFilters = () => {
    startTransition(() => {
      router.push("?", { scroll: false });
    });
  };

  return (
    <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm space-y-8 sticky top-4">
      <div className="flex items-center justify-between border-b pb-4">
        <div className="flex items-center gap-2">
          <h3 className="font-bold text-lg">Filters</h3>
          {/* Show a subtle loading spinner when fetching data */}
          {isPending && (
            <div className="w-4 h-4 border-2 border-blue-600 border-t-transparent rounded-full animate-spin" />
          )}
        </div>
        
        {(currentStops || searchParams.get("maxPrice")) && (
          <button 
            onClick={clearFilters}
            disabled={isPending}
            className="text-sm text-blue-600 hover:underline disabled:opacity-50"
          >
            Clear All
          </button>
        )}
      </div>

      {/* STOPS FILTER */}
      <div>
        <h4 className="font-semibold mb-4 text-gray-800">Stops</h4>
        <div className="space-y-3">
          {[
            { value: "", label: "Any number of stops" },
            { value: "0", label: "Non-stop only" },
            { value: "1", label: "Up to 1 stop" },
            { value: "2", label: "Up to 2 stops" }
          ].map((option) => (
            <label 
              key={option.value} 
              className={`flex items-center gap-3 cursor-pointer group ${isPending ? 'opacity-50' : ''}`}
            >
              <div className="relative flex items-center justify-center">
                <input
                  type="radio"
                  name="stops"
                  value={option.value}
                  checked={currentStops === option.value || (!currentStops && option.value === "")}
                  onChange={(e) => updateFilter("stops", e.target.value)}
                  disabled={isPending}
                  className="w-5 h-5 border-gray-300 text-blue-600 focus:ring-blue-500 cursor-pointer peer"
                />
              </div>
              <span className="text-sm font-medium text-gray-700 group-hover:text-blue-600 transition-colors">
                {option.label}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* PRICE FILTER */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h4 className="font-semibold text-gray-800">Max Price</h4>
          <span className="text-sm font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded">
            ${localPrice}
          </span>
        </div>
        
        <input
          type="range"
          min="50"
          max="2000"
          step="50"
          value={localPrice}
          onChange={(e) => setLocalPrice(e.target.value)} // Update local state instantly, URL updates via debounce
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
        />
        
        <div className="flex justify-between text-xs font-medium text-gray-400 mt-3">
          <span>$50</span>
          <span>$1000</span>
          <span>$2000+</span>
        </div>
      </div>
    </div>
  );
}