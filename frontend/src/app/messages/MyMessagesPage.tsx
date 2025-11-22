"use client";

import useInitializeChatClient from "@/src/hooks/messages/useInitializeChatClient";
import { useUser } from "@clerk/nextjs";
import { useCallback, useEffect, useState } from "react";
import { Chat, LoadingIndicator } from "stream-chat-react";
import MessagesSideBar from "./MessagesSideBar";
import MessagesChannel from "./MessagesChannel";
import { Menu, X } from "lucide-react";
import useWindowSize from "@/src/hooks/messages/useWindowSize";

export default function MessagesPage() {
  const chatClient = useInitializeChatClient();
  const { user } = useUser();
  const [messagesSideBarOpen, setMessagesSideBarOpen] = useState(false);
  const windowSize = useWindowSize();
  const isLargeScreen = windowSize.width >= 768;

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (isLargeScreen) setMessagesSideBarOpen(false);
  }, [windowSize.width]);

  const handleCloseSideBar = useCallback(() => {
    setMessagesSideBarOpen(false);
  }, []);

  if (!chatClient || !user) {
    return (
      <div className="flex h-screen items-center justify-center">
        <LoadingIndicator size={40} />
      </div>
    );
  }

  return (
    <div className="h-screen bg-black xl:px-20 xl:py-8">
      <div className="m-auto flex h-full min-w-[350px] max-w-[1600px] flex-col shadow-sm">
        <Chat client={chatClient}>
          <div className="flex justify-center border-b border-b-amber-50 p-3 md:hidden">
            <button
              onClick={() => setMessagesSideBarOpen(!messagesSideBarOpen)}
            >
              {!messagesSideBarOpen ? (
                <span className="flex items-center gap-1">
                  <Menu /> Menu
                </span>
              ) : (
                <X />
              )}
            </button>
          </div>
          <div className="flex h-full flex-row">
            <MessagesSideBar
              user={user}
              show={isLargeScreen || messagesSideBarOpen}
              onClose={handleCloseSideBar}
            />
            <MessagesChannel show={isLargeScreen || !messagesSideBarOpen} />
          </div>
        </Chat>
      </div>
    </div>
  );
}
