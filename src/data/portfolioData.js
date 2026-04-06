import { Database, Code, Globe, Shield, Zap, Cpu, Package, FileText, Smartphone, LayoutPanelLeft, ShieldHalf, GraduationCap, Swords, Award, BookOpen, Coins, Briefcase, ShoppingCart } from "lucide-react";

export const dialogues = [
  " SYSTEM BOOT: Developer.exe Initialized...",
  " CLASS : Full-Stack Builder | LVL 10",
  " TOOLKIT: Laravel • React • Next • Postgree ",
  " API CONNECTED. All systems online.",
  " SYSTEM READY. EXECUTE",
];

export const projects = [
  {
    id: 1,
    name: "Numone POS",
    icon: ShoppingCart,
    image: "/numone.png",
    description:
      "Advanced Point of Sales application featuring comprehensive stock opname and unified store management workflows.",
    tech: ["Next.js", "React", "PWA", "Tailwind CSS", "PostgreSQL"],
    status: "legendary",
    demo: "https://numone-pos.vercel.app/login?store=demo-store",
    github: "Private",
    stats: { power: 98, speed: 95, defense: 92 },
  },
  {
    id: 2,
    name: "Inventory Management System",
    icon: Package,
    image: "/inventory.png",
    description:
      "Web-based inventory system with borrowing, returning, condition tracking, and role-based access control.",
    tech: ["Laravel 11", "PHP", "MySQL", "Tailwind CSS", "SweetAlert"],
    status: "legendary",
    demo: "#",
    github: "https://github.com/xieraaaa/Inventaris",
    stats: { power: 92, speed: 88, defense: 95 },
  },
  {
    id: 3,
    name: "POS Cashier System",
    icon: FileText,
    image: "/pos.png",
    description:
      "Point of Sale system with multi-product transactions, customer reports, sales reports, and PDF export.",
    tech: ["PHP", "Bootstrap", "MySQL", "jsPDF", "AutoTable"],
    status: "epic",
    demo: "#",
    github: "https://github.com/abil788/ukk-kasir",
    stats: { power: 88, speed: 90, defense: 85 },
  },
  {
    id: 4,
    name: "Mobile LMS Application",
    icon: Smartphone,
    image: null,
    description:
      "Learning Management System mobile app with authentication, course listing, and profile management.",
    tech: ["Flutter", "Laravel API", "Dart", "REST API"],
    status: "epic",
    demo: "#",
    github: "#",
    stats: { power: 88, speed: 92, defense: 80 },
  },
  {
    id: 5,
    name: "Parking System",
    icon: LayoutPanelLeft,
    image: null,
    description:
      "Parking management system built with Python to manage vehicle entry, exit, and slot availability.",
    tech: ["Python", "CLI", "Data Structures"],
    status: "rare",
    demo: "#",
    github: "https://github.com/abil788/parking_system",
    stats: { power: 82, speed: 85, defense: 80 },
  },
  {
    id: 6,
    name: "Soldier Mentality App",
    icon: ShieldHalf,
    image: null,
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
  { name: "Frontend Wizardry", level: 92, color: "#3b82f6", icon: Code },
  { name: "Database Mastery", level: 90, color: "#a855f7", icon: Shield },
  { name: "Backend Sorcery", level: 80, color: "#ef4444", icon: Database },
  { name: "API Architecture", level: 70, color: "#22c55e", icon: Globe },
  { name: "Mobile Crafting", level: 75, color: "#f59e0b", icon: Cpu },
  { name: "DevOps Power", level: 20, color: "#06b6d4", icon: Zap },
];

export const loreTimeline = [
  {
    id: 1,
    year: "2025",
    title: "LEVEL 1: THE FINAL QUEST OF VOCATION",
    description: "Graduated from SMK Telkom Medan. After years of grinding through code, networks, and system trials, the player has completed the tutorial realm. Equipped with basic dev armor and ready to enter the open world.",
    icon: GraduationCap,
    image: "/image.png",
  },
  {
    id: 2,
    year: "2025 - NOW",
    title: "LEVEL 2: ENTERING THE GRAND ACADEMY",
    description: "Stepped into Telkom University. A vast new map unlocked—filled with harder enemies, deeper algorithms, and legendary knowledge. The journey evolves from survival to mastery.",
    icon: BookOpen,
    image: "/coolyeha.jpg",
  },
  {
    id: 3,
    year: "2024",
    title: "LEVEL 3: THE CORPORATE DUNGEON",
    description: "Entered Wilmar Bisnis Indonesia (Medan) as a Frontend Developer. Faced real-world bosses, deadlines, and production systems. Gained rare experience loot and leveled up significantly.",
    icon: Briefcase,
    image: null,
  },
];
