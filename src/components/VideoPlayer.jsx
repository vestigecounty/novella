/**
 * VideoPlayer.jsx
 * Inline video player component for dialogue scenes
 */

import React, { useState, useRef } from "react";
import { Volume2, VolumeX, ExternalLink } from "lucide-react";
import "../styles/video-player.css";

const VideoPlayer = ({ src }) => {
  const [isMuted, setIsMuted] = useState(false);
  const videoRef = useRef(null);

  const toggleMute = (e) => {
    e.stopPropagation(); // Prevent dialogue advance
    setIsMuted(!isMuted);
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
    }
  };

  const handleSourceClick = (e) => {
    e.stopPropagation(); // Prevent dialogue advance
    const videoName = src.split("/").pop();
    if (videoName === "catjammer.mp4") {
      window.open(
        "https://www.youtube.com/watch?v=xQlSntJgyQM",
        "_blank",
        "noopener,noreferrer",
      );
    }
  };

  const showSourceButton = src.split("/").pop() === "catjammer.mp4";

  return (
    <div className="video-player-container">
      <video
        ref={videoRef}
        className="video-player"
        src={src}
        autoPlay
        loop
        muted={isMuted}
        playsInline
      />
      <button
        className="video-mute-button"
        onClick={toggleMute}
        aria-label={isMuted ? "Unmute" : "Mute"}
      >
        {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
      </button>
      {showSourceButton && (
        <button
          className="video-source-button"
          onClick={handleSourceClick}
          aria-label="View source"
        >
          <ExternalLink size={20} />
        </button>
      )}
    </div>
  );
};

export default VideoPlayer;
