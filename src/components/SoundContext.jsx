import React, { createContext, useContext, useEffect, useRef, useState } from 'react';

const SoundContext = createContext();

export const useSound = () => useContext(SoundContext);

export const SoundProvider = ({ children }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  
  const bgmRef = useRef(null);
  const clickRef = useRef(null);
  const hoverRef = useRef(null);
  const lastClickTime = useRef(0);
  
  useEffect(() => {
    bgmRef.current = new Audio('/sounds/backsound.mp3');
    bgmRef.current.loop = true;
    bgmRef.current.volume = 0.35; // Professional volume, not overpowering

    clickRef.current = new Audio('/sounds/click.mp3');
    clickRef.current.volume = 0.6; // Clear click

    // Reusing the click sound for hover, but very quite
    hoverRef.current = new Audio('/sounds/click.mp3'); 
    hoverRef.current.volume = 0.15;
  }, []);

  useEffect(() => {
    if (bgmRef.current) bgmRef.current.muted = isMuted;
    if (clickRef.current) clickRef.current.muted = isMuted;
    if (hoverRef.current) hoverRef.current.muted = isMuted;
  }, [isMuted]);

  const playBGM = () => {
    if (bgmRef.current && !isPlaying && !isMuted) {
      bgmRef.current.play().catch(e => console.log('BGM play failed:', e));
      setIsPlaying(true);
    }
  };

  const playClick = () => {
    if (clickRef.current && !isMuted) {
      // Prevent double-click echo from React synthetic events (like touch start + click)
      const now = Date.now();
      if (now - lastClickTime.current < 150) return; 
      lastClickTime.current = now;

      const clone = clickRef.current.cloneNode();
      clone.volume = clickRef.current.volume;
      clone.play().catch(() => {});
    }
  };

  const playHover = () => {
    // Only play hover on real mice (prevents mobile triggering hover THEN click = double sound)
    if (window.matchMedia('(hover: hover)').matches) {
      if (hoverRef.current && !isMuted) {
        // Just rewind rather than clone, prevents massive overlapping echoes when sweeping mouse
        hoverRef.current.currentTime = 0;
        hoverRef.current.play().catch(() => {});
      }
    }
  };

  const toggleMute = () => {
    setIsMuted(prev => {
      const newMuted = !prev;
      if (newMuted && bgmRef.current) {
        bgmRef.current.pause();
        setIsPlaying(false);
      } else if (!newMuted && bgmRef.current) {
        bgmRef.current.play().catch(console.error);
        setIsPlaying(true);
      }
      return newMuted;
    });
  };

  return (
    <SoundContext.Provider value={{ playBGM, playClick, playHover, isMuted, toggleMute }}>
      {children}
    </SoundContext.Provider>
  );
};
