import { currentUser } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { env } from "process";
import { StreamChat } from "stream-chat";

export async function GET() {
    try{
        const user = await currentUser();

        console.log("Current user:", user?.id);

        if (!user) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const apiKey = env.NEXT_PUBLIC_STREAM_VIDEO_API_KEY;
        
        if (!apiKey) {
            console.error("Missing NEXT_PUBLIC_STREAM_VIDEO_API_KEY");
            return NextResponse.json({ error: "Server configuration error" }, { status: 500 });
        }

        const streamClient = StreamChat.getInstance(apiKey, env.STREAM_VIDEO_API_SECRET);

        const expirationTime = Math.floor(Date.now() / 1000) + 60 * 60;

        const issuedAt = Math.floor(Date.now() / 1000) - 60;

        const token = streamClient.createToken(user.id, expirationTime, issuedAt);

        return NextResponse.json({ token }, { status: 200 });

    } catch(error) {
        console.error(error);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}