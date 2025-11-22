"use client";

import { ChannelData, StreamChat } from "stream-chat";
import { Chat, Channel, Window, MessageInput, MessageList, ChannelHeader, Thread } from "stream-chat-react";

const userId = "user_34qylY2NNIVNJHGMkNeb91mYZ2C";

const chatClient = StreamChat.getInstance(process.env.NEXT_PUBLIC_STREAM_VIDEO_API_KEY!);

chatClient.connectUser(
    {
        id: userId,
        name: "First Last",
    },
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoidXNlcl8zNHF5bFkyTk5JVk5KSEdNa05lYjkxbVlaMkMifQ.1ys2ydsQd7mj2GkTtwehK0SWKwB5i1MaRR5Pd2nfDGs"
);

const channel = chatClient.channel("messaging", "channel_1", ({
    name: " Channel 1",
    members: [userId],
} as unknown as ChannelData));

export default function MessagesPage() {
    return (
        <div >
            <Chat client={chatClient}>
                <Channel channel={channel}>
                    <Window>
                        <ChannelHeader />
                        <MessageList />
                        <MessageInput />
                    </Window>
                    <Thread />
                </Channel>
            </Chat>
        </div>
    );
}