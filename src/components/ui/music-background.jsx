"use client";
import {
  useEffect,
  useRef,
  useState,
  forwardRef,
  useImperativeHandle,
} from "react";
import gsap from "gsap";
import { cn } from "@/lib/utils";

const BackgroundMusic = forwardRef(({ src = "/background.mp3" }, ref) => {
  const audioRef = useRef(null);
  const [isMuted, setIsMuted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  // Expose play method to parent (e.g. from preloader button)
  useImperativeHandle(ref, () => ({
    playMusic: () => {
      if (audioRef.current) {
        audioRef.current.volume = 0;
        audioRef.current.play();
        gsap.to(audioRef.current, {
          volume: 0.1,
          duration: 2,
          ease: "power2.out",
        });
        setIsPlaying(true);
      }
    },
    fadeOutMusic: () => {
      if (audioRef.current) {
        gsap.to(audioRef.current, {
          volume: 0,
          duration: 1.5,
          ease: "power2.in",
          onComplete: () => {
            audioRef.current.pause();
            setIsPlaying(false);
          },
        });
      }
    },
  }));

  const toggleMute = () => {
    if (!audioRef.current) return;
    audioRef.current.muted = !audioRef.current.muted;
    setIsMuted(audioRef.current.muted);
  };

  return (
    <>
      <audio ref={audioRef} src={src} loop preload="auto" />

      {/* Awwwards-style sound bar */}
      <div
        onClick={toggleMute}
        className={cn(
          "fixed bottom-5 right-5 z-[9999] flex items-center justify-center gap-[3px] cursor-pointer group bg-white rounded-full",
          "w-12 h-12"
        )}
        title={isMuted ? "Unmute" : "Mute"}
      >
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className={cn(
              "w-[3px] bg-black rounded-full origin-bottom transition-all",
              isMuted || !isPlaying ? "h-[4px]" : `animate-wave-${i + 1}`
            )}
          />
        ))}
      </div>
    </>
  );
});

BackgroundMusic.displayName = "BackgroundMusic";


export default BackgroundMusic;
