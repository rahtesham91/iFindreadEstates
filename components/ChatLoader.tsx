"use client";

import dynamic from "next/dynamic";

// The chat widget is not needed for first paint, so it loads after the page is interactive.
const ChatWidget = dynamic(() => import("./ChatWidget"), { ssr: false });

export default function ChatLoader() {
  return <ChatWidget />;
}
