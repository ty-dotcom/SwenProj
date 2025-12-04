import { SignInButton, SignUpButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";
export default function Navbar() {
  return (
    < header className="shadow">
      <div className="mx-auto flex h-14 w-full items-center justify-between p-3 font-medium">
        <Link href="/"> New meeting </Link>
        <Link href="../Payment"> Payments </Link>
        <SignedIn>
          <div className="flex items-center gap-5">
            <Link href="/meets/meetings">Meetings</Link>
            <Link href="/messages">Messages</Link>
            <UserButton />
          </div>
        </SignedIn>
        <SignedOut>
          <div className="flex items-center gap-5">
          <SignInButton />
          <SignUpButton />
          </div>
        </SignedOut>
      </div>
    </header>
  );
}