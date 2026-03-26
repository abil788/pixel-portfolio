import React, { useEffect, useRef, useState } from "react";
import { BarChart3 } from "lucide-react";
import { skills } from "../data/portfolioData";
import Reveal from "./Reveal";

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

          {/* Summary row */}
          <div className="mt-10 pt-8 border-t border-gray-900">
            <p className="pixel-text text-gray-700 text-center mb-4" style={{ fontSize: "0.42rem" }}>STAT SUMMARY</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { label: "AVG LEVEL", value: avg,           color: "purple" },
                { label: "HIGHEST",   value: best.level,    color: "green"  },
                { label: "SKILLS",    value: skills.length, color: "blue"   },
                { label: "RANK",       value: "A+",         color: "yellow" },
              ].map(({ label, value, color }, i) => (
                <Reveal key={label} direction="up" delay={i * 0.15 + 0.3}>
                  <div
                    className={`text-center border border-${color}-900/50 bg-${color}-950/20 py-4 h-full`}
                    style={{ boxShadow: `inset 0 0 20px rgba(0,0,0,0.5)` }}
                  >
                    <div className={`pixel-text font-bold text-${color}-400 text-lg`}>{value}</div>
                    <div className="pixel-text text-gray-600 mt-1" style={{ fontSize: "0.42rem" }}>{label}</div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
