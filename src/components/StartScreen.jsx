import React, { useEffect, useRef, useState } from "react";

// Floating pixel particles in the background
const PARTICLES = Array.from({ length: 30 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  delay: Math.random() * 12,
  duration: 8 + Math.random() * 12,
  size: Math.random() > 0.6 ? 8 : 4,
  color: ["#a855f7", "#ec4899", "#06b6d4", "#fbbf24", "#22c55e"][
    Math.floor(Math.random() * 5)
  ],
  shape: Math.random() > 0.5 ? "square" : "diamond",
}));

// Static star field
const STARS = Array.from({ length: 60 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  delay: Math.random() * 4,
  duration: 2 + Math.random() * 3,
  size: Math.random() > 0.8 ? 3 : 1.5,
}));

export default function StartScreen({ onStart }) {
  const [glitch, setGlitch] = useState(false);
  const [bootLine, setBootLine] = useState(0);

  const bootLines = [
    "> CONNECTING TO MAINFRAME...",
    "> LOADING PORTFOLIO.EXE...",
    "> HERO DATA FOUND.",
    "> PRESS START TO CONTINUE.",
  ];

  useEffect(() => {
    const t = setInterval(() => {
      setBootLine((p) => (p < bootLines.length - 1 ? p + 1 : p));
    }, 600);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const g = setInterval(() => {
      setGlitch(true);
      setTimeout(() => setGlitch(false), 150);
    }, 5000 + Math.random() * 3000);
    return () => clearInterval(g);
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden bg-[#050510]">

      {/* STAR FIELD */}
      {STARS.map((s) => (
        <div
          key={s.id}
          className="absolute rounded-sm"
          style={{
            left: `${s.x}%`,
            top: `${s.y}%`,
            width: s.size,
            height: s.size,
            background: "#fff",
            opacity: 0.3,
            animation: `twinkle ${s.duration}s ease-in-out ${s.delay}s infinite`,
          }}
        />
      ))}

      {/* FLOATING PIXEL PARTICLES */}
      {PARTICLES.map((p) => (
        <div
          key={p.id}
          className="pixel-particle pointer-events-none"
          style={{
            left: `${p.x}%`,
            width: p.size,
            height: p.size,
            background: p.color,
            boxShadow: `0 0 6px ${p.color}`,
            transform: p.shape === "diamond" ? "rotate(45deg)" : "none",
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            opacity: 0,
          }}
        />
      ))}

      {/* GRID BACKGROUND */}
      <div
        className="absolute inset-0 opacity-[0.07] anim-grid-drift"
        style={{
          backgroundImage:
            "linear-gradient(rgba(168,85,247,1) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,1) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* SCANLINE SWEEP */}
      <div
        className="absolute inset-0 pointer-events-none anim-scanline"
        style={{
          background: "linear-gradient(transparent 0%, rgba(168,85,247,0.04) 50%, transparent 100%)",
          height: "200px",
          top: 0,
        }}
      />

      {/* CENTER GLOW */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(168,85,247,0.08) 0%, transparent 70%)" }} />

      {/* CONTENT */}
      <div className="relative z-10 flex flex-col items-center gap-10 px-4 text-center w-full max-w-3xl">

        {/* TOP BAR */}
        <div className="w-full flex items-center justify-between px-4 py-2 border border-purple-900/50 bg-black/40 backdrop-blur-sm">
          <span className="pixel-text text-purple-600 px-tiny">INSERT COIN ▶</span>
          <span className="pixel-text text-green-400 px-tiny anim-blink">● ONLINE</span>
        </div>

        {/* TITLE BLOCK */}
        <div className="space-y-4">
          <div className={`relative transition-all ${glitch ? "anim-glitch" : ""}`}>
            <h1
              className="pixel-text px-title font-bold text-transparent bg-clip-text anim-title-glow"
              style={{
                backgroundImage: "linear-gradient(135deg, #a855f7 0%, #ec4899 50%, #a855f7 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
              }}
            >
              ABIL'S
            </h1>
            <h1
              className="pixel-text px-title font-bold text-white"
              style={{ textShadow: "0 0 30px rgba(168,85,247,0.6), 4px 4px 0 #000" }}
            >
              PORTFOLIO
            </h1>
          </div>

          <div className="neon-divider w-64 mx-auto" />

          <p className="pixel-text px-subtitle text-purple-300 tracking-widest">
            ⚔ &nbsp; EPIC ADVENTURE AWAITS &nbsp; ⚔
          </p>
        </div>

        {/* BOOT LOG */}
        <div className="w-full max-w-md bg-black/70 border border-purple-900/60 p-4 text-left space-y-1 backdrop-blur-sm">
          {bootLines.slice(0, bootLine + 1).map((line, i) => (
            <p key={i} className={`mono-text text-xs ${i === bootLine ? "text-green-400 typewriter-caret" : "text-green-600/70"}`}>
              {line}
            </p>
          ))}
        </div>

        {/* PRESS START BUTTON */}
        <button
          onClick={onStart}
          className="pixel-btn relative px-10 py-5 text-sm text-white border-4 border-purple-500 bg-gradient-to-b from-purple-700 to-purple-900 hover:from-purple-600 hover:to-purple-800 hover:border-pink-400 transition-all glow-purple"
          style={{ boxShadow: "4px 4px 0 #000, 0 0 20px rgba(168,85,247,0.4)" }}
        >
          <span className="flex items-center gap-4">
            <span className="anim-blink">▶</span>
            PRESS START
            <span className="anim-blink" style={{ animationDelay: "0.45s" }}>◀</span>
          </span>
          {/* pixel shadow strip */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-purple-900" />
        </button>

        {/* BOTTOM STATUS */}
        <div className="flex gap-6 text-center">
          {[
            { label: "PROJECTS", value: "5+" },
            { label: "SKILLS", value: "12+" },
            { label: "XP", value: "12.5K" },
          ].map((s) => (
            <div key={s.label} className="px-4 py-2 border border-purple-900/50 bg-black/30">
              <div className="pixel-text text-purple-400 text-sm">{s.value}</div>
              <div className="pixel-text text-gray-600 mt-1" style={{ fontSize: "0.45rem" }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* COPYRIGHT */}
        <p className="pixel-text text-gray-800" style={{ fontSize: "0.4rem" }}>
          © 2024 ABIL QIALANI • ALL RIGHTS RESERVED
        </p>
      </div>
    </div>
  );
}
