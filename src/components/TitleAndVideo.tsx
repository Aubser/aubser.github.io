'use client';

import React from 'react';

type VideoSectionProps = {
  title: string;
  text: string;
  posterSrc: string;
  videoSrcWebm: string;
  videoSrcMp4?: string; // optional fallback
};

const VideoSection: React.FC<VideoSectionProps> = ({
  title,
  text,
  posterSrc,
  videoSrcWebm,
}) => {
  return (
    <div className="flex flex-col items-center space-y-4 pt-40 pb-15 bg-gray-800 min-h-screen">
      {/* Title */}
      <h3 className="text-3xl md:text-4xl font-bold text-center text-white">
        {title}
      </h3>

      {/* Text */}
      <p className="text-base md:text-lg leading-relaxed text-white text-center max-w-3xl">
        {text}
      </p>

      {/* Video container */}
      <div className="w-full max-w-5xl aspect-video overflow-hidden rounded-lg shadow-lg">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster={posterSrc}
        >
          <source src={videoSrcWebm} type="video/webm" />
        </video>
      </div>
    </div>
  );
};

export default VideoSection;
