// src/VideoBackground.tsx
import React from "react";
import "./VideoBackground.css";

const VideoBackground: React.FC = () => {
  return (
    <div className="video-background">
      <video autoPlay loop muted>
        <source src="/assets/video_background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoBackground;
