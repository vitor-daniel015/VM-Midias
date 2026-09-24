import React from "react";

interface HeroVideoProps {
  src: string;
  poster: string;
}

export const HeroVideo: React.FC<HeroVideoProps> = ({ src, poster }) => (
  <div className="relative aspect-video w-full overflow-hidden border border-white/20 bg-[#08090c] shadow-[0_24px_70px_rgba(0,0,0,0.5)]">
    <video
        className="h-full w-full object-cover"
        controls
        playsInline
        preload="metadata"
        poster={poster}
        aria-label="Conheça a VM Mídias"
      >
        <source src={src} type="video/mp4" />
      </video>
  </div>
);
