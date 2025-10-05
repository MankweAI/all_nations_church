"use client";

import { useState, useRef, useEffect } from "react";

// Play Icon (Triangle)
const PlayIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-5 h-5"
  >
    <path d="M8 5v14l11-7z" />
  </svg>
);

// Pause Icon
const PauseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-5 h-5"
  >
    <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
  </svg>
);

export default function VoiceNotePlayer({ audioUrl, duration = "0:00" }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [audioDuration, setAudioDuration] = useState(0);
  const [playbackRate, setPlaybackRate] = useState(1.0);
  const audioRef = useRef(null);

  // Initialize audio element
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleLoadedMetadata = () => {
      setAudioDuration(audio.duration);
    };

    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
    };

    const handleEnded = () => {
      setIsPlaying(false);
      setCurrentTime(0);
    };

    audio.addEventListener("loadedmetadata", handleLoadedMetadata);
    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("ended", handleEnded);
    };
  }, []);

  // Toggle play/pause
  const togglePlayPause = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  // Toggle playback speed
  const togglePlaybackSpeed = () => {
    const speeds = [1.0, 1.5, 2.0];
    const currentIndex = speeds.indexOf(playbackRate);
    const nextIndex = (currentIndex + 1) % speeds.length;
    const nextSpeed = speeds[nextIndex];

    setPlaybackRate(nextSpeed);
    if (audioRef.current) {
      audioRef.current.playbackRate = nextSpeed;
    }
  };

  // Format time (seconds to MM:SS)
  const formatTime = (seconds) => {
    if (isNaN(seconds)) return "0:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  // Handle progress bar click
  const handleProgressClick = (e) => {
    const audio = audioRef.current;
    if (!audio) return;

    const progressBar = e.currentTarget;
    const clickX = e.nativeEvent.offsetX;
    const width = progressBar.offsetWidth;
    const percentage = clickX / width;
    const newTime = percentage * audio.duration;

    audio.currentTime = newTime;
    setCurrentTime(newTime);
  };

  // Calculate progress percentage
  const progressPercentage = audioDuration
    ? (currentTime / audioDuration) * 100
    : 0;

  return (
    <div className="flex items-center space-x-2 bg-[#DCF8C6] p-2 rounded-lg max-w-xs">
      {/* Hidden audio element */}
      <audio ref={audioRef} src={audioUrl} preload="metadata" />

      {/* Play/Pause Button */}
      <button
        onClick={togglePlayPause}
        className="flex-shrink-0 w-10 h-10 rounded-full bg-[#128C7E] text-white flex items-center justify-center hover:bg-[#075E54] transition-colors"
        aria-label={isPlaying ? "Pause" : "Play"}
      >
        {isPlaying ? <PauseIcon /> : <PlayIcon />}
      </button>

      {/* Waveform & Progress Section */}
      <div className="flex-grow flex flex-col space-y-1">
        {/* Progress Bar */}
        <div
          className="relative h-1 bg-gray-300 rounded-full cursor-pointer"
          onClick={handleProgressClick}
        >
          <div
            className="absolute top-0 left-0 h-full bg-[#128C7E] rounded-full transition-all"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>

        {/* Time Display */}
        <div className="flex items-center justify-between text-xs text-gray-600">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(audioDuration)}</span>
        </div>
      </div>

      {/* Playback Speed Button */}
      <button
        onClick={togglePlaybackSpeed}
        className="flex-shrink-0 text-xs font-semibold text-gray-600 hover:text-gray-800 px-2 py-1 rounded bg-white/50"
        aria-label="Change playback speed"
      >
        {playbackRate}x
      </button>
    </div>
  );
}

