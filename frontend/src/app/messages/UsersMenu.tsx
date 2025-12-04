import { Avatar, useChatContext } from "stream-chat-react";
import { UserResource } from "@clerk/types";
import { useEffect, useState } from "react";
import type { UserResponse } from "stream-chat";
import { X } from "lucide-react";

interface UserMenuProps {
  loggedInUser: UserResource;
  onClose: () => void;
}

export default function UserMenu({ loggedInUser, onClose }: UserMenuProps) {
  const { client, setActiveChannel } = useChatContext();

  const [users, setUsers] = useState<(UserResponse & {image?: string})[]>();

  useEffect(() => {
    async function loadInitialUsers() {
      if (!client || !loggedInUser?.id) return;
      try {
        const response = await client.queryUsers({},{id:1});
        console.log(response.users[0].id);
        const notGuestUsers = response.users.filter((user) => user.id.toLowerCase().includes("guest") === false);
        const filteredUsers = notGuestUsers.filter((user) => user.id !== loggedInUser.id);
        setUsers(filteredUsers);
      } catch (error) {
        console.error("Error loading users:", error);
        alert("Failed to load users");
      }
    }
    loadInitialUsers();
  }, [client, loggedInUser.id]);

  async function startChatWithUser(userId: string) {
    try {
      const channel = client.channel("messaging", {
        members: [loggedInUser.id, userId],
      });
      await channel.create();
      setActiveChannel(channel);
      onClose();
    } catch (error) {
      console.error("Error starting chat:", error);
      alert("Failed to start chat");
    }
  }

  return (
    <div className="absolute z-10 h-full w-full bg-slate-900/95 backdrop-blur-sm border-r border-slate-700 flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-slate-700">
        <h2 className="text-white font-semibold text-lg">Start New Chat</h2>
        <button 
          onClick={onClose}
          className="text-gray-400 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Users List */}
      <div className="flex-1 overflow-y-auto p-2">
        {users?.map((user) => (
          <UserResult 
            user={user} 
            onUserClicked={startChatWithUser} 
            key={user.id}
          />
        ))}
      </div>
    </div>
  );
}

interface UserResultProps {
  user: UserResponse & {image?: string};
  onUserClicked: (userId: string) => void;
}

function UserResult({ user, onUserClicked }: UserResultProps) {
    return (
      <button 
        className="w-full flex items-center p-3 gap-3 rounded-lg hover:bg-slate-800 transition-colors text-left"
        onClick={() => onUserClicked(user.id)}
      >
        <Avatar image={user.image} name={user.name || user.id} />
        <div className="flex-1 min-w-0">
          <div className="text-white font-medium truncate">{user.name || user.id}</div>
          {user.online && (
            <div className="flex items-center gap-1 text-xs text-green-400">
              <span className="h-2 w-2 rounded-full bg-green-400"></span>
              Online
            </div>
          )}
        </div>
      </button>
    );
}