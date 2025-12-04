"use client";

import Link from "next/link";

export default function Home() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center text-center px-10 bg-gray-900">

      <div className="text-2xl text-white font-bold mb-6">
        Welcome to our Integrated Psych Facility Application
        <br /><br /> 
      </div>

      <div className="bg-gray-800 border border-gray-600 rounded-md p-6 max-w-3xl text-white font-bold">
        Mind, Heart & Soul Counselling is a counselling facility located in Lawton, Oklahoma,
        United States of America, founded in 2011 and run by a prominent relationship therapist,
        clinical director and business owner, Sheila Hodge-Windover. Within this facility, she
        handles a broad spectrum of clients, such as domestic violence victims, abused children,
        and couples in need of counselling be it marital or premarital, to name a few.

        <br /><br />

        Currently, this business has web-based software in place; however, the business owner
        has noticed the difficulty of using and paying for various software, rather than having
        a fully integrated software, where patients and the counsellor will have a much better
        navigation experience.

        <br /><br />

        The new software system must allow clients to complete processes online, such as payments,
        bookings and filling out forms. It will integrate video sessions, messaging, progress
        tracking, resource distribution, and secure data management for both clients and counsellors.
      </div>
       <br /><br />
      <Link
        href="/calendar"
        className=" p-6 bg-purple-600 text-white rounded-md text-lg font-semibold hover:bg-purple-700"
      >

        Book A Session Today
      </Link>

    </div>
  );
}
