import React, { useState, useEffect } from "react";
import { Github, Linkedin, Mail, Instagram, Music2 } from "lucide-react";
import { useSound } from "./SoundContext";
import { dialogues } from "../data/portfolioData";
import Reveal from "./Reveal";

export default function AboutSection({ onNavigate }) {
  const [shown, setShown] = useState(0);

  useEffect(() => {
    if (shown < dialogues.length - 1) {
      const t = setTimeout(() => setShown((p) => p + 1), 1800);
      return () => clearTimeout(t);
    }
  }, [shown]);

  const { playClick, playHover } = useSound();

  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      {/* Container without the heavy background box */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-12 lg:gap-20">

        {/* =========================================
            LEFT COLUMN: AVATAR & NAME PLATE
            ========================================= */}
        <Reveal direction="scale" className="flex flex-col items-center gap-6 w-full md:w-1/3 flex-shrink-0">

          {/* Glowing thin frame for avatar */}
          <div
            className="relative w-48 h-48 border border-purple-500/40 p-2 anim-sprite-idle group"
            style={{ boxShadow: "0 0 40px rgba(168,85,247,0.1), inset 0 0 20px rgba(168,85,247,0.05)" }}
          >
            {/* Minimalist corner crosshairs */}
            <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-purple-500" />
            <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-purple-500" />
            <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-purple-500" />
            <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-purple-500" />

            {/* Avatar Image */}
            <div className="w-full h-full bg-[#050510] overflow-hidden relative border border-purple-900/30">
              <img
                src="/profile.png"
                alt="Abil Qialani"
                className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-purple-500/10 mix-blend-overlay pointer-events-none" />
              {/* Scanline overlay over photo */}
              <div className="absolute inset-0 pointer-events-none opacity-50"
                style={{ background: "repeating-linear-gradient(0deg, rgba(0,0,0,0.1) 0px, rgba(0,0,0,0.1) 1px, transparent 1px, transparent 3px)" }} />
            </div>

            {/* Status dot */}
            <div className="absolute top-4 right-4 w-2 h-2 bg-green-400 rounded-full anim-status" />
          </div>

          {/* Simple Name Plate */}
          <div className="text-center space-y-3 mt-2">
            <h1 className="pixel-text text-xl sm:text-2xl text-white tracking-wider" style={{ textShadow: "2px 2px 0 rgba(168,85,247,0.8)" }}>
              ABIL QIALANI
            </h1>
            <p className="pixel-text text-purple-400 opacity-80" style={{ fontSize: "0.55rem", letterSpacing: "0.1em" }}>
              LVL 10 FULL-STACK BUILDER
            </p>
          </div>

          <div className="flex flex-wrap justify-center md:justify-start gap-5 mt-4">
            {[
              { href: "https://github.com/abil788", icon: Github, color: "hover:text-white" },
              { href: "https://www.linkedin.com/in/gabriel-qialani/", icon: Linkedin, color: "hover:text-blue-400" },
              { href: "https://www.instagram.com/abiel.qialani/", icon: Instagram, color: "hover:text-pink-500" },
              { href: "https://www.tiktok.com/@islamioabilano", icon: Music2, color: "hover:text-cyan-400" },
              { href: "mailto:abielqialani@gmail.com", icon: Mail, color: "hover:text-red-400" },
            ].map(({ href, icon: Icon, color }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={playHover}
                onClick={playClick}
                className={`text-gray-500 transition-all hover:scale-125 hover:-translate-y-1 ${color}`}
              >
                <Icon size={20} strokeWidth={1.5} />
              </a>
            ))}
          </div>
        </Reveal>


        {/* =========================================
            RIGHT COLUMN: DATA & STATS
            ========================================= */}
        <Reveal direction="up" delay={0.2} className="w-full md:w-2/3 flex flex-col justify-center space-y-10 pt-4 md:pt-6">

          {/* Dialogue System (Directly on background) */}
          <div className="relative">
            <div className="absolute -left-6 sm:-left-8 top-1 text-purple-500/50 text-xl font-bold anim-blink">▶</div>
            <div className="space-y-6 border-l border-purple-900/40 pl-5 sm:pl-6 py-1">
              {dialogues.slice(0, shown + 1).map((text, i) => (
                <p
                  key={i}
                  className={`pixel-text text-[0.65rem] sm:text-xs leading-[2.2] tracking-widest 
                    ${i === shown ? "text-green-300 typewriter-caret" : "text-gray-400"}
                  `}
                >
                  {text}
                </p>
              ))}
            </div>
          </div>

          {/* Elegant Stats Row */}
          <div className="grid grid-cols-3 gap-8 pt-8 border-t border-purple-900/30">
            {[
              { label: "LEVEL", value: "10", color: "text-purple-400" },
              { label: "PROJECTS", value: "5+", color: "text-green-400" },
              { label: "TOTAL XP", value: "12.5K", color: "text-blue-400" },
            ].map(({ label, value, color }) => (
              <div key={label} className="flex flex-col gap-2">
                <span className={`pixel-text text-xl sm:text-2xl ${color}`}>{value}</span>
                <span className="pixel-text text-gray-600" style={{ fontSize: "0.45rem", letterSpacing: "0.1em" }}>{label}</span>
              </div>
            ))}
          </div>

          {/* Minimalist Tech Stack */}
          <div className="pt-6 border-t border-purple-900/30">
            <p className="pixel-text text-gray-600 mb-5" style={{ fontSize: "0.45rem", letterSpacing: "0.1em" }}>
              EQUIPPED ARSENAL
            </p>
            <div className="flex flex-wrap gap-4 sm:gap-6 mb-8">
              {["Laravel", "React", "Flutter", "PHP", "MySQL", "Next", "Tailwind"].map((t) => (
                <span
                  key={t}
                  className="pixel-text text-gray-400 hover:text-purple-300 transition-colors cursor-default"
                  style={{ fontSize: "0.55rem" }}
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Lore Button */}
            <button
              onClick={() => onNavigate("lore")}
              className="pixel-btn px-6 py-3 border-2 border-cyan-500 bg-cyan-900/40 text-cyan-300 hover:bg-cyan-900/60 hover:text-white transition-all text-xs flex items-center gap-3 hover:translate-x-2"
              style={{ boxShadow: "0 0 15px rgba(6,182,212,0.2)" }}
            >
              <span className="anim-blink">▶</span>
              VIEW PLAYER LORE
            </button>
          </div>

        </Reveal>
      </div>
    </div>
  );
}
