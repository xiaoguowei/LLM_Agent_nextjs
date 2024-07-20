"use client";

import React from "react";
import MessageList from "./components_MessageList";
import ExtraInfo from "./components_ExtraInfo";

export default function ChatChatPage() {
  return (
    <div className="flex h-full w-full flex-col">
      <MessageList />
      <ExtraInfo />
    </div>
  );
}
