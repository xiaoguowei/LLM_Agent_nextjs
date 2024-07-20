import React, { useRef, useState } from 'react';

const ChatInput = ({ onSubmit }) => {
  const textareaRef = useRef(null);
  const [input, setInput] = useState("");

  const handleInput = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      const maxHeight = 200; // 设置最大高度
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, maxHeight)}px`;
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      onSubmit(input);
      setInput("");
      if (textareaRef.current) {
        textareaRef.current.style.height = "auto"; // 重置高度
      }
    }
  };

  return (
    <form className="flex w-full items-center border-t border-slate-300 bg-slate-200 p-2 dark:border-slate-700 dark:bg-slate-900" onSubmit={handleSubmit}>
      <label htmlFor="chat" className="sr-only">Enter your prompt</label>
      <div>
        <button className="hover:text-blue-600 dark:text-slate-200 dark:hover:text-blue-600 sm:p-2" type="button">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" aria-hidden="true" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M12 5l0 14"></path>
            <path d="M5 12l14 0"></path>
          </svg>
          <span className="sr-only">Add</span>
        </button>
      </div>
      <textarea
        id="chat-input"
        rows="1"
        ref={textareaRef}
        value={input}
        onInput={handleInput}
        onKeyDown={handleKeyDown}
        onChange={(e) => setInput(e.target.value)}
        className="mx-2 flex min-h-full w-full rounded-md border border-slate-300 bg-slate-50 p-2 text-base text-slate-900 placeholder-slate-400 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-50 dark:placeholder-slate-400 dark:focus:border-blue-600 dark:focus:ring-blue-600"
        placeholder="Enter your prompt"
        style={{ maxHeight: '200px', overflowY: 'auto' }} // 确保在达到最大高度时启用滚动
      ></textarea>
      <div>
        <button className="inline-flex hover:text-blue-600 dark:text-slate-200 dark:hover:text-blue-600 sm:p-2" type="submit">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" aria-hidden="true" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M10 14l11 -11"></path>
            <path d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5"></path>
          </svg>
          <span className="sr-only">Send message</span>
        </button>
      </div>
    </form>
  );
};

export default ChatInput;
