import {
  ChannelList,
  ChannelPreviewMessenger,
  ChannelPreviewUIComponentProps,
} from "stream-chat-react";
import { UserResource } from "@clerk/types";
import { useCallback, useEffect, useState } from "react";
import UserMenu from "./UsersMenu";
import MenuBar from "./MenuBar";

interface MessagesSideBarProps {
  user: UserResource;
  show: boolean;
  onClose: () => void;
}

export default function MessagesSideBar({
  user,
  show,
  onClose,
}: MessagesSideBarProps) {
  const [usersMenuOpen, setUsersMenuOpen] = useState(false);

  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => {if (!show) setUsersMenuOpen(false);}, [show]);
  
  const ChannelPreviewCustom = useCallback(
    (props: ChannelPreviewUIComponentProps) => (
      <ChannelPreviewMessenger
        {...props}
        onSelect={() => {
          props.setActiveChannel?.(props.channel, props.watchers);
          onClose();
        }}
      />
    ),
    [onClose]
  );

  return (
    <div
      className={`relative w-full flex-col md:max-w-[360px] ${show ? "flex" : "hidden"}`}
    >
      {
        usersMenuOpen && <UserMenu loggedInUser={user}/>
      }
      {/*<MenuBar onMenuClick={()=> {setUsersMenuOpen(true)}}>*/}
      <ChannelList
        filters={{ type: "messaging", members: { $in: [user.id] } }}
        sort={{ last_message_at: -1 }}
        options={{ state: true, presence: true, limit: 10 }}
        showChannelSearch
        additionalChannelSearchProps={{
          searchForChannels: true,
          searchQueryParams: {
            channelFilters: {
              filters: {
                members: {
                  $in: [user.id],
                },
              },
            },
          },
        }}
        Preview={ChannelPreviewCustom}
      />
    </div>
  );
}
