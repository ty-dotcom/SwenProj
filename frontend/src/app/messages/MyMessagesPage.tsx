"use client";

import { useUser } from "@clerk/nextjs";

export default function MessagesPage() {
    const { user } = useUser();

    return (
        <div className="h-screen flex flex-col items-center justify-center">
            <h1 className="flex">Messages Page</h1>
        </div>
    );
}