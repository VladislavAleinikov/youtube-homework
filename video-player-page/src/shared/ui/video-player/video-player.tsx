import React from 'react'

interface VideoPlayerProps{
  className?: string;
}

export const VideoPlayer: React.FC<VideoPlayerProps> = ({className}) => {
  return (
    <iframe
      className={className}
      src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=0&mute=1"
    ></iframe>
  );
}
