import { Avatar, useChatContext } from "stream-chat-react";
import { UserResource } from "@clerk/types";
import { useEffect, useState } from "react";
import type { UserResponse } from "stream-chat";

interface UserMenuProps {
  loggedInUser: UserResource;
}

export default function UserMenu({ loggedInUser }: UserMenuProps) {
  const { client } = useChatContext();

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

  return (
    <div className="absolute z-10 h-full w-full bg-red-300">{users?.map((user) => <UserResult user = {user} onUserClicked={()=> {}} key={user.id}/>)}</div>
  );
}

interface UserResultProps {
  user: UserResponse & {image?: string};
  onUserClicked: (userId: string) => void;
}

function UserResult({ user, onUserClicked }: UserResultProps) {
    return (
      <button className="mb-3 w-full flex justify-center p-3 gap-2 hover:bg-gray-200" onClick={() => onUserClicked(user.id)}>
        <span><Avatar image={user.image} name={user.name || user.id} className="w-10 h-10" /></span>
        <span className="whitespace-nowrap overflow-hidden text-ellipsis">{user.name || user.id} </span>
        {user.online && <span className="h-3 w-3 rounded-full bg-green-500 self-center">Online</span>}
      </button>
    );
}