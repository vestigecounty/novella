/**
 * VideoPlayer.jsx
 * Inline video player component for dialogue scenes
 */

import React, { useState, useRef } from "react";
import { Volume2, VolumeX } from "lucide-react";
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
    </div>
  );
};

export default VideoPlayer;
