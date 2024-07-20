import React from "react";
// import ChatChatPage from "./userchatUI";
import Chathistory from "./chathistoryUI";
import ChatChatPage from "./ChatUI";


export default function Page() {
    return (
      <div className="relative z-0 flex h-screen w-full overflow-hidden">
        <div className="flex-shrink-0 overflow-x-hidden bg-token-sidebar-surface-primary" style={{ width: "260px" }}>
          <Chathistory />
        </div>
        <div className="relative flex h-full max-w-full flex-1 flex-col overflow-hidden">
          <ChatChatPage />
        </div>
      </div>
    );
  }
