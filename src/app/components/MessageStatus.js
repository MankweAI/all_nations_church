// src/app/components/MessageStatus.js
"use client";

const SingleTick = () => (
  <svg
    className="w-4 h-4 text-gray-400"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 13l4 4L19 7"
    />
  </svg>
);

const DoubleTick = ({ color }) => (
  <svg
    className={`w-4 h-4 ${color}`}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 13l4 4L19 7"
    />
    <path
      className="opacity-60"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 13l4 4L19 7"
      transform="translate(-5, 0)"
    />
  </svg>
);

export default function MessageStatus({ status }) {
  if (status === "read") {
    return <DoubleTick color="text-blue-500" />;
  }
  if (status === "delivered") {
    return <DoubleTick color="text-gray-400" />;
  }
  // Default to 'sent'
  return <SingleTick />;
}
