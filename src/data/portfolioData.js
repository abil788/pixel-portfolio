import { Database, Code, Globe, Shield, Zap, Cpu, Package, FileText, Smartphone, LayoutPanelLeft, ShieldHalf } from "lucide-react";

export const dialogues = [
  "⚔️  SYSTEM BOOT: Developer.exe Initialized...",
  "🧠 CLASS : Full-Stack Builder | LVL 10",
  "🌳 SKILL TREE UNLOCKED : Laravel • React • Flutter • MySQL • Python",
  "🌐 API CONNECTED. All systems online.",
  "💎 Quest log loaded. Choose your path, Adventurer.",
];

export const projects = [
  {
    id: 1,
    name: "Inventory Management System",
    icon: Package,
    description:
      "Web-based inventory system with borrowing, returning, condition tracking, and role-based access control.",
    tech: ["Laravel 11", "PHP", "MySQL", "Tailwind CSS", "SweetAlert"],
    status: "legendary",
    demo: "#",
    github: "https://github.com/xieraaaa/Inventaris",
    stats: { power: 92, speed: 88, defense: 95 },
  },
  {
    id: 2,
    name: "POS Cashier System",
    icon: FileText,
    description:
      "Point of Sale system with multi-product transactions, customer reports, sales reports, and PDF export.",
    tech: ["PHP", "Bootstrap", "MySQL", "jsPDF", "AutoTable"],
    status: "epic",
    demo: "#",
    github: "https://github.com/abil788/ukk-kasir",
    stats: { power: 88, speed: 90, defense: 85 },
  },
  {
    id: 3,
    name: "Mobile LMS Application",
    icon: Smartphone,
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
    icon: LayoutPanelLeft,
    description:
      "Parking management system built with Python to manage vehicle entry, exit, and slot availability.",
    tech: ["Python", "CLI", "Data Structures"],
    status: "rare",
    demo: "#",
    github: "https://github.com/abil788/parking_system",
    stats: { power: 82, speed: 85, defense: 80 },
  },
  {
    id: 5,
    name: "Soldier Mentality App",
    icon: ShieldHalf,
    description:
      "Self-discipline application helping users build a strong soldier mindset and break bad habits.",
    tech: ["React", "Tailwind CSS", "Logic System"],
    status: "rare",
    demo: "#",
    github: "https://github.com/abil788/SoldierMentality-StopPornApplication",
    stats: { power: 90, speed: 75, defense: 95 },
  },
];

export const quests = [
  {
    name: "University Arc — Telkom University",
    status: "in-progress",
    xp: 1200,
    description:
      "Advancing academic and technical mastery through structured learning, projects, and collaboration.",
    reward: "🎓 Academic Achievement Badge (Locked)",
    progress: 70,
  },
  {
    name: "Inventory System Architect",
    status: "completed",
    xp: 2000,
    description:
      "Designed and built a web-based inventory management system with item tracking, status control, and reports using Laravel.",
    reward: "🏆 Inventory Architect Badge",
    progress: 100,
  },
  {
    name: "Mobile LMS Developer",
    status: "completed",
    xp: 1800,
    description:
      "Developed a mobile-based LMS application with authentication, course access, and user profiles using Flutter.",
    reward: "🏆 Mobile LMS Badge",
    progress: 100,
  },
  {
    name: "Telkom Medan Campaign",
    status: "completed",
    xp: 1500,
    description:
      "Cleared vocational training missions at SMK Telkom Medan focusing on system development and real-world workflows.",
    reward: "🏆 Campaign Cleared Badge",
    progress: 100,
  },
  {
    name: "Point of Sale System Builder",
    status: "completed",
    xp: 2000,
    description:
      "Built a POS system with cart, checkout, transaction history, and PDF reporting for sales records.",
    reward: "🏆 POS Builder Badge",
    progress: 100,
  },
];

export const skills = [
  { name: "Frontend Wizardry",  level: 92, color: "#3b82f6", icon: Code },
  { name: "Database Mastery",   level: 90, color: "#a855f7", icon: Shield },
  { name: "Backend Sorcery",    level: 80, color: "#ef4444", icon: Database },
  { name: "API Architecture",   level: 70, color: "#22c55e", icon: Globe },
  { name: "Mobile Crafting",    level: 75, color: "#f59e0b", icon: Cpu },
  { name: "DevOps Power",       level: 20, color: "#06b6d4", icon: Zap },
];
