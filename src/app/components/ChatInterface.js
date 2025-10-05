"use client";

import { useState } from "react";
import { content } from "@/assets/text/content.js";

// --- SVG Icon Components for a cleaner look ---
const MicIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
    />
  </svg>
);

const SendIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6 rotate-90"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
    />
  </svg>
);

// New Icon
const EmojiIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

// New Icon
const PaperclipIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6 -rotate-45"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
    />
  </svg>
);

// New Icon
const CameraIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
    />
  </svg>
);

export default function ChatInterface() {
  const [messages, setMessages] = useState([
    { id: 1, content: content.mainMenu, sender: "bot" },
  ]);
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="flex flex-col h-full w-full bg-transparent">
      <header className="flex items-center p-2 bg-[#075E54] text-white shadow-md z-10">
        <div className="w-10 h-10 rounded-full bg-gray-300 mr-3"></div>
        <div className="flex-grow">
          <h1 className="font-semibold">[Church Name]</h1>
          <p className="text-xs text-gray-200">online</p>
        </div>
      </header>

      <main className="flex-grow p-4 overflow-y-auto chat-background flex flex-col space-y-2">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`max-w-xs p-3 rounded-lg shadow-sm ${
              message.sender === "bot"
                ? "bg-white self-start"
                : "bg-[#DCF8C6] self-end"
            }`}
          >
            {message.content && message.content.isMenu ? (
              <div>
                <p className="text-sm whitespace-pre-wrap mb-3">
                  {message.content.welcome}
                </p>
                <div className="space-y-2 border-t border-gray-100 pt-2">
                  {message.content.items.map((item) => (
                    <div key={item.id} className="flex items-start">
                      <span className="mr-2">{item.emoji}</span>
                      <div>
                        <p className="font-semibold text-sm text-blue-600">
                          {item.title}
                        </p>
                        <p className="text-xs text-gray-500">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <p className="text-sm whitespace-pre-wrap">{message.content}</p>
            )}
          </div>
        ))}
      </main>

      {/* --- This is the new, improved footer --- */}
      <footer className="p-2 bg-transparent">
        <form className="flex items-center space-x-2">
          {/* Main input container */}
          <div className="flex-grow flex items-center bg-white rounded-full px-4 py-2">
            {/* Emoji Icon */}
            <button type="button" className="text-gray-500 hover:text-gray-700">
              <EmojiIcon />
            </button>

            <input
              type="text"
              placeholder="Message"
              className="flex-grow bg-transparent focus:outline-none mx-2"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />

            {/* Attachment Icon */}
            <button
              type="button"
              className="text-gray-500 hover:text-gray-700 mr-2"
            >
              <PaperclipIcon />
            </button>

            {/* Camera Icon (only show if not typing) */}
            {!inputValue && (
              <button
                type="button"
                className="text-gray-500 hover:text-gray-700"
              >
                <CameraIcon />
              </button>
            )}
          </div>

          {/* Send / Mic button */}
          <button
            type="submit"
            className="w-12 h-12 flex items-center justify-center rounded-full bg-[#128C7E] text-white flex-shrink-0"
          >
            {inputValue ? <SendIcon /> : <MicIcon />}
          </button>
        </form>
      </footer>
    </div>
  );
}
