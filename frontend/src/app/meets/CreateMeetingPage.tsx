"use client";
// Will be re-adjusted to the calendar page
import Button from "../../components/Button";
import { useUser } from "@clerk/nextjs";
import {
  Call,
  MemberRequest,
  useStreamVideoClient,
} from "@stream-io/video-react-sdk";
import { Copy, Loader2} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { getAdminId, getUserIds } from "./actions";

export default function CreateMeetingPage() {
  const [startTimeInput, setStartTimeInput] = useState("");
  const [participantsInput, setParticipantsInput] = useState("");
  const [loadingCall, setLoadingCall] = useState(false);
  const [call, setCall] = useState<Call>();

  const client = useStreamVideoClient();

  const { user } = useUser();
  async function createMeeting() {
    if (!client || !user) {
      return;
    }

    try {
      setLoadingCall(true);
      const id = crypto.randomUUID();

      const call = client.call("default", id);

      const memberEmails = participantsInput
        .split(",")
        .map((email) => email.trim());

      const memberIds = await getUserIds(memberEmails);
      const adminId = await getAdminId();
      

      const members: MemberRequest[] = memberIds
        .map((id) => ({ user_id: id, role: "call_member" }))
        .concat({ user_id: adminId, role: "host" })
        .concat({ user_id: user.id, role: "call_member" })
        .filter(
          (v, i, a) => a.findIndex((v2) => v2.user_id === v.user_id) === i,
        );

      const starts_at = new Date(startTimeInput || Date.now()).toISOString();
      await call.getOrCreate({
        data: {
          starts_at,
          members,
        }
      });

      setCall(call);
      setLoadingCall(false);
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again later.");
    }
  }

  if (!client || !user) {
    return <Loader2 className="mx-auto animate-spin" />;
  }

  return (
    <div className="flex flex-col items-center space-y-6 text-black">
      <h1 className="text-center text-2xl font-bold">
        Welcome {user.username}!
      </h1>
      <div className="mx-auto w-80 space-y-6 rounded-md bg-slate-100 p-5">
        <h2 className="text-xl font-bold">Create a new meeting</h2>
        <StartTimeInput value={startTimeInput} onChange={setStartTimeInput} />
        <ParticipantsInput
          value={participantsInput}
          onChange={setParticipantsInput}
        />
        <Button onClick={createMeeting} className="w-full hover:cursor-pointer">
          Create meeting
        </Button>
      </div>
      {loadingCall && <Loader2 className="mx-auto animate-spin" />}
      {call && 
            <MeetingLink call={call} name={user.fullName ? user.fullName : ""} />
      }
    </div>
  );
}

interface StartTimeInputProps {
  value: string;
  onChange: (value: string) => void;
}

function StartTimeInput({ value, onChange }: StartTimeInputProps) {
  const dateTimeLocalNow = new Date(
    new Date().getTime() - new Date().getTimezoneOffset() * 60_000,
  )
    .toISOString()
    .slice(0, 16);

  return (
    <div className="space-y-2">
      <div className="font-medium">Meeting starts at:</div>
          <input
            type="datetime-local"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            min={dateTimeLocalNow}
            className="w-full rounded-md border border-gray-300 p-2"
          />
 
    </div>
  );
}

interface ParticipantsInputProps {
  value: string;
  onChange: (value: string) => void;
}

// Participants must have an account.
function ParticipantsInput({ value, onChange }: ParticipantsInputProps) {
  return (
    <div className="space-y-2">
      <div className="font-medium">Participants:</div>
          <textarea
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder="Enter participant email addresses separated by commas excluding yours."
            className="w-full rounded-md border border-gray-300 p-2"
          />
    </div>
  );
}

interface MeetingLinkProps {
  call: Call;
  name: string;
}

function MeetingLink({ call, name }: MeetingLinkProps) {
  const meetingLink = `${process.env.NEXT_PUBLIC_BASE_URL}/meeting/${call.id}`;

  return (
    <div className="flex flex-col gap-3 items-center">
      <div className="flex items-center gap-3">
        <span>
          Invitation link:{" "}
          <Link href={meetingLink} className="font-bold text-blue-400 hover:underline">
            {meetingLink}
          </Link>
        </span>
        <Button
          title="Copy invitation link"
          onClick={() => {
            navigator.clipboard.writeText(meetingLink);
            alert("Copied to clipboard");
          }}
        >
          <Copy />
        </Button>
      </div>
      <a
        href={getMailToLink(
          meetingLink,
          name,
          call.state.startsAt,
        )}
        target="_blank"
        className="text-blue-500 hover:underline"
      >
        Send email invitation
      </a>
    </div>
  );
}

function getMailToLink(
  meetingLink: string,
  name: string,
  startsAt?: Date,
) {
  const startDateFormatted = startsAt
    ? startsAt.toLocaleString("en-US", {
        dateStyle: "full",
        timeStyle: "short",
      })
    : undefined;

  const subject =
    "Join my meeting" + (startDateFormatted ? ` at ${startDateFormatted}` : "");

  const body =
    `Join my meeting at ${meetingLink}.` +
    (startDateFormatted
      ? `\n\nThe meeting starts at ${startDateFormatted}.`
      : "") +
    `Welcome ${name}, to your session at Mind, Heart & Soul Counselling. Let's have a splendid time.`;

  return `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}