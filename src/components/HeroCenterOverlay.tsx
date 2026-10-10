"use client";

import { useEffect, useRef } from "react";

export type HeroCenterVideoSource = {
  src: string;
  type: string;
};

type HeroCenterOverlayProps = {
  sources: HeroCenterVideoSource[];
  className?: string;
};

export function HeroCenterOverlay({ sources, className = "" }: HeroCenterOverlayProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || sources.length === 0) {
      return;
    }

    video.muted = true;
    video.defaultMuted = true;

    const tryPlay = () => {
      void video.play().catch(() => {});
    };

    tryPlay();
    video.addEventListener("canplay", tryPlay);

    return () => video.removeEventListener("canplay", tryPlay);
  }, [sources]);

  if (sources.length === 0) {
    return null;
  }

  return (
    <video
      ref={videoRef}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      aria-hidden
      className={className}
    >
      {sources.map((source) => (
        <source key={source.src} src={source.src} type={source.type} />
      ))}
    </video>
  );
}
