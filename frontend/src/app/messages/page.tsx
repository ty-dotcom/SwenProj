import { Metadata } from "next";
import MyMessagesPage from "./MyMessagesPage";

export const metadata: Metadata = {
  title: "Messages",
};

export default function Page() {
  return <MyMessagesPage />;
}