import React, { useState } from "react";
import { Package, X, ExternalLink, Github } from "lucide-react";
import { projects } from "../data/portfolioData";
import Reveal from "./Reveal";
import ProjectCard from "./ProjectCard";

function RarityBadge({ status }) {
  const cls = status === "legendary" ? "badge-legendary" : status === "epic" ? "badge-epic" : "badge-rare";
  return (
    <span className={`pixel-text ${cls} px-2 py-1`} style={{ fontSize: "0.42rem" }}>
      {status === "legendary" ? "★ LEGENDARY" : status === "epic" ? "◆ EPIC" : "● RARE"}
    </span>
  );
}

function StatBar({ label, value, color }) {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex justify-between">
        <span className="pixel-text text-gray-500" style={{ fontSize: "0.4rem" }}>{label}</span>
        <span className="pixel-text text-gray-400" style={{ fontSize: "0.4rem" }}>{value}</span>
      </div>
      <div className="h-2 bg-gray-900 border border-gray-800 overflow-hidden">
        <div
          className="h-full transition-all duration-1000 ease-out"
          style={{ width: `${value}%`, background: color, boxShadow: `0 0 6px ${color}` }}
        />
      </div>
    </div>
  );
}

function ProjectModal({ project, onClose }) {
  return (
    <div className="fixed inset-0 bg-black/95 backdrop-blur-md z-50 flex items-center justify-center px-3 py-6" onClick={onClose}>
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl max-h-[88vh] overflow-y-auto bg-[#080818] border-2 border-purple-600 p-5 sm:p-8 anim-fade-rise"
        style={{ boxShadow: "0 0 60px rgba(168,85,247,0.3), 4px 4px 0 #000" }}
      >
        {/* pixel corners */}
        <div className="pixel-corner-tl border-pink-500" />
        <div className="pixel-corner-tr border-pink-500" />
        <div className="pixel-corner-bl border-pink-500" />
        <div className="pixel-corner-br border-pink-500" />

        {/* Header */}
        <div className="flex justify-between items-start gap-4 mb-5">
          <div className="flex items-center gap-3">
            <span className="text-purple-400">
              <project.icon size={48} strokeWidth={1.5} />
            </span>
            <div>
              <h3 className="pixel-text text-purple-300 text-sm md:text-base">{project.name}</h3>
              <div className="mt-1"><RarityBadge status={project.status} /></div>
            </div>
          </div>
          <button onClick={onClose} className="p-2 border border-gray-800 bg-black/60 text-gray-500 hover:text-white hover:border-gray-600 transition-all">
            <X size={18} />
          </button>
        </div>

        {/* Description */}
        <p className="mono-text text-gray-300 text-sm leading-relaxed border-l-4 border-purple-700 pl-4 bg-black/40 py-3 pr-3 mb-5">
          {project.description}
        </p>

        {/* Stats */}
        <div className="space-y-3 mb-5">
          <p className="pixel-text text-gray-600 mb-2" style={{ fontSize: "0.45rem" }}>COMBAT STATS</p>
          <StatBar label="⚔ POWER"   value={project.stats.power}   color="#ef4444" />
          <StatBar label="⚡ SPEED"  value={project.stats.speed}   color="#3b82f6" />
          <StatBar label="🛡 DEFENSE" value={project.stats.defense} color="#22c55e" />
        </div>

        {/* Tech */}
        <div className="mb-6">
          <p className="pixel-text text-gray-600 mb-2" style={{ fontSize: "0.45rem" }}>TECH ARSENAL</p>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span key={t} className="pixel-text text-purple-300 border border-purple-900/70 bg-purple-950/30 px-2 py-1" style={{ fontSize: "0.45rem" }}>{t}</span>
            ))}
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3">
          <a href={project.demo}
            className="pixel-btn flex-1 flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-purple-700 to-pink-700 border-2 border-purple-500 text-white text-xs hover:scale-105 transition-all"
            style={{ boxShadow: "0 0 15px rgba(168,85,247,0.3)" }}>
            <ExternalLink size={14} /> VIEW DEMO
          </a>
          <a href={project.github} target="_blank" rel="noopener noreferrer"
            className="pixel-btn flex-1 flex items-center justify-center gap-2 py-3 bg-gray-900 border-2 border-gray-700 text-gray-300 text-xs hover:border-purple-500 hover:text-white hover:scale-105 transition-all">
            <Github size={14} /> SOURCE CODE
          </a>
        </div>
      </div>
    </div>
  );
}

export default function ProjectsSection() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Title */}
      <Reveal direction="down">
        <div className="flex items-center gap-4 mb-8">
          <Package size={28} className="text-blue-400" />
          <h2 className="pixel-text text-blue-400 px-heading text-glow-cyan">BATTLE HISTORY</h2>
        </div>
        <div className="neon-divider mb-8" style={{ boxShadow: "0 0 6px rgba(59,130,246,0.4)" }} />
      </Reveal>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((project, i) => (
          <Reveal key={project.id} direction="up" delay={i * 0.15}>
            <ProjectCard 
              project={project} 
              onClick={() => setSelected(project)} 
            />
          </Reveal>
        ))}
      </div>

      {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
    </div>
  );
}
