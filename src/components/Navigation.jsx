import React from "react";
import { Sword, Package, ScrollText, BarChart3, Save, BookOpen, Volume2, VolumeX } from "lucide-react";
import { useSound } from './SoundContext';

const NAV_ITEMS = [
  { id: "about",    icon: Sword,      label: "HERO",    color: "purple" },
  { id: "lore",     icon: BookOpen,   label: "LORE",    color: "cyan"   },
  { id: "projects", icon: Package,    label: "PROJECTS", color: "blue"  },
  { id: "quests",   icon: ScrollText, label: "QUESTS",  color: "green"  },
  { id: "skills",   icon: BarChart3,  label: "STATS",   color: "red"    },
  { id: "contact",  icon: Save,       label: "CONTACT", color: "pink"   },
];

const COLOR_MAP = {
  purple: { active: "border-purple-500 bg-purple-900/60 text-purple-200", hover: "hover:border-purple-700 hover:bg-purple-900/30 hover:text-purple-300" },
  cyan:   { active: "border-cyan-500 bg-cyan-900/60 text-cyan-200",       hover: "hover:border-cyan-700   hover:bg-cyan-900/30   hover:text-cyan-300"   },
  blue:   { active: "border-blue-500 bg-blue-900/60 text-blue-200",       hover: "hover:border-blue-700   hover:bg-blue-900/30   hover:text-blue-300"   },
  green:  { active: "border-green-500 bg-green-900/60 text-green-200",    hover: "hover:border-green-700  hover:bg-green-900/30  hover:text-green-300"  },
  red:    { active: "border-red-500 bg-red-900/60 text-red-200",          hover: "hover:border-red-700    hover:bg-red-900/30    hover:text-red-300"    },
  pink:   { active: "border-pink-500 bg-pink-900/60 text-pink-200",       hover: "hover:border-pink-700   hover:bg-pink-900/30   hover:text-pink-300"   },
};

export default function Navigation({ activeSection, onNavigate, coins, showCRT, onToggleCRT }) {
  const { playClick, playHover, isMuted, toggleMute } = useSound();

  const handleNavClick = (id) => {
    onNavigate(id);
  };

  return (
    <nav className="sticky top-0 z-50 anim-nav-in bg-[#07071a]/90 backdrop-blur-md border-b-2 border-purple-900/60"
      style={{ boxShadow: "0 2px 20px rgba(168,85,247,0.15)" }}>
      <div className="max-w-7xl mx-auto px-3 py-3 flex items-center justify-between gap-2">

        {/* COIN COUNTER */}
        <div className="hidden md:flex items-center gap-2 px-3 py-2 border border-yellow-900/60 bg-black/40" style={{ boxShadow: "0 0 10px rgba(251,191,36,0.1)" }}>
          <span className="anim-coin text-base">🪙</span>
          <span className="pixel-text text-yellow-400 text-xs">{coins}</span>
        </div>

        {/* NAV BUTTONS */}
        <div className="flex flex-wrap gap-1 justify-center flex-1">
          {NAV_ITEMS.map(({ id, icon: Icon, label, color }) => {
            const isActive = activeSection === id;
            const c = COLOR_MAP[color];
            return (
              <button
                key={id}
                onClick={() => handleNavClick(id)}
                onMouseEnter={playHover}
                className={`pixel-btn px-2 sm:px-3 py-2 text-[0.45rem] sm:text-[0.65rem] border-2 flex items-center gap-1.5 transition-all duration-200 ${
                  isActive
                    ? c.active + " scale-105"
                    : "border-gray-800 bg-black/40 text-gray-400 " + c.hover
                }`}
                style={isActive ? { boxShadow: `0 0 12px rgba(0,0,0,0.5), inset 0 0 8px rgba(0,0,0,0.3)` } : {}}
              >
                <Icon size={12} />
                <span className="hidden xs:inline sm:inline">{label}</span>
              </button>
            );
          })}
        </div>
        
        <div className="flex items-center gap-2">
          {/* AUDIO TOGGLE */}
          <button
            onClick={() => { playClick(); toggleMute(); }}
            onMouseEnter={playHover}
            className={`pixel-btn px-2 sm:px-3 py-2 border-2 transition-all ${
              !isMuted ? 'border-green-500 bg-green-900/40 text-green-300' : 'border-red-800 bg-red-950/40 text-red-600'
            }`}
            title="Toggle Audio"
          >
            {isMuted ? <VolumeX size={14} /> : <Volume2 size={14} />}
          </button>

          {/* CRT TOGGLE */}
          <button
            onClick={() => { onToggleCRT(); }}
            onMouseEnter={playHover}
            className={`pixel-btn px-2 sm:px-3 py-2 border-2 text-[0.45rem] sm:text-xs transition-all ${
              showCRT
                ? "border-cyan-500 bg-cyan-900/40 text-cyan-300"
                : "border-gray-800 bg-black/40 text-gray-600 hover:border-gray-600"
            }`}
            title="Toggle CRT Effect"
          >
            CRT
          </button>
        </div>
      </div>

      {/* BOTTOM ACCENT LINE */}
      <div className="neon-divider" />
    </nav>
  );
}
