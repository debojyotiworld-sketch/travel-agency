"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";

export default function CheckoutPage() {

  const params = useSearchParams();

  const room = params.get("room");
  const hotel = params.get("hotel");
  const price = params.get("price");

  const [loading, setLoading] = useState(false);

  async function handleBooking() {

    try {

      setLoading(true);

      // Create Booking
      const bookingResponse =
        await fetch(
          "/api/create-booking",
          {
            method: "POST",
            headers: {
              "Content-Type":
                "application/json",
            },
            body: JSON.stringify({
              booking_type: "hotel",
              customer_name:
                "Demo User",
              customer_email:
                "demo@example.com",
              customer_phone:
                "9999999999",
              travelers_count: 2,
              total_amount:
                Number(price),
            }),
          }
        );

      const booking =
        await bookingResponse.json();

      // Create Razorpay Order
      const orderResponse =
        await fetch(
          "/api/create-razorpay-order",
          {
            method: "POST",
            headers: {
              "Content-Type":
                "application/json",
            },
            body: JSON.stringify({
              amount: Number(price),
            }),
          }
        );

      const order =
        await orderResponse.json();

      const options = {
        key:
          process.env
            .NEXT_PUBLIC_RAZORPAY_KEY_ID,

        amount: order.amount,

        currency: order.currency,

        name:
          "Travel Agency",

        description:
          "Hotel Booking Payment",

        order_id: order.id,

        handler: async function (
          response: any
        ) {

          alert(
            "Payment Successful!"
          );

          console.log(response);

          window.location.href =
            "/payment-success";
        },

        theme: {
          color: "#2563eb",
        },
      };

      const razorpay =
        new (window as any).Razorpay(
          options
        );

      razorpay.open();

      setLoading(false);

    } catch (error) {

      console.error(error);

      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-gray-50">

      <div className="container mx-auto px-4 py-20">

        <div className="grid gap-10 lg:grid-cols-3">

          {/* Left */}
          <div className="lg:col-span-2">

            <div className="rounded-3xl bg-white p-8 shadow-xl">

              <h1 className="text-5xl font-bold">
                Checkout
              </h1>

              <div className="mt-10 space-y-6">

                <input
                  placeholder="Full Name"
                  className="w-full rounded-2xl border p-4"
                />

                <input
                  placeholder="Email"
                  className="w-full rounded-2xl border p-4"
                />

                <input
                  placeholder="Phone"
                  className="w-full rounded-2xl border p-4"
                />
              </div>
            </div>
          </div>

          {/* Right */}
          <div>

            <div className="sticky top-24 rounded-3xl bg-black p-8 text-white">

              <h2 className="text-3xl font-bold">
                Booking Summary
              </h2>

              <div className="mt-8 space-y-4">

                <div>
                  <p className="text-gray-400">
                    Hotel
                  </p>

                  <h3 className="text-xl font-semibold">
                    {hotel}
                  </h3>
                </div>

                <div>
                  <p className="text-gray-400">
                    Room
                  </p>

                  <h3 className="text-xl font-semibold">
                    {room}
                  </h3>
                </div>

                <div>
                  <p className="text-gray-400">
                    Total
                  </p>

                  <h2 className="text-5xl font-bold">
                    ₹{price}
                  </h2>
                </div>
              </div>

              <button
                onClick={handleBooking}
                disabled={loading}
                className="mt-10 w-full rounded-2xl bg-white py-4 font-semibold text-black transition hover:bg-blue-600 hover:text-white"
              >
                {loading
                  ? "Processing..."
                  : "Continue Payment"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}