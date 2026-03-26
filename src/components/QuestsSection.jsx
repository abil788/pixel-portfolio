import React from "react";
import { ScrollText } from "lucide-react";
import { quests } from "../data/portfolioData";
import Reveal from "./Reveal";

export default function QuestsSection() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      {/* Title */}
      <Reveal direction="down">
        <div className="flex items-center gap-4 mb-4">
          <ScrollText size={28} className="text-green-400" />
          <h2 className="pixel-text text-green-400 px-heading text-glow-green">QUEST LOG</h2>
        </div>
        <div className="neon-divider mb-8" style={{ boxShadow: "0 0 6px rgba(34,197,94,0.4)" }} />
      </Reveal>

      <div className="space-y-4">
        {quests.map((quest, i) => {
          const done = quest.status === "completed";
          return (
            <Reveal key={i} direction="left" delay={i * 0.1}>
              <div
                className={`relative bg-[#080818] border-2 p-5 transition-all duration-300 hover:scale-[1.01]
                  ${done ? "border-green-900/60 hover:border-green-600" : "border-yellow-900/60 hover:border-yellow-500"}`}
                style={{ boxShadow: done ? "0 0 0 1px rgba(34,197,94,0.05)" : "0 0 0 1px rgba(234,179,8,0.05)" }}
              >
                {/* Left accent bar */}
                <div className={`absolute left-0 top-0 bottom-0 w-1 ${done ? "bg-green-500" : "bg-yellow-500"}`}
                  style={{ boxShadow: done ? "0 0 8px rgba(34,197,94,0.6)" : "0 0 8px rgba(234,179,8,0.6)" }} />

                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 pl-3">
                  {/* Left: info */}
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <h3 className="pixel-text text-xs text-green-300">{quest.name}</h3>
                      <span
                        className={`pixel-text border px-2 py-0.5 ${done
                          ? "text-green-400 border-green-800 bg-green-950/30"
                          : "text-yellow-400 border-yellow-800 bg-yellow-950/30"}`}
                        style={{ fontSize: "0.4rem" }}
                      >
                        {done ? "✓ COMPLETED" : "⟳ IN PROGRESS"}
                      </span>
                    </div>

                    <p className="mono-text text-gray-500 text-xs leading-relaxed mb-3">{quest.description}</p>

                    <div className="flex items-center gap-2">
                      <span className="pixel-text text-purple-500" style={{ fontSize: "0.42rem" }}>REWARD:</span>
                      <span className="pixel-text text-purple-300" style={{ fontSize: "0.42rem" }}>{quest.reward}</span>
                    </div>
                  </div>

                  {/* Right: XP */}
                  <div className={`flex sm:flex-col items-center sm:items-end justify-between sm:justify-start
                    border px-4 py-2 sm:min-w-[80px] bg-black/40
                    ${done ? "border-yellow-900/50" : "border-yellow-900/30"}`}
                    style={{ boxShadow: done ? "0 0 12px rgba(250,204,21,0.1)" : "none" }}
                  >
                    <span className="pixel-text text-yellow-400 text-lg font-bold">+{quest.xp}</span>
                    <span className="pixel-text text-gray-600 mt-0.5" style={{ fontSize: "0.4rem" }}>XP</span>
                  </div>
                </div>

                {/* Progress bar */}
                <div className="mt-4 pl-3">
                  <div className="flex items-center gap-3">
                    <div className="flex-1 h-3 bg-gray-900 border border-gray-800 overflow-hidden">
                      <div
                        className="h-full transition-all duration-1000 ease-out"
                        style={{
                          width: `${quest.progress}%`,
                          background: done
                            ? "linear-gradient(90deg, #15803d, #22c55e)"
                            : "linear-gradient(90deg, #a16207, #eab308)",
                          boxShadow: done ? "0 0 6px rgba(34,197,94,0.5)" : "0 0 6px rgba(234,179,8,0.5)",
                        }}
                      />
                    </div>
                    <span className="pixel-text text-gray-600 min-w-[2.5rem] text-right" style={{ fontSize: "0.42rem" }}>
                      {quest.progress}%
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </div>
  );
}
