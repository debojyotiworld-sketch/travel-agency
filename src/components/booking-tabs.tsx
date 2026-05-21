"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeftRight,
  ChevronDown,
} from "lucide-react";

const tabs = ["Flights", "Hotels", "Bus", "Train"];

export default function BookingTabs() {
  const [active, setActive] = useState("Flights");

  const [travellers, setTravellers] = useState(1);

  const [flightClass, setFlightClass] =
    useState("Economy");

  const [trainClass, setTrainClass] =
    useState("Sleeper");

  const [from, setFrom] = useState("");

  const [to, setTo] = useState("");

  // Swap Function
  const handleSwap = () => {
    setFrom(to);
    setTo(from);
  };

  // Dynamic placeholders
  const fromPlaceholder =
    active === "Flights"
      ? "From (e.g. CCU)"
      : active === "Train"
      ? "Departure Station"
      : active === "Bus"
      ? "Departure City"
      : "";

  const toPlaceholder =
    active === "Flights"
      ? "To (e.g. BOM)"
      : active === "Train"
      ? "Destination Station"
      : active === "Bus"
      ? "Destination City"
      : "";

  // Input Style
  const inputStyle = `
    h-[48px]
    w-full
    rounded-2xl
    border
    border-white/20
    bg-white/80
    px-4
    text-sm
    font-medium
    text-black
    shadow-lg
    backdrop-blur-md
    outline-none
    transition-all
    duration-300
    placeholder:text-gray-500
    hover:bg-white
    focus:border-blue-400
    focus:ring-2
    focus:ring-blue-400/40
  `;

  // Label Style
  const labelStyle = `
    mb-2
    block
    pl-1
    text-sm
    font-medium
    text-white/80
  `;

  // Button Style
  const buttonStyle = `
    h-[48px]
    rounded-2xl
    bg-blue-600
    px-6
    text-sm
    font-semibold
    text-white
    shadow-lg
    transition-all
    duration-300
    hover:scale-[1.02]
    hover:bg-blue-700
    active:scale-[0.98]
  `;

  return (
    <div className="mx-auto mt-6 max-w-5xl rounded-[28px] border border-white/10 bg-white/10 p-4 shadow-2xl backdrop-blur-xl">
      
      {/* Tabs */}
      <div className="flex flex-wrap items-center gap-3">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className={`relative overflow-hidden rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
              active === tab
                ? "text-black"
                : "text-white/70 hover:text-white"
            }`}
          >
            {active === tab && (
              <motion.div
                layoutId="active-pill"
                className="absolute inset-0 rounded-full bg-white"
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 25,
                }}
              />
            )}

            <span className="relative z-10">
              {tab}
            </span>
          </button>
        ))}
      </div>

      {/* Animated Form */}
      <motion.div
        key={active}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="mt-6"
      >

        {/* Flights / Train / Bus */}
        {active !== "Hotels" && (
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-6">

            {/* FLIGHT FROM + TO */}
            {active === "Flights" ? (
              <div className="relative lg:col-span-2">

                {/* Swap Button */}
                <button
                  onClick={handleSwap}
                  type="button"
                  className="
                    absolute
                    left-1/2
                    top-[33px]
                    z-20
                    flex
                    h-10
                    w-10
                    -translate-x-1/2
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/20
                    bg-white
                    shadow-lg
                    transition-all
                    duration-500
                    hover:rotate-180
                  "
                >
                  <ArrowLeftRight
                    size={18}
                    className="text-blue-600"
                  />
                </button>

                <div className="grid grid-cols-2 gap-3">

                  {/* From */}
                  <div>
                    <label className={labelStyle}>
                      Departure Airport
                    </label>

                    <input
                      value={from}
                      onChange={(e) =>
                        setFrom(
                          e.target.value.toUpperCase()
                        )
                      }
                      placeholder={fromPlaceholder}
                      className={inputStyle}
                    />
                  </div>

                  {/* To */}
                  <div>
                    <label className={labelStyle}>
                      Arrival Airport
                    </label>

                    <input
                      value={to}
                      onChange={(e) =>
                        setTo(
                          e.target.value.toUpperCase()
                        )
                      }
                      placeholder={toPlaceholder}
                      className={inputStyle}
                    />
                  </div>
                </div>
              </div>
            ) : (
              <>
                {/* From */}
                <div>
                  <label className={labelStyle}>
                    From
                  </label>

                  <input
                    placeholder={fromPlaceholder}
                    className={inputStyle}
                  />
                </div>

                {/* To */}
                <div>
                  <label className={labelStyle}>
                    To
                  </label>

                  <input
                    placeholder={toPlaceholder}
                    className={inputStyle}
                  />
                </div>
              </>
            )}

            {/* Date */}
            <div>
              <label className={labelStyle}>
                {active === "Flights"
                  ? "Departure Date"
                  : active === "Train"
                  ? "Journey Date"
                  : "Travel Date"}
              </label>

              <input
                type="date"
                className={inputStyle}
              />
            </div>

            {/* Travellers */}
            {(active === "Flights" ||
              active === "Train") && (
              <div>
                <label className={labelStyle}>
                  Travellers
                </label>

                <div className="relative">
                  <select
                    value={travellers}
                    onChange={(e) =>
                      setTravellers(
                        Number(e.target.value)
                      )
                    }
                    className={`${inputStyle} appearance-none pr-10`}
                  >
                    {[1, 2, 3, 4, 5, 6].map(
                      (num) => (
                        <option
                          key={num}
                          value={num}
                        >
                          {num} Traveller
                          {num > 1 ? "s" : ""}
                        </option>
                      )
                    )}
                  </select>

                  <ChevronDown
                    size={18}
                    className="
                      pointer-events-none
                      absolute
                      right-3
                      top-1/2
                      -translate-y-1/2
                      text-gray-500
                    "
                  />
                </div>
              </div>
            )}

            {/* Flight Class */}
            {active === "Flights" && (
              <div>
                <label className={labelStyle}>
                  Cabin Class
                </label>

                <div className="relative">
                  <select
                    value={flightClass}
                    onChange={(e) =>
                      setFlightClass(
                        e.target.value
                      )
                    }
                    className={`${inputStyle} appearance-none pr-10`}
                  >
                    <option>Economy</option>
                    <option>
                      Premium Economy
                    </option>
                    <option>Business</option>
                    <option>First Class</option>
                  </select>

                  <ChevronDown
                    size={18}
                    className="
                      pointer-events-none
                      absolute
                      right-3
                      top-1/2
                      -translate-y-1/2
                      text-gray-500
                    "
                  />
                </div>
              </div>
            )}

            {/* Train Class */}
            {active === "Train" && (
              <div>
                <label className={labelStyle}>
                  Seat Type
                </label>

                <div className="relative">
                  <select
                    value={trainClass}
                    onChange={(e) =>
                      setTrainClass(
                        e.target.value
                      )
                    }
                    className={`${inputStyle} appearance-none pr-10`}
                  >
                    <option>Sleeper</option>
                    <option>AC 1 Tier</option>
                    <option>AC 2 Tier</option>
                    <option>AC 3 Tier</option>
                    <option>Chair Car</option>
                  </select>

                  <ChevronDown
                    size={18}
                    className="
                      pointer-events-none
                      absolute
                      right-3
                      top-1/2
                      -translate-y-1/2
                      text-gray-500
                    "
                  />
                </div>
              </div>
            )}

            {/* Search Button */}
            <div className="flex flex-col justify-end">
              <button className={buttonStyle}>
                Search {active}
              </button>
            </div>
          </div>
        )}

        {/* Hotels */}
        {active === "Hotels" && (
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-6">

            {/* Destination */}
            <div>
              <label className={labelStyle}>
                Destination
              </label>

              <input
                placeholder="City or Hotel"
                className={inputStyle}
              />
            </div>

            {/* Check In */}
            <div>
              <label className={labelStyle}>
                Check In
              </label>

              <input
                type="date"
                className={inputStyle}
              />
            </div>

            {/* Check Out */}
            <div>
              <label className={labelStyle}>
                Check Out
              </label>

              <input
                type="date"
                className={inputStyle}
              />
            </div>

            {/* Guests */}
            <div>
              <label className={labelStyle}>
                Guests
              </label>

              <div className="relative">
                <select
                  className={`${inputStyle} appearance-none pr-10`}
                >
                  <option>1 Guest</option>
                  <option>2 Guests</option>
                  <option>3 Guests</option>
                  <option>4 Guests</option>
                  <option>5 Guests</option>
                </select>

                <ChevronDown
                  size={18}
                  className="
                    pointer-events-none
                    absolute
                    right-3
                    top-1/2
                    -translate-y-1/2
                    text-gray-500
                  "
                />
              </div>
            </div>

            {/* Rooms */}
            <div>
              <label className={labelStyle}>
                Rooms
              </label>

              <div className="relative">
                <select
                  className={`${inputStyle} appearance-none pr-10`}
                >
                  <option>1 Room</option>
                  <option>2 Rooms</option>
                  <option>3 Rooms</option>
                  <option>4 Rooms</option>
                </select>

                <ChevronDown
                  size={18}
                  className="
                    pointer-events-none
                    absolute
                    right-3
                    top-1/2
                    -translate-y-1/2
                    text-gray-500
                  "
                />
              </div>
            </div>

            {/* Search Button */}
            <div className="flex flex-col justify-end">
              <button className={buttonStyle}>
                Search Hotels
              </button>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
}