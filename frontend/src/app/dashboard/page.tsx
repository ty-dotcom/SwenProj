"use client";

import { useUser } from "@clerk/nextjs";
import Link from "next/link";
import { useEffect, useState } from "react";

type Booking = {
  id: number;
  notes: string;
};

export default function DashboardPage() {
  const { user } = useUser();
  const [loading, setLoading] = useState(true);
  const [hasUnpaidBookings, setHasUnpaidBookings] = useState(false);

  const clerkId = user?.id;
  const firstName = user?.firstName || "User";

  useEffect(() => {
    if (!clerkId) {
      setLoading(false);
      return;
    }

    const checkPaymentStatus = async () => {
      try {
        const res = await fetch(
          `http://localhost:8000/api/bookings/me/?clerk_id=${clerkId}`
        );

        if (!res.ok) {
          console.error("Failed to fetch bookings:", res.status);
          setLoading(false);
          return;
        }

        const bookings: Booking[] = await res.json();

        const unpaid = bookings.filter(
          (b) => !b.notes || b.notes === "Unpaid" || b.notes.trim() === ""
        );

        if (unpaid.length > 0) {
          setHasUnpaidBookings(true);

          localStorage.setItem(
            "unpaidBookingIds",
            JSON.stringify(unpaid.map((b) => b.id))
          );

          window.location.href = `/Payment?amount=${unpaid.length * 50}`;
          return;
        }

        setHasUnpaidBookings(false);
        setLoading(false);
      } catch (err) {
        console.error("Error checking payment status:", err);
        setLoading(false);
      }
    };

    checkPaymentStatus();
  }, [clerkId]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  if (hasUnpaidBookings) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-white text-xl">Redirecting to payment...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center px-6 py-16">
      <h1 className="text-3xl font-bold text-white mb-4">
        Hello, {firstName}!
      </h1>

      <p className="text-gray-300 mb-10 text-center max-w-xl">
        Welcome to your session dashboard.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
        <Link
          href="/messages"
          className="bg-gray-800 border border-gray-700 rounded-lg p-6 text-center text-white font-semibold hover:bg-gray-700 transition"
        >
          Message Counsellor
        </Link>

        <Link
          href="/meets/meetings"
          className="bg-purple-600 rounded-lg p-6 text-center text-white font-semibold hover:bg-purple-700 transition"
        >
          Join Meeting
        </Link>

        <Link
          href="/calendar"
          className="bg-red-600 rounded-lg p-6 text-center text-white font-semibold hover:bg-red-700 transition"
        >
          Cancel Session
        </Link>
      </div>
    </div>
  );
}
