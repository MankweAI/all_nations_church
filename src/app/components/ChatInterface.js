"use client";

import { useState, useRef, useEffect } from "react";
import { content } from "@/assets/text/content.js";
import VoiceNotePlayer from "./VoiceNotePlayer.js";

// --- SVG Icon Components (keep all existing icons) ---
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
  // --- State Management ---
  const [messages, setMessages] = useState([
    { id: 1, content: content.mainMenu, sender: "bot" },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [conversationState, setConversationState] = useState({
    stage: "main_menu",
    userData: {},
  });

  // --- Ref for auto-scrolling ---
  const messagesEndRef = useRef(null);

  // --- Auto-scroll to bottom when messages change ---
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // --- Handle Form Submission ---
  const handleSubmit = (e) => {
    e.preventDefault();

    // Don't process empty messages
    if (!inputValue.trim()) return;

    // Create user message object
    const userMessage = {
      id: Date.now(),
      content: inputValue,
      sender: "user",
    };

    // Add user message to state
    setMessages((prevMessages) => [...prevMessages, userMessage]);

    // Store the input value before clearing
    const userInput = inputValue.trim();

    // Clear input field
    setInputValue("");

    // Generate bot response after a short delay
    generateBotResponse(userInput);
  };

  // --- Generate Bot Response Logic ---
  const generateBotResponse = (userInput) => {
    // Simulate realistic typing delay
    setTimeout(() => {
      let botResponse = "";
      let newConversationState = { ...conversationState };

      // --- Handle Multi-Step Conversations ---
      if (conversationState.stage === "accept_jesus_name") {
        // Store the name
        newConversationState.userData.name = userInput;
        newConversationState.stage = "accept_jesus_phone";
        botResponse = content.acceptJesus.askPhone;
      } else if (conversationState.stage === "accept_jesus_phone") {
        // Store the phone number
        newConversationState.userData.phone = userInput;
        newConversationState.stage = "main_menu";
        // Personalized confirmation message
        botResponse = content.acceptJesus.confirmation.replace(
          "{name}",
          newConversationState.userData.name || "friend"
        );
      }
      // --- Handle Main Menu Options ---
      else {
        // Normalize input (trim and lowercase)
        const normalizedInput = userInput.toLowerCase();

        switch (normalizedInput) {
          case "1":
            botResponse = content.responses.dailyBread; // ✅ FIXED: Changed from dailyBites
            break;

          case "2":
            botResponse = content.responses.sermons;
            break;

          case "3":
            // Start the "Accept Jesus" multi-step flow
            newConversationState.stage = "accept_jesus_name";
            newConversationState.userData = {};
            botResponse = content.acceptJesus.askName;
            break;

          case "4":
            botResponse = content.responses.announcements;
            break;

          case "5":
            botResponse = content.responses.testimonies;
            break;

          case "6":
            botResponse = content.responses.support;
            break;

          case "7":
            botResponse = content.responses.inviteFriend;
            break;

          case "8":
            botResponse = content.responses.help;
            break;

          case "0":
          case "menu":
          case "main menu":
            // Return to main menu
            botResponse = content.mainMenu;
            newConversationState.stage = "main_menu";
            newConversationState.userData = {};
            break;

          default:
            // Unrecognized input
            botResponse = content.responses.fallback;
            break;
        }
      }

      // Update conversation state
      setConversationState(newConversationState);

      // Create bot message object
      const botMessage = {
        id: Date.now(),
        content: botResponse,
        sender: "bot",
      };

      // Add bot message to state
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    }, 700); // 700ms delay for realistic feel
  };

  return (
    <div className="flex flex-col h-full w-full bg-transparent">
      {/* Header */}
      <header className="flex items-center p-2 bg-[#075E54] text-white shadow-md z-10">
        <div className="w-10 h-10 rounded-full bg-gray-300 mr-3"></div>
        <div className="flex-grow">
          <h1 className="font-semibold">[Church Name]</h1>
          <p className="text-xs text-gray-200">online</p>
        </div>
      </header>

      {/* Chat Messages Area */}
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
            {/* Check if message is audio type */}
            {message.content?.type === "audio" ? (
              <VoiceNotePlayer
                audioUrl={message.content.url}
                duration={message.content.duration}
              />
            ) : (
              <p className="text-sm whitespace-pre-wrap">{message.content}</p>
            )}
          </div>
        ))}
        {/* Invisible element to scroll to */}
        <div ref={messagesEndRef} />
      </main>

      {/* Input Footer */}
      <footer className="p-2 bg-transparent">
        <form className="flex items-center space-x-2" onSubmit={handleSubmit}>
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
