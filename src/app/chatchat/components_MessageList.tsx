import React, { useState, useRef, useEffect } from 'react';
import ChatInput from './components_Input';
import ExtraInfo from './components_ExtraInfo';

const UserMessage = ({ message }) => (
  <div className="flex flex-row px-4 py-8 sm:px-6">
    <img
      className="mr-2 flex h-8 w-8 rounded-full sm:mr-4"
      src="https://dummyimage.com/256x256/363536/ffffff&text=U"
    />
    <div className="flex max-w-3xl items-center">
      <p>{message}</p>
    </div>
  </div>
);

const BotMessage = ({ message }) => (
  <div className="flex bg-slate-100 px-4 py-8 dark:bg-slate-900 sm:px-6">
    <img
      className="mr-2 flex h-8 w-8 rounded-full sm:mr-4"
      src="https://dummyimage.com/256x256/354ea1/ffffff&text=G"
    />
    <div className="flex w-full flex-col items-start lg:flex-row lg:justify-between">
      <p className="max-w-3xl">{message}</p>
      <div className="mt-4 flex flex-row justify-start gap-x-2 text-slate-500 lg:mt-0">
        <button className="hover:text-blue-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path
              d="M7 11v8a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-7a1 1 0 0 1 1 -1h3a4 4 0 0 0 4 -4v-1a2 2 0 0 1 4 0v5h3a2 2 0 0 1 2 2l-1 5a2 3 0 0 1 -2 2h-7a3 3 0 0 1 -3 -3"
            ></path>
          </svg>
        </button>
        <button className="hover:text-blue-600" type="button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path
              d="M7 13v-8a1 1 0 0 0 -1 -1h-2a1 1 0 0 0 -1 1v7a1 1 0 0 0 1 1h3a4 4 0 0 1 4 4v1a2 2 0 0 0 4 0v-5h3a2 2 0 0 0 2 -2l-1 -5a2 3 0 0 0 -2 -2h-7a3 3 0 0 0 -3 3"
            ></path>
          </svg>
        </button>
        <button className="hover:text-blue-600" type="button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path
              d="M8 8m0 2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z"
            ></path>
            <path
              d="M16 8v-2a2 2 0 0 0 -2 -2h-8a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h2"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  </div>
);

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const messagesEndRef = useRef(null);

  const handleUserInput = (input) => {
    const userMessage = { user: input, bot: '' };
    setMessages([...messages, userMessage]);

    // Simulate API call and response
    setTimeout(() => {
      const botResponse = {
        ...userMessage,
        bot: "This is a simulated response for: " + userMessage.user,
      };
      setMessages((prevMessages) =>
        prevMessages.map((msg, index) =>
          index === prevMessages.length - 1 ? botResponse : msg
        )
      );
    }, 1000); // Simulate 1 second delay for API response
  };

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  return (
    <div className="flex flex-col h-screen">
      <div className="flex-1 overflow-y-auto bg-slate-300 text-sm leading-6 text-slate-900 shadow-md dark:bg-slate-800 dark:text-slate-300 sm:text-base sm:leading-7">
        {messages.map((msg, index) => (
          <div key={index}>
            <UserMessage message={msg.user} />
            {msg.bot && <BotMessage message={msg.bot} />}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <ChatInput onSubmit={handleUserInput} />
      {/* <ExtraInfo /> */}
    </div>
  );
};

export default Chat;
