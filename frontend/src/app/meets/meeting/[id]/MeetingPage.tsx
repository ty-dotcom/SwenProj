"use client";

import AudioVolumeIndicator from "../../../../components/meets/AudioVolumeIndicator";
import Button, { buttonClassName } from "../../../../components/Button";
import FlexibleCallLayout from "../../../../components/meets/FlexibleCallLayout";
import PermissionPrompt from "../../../../components/meets/PermissionPrompt";
import useLoadCall from "../../../../hooks/meets/useLoadCall";
import useStreamCall from "../../../../hooks/meets/useStreamCall";
import { useUser } from "@clerk/nextjs";
import {
  CallingState,
  DeviceSettings,
  StreamCall,
  StreamTheme,
  VideoPreview,
  useCallStateHooks,
} from "@stream-io/video-react-sdk";
import { Loader2 } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

interface MeetingPageProps {
  id: string;
}

export default function MeetingPage({ id }: MeetingPageProps) {
  const { user, isLoaded: userLoaded } = useUser();

  const { call, callLoading } = useLoadCall(id);

  if (!userLoaded || callLoading) {
    return <Loader2 className="mx-auto animate-spin" />;
  }

  if (!call) {
    return <p className="text-center font-bold">Call not found</p>;
  }

  const notAllowedToJoin =
    call.type === "private-meeting" &&
    (!user || !call.state.members.find((m) => m.user.id === user.id));

  if (notAllowedToJoin) {
    return (
      <p className="text-center font-bold">
        You are not allowed to view this meeting
      </p>
    );
  }

  return (
    <StreamCall call={call}>
      <StreamTheme>
        <MeetingScreen username={user?.username ? user.username : ""} />
      </StreamTheme>
    </StreamCall>
  );
}

function MeetingScreen({username} : {username : string}) {
  const call = useStreamCall();

  const { useCallEndedAt, useCallStartsAt, useParticipants } = useCallStateHooks();
  const callEndedAt = useCallEndedAt();
  const callStartsAt = useCallStartsAt();
  const [setupComplete, setSetupComplete] = useState(false);
  const participants = useParticipants();  
  const [hostInStream, setHostInStream] = useState(participants.find((o) => o.roles.includes("host")))
  const participantIsHost = username === "admin";

  function handleSetupComplete() {
    setSetupComplete(true);
    call.join();
    call.microphone.disable();
  }

  useEffect(()=>{
    const timer = setTimeout(()=>{
      if (!hostInStream){
      setHostInStream(participants.find((o) => o.roles.includes("host")))
    }
    }, 2000);

     return () => clearTimeout(timer)
    
  }, [participants, hostInStream])

  

  const callIsInFuture = callStartsAt && new Date(callStartsAt) > new Date();

  const callHasEnded = !!callEndedAt;

   if (!participantIsHost && !hostInStream && setupComplete){
    return (
      <div className="flex justify-center flex-col items-center space-y-5 h-130">
        <h2 className="text-bold text-3xl">Host has not joined. Please await there arrival.</h2>
         <Loader2 className="mx-auto size-12 animate-spin" />
      </div>
    )
  }

  if (callHasEnded) {
    return <MeetingEndedScreen />;
  }

  if (callIsInFuture) {
    return <UpcomingMeetingScreen />;
  }


  return (
    <div className="space-y-6">
      {setupComplete ? (
        <CallUI />
      ) : (
      <SetupUI onSetupComplete={handleSetupComplete} />
      )}
    </div>
  );
}

interface SetupUIProps {
  onSetupComplete: () => void;
}

function SetupUI({ onSetupComplete }: SetupUIProps) {
  const call = useStreamCall();

  const { useMicrophoneState, useCameraState } = useCallStateHooks();

  const micState = useMicrophoneState();
  const camState = useCameraState();

  const [micCamDisabled, setMicCamDisabled] = useState(false);

  useEffect(() => {
    if (micCamDisabled) {
      call.camera.disable();
      call.microphone.disable();
    } else {
      call.camera.enable();
      call.microphone.enable();
    }
  }, [micCamDisabled, call]);

  if (!micState.hasBrowserPermission || !camState.hasBrowserPermission) {
    return <PermissionPrompt />;
  }

  return (
    <div className="flex flex-col items-center gap-3">
      <h1 className="text-center text-2xl font-bold">Setup</h1>
      <VideoPreview />
      <div className="flex h-16 items-center gap-3">
        <AudioVolumeIndicator />
        <DeviceSettings />
      </div>
      <label className="flex items-center gap-2 font-medium">
        <input
          type="checkbox"
          checked={micCamDisabled}
          onChange={(e) => setMicCamDisabled(e.target.checked)}
        />
        Join with mic and camera off
      </label>
      <Button onClick={onSetupComplete}>Join meeting</Button>
    </div>
  );
}

function CallUI() {
  const { useCallCallingState } = useCallStateHooks();
  const callingState = useCallCallingState();

  if (callingState !== CallingState.JOINED) {
    return <Loader2 className="mx-auto animate-spin" />;
  }

  return <FlexibleCallLayout />;
}

function UpcomingMeetingScreen() {
  const call = useStreamCall();

  return (
    <div className="flex flex-col items-center gap-6">
      <p>
        This meeting has not started yet. It will start at{" "}
        <span className="font-bold">
          {call.state.startsAt?.toLocaleString()}
        </span>
      </p>
      <Link href="/" className={buttonClassName}>
        Go home
      </Link>
    </div>
  );
}

function MeetingEndedScreen() {
  return (
    <div className="flex flex-col items-center gap-6">
      <p className="font-bold">This meeting has ended</p>
      <Link href="/" className={buttonClassName}>
        Go home
      </Link>
    </div>
  );
}
