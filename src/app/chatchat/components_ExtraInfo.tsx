import React from "react";

export default function ExtraInfo() {
  return (
    <div className="flex flex-col relative px-2 py-2 text-center text-xs text-token-text-secondary md:px-[60px]-center justify-center bg-slate-900 p-2 text-xs text-slate-400 dark:text-slate-300 h-[3vh]">
      <p>一些额外的小文字信息</p>
      {/* <img src="/path-to-your-image.png" alt="Description" className="mt-2 w-12 h-12 object-cover rounded-md" /> */}
    </div>
  );
}