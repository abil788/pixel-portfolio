import React, { useState } from "react";
import { Save, Github, Linkedin, Mail } from "lucide-react";

export default function ContactSection({ onAddCoins }) {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(""); // "", "loading", "success", "error"

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.message) {
      setStatus("error");
      setTimeout(() => setStatus(""), 3000);
      return;
    }
    setStatus("loading");
    setTimeout(() => {
      setStatus("success");
      onAddCoins(100);
      setTimeout(() => {
        setStatus("");
        setForm({ name: "", email: "", message: "" });
      }, 4000);
    }, 2000);
  };

  const isLoading = status === "loading";

  const inputCls = "w-full bg-black/60 border-2 border-gray-800 focus:border-purple-600 px-4 py-3 text-gray-300 mono-text text-sm focus:outline-none transition-colors placeholder-gray-700 hover:border-gray-700";

  return (
    <div className="max-w-3xl mx-auto px-4 py-12 anim-fade-rise">
      {/* Title */}
      <div className="flex items-center gap-4 mb-4">
        <Save size={28} className="text-pink-400" />
        <h2 className="pixel-text text-pink-400 px-heading" style={{ textShadow: "0 0 10px rgba(236,72,153,0.7)" }}>
          SEND MESSAGE
        </h2>
      </div>
      <div className="neon-divider mb-8" style={{ background: "linear-gradient(90deg, transparent, rgba(236,72,153,0.8), rgba(168,85,247,0.8), transparent)", boxShadow: "0 0 6px rgba(236,72,153,0.4)" }} />

      {/* Main panel */}
      <div
        className="relative bg-[#080818] border-2 border-pink-900/40 p-6 md:p-10 overflow-hidden"
        style={{ boxShadow: "0 0 40px rgba(236,72,153,0.06), inset 0 0 60px rgba(0,0,0,0.4)" }}
      >
        {/* pixel corners */}
        <div className="pixel-corner-tl border-pink-600" />
        <div className="pixel-corner-tr border-pink-600" />
        <div className="pixel-corner-bl border-pink-600" />
        <div className="pixel-corner-br border-pink-600" />

        {/* Glow blobs */}
        <div className="pointer-events-none absolute -top-20 -right-20 w-60 h-60 rounded-full opacity-20"
          style={{ background: "radial-gradient(circle, rgba(168,85,247,1) 0%, transparent 70%)" }} />
        <div className="pointer-events-none absolute -bottom-20 -left-20 w-60 h-60 rounded-full opacity-20"
          style={{ background: "radial-gradient(circle, rgba(236,72,153,1) 0%, transparent 70%)" }} />

        {/* Intro */}
        <p className="mono-text text-gray-400 text-sm leading-relaxed border-l-4 border-pink-700 pl-4 bg-black/30 py-3 pr-3 mb-8">
          📡 Ready to collaborate on epic quests? Transmit your message through the portal below.
        </p>

        {/* Form */}
        <div className="space-y-5 relative z-10">
          {/* Name */}
          <div>
            <label className="pixel-text text-pink-400 mb-2 flex items-center gap-2" style={{ fontSize: "0.5rem" }}>
              <span className="text-purple-500">▶</span> PLAYER NAME
            </label>
            <input
              type="text"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              disabled={isLoading}
              className={inputCls}
              placeholder="Enter your name..."
            />
          </div>

          {/* Email */}
          <div>
            <label className="pixel-text text-pink-400 mb-2 flex items-center gap-2" style={{ fontSize: "0.5rem" }}>
              <span className="text-purple-500">▶</span> EMAIL COORDINATES
            </label>
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              disabled={isLoading}
              className={inputCls}
              placeholder="your@email.com"
            />
          </div>

          {/* Message */}
          <div>
            <label className="pixel-text text-pink-400 mb-2 flex items-center gap-2" style={{ fontSize: "0.5rem" }}>
              <span className="text-purple-500">▶</span> QUEST BRIEFING
            </label>
            <textarea
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              disabled={isLoading}
              className={inputCls + " resize-none"}
              placeholder="Describe your project or collaboration..."
            />
          </div>

          {/* Alerts */}
          {status === "error" && (
            <div className="border-2 border-red-700 bg-red-950/40 p-4 pixel-text text-red-400 flex items-center gap-3" style={{ fontSize: "0.5rem" }}>
              ⚠️ &nbsp; ALL FIELDS ARE REQUIRED!
            </div>
          )}
          {status === "success" && (
            <div className="border-2 border-green-600 bg-green-950/40 p-4 pixel-text text-green-400 flex items-center gap-3" style={{ fontSize: "0.5rem", boxShadow: "0 0 15px rgba(34,197,94,0.2)" }}>
              ✓ &nbsp; MESSAGE TRANSMITTED! +100 COINS EARNED 🪙
            </div>
          )}

          {/* Submit */}
          <button
            onClick={handleSubmit}
            disabled={isLoading}
            className={`pixel-btn w-full py-4 border-4 text-sm flex items-center justify-center gap-3 transition-all ${
              isLoading
                ? "bg-gray-900 border-gray-700 text-gray-500 cursor-not-allowed"
                : "bg-gradient-to-r from-purple-700 to-pink-700 border-purple-500 text-white hover:scale-[1.02] hover:from-purple-600 hover:to-pink-600"
            }`}
            style={!isLoading ? { boxShadow: "0 0 20px rgba(168,85,247,0.3), 4px 4px 0 #000" } : {}}
          >
            {isLoading ? (
              <>
                <div className="w-4 h-4 border-2 border-gray-500 border-t-transparent rounded-full animate-spin" />
                TRANSMITTING...
              </>
            ) : (
              <>
                <span className="anim-blink">▶</span>
                TRANSMIT MESSAGE
                <span className="anim-blink" style={{ animationDelay: "0.45s" }}>◀</span>
              </>
            )}
          </button>
        </div>

        {/* Social links */}
        <div className="mt-10 pt-8 border-t border-gray-900 relative z-10">
          <p className="pixel-text text-gray-700 text-center mb-5" style={{ fontSize: "0.42rem" }}>🌐 ALTERNATIVE PORTALS</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              { label: "GITHUB",   href: "https://github.com/abil788",                    icon: Github,   hoverBorder: "hover:border-gray-500" },
              { label: "LINKEDIN", href: "https://www.linkedin.com/in/gabriel-qialani/",   icon: Linkedin, hoverBorder: "hover:border-blue-500" },
              { label: "EMAIL",    href: "mailto:abielqialani@gmail.com",                 icon: Mail,     hoverBorder: "hover:border-pink-500" },
            ].map(({ label, href, icon: Icon, hoverBorder }) => (
              <a
                key={label}
                href={href}
                target={label !== "EMAIL" ? "_blank" : undefined}
                rel="noopener noreferrer"
                className={`pixel-btn flex items-center justify-center gap-3 py-4 bg-black/60 border-2 border-gray-800 text-gray-400 hover:text-white hover:scale-105 transition-all ${hoverBorder}`}
                style={{ fontSize: "0.5rem" }}
              >
                <Icon size={18} />
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
