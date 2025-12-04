import {
  Channel,
  Window,
  MessageInput,
  MessageList,
  ChannelHeader,
  Thread,
} from "stream-chat-react";

interface MessagesChannelProps {
  show: boolean;
}

export default function MessagesChannel({ show }: MessagesChannelProps) {
  return (
    <div className={`h-full w-full ${show ? "block": "hidden" }`}>
      <Channel>
        <Window >
          <ChannelHeader />
          <MessageList />
          <MessageInput />
        </Window>
        <Thread />
      </Channel>
    </div>
  );
}
