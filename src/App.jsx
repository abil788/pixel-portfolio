import React, { useState, useEffect } from "react";
import { playClick } from "./utils/clickSound";
import {
  Sword,
  Package,
  ScrollText,
  BarChart3,
  Save,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  X,
  Code,
  Zap,
  Database,
  Globe,
  Shield,
  Cpu,
} from "lucide-react";

const PixelPortfolio = () => {
  const [gameStarted, setGameStarted] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [selectedProject, setSelectedProject] = useState(null);
  const [dialogueIndex, setDialogueIndex] = useState(0);
  const [showCRT, setShowCRT] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [coins, setCoins] = useState(9999);
  const [submitStatus, setSubmitStatus] = useState("");

  const dialogues = [
    "⚔️ SYSTEM BOOT: Developer Class Initialized...",
    "🧠 Role : front-end Builder ",
    "🌳 Skill Tree : PHP • Laravel • Java • JavaScript • Flutter (Dart) • HTML/CSS • SQL",
    "🌐 Connected. Systems online. Projects stable.",
    "💎 Quest log ready. Select your path, adventurer.",
  ];

  const projects = [
    {
      id: 1,
      name: "Inventory Management System",
      icon: "📦",
      description:
        "Web-based inventory management system with borrowing, returning, condition tracking, and role-based access control.",
      tech: ["Laravel 11", "PHP", "MySQL", "Tailwind CSS", "SweetAlert"],
      status: "legendary",
      demo: "#",
      github: "https://github.com/xieraaaa/Inventaris",
      stats: { power: 92, speed: 88, defense: 95 },
    },
    {
      id: 2,
      name: "POS Cashier System",
      icon: "🧾",
      description:
        "Point of Sale (POS) system with multi-product transactions, customer reports, sales reports, and PDF export.",
      tech: ["PHP", "Bootstrap", "MySQL", "jsPDF", "AutoTable"],
      status: "epic",
      demo: "#",
      github: "https://github.com/abil788/ukk-kasir",
      stats: { power: 88, speed: 90, defense: 85 },
    },
    {
       id: 3,
      name: "Mobile LMS Application",
      icon: "📱",
      description:
        "Learning Management System mobile app with authentication, course listing, and profile management.",
      tech: ["Flutter", "Laravel API", "Dart", "REST API"],
      status: "epic",
      demo: "#",
      github: "#",
      stats: { power: 88, speed: 92, defense: 80 },
    },
    {
      id: 4,
      name: "Parking System",
      icon: "🅿️",
      description:
        "Parking management system built with Python to manage vehicle entry, exit, and parking slot availability.",
      tech: ["Python", "CLI", "Data Structures"],
      status: "rare",
      demo: "#",
      github: "https://github.com/abil788/parking_system",
      stats: { power: 82, speed: 85, defense: 80 },
    },
    {
      id: 5,
      name: "Soldier Mentality – Stop Porn Application",
      icon: "🪖",
      description:
        "Self-discipline application focused on helping users stop porn addiction and build a strong soldier mindset.",
      tech: ["react", "Logic System", "tailwind"],
      status: "rare",
      demo: "#",
      github: "https://github.com/abil788/SoldierMentality-StopPornApplication",
      stats: { power: 90, speed: 75, defense: 95 },
    },
  ];

  const quests = [
    {
      name: "University Arc Telkom University",
      status: "in-progress",
      xp: 1200,
      description:
        "Advancing academic and technical mastery through structured learning, projects, and collaboration.",
      reward: " 🎓 Academic Achievement Badge (Locked)",
    },
    {
      name: "Inventory System Architect",
      status: "completed",
      xp: "2000",
      description:
        "Designed and built a web-based inventory management system with item tracking, status control, and reports using Laravel.",
      reward: "🏆 Inventory Architect Badge",
    },
    {
      name: "Mobile LMS Developer",
      status: "completed",
      xp: 1800,
      description:
        "Developed a mobile-based LMS application with authentication, course access, and user profiles using Flutter.",
      reward: " 🏆 Mobile LMS Badge",
    },
    {
      name: "Telkom Medan Campaign",
      status: "completed",
      xp: 1500,
      description:
        "Cleared vocational training missions at SMK Telkom Medan, focusing on system development, discipline, and real-world workflows.",
      reward: " 🏆 Campaign Cleared Badge",
    },
    {
      name: "Point of Sale System Builder",
      status: "completed",
      xp: 2000,
      description:
        "Built a POS system with cart, checkout, transactionhistory, and PDF reporting for sales records.",
      reward: " 🏆 POS Builder Badge",
    },
  ];

  const skills = [
    {
      name: "Backend Sorcery",
      level: 80,
      color: "from-red-600 to-red-800",
      icon: Database,
    },
    {
      name: "Frontend Wizardry",
      level: 92,
      color: "from-blue-600 to-blue-800",
      icon: Code,
    },
    {
      name: "API Architecture",
      level: 70,
      color: "from-green-600 to-green-800",
      icon: Globe,
    },
    {
      name: "Database Mastery",
      level: 90,
      color: "from-purple-600 to-purple-800",
      icon: Shield,
    },
    {
      name: "DevOps Power",
      level: 20,
      color: "from-yellow-600 to-yellow-800",
      icon: Zap,
    },
  ];

  useEffect(() => {
    if (
      gameStarted &&
      activeSection === "about" &&
      dialogueIndex < dialogues.length - 1
    ) {
      const timer = setTimeout(() => {
        setDialogueIndex(dialogueIndex + 1);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [gameStarted, activeSection, dialogueIndex]);

  const handleSubmit = (e) => {
    if (e && e.preventDefault) {
      e.preventDefault();
    }

    if (!formData.name || !formData.email || !formData.message) {
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus(""), 3000);
      return;
    }

    setSubmitStatus("loading");

    setTimeout(() => {
      setSubmitStatus("success");
      setCoins(coins + 100);

      setTimeout(() => {
        setSubmitStatus("");
        setFormData({ name: "", email: "", message: "" });
      }, 4000);
    }, 2000);
  };

  const StartScreen = () => (
    <div className="relative flex flex-col items-center justify-center min-h-screen px-4 bg-gradient-to-br from-gray-950 via-purple-950 to-black overflow-hidden">
      {/* GRID BACKGROUND */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(139,92,246,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.3) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* GLOW ORB */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-60 h-60 sm:w-80 sm:h-80 bg-purple-600/10 rounded-full blur-3xl" />

      {/* CONTENT */}
      <div className="relative z-10 w-full max-w-3xl text-center space-y-10">
        {/* TITLE */}
        <div className="relative">
          <div className="absolute -top-12 sm:-top-20 left-1/2 -translate-x-1/2 text-4xl sm:text-6xl">
            ⚔️
          </div>

          <h3
            className="pixel-text font-bold text-purple-400 tracking-wider
          text-3xl sm:text-5xl md:text-7xl"
          >
            ABIL'S PORTFOLIO
          </h3>

          <p
            className="pixel-text text-gray-400 mt-3
          text-sm sm:text-lg md:text-xl"
          >
            &gt; EPIC PORTFOLIO ADVENTURE
          </p>

          <div className="h-1 w-40 sm:w-64 md:w-96 mx-auto mt-6 bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
        </div>

        {/* ACTION */}
        <div className="space-y-6 pt-10">
          <button
            onClick={() => {
              playClick();       // 🔊 CLICK SOUND
              setGameStarted(true);
            }}
            className="pixel-btn w-full sm:w-auto
              px-8 sm:px-14 py-4 sm:py-6
              text-lg sm:text-xl
              bg-gradient-to-r from-purple-600 to-pink-600
              hover:from-purple-500 hover:to-pink-500
              border-4 border-purple-400 hover:border-pink-400
              transition-all duration-300 hover:scale-105"
          >
            <span className="flex items-center justify-center gap-4">
              <span>▶</span>
              PRESS START
              <span>◀</span>
            </span>
          </button>


          {/* STATUS */}
          <div className="flex flex-wrap justify-center items-center gap-2 text-center">
            <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse" />
            <span className="pixel-text text-gray-500 text-xs sm:text-sm">
              SYSTEM READY • PRESS TO BEGIN
            </span>
            <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );

  const Navigation = () => (
    <nav className="bg-gradient-to-r from-gray-950 via-purple-950/50 to-gray-950 border-b-2 border-purple-500/30 px-4 py-4 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-2 pixel-text text-yellow-400 text-xs bg-gray-900/50 px-3 py-2 rounded border border-yellow-500/30">
            <span>💰</span>
            <span>{coins}</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 justify-center">
          {[
            { id: "about", icon: Sword, label: "START", color: "purple" },
            {
              id: "projects",
              icon: Shield,
              label: "BATTLE HISTORY",
              color: "blue",
            },
            { id: "quests", icon: ScrollText, label: "QUESTS", color: "green" },
            { id: "skills", icon: BarChart3, label: "STATS", color: "red" },
            { id: "contact", icon: Save, label: "CONTACT", color: "pink" },
          ].map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  playClick();                 // 🔊 CLICK SOUND
                  setActiveSection(item.id);
                }}
                className={`pixel-btn px-4 py-2 text-xs md:text-sm border-2
                  transition-all duration-300 flex items-center gap-2 ${
                    isActive
                      ? "bg-purple-700 border-purple-500 text-white"
                      : "bg-gray-900/50 border-gray-700 text-gray-400 hover:bg-gray-800/70 hover:border-gray-600 hover:text-white"
                  }`}
              >
                <item.icon size={14} />
                <span className="hidden sm:inline">{item.label}</span>
              </button>
            );
          })}
        </div>

        <button
          onClick={() => setShowCRT(!showCRT)}
          className={`pixel-btn px-4 py-2 border-2 text-xs transition-all duration-300 ${
            showCRT
              ? "bg-purple-700 border-purple-500 text-white"
              : "bg-gray-900/50 border-gray-700 text-gray-400 hover:bg-gray-800/70"
          }`}
        >
          CRT
        </button>
      </div>
    </nav>
  );

  const AboutSection = () => (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <div className="bg-gradient-to-br from-gray-900/90 via-purple-900/20 to-gray-900/90 border-2 border-purple-500/30 p-8 md:p-12 backdrop-blur-sm relative">
        <div className="absolute top-0 left-0 w-20 h-20 border-t-4 border-l-4 border-purple-500" />
        <div className="absolute bottom-0 right-0 w-20 h-20 border-b-4 border-r-4 border-purple-500" />

        <div className="flex flex-col md:flex-row gap-8 items-start relative z-10">
          <div className="w-40 h-40 bg-gradient-to-br from-purple-600 via-pink-600 to-purple-800 border-4 border-purple-400 flex items-center justify-center flex-shrink-0 relative overflow-hidden">
            <img
              src="/profile.png"
              alt="Profile"
              className="w-full h-full object-cover"
            />

            <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500" />
            <div className="absolute top-2 right-2 w-3 h-3 bg-green-400 rounded-full" />
          </div>
          <div className="flex-1 space-y-6">
            <div>
              <h2 className="text-4xl font-bold pixel-text text-purple-400 mb-3">
                &gt; PLAYER PROFILE
              </h2>
              <div className="h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-transparent" />
            </div>

            <div className="space-y-4">
              {dialogues.slice(0, dialogueIndex + 1).map((text, i) => (
                <div
                  key={i}
                  className="bg-black/60 border-l-4 border-purple-500 p-4 backdrop-blur-sm"
                >
                  <p className="text-gray-300 pixel-text text-sm leading-relaxed">
                    {text}
                  </p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 pt-6">
              {/* LEVEL */}
              <div
                className="text-center bg-gradient-to-br from-purple-900/50 to-transparent
                border border-purple-500/30 rounded-lg
                p-3 sm:p-4"
              >
                <div
                  className="pixel-text font-bold text-purple-400
                  text-xl sm:text-2xl md:text-3xl"
                >
                  LVL 10
                </div>
                <div
                  className="pixel-text text-gray-400
                  text-[10px] sm:text-xs mt-1"
                >
                  JUNIOR DEV
                </div>
              </div>

              {/* PROJECTS */}
              <div
                className="text-center bg-gradient-to-br from-green-900/50 to-transparent
                border border-green-500/30 rounded-lg
                p-3 sm:p-4"
              >
                <div
                  className="pixel-text font-bold text-green-400
                  text-xl sm:text-2xl md:text-3xl"
                >
                  6+
                </div>
                <div
                  className="pixel-text text-gray-400
                  text-[10px] sm:text-xs mt-1"
                >
                  PROJECTS
                </div>
              </div>

              {/* XP */}
              <div
                className="text-center bg-gradient-to-br from-blue-900/50 to-transparent
                border border-blue-500/30 rounded-lg
                p-3 sm:p-4 col-span-2 sm:col-span-1"
              >
                <div
                  className="pixel-text font-bold text-blue-400
                  text-xl sm:text-2xl md:text-3xl"
                >
                  12.5K
                </div>
                <div
                  className="pixel-text text-gray-400
                  text-[10px] sm:text-xs mt-1"
                >
                  TOTAL XP
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const ProjectsSection = () => (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-4xl font-bold pixel-text text-blue-400 flex items-center gap-4">
          <Package size={40} />
          BATTLE HISTORY
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => setSelectedProject(project)}
            className="bg-gradient-to-br from-gray-900/90 to-gray-950/90 border-2 border-gray-700 hover:border-purple-500 p-6 transition-all duration-300 cursor-pointer hover:scale-105 group"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="text-6xl">{project.icon}</div>
              <span
                className={`pixel-text text-xs px-3 py-1 border-2 ${
                  project.status === "legendary"
                    ? "bg-yellow-900/30 text-yellow-400 border-yellow-600"
                    : project.status === "epic"
                    ? "bg-purple-900/30 text-purple-400 border-purple-600"
                    : "bg-blue-900/30 text-blue-400 border-blue-600"
                }`}
              >
                {project.status.toUpperCase()}
              </span>
            </div>

            <h3 className="text-xl font-bold pixel-text text-purple-300 group-hover:text-purple-200 mb-3">
              {project.name}
            </h3>

            <p className="text-gray-400 text-sm pixel-text mb-4 leading-relaxed">
              {project.description}
            </p>

            <div className="grid grid-cols-3 gap-2 mb-4">
              <div className="text-center bg-red-900/20 border border-red-700/30 py-1">
                <div className="text-xs pixel-text text-red-400">
                  ⚔️ {project.stats.power}
                </div>
              </div>
              <div className="text-center bg-blue-900/20 border border-blue-700/30 py-1">
                <div className="text-xs pixel-text text-blue-400">
                  ⚡ {project.stats.speed}
                </div>
              </div>
              <div className="text-center bg-green-900/20 border border-green-700/30 py-1">
                <div className="text-xs pixel-text text-green-400">
                  🛡️ {project.stats.defense}
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {project.tech.slice(0, 3).map((tech) => (
                <span
                  key={tech}
                  className="pixel-text text-xs px-2 py-1 bg-gray-800/80 text-gray-400 border border-gray-700"
                >
                  {tech}
                </span>
              ))}
              {project.tech.length > 3 && (
                <span className="pixel-text text-xs px-2 py-1 bg-purple-900/30 text-purple-400 border border-purple-700">
                  +{project.tech.length - 3}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/90 backdrop-blur-md z-50
                    flex items-center justify-center px-3 sm:px-4"
          onClick={() => setSelectedProject(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-3xl
                      max-h-[90vh] overflow-y-auto
                      bg-gradient-to-br from-gray-900 via-purple-900/30 to-gray-900
                      border-4 border-purple-500
                      p-4 sm:p-6 md:p-8"
          >
            {/* CORNER PIXEL */}
            <div className="absolute top-0 left-0 w-10 h-10 sm:w-16 sm:h-16 border-t-4 border-l-4 border-pink-500" />
            <div className="absolute bottom-0 right-0 w-10 h-10 sm:w-16 sm:h-16 border-b-4 border-r-4 border-pink-500" />

            {/* HEADER */}
            <div className="flex items-start justify-between gap-3 mb-4 sm:mb-6">
              <div className="flex items-center gap-3 sm:gap-4">
                <span className="text-4xl sm:text-6xl md:text-7xl">
                  {selectedProject.icon}
                </span>

                <div>
                  <h3 className="pixel-text text-lg sm:text-2xl md:text-3xl text-purple-400 break-words">
                    {selectedProject.name}
                  </h3>

                  <span
                    className={`pixel-text text-[10px] sm:text-xs px-2 sm:px-3 py-1 border inline-block mt-2 ${
                      selectedProject.status === "legendary"
                        ? "bg-yellow-900/30 text-yellow-400 border-yellow-600"
                        : selectedProject.status === "epic"
                        ? "bg-purple-900/30 text-purple-400 border-purple-600"
                        : "bg-blue-900/30 text-blue-400 border-blue-600"
                    }`}
                  >
                    {selectedProject.status.toUpperCase()}
                  </span>
                </div>
              </div>

              <button
                onClick={() => setSelectedProject(null)}
                className="p-2 rounded hover:bg-gray-800 text-gray-400 hover:text-white"
              >
                <X size={22} />
              </button>
            </div>

            {/* DESCRIPTION */}
            <p
              className="pixel-text text-xs sm:text-sm text-gray-300
                          bg-black/40 p-3 sm:p-4
                          border-l-4 border-purple-500
                          mb-4 sm:mb-6 leading-relaxed"
            >
              {selectedProject.description}
            </p>

            {/* STATS */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 mb-6">
              <div className="bg-red-900/20 border border-red-700/50 p-3 text-center">
                <div className="pixel-text text-xl sm:text-2xl text-red-400 font-bold">
                  {selectedProject.stats.power}
                </div>
                <div className="pixel-text text-[10px] sm:text-xs text-gray-400 mt-1">
                  POWER
                </div>
              </div>

              <div className="bg-blue-900/20 border border-blue-700/50 p-3 text-center">
                <div className="pixel-text text-xl sm:text-2xl text-blue-400 font-bold">
                  {selectedProject.stats.speed}
                </div>
                <div className="pixel-text text-[10px] sm:text-xs text-gray-400 mt-1">
                  SPEED
                </div>
              </div>

              <div className="bg-green-900/20 border border-green-700/50 p-3 text-center col-span-2 sm:col-span-1">
                <div className="pixel-text text-xl sm:text-2xl text-green-400 font-bold">
                  {selectedProject.stats.defense}
                </div>
                <div className="pixel-text text-[10px] sm:text-xs text-gray-400 mt-1">
                  DEFENSE
                </div>
              </div>
            </div>

            {/* TECH STACK */}
            <div className="mb-6">
              <h4 className="pixel-text text-xs sm:text-sm text-purple-300 mb-2">
                TECH STACK
              </h4>

              <div className="flex flex-wrap gap-2">
                {selectedProject.tech.map((tech) => (
                  <span
                    key={tech}
                    className="pixel-text text-[10px] sm:text-xs
                              px-2 sm:px-3 py-1 sm:py-2
                              bg-gray-800 text-gray-300
                              border border-gray-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* ACTION BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a
                href={selectedProject.demo}
                className="pixel-btn w-full
                          px-4 sm:px-6 py-3 sm:py-4
                          bg-gradient-to-r from-purple-600 to-pink-600
                          border-2 border-purple-400
                          text-white text-sm
                          flex items-center justify-center gap-2
                          hover:scale-105 transition"
              >
                <ExternalLink size={16} />
                VIEW DEMO
              </a>

              <a
                href={selectedProject.github}
                className="pixel-btn w-full
                          px-4 sm:px-6 py-3 sm:py-4
                          bg-gray-800 border-2 border-gray-600
                          text-gray-300 text-sm
                          flex items-center justify-center gap-2
                          hover:border-purple-500 hover:scale-105 transition"
              >
                <Github size={16} />
                SOURCE CODE
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  const QuestsSection = () => (
    <div className="max-w-5xl mx-auto px-4 py-12">
      {/* TITLE */}
      <h2 className="text-3xl sm:text-4xl font-bold pixel-text text-green-400 mb-8 flex items-center gap-3 sm:gap-4">
        <ScrollText size={32} className="sm:w-10 sm:h-10" />
        QUEST LOG
      </h2>

      {/* QUEST LIST */}
      <div className="space-y-6">
        {quests.map((quest, i) => (
          <div
            key={i}
            className="relative bg-gradient-to-r from-gray-900/90 to-gray-950/90 
                     border-2 border-gray-700 hover:border-green-500 
                     p-5 sm:p-6 transition-all duration-300
                     hover:scale-[1.01]"
          >
            {/* STATUS BAR */}
            <div
              className={`absolute left-0 top-0 bottom-0 w-1 ${
                quest.status === "completed" ? "bg-green-500" : "bg-yellow-500"
              }`}
            />

            {/* TOP CONTENT */}
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
              {/* QUEST INFO */}
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <h3 className="text-lg sm:text-xl font-bold pixel-text text-green-300">
                    {quest.name}
                  </h3>

                  <span
                    className={`pixel-text text-[10px] sm:text-xs px-2 sm:px-3 py-1 border ${
                      quest.status === "completed"
                        ? "bg-green-900/30 text-green-400 border-green-600"
                        : "bg-yellow-900/30 text-yellow-400 border-yellow-600"
                    }`}
                  >
                    {quest.status === "completed"
                      ? "✓ COMPLETED"
                      : "⟳ IN PROGRESS"}
                  </span>
                </div>

                <p className="text-gray-400 pixel-text text-[11px] sm:text-xs mb-2">
                  {quest.description}
                </p>

                <div className="flex items-center gap-2 text-purple-400 pixel-text text-[11px] sm:text-xs">
                  <span>🏆</span>
                  <span>{quest.reward}</span>
                </div>
              </div>

              {/* XP BOX (RESPONSIVE FIX) */}
              <div
                className={`flex sm:flex-col items-center sm:items-end justify-between sm:justify-start
                          bg-gray-900/70 border border-yellow-500/40
                          px-4 py-2 sm:px-4 sm:py-3
                          w-full sm:w-auto sm:min-w-[90px]
                          ${
                            quest.status === "completed"
                              ? "shadow-[0_0_12px_rgba(34,197,94,0.6)]"
                              : ""
                          }`}
              >
                <div className="pixel-text text-lg sm:text-2xl font-bold text-yellow-400">
                  +{quest.xp}
                </div>
                <div className="pixel-text text-[10px] sm:text-xs text-gray-500">
                  XP
                </div>
              </div>
            </div>

            {/* PROGRESS BAR */}
            <div className="flex items-center gap-3">
              <div className="flex-1 h-4 bg-gray-800 border-2 border-gray-700 overflow-hidden">
                <div
                  className={`h-full transition-all duration-1000 ${
                    quest.status === "completed"
                      ? "bg-gradient-to-r from-green-600 to-green-500"
                      : "bg-gradient-to-r from-yellow-600 to-yellow-500"
                  }`}
                  style={{
                    width: quest.status === "completed" ? "100%" : "70%",
                  }}
                />
              </div>

              <span className="pixel-text text-[10px] sm:text-xs text-gray-400 min-w-[3rem] text-right">
                {quest.status === "completed" ? "100%" : "70%"}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const SkillsSection = () => (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h2 className="text-4xl font-bold pixel-text text-red-400 mb-8 flex items-center gap-4">
        <BarChart3 size={40} />
        CHARACTER STATS
      </h2>

      <div className="bg-gradient-to-br from-gray-900/90 via-red-900/10 to-gray-900/90 border-2 border-red-500/30 p-8">
        <div className="space-y-8">
          {skills.map((skill, i) => (
            <div key={i} className="space-y-3 group">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <skill.icon
                    size={20}
                    className="text-gray-400 group-hover:text-white transition-colors"
                  />
                  <span className="pixel-text text-sm text-purple-300 group-hover:text-purple-200 transition-colors">
                    {skill.name}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="pixel-text text-sm text-gray-400">
                    {skill.level}
                  </span>
                  <span className="pixel-text text-xs text-gray-600">/100</span>
                </div>
              </div>

              <div className="relative h-8 bg-gray-800 border-2 border-gray-700 overflow-hidden group-hover:border-gray-600 transition-colors">
                <div
                  className={`h-full bg-gradient-to-r ${skill.color} transition-all duration-1000 relative overflow-hidden`}
                  style={{ width: `${skill.level}%` }}
                >
                  <div
                    className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage:
                        "repeating-linear-gradient(90deg, transparent, transparent 4px, rgba(255,255,255,0.2) 4px, rgba(255,255,255,0.2) 8px)",
                    }}
                  />

                  <div className="absolute right-2 top-1/2 transform -translate-y-1/2 pixel-text text-xs font-bold text-white drop-shadow-lg">
                    LVL {Math.floor(skill.level / 10)}
                  </div>
                </div>

                {[...Array(10)].map((_, index) => (
                  <div
                    key={index}
                    className="absolute top-0 bottom-0 w-px bg-gray-900"
                    style={{ left: `${(index + 1) * 10}%` }}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 pt-8 border-t-2 border-gray-800">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-gradient-to-br from-purple-900/30 to-transparent border border-purple-500/30 p-4 text-center">
              <div className="text-2xl font-bold pixel-text text-purple-400">
                {Math.round(
                  skills.reduce((acc, s) => acc + s.level, 0) / skills.length
                )}
              </div>
              <div className="text-xs pixel-text text-gray-400 mt-1">
                AVG LEVEL
              </div>
            </div>
            <div className="bg-gradient-to-br from-green-900/30 to-transparent border border-green-500/30 p-4 text-center">
              <div className="text-2xl font-bold pixel-text text-green-400">
                {Math.max(...skills.map((s) => s.level))}
              </div>
              <div className="text-xs pixel-text text-gray-400 mt-1">
                HIGHEST
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-900/30 to-transparent border border-blue-500/30 p-4 text-center">
              <div className="text-2xl font-bold pixel-text text-blue-400">
                {skills.length}
              </div>
              <div className="text-xs pixel-text text-gray-400 mt-1">
                SKILLS
              </div>
            </div>
            <div className="bg-gradient-to-br from-yellow-900/30 to-transparent border border-yellow-500/30 p-4 text-center">
              <div className="text-2xl font-bold pixel-text text-yellow-400">
                A
              </div>
              <div className="text-xs pixel-text text-gray-400 mt-1">RANK</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const ContactSection = () => {
    const isLoading = submitStatus === "loading";

    const buttonClass =
      "pixel-btn w-full px-6 py-4 sm:py-5 text-sm sm:text-lg border-4 transition-all flex items-center justify-center gap-3 " +
      (isLoading
        ? "bg-gray-700 border-gray-600 text-gray-400 cursor-not-allowed"
        : "bg-gradient-to-r from-purple-600 to-pink-600 border-purple-400 text-white hover:scale-105");

    return (
      <div className="max-w-3xl mx-auto px-4 py-12">
        
        {/* TITLE */}
        <h2 className="text-2xl sm:text-4xl font-bold pixel-text text-pink-400 mb-8 flex items-center gap-3 sm:gap-4">
          <Save size={28} className="sm:w-10 sm:h-10" />
          <span className="leading-tight">COMMUNICATION PORTAL</span>
        </h2>

        {/* MAIN BOX */}
        <div className="relative bg-gradient-to-br from-gray-900/90 via-purple-900/20 to-gray-900/90 border-2 border-purple-500/30 p-6 sm:p-8 md:p-10 overflow-hidden">

          {/* DECORATION (FIXED POINTER EVENTS) */}
          <div className="pointer-events-none absolute top-0 right-0 w-32 h-32 bg-purple-600/10 rounded-full blur-3xl" />
          <div className="pointer-events-none absolute bottom-0 left-0 w-32 h-32 bg-pink-600/10 rounded-full blur-3xl" />

          <div className="relative z-10">
            <p className="text-gray-300 pixel-text mb-8 text-xs sm:text-sm leading-relaxed bg-black/30 p-4 border-l-4 border-purple-500">
              📡 Initiating secure transmission... Ready to collaborate on epic
              quests? Send your message through the portal.
            </p>

            {/* FORM */}
            <div className="space-y-6">

              {/* NAME */}
              <div>
                <label className="pixel-text text-xs sm:text-sm text-purple-300 mb-2 block flex items-center gap-2">
                  <span className="text-pink-400">▶</span>
                  PLAYER NAME
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  disabled={isLoading}
                  className="w-full bg-gray-800/80 border-2 border-gray-700 focus:border-purple-500 px-4 py-3 sm:py-4 text-gray-300 pixel-text text-xs sm:text-sm focus:outline-none transition-colors hover:border-gray-600 placeholder-gray-600"
                  placeholder="Enter your name..."
                />
              </div>

              {/* EMAIL */}
              <div>
                <label className="pixel-text text-xs sm:text-sm text-purple-300 mb-2 block flex items-center gap-2">
                  <span className="text-pink-400">▶</span>
                  EMAIL COORDINATES
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  disabled={isLoading}
                  className="w-full bg-gray-800/80 border-2 border-gray-700 focus:border-purple-500 px-4 py-3 sm:py-4 text-gray-300 pixel-text text-xs sm:text-sm focus:outline-none transition-colors hover:border-gray-600 placeholder-gray-600"
                  placeholder="your@email.com"
                />
              </div>

              {/* MESSAGE */}
              <div>
                <label className="pixel-text text-xs sm:text-sm text-purple-300 mb-2 block flex items-center gap-2">
                  <span className="text-pink-400">▶</span>
                  QUEST BRIEFING
                </label>
                <textarea
                  rows={5}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  disabled={isLoading}
                  className="w-full bg-gray-800/80 border-2 border-gray-700 focus:border-purple-500 px-4 py-3 sm:py-4 text-gray-300 pixel-text text-xs sm:text-sm focus:outline-none resize-none transition-colors hover:border-gray-600 placeholder-gray-600"
                  placeholder="Describe your project or collaboration..."
                />
              </div>

              {/* ERROR */}
              {submitStatus === "error" && (
                <div className="bg-red-900/30 border-2 border-red-500 p-4 pixel-text text-xs sm:text-sm text-red-400 flex gap-3">
                  ⚠️ All fields are required!
                </div>
              )}

              {/* SUCCESS */}
              {submitStatus === "success" && (
                <div className="bg-green-900/30 border-2 border-green-500 p-4 pixel-text text-xs sm:text-sm text-green-400">
                  ✓ MESSAGE SENT! +100 Coins 💰
                </div>
              )}

              {/* BUTTON */}
              <button
                type="button"
                onClick={handleSubmit}
                disabled={isLoading}
                className={buttonClass}
              >
                {isLoading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-gray-400 border-t-transparent rounded-full animate-spin" />
                    <span>SENDING TRANSMISSION...</span>
                  </>
                ) : (
                  <>
                    <span>▶</span>
                    <span>TRANSMIT MESSAGE</span>
                    <span>◀</span>
                  </>
                )}
              </button>
            </div>

            {/* SOCIAL LINKS */}
            <div className="mt-10 pt-10 border-t-2 border-gray-800">
              <p className="pixel-text text-sm text-gray-400 mb-6 text-center">
                🌐 ALTERNATIVE PORTALS
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <a
                  href="https://github.com/abil788"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pixel-btn px-6 py-4 bg-gray-800/80 border-2 border-gray-700 text-gray-300 hover:bg-gray-700 hover:border-purple-500 hover:text-white flex items-center justify-center gap-3 transition-all hover:scale-105"
                >
                  <Github size={20} />
                  <span className="text-sm">GITHUB</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/gabriel-qialani/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pixel-btn px-6 py-4 bg-gray-800/80 border-2 border-gray-700 text-gray-300 hover:bg-gray-700 hover:border-blue-500 hover:text-white flex items-center justify-center gap-3 transition-all hover:scale-105"
                >
                  <Linkedin size={20} />
                  <span className="text-sm">LINKEDIN</span>
                </a>

                <a
                  href="mailto:abielqialani@gmail.com"
                  className="pixel-btn px-6 py-4 bg-gray-800/80 border-2 border-gray-700 text-gray-300 hover:bg-gray-700 hover:border-pink-500 hover:text-white flex items-center justify-center gap-3 transition-all hover:scale-105"
                >
                  <Mail size={20} />
                  <span className="text-sm">EMAIL</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  };


  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-purple-950/30 to-black text-white font-mono relative overflow-x-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
        
        .pixel-text {
          font-family: 'Press Start 2P', monospace;
          image-rendering: pixelated;
          -webkit-font-smoothing: none;
        }
        
        .pixel-btn {
          font-family: 'Press Start 2P', monospace;
          image-rendering: pixelated;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        .animate-spin {
          animation: spin 1s linear infinite;
        }
        
        ${
          showCRT
            ? `
          .pixel-portfolio::before {
            content: '';
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: repeating-linear-gradient(
              0deg,
              rgba(0, 0, 0, 0.15),
              rgba(0, 0, 0, 0.15) 1px,
              transparent 1px,
              transparent 2px
            );
            pointer-events: none;
            z-index: 100;
          }
          
          .pixel-portfolio::after {
            content: '';
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.3) 100%);
            pointer-events: none;
            z-index: 99;
          }
        `
            : ""
        }
      `}</style>

      <div className="pixel-portfolio">
        {!gameStarted ? (
          <StartScreen />
        ) : (
          <>
            <Navigation />
            <main className="relative z-10 min-h-screen pb-20">
              {activeSection === "about" && <AboutSection />}
              {activeSection === "projects" && <ProjectsSection />}
              {activeSection === "quests" && <QuestsSection />}
              {activeSection === "skills" && <SkillsSection />}
              {activeSection === "contact" && <ContactSection />}
            </main>

            <footer className="relative z-10 border-t-2 border-purple-900/30 bg-gray-950/80 backdrop-blur-sm">
              <div className="max-w-7xl mx-auto px-4 py-6 sm:py-8">
                <div className="text-center space-y-3">
                  <div className="flex flex-wrap justify-center items-center gap-x-3 gap-y-1 pixel-text text-[10px] sm:text-xs text-gray-600">
                    <span>BUILT WITH</span>
                    <span className="text-purple-500">REACT</span>
                    <span className="hidden sm:inline">•</span>
                    <span className="text-cyan-500">TAILWIND</span>
                    <span className="hidden sm:inline">•</span>
                    <span className="text-pink-500">PASSION</span>
                  </div>
                </div>
              </div>
            </footer>
          </>
        )}
      </div>
    </div>
  );
};

export default PixelPortfolio;
