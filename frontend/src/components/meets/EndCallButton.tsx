import useStreamCall from "../../hooks/meets/useStreamCall";
import { useCallStateHooks } from "@stream-io/video-react-sdk";

export default function EndCallButton() {
  const call = useStreamCall();

  const { useLocalParticipant } = useCallStateHooks();
  const localParticipant = useLocalParticipant();
  const participantIsHost =
    localParticipant &&  localParticipant?.roles.find((r) => r === "host");

  if (!participantIsHost) {
    return null;
  }

  return (
    <button
      onClick={call.endCall}
      className="mx-auto block font-bold rounded-3xl p-2 bg-red-500 cursor-pointer text-white hover:bg-red-400"
    >
      End call for everyone
    </button>
  );
}