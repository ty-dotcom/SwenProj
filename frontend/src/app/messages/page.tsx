import { Metadata } from "next";
import MyMessagesPage from "./MyMessagesPage";

export const metadata: Metadata = {
  title: "Messages",
};

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-[#1a1530] to-black text-white">
      <MyMessagesPage />
    </div>
  );
}
