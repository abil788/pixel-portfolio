import React, { useState, useEffect } from "react";
import StartScreen from "./components/StartScreen";
import Navigation from "./components/Navigation";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import QuestsSection from "./components/QuestsSection";
import SkillsSection from "./components/SkillsSection";
import ContactSection from "./components/ContactSection";
import LorePage from "./components/LorePage";
import { useSound } from "./components/SoundContext";

/* ------------------------------------------------------------------ */
/*  BACKGROUND — persistent animated grid + star helpers               */
/* ------------------------------------------------------------------ */
const STARS_BG = Array.from({ length: 80 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  delay: Math.random() * 5,
  dur: 2 + Math.random() * 4,
  size: Math.random() > 0.8 ? 2.5 : 1.5,
}));

function Background() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {/* Base gradient */}
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(88,28,135,0.12) 0%, transparent 70%), #050510" }} />

      {/* Animated grid */}
      <div
        className="absolute inset-0 opacity-[0.05] anim-grid-drift"
        style={{
          backgroundImage:
            "linear-gradient(rgba(168,85,247,1) 1px,transparent 1px),linear-gradient(90deg,rgba(168,85,247,1) 1px,transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Star field */}
      {STARS_BG.map((s) => (
        <div
          key={s.id}
          className="absolute bg-white rounded-sm"
          style={{
            left: `${s.x}%`,
            top: `${s.y}%`,
            width: s.size,
            height: s.size,
            animation: `twinkle ${s.dur}s ease-in-out ${s.delay}s infinite`,
            opacity: 0.25,
          }}
        />
      ))}

      {/* Vignette */}
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.7) 100%)" }} />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  MAIN APP                                                            */
/* ------------------------------------------------------------------ */
export default function App() {
  const { playClick } = useSound();
  const [gameStarted, setGameStarted] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [showCRT, setShowCRT] = useState(false);
  const [coins, setCoins] = useState(9999);

  // Scroll to top on section change for better UX
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [activeSection]);

  const handleNavigate = (id) => {
    playClick();
    setActiveSection(id);
  };

  const handleStart = () => {
    playClick();
    setGameStarted(true);
  };

  return (
    <>
      {/* Global styles for keyframes defined in index.css */}
      <style>{`
        @keyframes twinkle {
          0%,100%{ opacity:0.15; transform:scale(1); }
          50%     { opacity:0.9;  transform:scale(1.5); }
        }
      `}</style>

      <div className={`min-h-screen text-white font-mono relative ${showCRT ? "crt-overlay crt-flicker" : ""}`}>

        {/* Persistent background (shown on both Start and main views) */}
        {gameStarted && <Background />}

        {!gameStarted ? (
          <StartScreen onStart={handleStart} />
        ) : (
          <div className="relative z-10">
            <Navigation
              activeSection={activeSection}
              onNavigate={handleNavigate}
              coins={coins}
              showCRT={showCRT}
              onToggleCRT={() => { playClick(); setShowCRT((p) => !p); }}
            />

            <main className="relative min-h-screen pb-24">
              {activeSection === "about"    && <AboutSection onNavigate={handleNavigate} />}
              {activeSection === "lore"     && <LorePage />}
              {activeSection === "projects" && <ProjectsSection />}
              {activeSection === "quests"   && <QuestsSection />}
              {activeSection === "skills"   && <SkillsSection />}
              {activeSection === "contact"  && <ContactSection onAddCoins={(n) => setCoins((c) => c + n)} />}
            </main>

          </div>
        )}
      </div>
    </>
  );
}
