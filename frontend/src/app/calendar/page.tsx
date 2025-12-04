"use client";

import CustomCalendar from "../../components/calendar/CustomCalendar";

export default function CalendarPage() {
  return (
    <div className="min-h-screen w-full bg-gray-900 text-white">
      <h1 style={{ padding: "1rem" }}>Session Calendar</h1>
      <CustomCalendar />
    </div>
  );
}
