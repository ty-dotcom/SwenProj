"use client";

import useInitializeChatClient from "@/src/hooks/messages/useInitializeChatClient";
import { useUser } from "@clerk/nextjs";
import { ChannelData, StreamChat } from "stream-chat";
import { Chat, Channel, Window, MessageInput, MessageList, ChannelHeader, Thread, LoadingIndicator, ChannelList } from "stream-chat-react";

export default function MessagesPage() {
    const chatClient = useInitializeChatClient();
    const { user } = useUser();

    if (!chatClient || !user) {
        return <div className="flex h-screen items-center justify-center"><LoadingIndicator size={40} /></div>;
    }
    
    return (
        <div >
            <Chat client={chatClient}>
                <ChannelList filters={{type:"messaging", members:{$in: [user.id]}}} sort={{last_message_at: -1}} options={{state:true, presence:true, limit: 10}}/>
                <Channel >
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