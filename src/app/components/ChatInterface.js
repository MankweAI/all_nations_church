"use client";

import { useState, useRef, useEffect } from "react";
import { content } from "@/assets/text/content.js";
import VoiceNotePlayer from "./VoiceNotePlayer.js";
import MessageStatus from "./MessageStatus.js";
import React from "react";
import Image from "next/image";

// --- SVG Icon Components ---
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
      strokeWidth={2}
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
      strokeWidth={2}
      d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
    />
  </svg>
);
const VideoIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
    <path
      fillRule="evenodd"
      d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.022 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
      clipRule="evenodd"
    />
  </svg>
);
const PhoneIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
  </svg>
);
const MenuIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
    <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
  </svg>
);

// --- Helper Function for Date Formatting ---
const formatDate = (date) => {
  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);
  if (date.toDateString() === today.toDateString()) return "Today";
  if (date.toDateString() === yesterday.toDateString()) return "Yesterday";
  return date.toLocaleDateString("en-US", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });
};

export default function ChatInterface() {
  const [messages, setMessages] = useState([
    { id: 1, content: content.mainMenu, sender: "bot", timestamp: new Date() },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [conversationState, setConversationState] = useState("main_menu");
  const [userName, setUserName] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    const userMessage = {
      id: Date.now(),
      content: inputValue,
      sender: "user",
      timestamp: new Date(),
      status: "sent",
    };
    setMessages((prev) => [...prev, userMessage]);
    setTimeout(() => {
      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === userMessage.id ? { ...msg, status: "delivered" } : msg
        )
      );
    }, 400);
    const userInput = inputValue.trim();
    setInputValue("");
    generateBotResponse(userInput, userMessage.id);
  };

  const generateBotResponse = (userInput, userMessageId) => {
    setIsTyping(true);
    setTimeout(() => {
      let botResponse;
      let newConversationState = conversationState;
      let additionalResponse;

      if (conversationState === "awaiting_podcast_selection") {
        botResponse = content.podcastNotAvailable;
        newConversationState = "main_menu";
      } else if (conversationState === "awaiting_jesus_name") {
        setUserName(userInput);
        botResponse = content.acceptJesus.askPhone.replace("{name}", userInput);
        newConversationState = "awaiting_jesus_phone";
      } else if (conversationState === "awaiting_jesus_phone") {
        botResponse = content.acceptJesus.confirmation;
        newConversationState = "main_menu";
      } else if (conversationState === "awaiting_testimony_choice") {
        switch (userInput.toLowerCase()) {
          case "1":
            botResponse = content.responses.shareTestimonyNotAvailable;
            newConversationState = "main_menu";
            break;
          case "2":
            botResponse = content.responses.listenTestimonyAudio;
            additionalResponse = content.responses.listenTestimonyNavigation;
            newConversationState = "listening_to_testimonies";
            break;
          default:
            botResponse = content.responses.fallback;
            break;
        }
      } else {
        switch (userInput.toLowerCase()) {
          case "1":
            botResponse = content.responses.dailyBread;
            break;
          case "2":
            botResponse = content.podcastList;
            newConversationState = "awaiting_podcast_selection";
            break;
          case "3":
            botResponse = content.acceptJesus.askName;
            newConversationState = "awaiting_jesus_name";
            break;
          case "4":
            botResponse = content.responses.announcements;
            break;
          case "5":
            botResponse = content.testimonyMenu;
            newConversationState = "awaiting_testimony_choice";
            break;
          case "6":
            botResponse = content.responses.supportNotAvailable;
            break;
          case "7":
            botResponse = content.responses.prayerRequest;
            break;
          case "8":
            botResponse = content.responses.help;
            break;
          case "0":
          case "menu":
            botResponse = content.mainMenu;
            break;
          default:
            botResponse = content.responses.fallback;
            break;
        }
      }
      setIsTyping(false);
      setConversationState(newConversationState);
      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === userMessageId ? { ...msg, status: "read" } : msg
        )
      );
      const botMessage = {
        id: Date.now() + 1,
        content: botResponse,
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);

      if (additionalResponse) {
        setTimeout(() => {
          setMessages((prev) => [
            ...prev,
            {
              id: Date.now() + 2,
              content: additionalResponse,
              sender: "bot",
              timestamp: new Date(),
            },
          ]);
        }, 600);
      }
    }, 1200);
  };

  const getPlaceholderText = () => {
    switch (conversationState) {
      case "awaiting_jesus_name":
        return "Enter your full name...";
      case "awaiting_jesus_phone":
        return "Enter your contact number...";
      case "awaiting_podcast_selection":
        return "Enter a number (1-10)...";
      case "awaiting_testimony_choice":
        return "Enter 1 or 2...";
      default:
        return "Message";
    }
  };

  const renderMessageContent = (message) => {
    const { content } = message;
    if (content?.type === "audio") {
      return (
        <VoiceNotePlayer audioUrl={content.url} duration={content.duration} />
      );
    }
    if (content?.isMenu) {
      return (
        <div>
          <p className="text-sm whitespace-pre-wrap mb-3 text-gray-800">
            {content.welcome}
          </p>
          <div className="space-y-2 border-t border-gray-100 pt-2">
            {content.items.map((item) => (
              <div key={item.id} className="flex items-start">
                <span className="mr-2 font-medium text-gray-700">
                  {item.emoji}
                </span>
                <div>
                  <p className="font-semibold text-sm text-blue-600">
                    {item.title}
                  </p>
                  <p className="text-xs text-gray-500">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    }
    return (
      <p className="text-sm whitespace-pre-wrap text-gray-800">
        {String(content)}
      </p>
    );
  };

  return (
    <div className="flex flex-col h-full w-full bg-transparent">
      <header className="flex items-center p-2 bg-[#075E54] text-white shadow-md z-10">
        <div className="w-10 h-10 rounded-full bg-gray-300 mr-3 overflow-hidden relative">
          <Image
            src="/assets/images/profile-pic.png"
            alt="Church Profile Picture"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="flex-grow">
          <h1 className="font-semibold">All Nations Midrand</h1>
          <p className="text-xs text-gray-200">online</p>
        </div>
        <div className="flex items-center space-x-4 text-white">
          <VideoIcon />
          <PhoneIcon />
          <MenuIcon />
        </div>
      </header>
      <main className="flex-grow p-4 overflow-y-auto chat-background flex flex-col space-y-2">
        {messages.map((message, index) => {
          const prevMessage = messages[index - 1];
          const showDateDivider =
            !prevMessage ||
            message.timestamp.toDateString() !==
              prevMessage.timestamp.toDateString();
          return (
            <React.Fragment key={`fragment-${message.id}`}>
              {showDateDivider && (
                <div className="self-center bg-gray-200/80 backdrop-blur-sm text-gray-800 text-xs font-semibold px-3 py-1 rounded-full my-2 shadow">
                  {formatDate(message.timestamp)}
                </div>
              )}
              <div
                className={`max-w-xs rounded-lg shadow-sm relative flex items-end ${
                  message.sender === "bot"
                    ? "bg-white self-start"
                    : "bg-[#DCF8C6] self-end"
                } ${message.content?.type === "audio" ? "p-0" : "p-3"}`}
              >
                <div className="flex-grow pr-12">
                  {renderMessageContent(message)}
                </div>
                {message.sender === "user" && (
                  <div className="absolute bottom-1 right-1.5 flex items-center space-x-1">
                    <span className="text-[10px] text-gray-500/70">
                      {message.timestamp.toLocaleTimeString("en-US", {
                        hour: "numeric",
                        minute: "2-digit",
                      })}
                    </span>
                    <MessageStatus status={message.status} />
                  </div>
                )}
              </div>
            </React.Fragment>
          );
        })}
        {isTyping && (
          <div className="max-w-xs p-3 rounded-lg shadow-sm bg-white self-start">
            <div className="flex items-center space-x-1.5">
              <span className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"></span>
              <span
                className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"
                style={{ animationDelay: "0.2s" }}
              ></span>
              <span
                className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"
                style={{ animationDelay: "0.4s" }}
              ></span>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </main>
      <footer className="p-2 bg-transparent">
        <form className="flex items-center space-x-2" onSubmit={handleSubmit}>
          <div className="flex-grow flex items-center bg-white rounded-full px-4 py-2">
            <button type="button" className="text-gray-500 hover:text-gray-700">
              <EmojiIcon />
            </button>
            <input
              type="text"
              placeholder={getPlaceholderText()}
              className="flex-grow bg-transparent focus:outline-none mx-2 text-gray-900"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button
              type="button"
              className="text-gray-500 hover:text-gray-700 mr-2"
            >
              <PaperclipIcon />
            </button>
            {!inputValue && (
              <button
                type="button"
                className="text-gray-500 hover:text-gray-700"
              >
                <CameraIcon />
              </button>
            )}
          </div>
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
