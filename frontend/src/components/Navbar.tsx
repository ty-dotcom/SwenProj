"use client";

import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
  useUser,
} from "@clerk/nextjs";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const { user } = useUser();
  const [openMenu, setOpenMenu] = useState(false);

  const isAdmin = user?.username === "admin";

  return (
    <header className="backdrop-blur bg-black/40 border-b border-white/10">
      <div className="mx-auto flex h-16 w-full items-center justify-between px-6 text-white">

        {/* LEFT SIDE LINKS */}
        <div className="flex items-center gap-8 text-sm font-medium">
          <Link className="hover:text-purple-300 transition" href="/">
            Landing Page
          </Link>
          <Link className="hover:text-purple-300 transition" href="/Payment">
            Payments
          </Link>
          <Link className="hover:text-purple-300 transition" href="/forms">
            Forms
          </Link>
        </div>

        {/* RIGHT SIDE */}
        <SignedIn>
          <div className="flex items-center gap-8 text-sm font-medium relative">

            <Link className="hover:text-purple-300 transition" href="/meets/meetings">
              Meetings
            </Link>

            <Link className="hover:text-purple-300 transition" href="/messages">
              Messages
            </Link>
            <Link className="hover:text-purple-300 transition" href="/dashboard">
            Dashboard
          </Link>
            <Link className="hover:text-purple-300 transition" href="/calendar">
              Calendar
            </Link>

            {/* RESOURCES DROPDOWN */}
            <div
              className="relative"
              onMouseEnter={() => setOpenMenu(true)}
              onMouseLeave={() => setOpenMenu(false)}
            >
              <button className="hover:text-purple-300 transition flex items-center">
                Resources <span className="ml-1">▾</span>
              </button>

              {openMenu && (
                <div className="absolute right-0 mt-2 w-48 rounded-md bg-white text-black shadow-lg border border-gray-200 py-2">

                  <Link
                    href="/client/resources"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Client Resources
                  </Link>

                  {isAdmin && (
                    <Link
                      href="/counsellor/upload"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Counsellor Upload
                    </Link>
                  )}
                </div>
              )}
            </div>

            {/* USER ICON */}
            <UserButton />
          </div>
        </SignedIn>

        {/* WHEN SIGNED OUT */}
        <SignedOut>
          <div className="flex items-center gap-4">
            <SignInButton>
              <button className="px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-md transition text-white text-sm">
                Sign In
              </button>
            </SignInButton>
            <SignUpButton>
              <button className="px-4 py-2 bg-purple-500 hover:bg-purple-600 rounded-md transition text-white text-sm">
                Sign Up
              </button>
            </SignUpButton>
          </div>
        </SignedOut>

      </div>
    </header>
  );
}
