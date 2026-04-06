import React, { useEffect, useRef, useState } from "react";
import { BarChart3 } from "lucide-react";
import { skills } from "../data/portfolioData";
import Reveal from "./Reveal";

const LANGS = {
   html: { name: 'HTML', svg: `<svg viewBox="0 0 32 32"><path d="M4 0l2.8 31.4L16 34l9.2-2.6L28 0z" fill="#e44d26"/><path d="M16 31.1l7.4-2.1 2.4-27H16z" fill="#f16529"/><path d="M16 13.5H10l-.4-4.5H16V4.6H5.2l1.3 14.7H16zm0 9.8-.1.1-4.9-1.3-.3-3.6H6.3l.6 7.1 9.1 2.5z" fill="#fff"/><path d="M16 13.5v4.8h5.6l-.5 5.6L16 25v5l9.1-2.5.7-7.8.7-6.3zm0-8.9v4.4h10.6l.3-4.4z" fill="#ebebeb"/></svg>` },
   css: { name: 'CSS3', svg: `<svg viewBox="0 0 32 32"><path d="M4 0l2.8 31.4L16 34l9.2-2.6L28 0z" fill="#1572b6"/><path d="M16 31.1l7.4-2.1 2.4-27H16z" fill="#33a9dc"/><path d="M16 13.5H9.8L9.4 9H16V4.6H5.1l1.3 14.7H16zm0 9.9-.1.1-4.9-1.4-.3-3.6H6.3l.6 7.1L16 29v-5.6z" fill="#fff"/><path d="M16 13.5v4.8h5.9l-.5 6.2L16 26.1V31l9.1-2.5L27.5 9H16v4.5z" fill="#ebebeb"/></svg>` },
   js: { name: 'JavaScript', svg: `<svg viewBox="0 0 32 32"><rect width="32" height="32" fill="#f7df1e"/><path d="M6.5 25.3l3-1.8c.6 1 1.1 1.9 2.3 1.9 1.2 0 1.9-.5 1.9-2.3V13h3.7v10.2c0 3.7-2.2 5.4-5.4 5.4-2.9 0-4.5-1.5-5.5-3.3zm12.1-.4 3-1.8c.8 1.3 1.8 2.2 3.6 2.2 1.5 0 2.5-.75 2.5-1.8 0-1.25-.99-1.7-2.66-2.43l-.91-.39c-2.63-1.12-4.38-2.53-4.38-5.5 0-2.74 2.08-4.82 5.34-4.82 2.32 0 3.98.8 5.18 2.93l-2.84 1.82c-.62-1.12-1.3-1.56-2.34-1.56-1.06 0-1.74.68-1.74 1.56 0 1.09.68 1.53 2.24 2.2l.91.39c3.1 1.33 4.86 2.68 4.86 5.72 0 3.28-2.57 5.09-6.03 5.09-3.38 0-5.56-1.6-6.63-3.75z" fill="#000"/></svg>` },
   python: { name: 'Python', svg: `<svg viewBox="0 0 32 32"><path d="M15.9 2C11.2 2 11.5 4 11.5 4v4.2h4.6v1.3H8.1S4 9 4 14.1s3.6 4.9 3.6 4.9h2.1v-2.4s-.1-3.6 3.5-3.6h6s3.4.05 3.4-3.3V5.3S23.2 2 15.9 2z" fill="#3776ab"/><path d="M16.1 30.1c4.7 0 4.4-2 4.4-2v-4.2h-4.6v-1.3H24s4.1.5 4.1-4.6S24.5 13 24.5 13h-2.1v2.4s.1 3.6-3.5 3.6h-6s-3.4-.05-3.4 3.3v5.5S8.8 30.1 16.1 30.1z" fill="#ffd43b"/><circle cx="13.2" cy="5.8" r="1.2" fill="#fff"/><circle cx="18.8" cy="26.2" r="1.2" fill="#fff"/></svg>` },
   php: { name: 'PHP', svg: `<svg viewBox="0 0 32 32"><ellipse cx="16" cy="16" rx="15" ry="9" fill="#8993be"/><path d="M10.6 12h2l-.4 2H14c1.4 0 2.3.7 2 2.2l-.6 3.8h-2l.6-3.5c.1-.7-.1-1-.7-1h-1.6l-.8 4.5h-2zm9 0h2l-.4 2h1.8c1.4 0 2.3.7 2 2.2l-.6 3.8h-2l.6-3.5c.1-.7-.1-1-.7-1h-1.6l-.8 4.5h-2z" fill="#fff"/></svg>` },
   mysql: { name: 'MySQL', svg: `<svg viewBox="0 0 32 32"><path d="M2 20c2.5.3 4-.4 5.4-1.2.4-.2 1.4-.5 1.6-1-.5-.1-1.1-.2-1.6-.1-.6 0-1.2.1-1.8.3-.4.1-.9.4-1.4.4V16c.5-.1 1-.3 1.5-.3.7-.1 1.5-.1 2.2 0 1.8.3 2.8 1.2 2.8 3 0 .7-.3 1.4-1 1.9-1.1.8-2.7 1-4 1C3.8 22 2.5 21.5 2 20z" fill="#00758f"/><path d="M12 6.5h2.4l2.8 7.4 2.8-7.4h2.3l-4.1 9.9c-.9 2.2-1.6 3-3.4 3-.4 0-.8 0-1.2-.1V17c.3.1.6.1.9.1.7 0 1.2-.4 1.6-1.3L12 6.5z" fill="#00758f"/><path d="M27.5 9.3h-5.7v2h4.8v2h-4.8v2.2h5.7v2H20V7.3h7.5z" fill="#f29111"/><path d="M2 13.8c2.3.2 3.8-.3 5.2-1 .4-.2 1.3-.4 1.5-.9-.5-.1-1-.2-1.5-.2-.6 0-1.2.1-1.7.3-.5.1-.9.3-1.4.3v-1.8c.4-.1.9-.3 1.4-.3.7-.1 1.4-.1 2.1.1 1.7.4 2.6 1.3 2.6 3.1 0 .7-.3 1.4-1 1.9-1 .8-2.6 1-3.8 1C3.5 16.3 2.3 15.6 2 13.8z" fill="#00758f"/></svg>` },
   laravel: { name: 'Laravel', svg: `<svg viewBox="0 0 32 32"><path d="M30 8.7l-9.3-5.4a1 1 0 00-1 0L10.4 9l-8.5-4.9a1 1 0 00-1 0A1 1 0 000 5v12a1 1 0 00.5.9l9.5 5.5v10.7a1 1 0 00.5.9 1 1 0 001 0L30 23.3a1 1 0 00.5-.9V9.6a1 1 0 00-.5-.9z" fill="#ff2d20"/><path d="M29 22.8L11.5 32.7V22l17.5-10.1zM1.5 5.9l8.5 4.9v10.8L1.5 17.2zM11.5 9.6l8.2-4.7 8.8 5.1-8.5 4.9z" fill="rgba(0,0,0,.18)"/></svg>` },
   git: { name: 'Git', svg: `<svg viewBox="0 0 32 32"><path d="M30.8 14.6L17.4 1.2a2.5 2.5 0 00-3.5 0l-2.5 2.5 3.1 3.1a3 3 0 013.8 3.8l3 3a3 3 0 11-1.5 1.5l-2.8-2.8v7.3a3 3 0 11-2 0V12a3 3 0 01-1.6-3.9L10.3 4.9 1.2 14a2.5 2.5 0 000 3.5l13.4 13.3a2.5 2.5 0 003.5 0l12.7-12.7a2.5 2.5 0 000-3.5z" fill="#f05032"/></svg>` },
   next: { name: 'Next.js', svg: `<svg viewBox="0 0 128 128"><path fill="#fff" d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64 64-28.7 64-64S99.3 0 64 0zm33.8 95.8L51.4 34.6H43v58.8h7.4V44.2l39.5 54.1c-1.9 1.1-3.9 2-6 2.8 5.4.1 10.7-.6 15.9-2.3-2 1.1-4 2.1-6.1 3zm-2.1-36.8h-7.4v24.2l7.4 10.1V59z"/></svg>` },
   react: { name: 'React', svg: `<svg viewBox="-11.5 -10.23174 23 20.46348"><circle cx="0" cy="0" r="2.05" fill="#61dafb"/><g stroke="#61dafb" stroke-width="1" fill="none"><ellipse rx="11" ry="4.2"/><ellipse rx="11" ry="4.2" transform="rotate(60)"/><ellipse rx="11" ry="4.2" transform="rotate(120)"/></g></svg>` },
   tailwind: { name: 'Tailwind CSS', svg: `<svg viewBox="0 0 32 32"><path d="M16 8.5C13 8.5 11 10 10 13c1.5-2 3.5-2.5 6-1.5 1.5.6 2.5 1.7 3.7 2.9 1.9 2 4.1 4.1 8.3 4.1 3 0 5-1.5 6-4.5-1.5 2-3.5 2.5-6 1.5-1.5-.6-2.5-1.7-3.7-2.9-2-2-4.1-4.1-8.3-4.1zm-6 9c-3 0-5 1.5-6 4.5 1.5-2 3.5-2.5 6-1.5 1.5.6 2.5 1.7 3.7 2.9 1.9 2 4.1 4.1 8.3 4.1 3 0 5-1.5 6-4.5-1.5 2-3.5 2.5-6 1.5-1.5-.6-2.5-1.7-3.7-2.9-2-2-4.1-4.1-8.3-4.1z" fill="#38bdf8"/></svg>` },
   pwa: { name: 'PWA', svg: `<svg viewBox="0 0 32 32"><path d="M16 2L2 9l14 7 14-7-14-7zM2 23l14 7 14-7-14-7-14 7z" fill="#5a0fc8"/></svg>` }
};

const GEAR_KEYS = Object.keys(LANGS);

function SkillBar({ skill, index }) {
  const lvl = Math.floor(skill.level / 10);
  const Icon = skill.icon;
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div 
      ref={ref} 
      className={`space-y-2 group transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`} 
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      {/* Label row */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Icon size={16} style={{ color: skill.color }} className="group-hover:scale-125 transition-transform" />
          <span className="pixel-text text-gray-400 group-hover:text-gray-200 transition-colors" style={{ fontSize: "0.55rem" }}>
            {skill.name}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="pixel-text text-gray-500" style={{ fontSize: "0.5rem" }}>{skill.level}</span>
          <span className="pixel-text text-gray-700" style={{ fontSize: "0.4rem" }}>/100</span>
        </div>
      </div>

      {/* Bar track */}
      <div className="relative h-6 bg-gray-950 border border-gray-800 overflow-hidden group-hover:border-gray-700 transition-colors">
        {/* Filled portion */}
        <div
          className="h-full relative overflow-hidden transition-all duration-1000 ease-out"
          style={{ 
            width: isVisible ? `${skill.level}%` : "0%", 
            background: `linear-gradient(90deg, ${skill.color}99, ${skill.color})`, 
            boxShadow: `0 0 10px ${skill.color}60` 
          }}
        >
          {/* Stripe overlay */}
          <div className="absolute inset-0 opacity-20"
            style={{ backgroundImage: "repeating-linear-gradient(90deg, transparent, transparent 6px, rgba(0,0,0,0.4) 6px, rgba(0,0,0,0.4) 8px)" }} />
          {/* Level label inside bar */}
          <span className="absolute right-2 top-1/2 -translate-y-1/2 pixel-text text-white font-bold drop-shadow-lg transition-opacity duration-300" style={{ fontSize: "0.45rem", opacity: isVisible ? 1 : 0 }}>
            LVL {lvl}
          </span>
        </div>

        {/* Tick marks */}
        {Array.from({ length: 9 }, (_, i) => (
          <div key={i} className="absolute top-0 bottom-0 w-px bg-gray-900/80" style={{ left: `${(i + 1) * 10}%` }} />
        ))}
      </div>
    </div>
  );
}

export default function SkillsSection() {
  const avg = Math.round(skills.reduce((a, s) => a + s.level, 0) / skills.length);
  const best = skills.reduce((a, s) => (s.level > a.level ? s : a), skills[0]);

  return (
    <div className="max-w-5xl mx-auto px-4 py-12 overflow-hidden">
      {/* Title */}
      <Reveal direction="down">
        <div className="flex items-center gap-4 mb-4">
          <BarChart3 size={28} className="text-red-400" />
          <h2 className="pixel-text text-red-400 px-heading" style={{ textShadow: "0 0 10px rgba(239,68,68,0.7)" }}>CHARACTER STATS</h2>
        </div>
        <div className="neon-divider mb-8" style={{ background: "linear-gradient(90deg, transparent, rgba(239,68,68,0.8), rgba(168,85,247,0.8), transparent)", boxShadow: "0 0 6px rgba(239,68,68,0.4)" }} />
      </Reveal>

      {/* Main panel */}
      <Reveal direction="up" delay={0.2}>
        <div
          className="bg-[#080818] border-2 border-red-900/40 p-6 md:p-8 relative"
          style={{ boxShadow: "0 0 40px rgba(239,68,68,0.05), inset 0 0 60px rgba(0,0,0,0.4)" }}
        >
          {/* pixel corners */}
          <div className="pixel-corner-tl border-red-700" />
          <div className="pixel-corner-br border-red-700" />

          {/* Skill bars */}
          <div className="space-y-6">
            {skills.map((skill, i) => <SkillBar key={skill.name} skill={skill} index={i} />)}
          </div>

          {/* Gear Acquired (Replaces stat summary) */}
          <div className="mt-10 pt-8 border-t border-gray-900 flex flex-col items-center">
            <p className="pixel-text text-gray-500 text-center mb-6" style={{ fontSize: "0.6rem" }}>GEAR ACQUIRED</p>
            <div className="grid grid-cols-4 sm:grid-cols-6 gap-2 sm:gap-3 w-fit mx-auto justify-items-center">
              {GEAR_KEYS.map((key, i) => {
                const lang = LANGS[key];
                return (
                  <Reveal key={key} direction="up" delay={i * 0.05 + 0.3}>
                    <div 
                      className="w-14 h-14 sm:w-20 sm:h-20 bg-[#0a0a1a] border-2 border-gray-800 flex items-center justify-center relative group hover:border-gray-500 transition-colors cursor-pointer"
                      style={{ boxShadow: "inset 0 0 15px rgba(0,0,0,0.8)", transform: "translateZ(0)" }}
                    >
                      <div 
                        className="w-8 h-8 sm:w-11 sm:h-11 group-hover:scale-110 transition-all duration-300 drop-shadow-[0_0_8px_rgba(255,255,255,0.15)]" 
                        style={{ imageRendering: 'auto' }}
                        dangerouslySetInnerHTML={{ __html: lang.svg }} 
                      />
                      {/* Tooltip */}
                      <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-black border border-gray-700 px-3 py-1.5 text-white pixel-text opacity-0 group-hover:opacity-100 whitespace-nowrap pointer-events-none transition-opacity z-10 shadow-[0_0_10px_rgba(239,68,68,0.3)]" style={{ fontSize: "0.45rem" }}>
                        {lang.name}
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
