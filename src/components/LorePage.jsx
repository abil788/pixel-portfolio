import React from 'react';
import { loreTimeline } from '../data/portfolioData';
import Reveal from './Reveal';

export default function LorePage() {
   return (
      <div className="relative min-h-[200vh] py-24 md:py-32 overflow-hidden">

         {/* Background glow base to anchor the dark theme */}
         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-gradient-to-b from-[#03030a] to-transparent pointer-events-none z-0" />

         {/* Header */}
         <Reveal direction="down" className="text-center mb-16 md:mb-32 relative z-10 px-4">
            <h1 className="pixel-text text-3xl md:text-5xl text-glow-cyan text-cyan-400 mb-6 tracking-[0.2em] md:tracking-[0.4em] drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)]">MEMORY ARCHIVES</h1>
         </Reveal>

         {/* 
         THE STICKY DECK CONTAINER 
         Every card inside this will stick to the top as you scroll,
         stacking beautifully behind subsequent cards!
      */}
         <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-48 relative z-10">
            {loreTimeline.map((item, i) => {
               const Icon = item.icon;

               // Calculate the sticky top offset so they stack like expanding folders
               // Mobile: top-24, top-28, top-32
               // Desktop: top-32, top-40, top-48
               const topOffsetMobile = 6 + (i * 1.5);
               const topOffsetDesktop = 8 + (i * 2.5);

               return (
                  <div
                     key={item.id}
                     className="sticky w-full mb-16 md:mb-32 transition-transform duration-700 ease-out will-change-transform"
                     style={{
                        top: `clamp(${topOffsetMobile}rem, 15vh, ${topOffsetDesktop}rem)`,
                        zIndex: i + 10
                     }}
                  >
                     {/* 
                   THE UNIFIED CARD 
                   Clean, dark container holding BOTH image and text side-by-side.
                   No floating boxes, no scattered layout. Absolutely clean.
                */}
                     <div className="bg-[#050510]/95 backdrop-blur-xl border border-cyan-900/50 p-4 sm:p-6 md:p-8 lg:p-10 shadow-[0_-20px_40px_rgba(0,0,0,0.8),_0_0_20px_rgba(6,182,212,0.1)] rounded-md group flex flex-col lg:flex-row gap-8 lg:gap-12 items-center lg:items-stretch overflow-hidden relative transition-all duration-500 hover:border-cyan-500/50">

                        {/* Background Decor */}
                        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-bl from-cyan-900/10 to-transparent rounded-full blur-[80px] pointer-events-none" />

                        {/* 
                      LEFT: 3:4 PORTRAIT IMAGE 
                      Guaranteed aspect-[3/4]. Unbreakable structure.
                   */}
                        <div className="w-full sm:w-[80%] md:w-[320px] lg:w-[350px] shrink-0 aspect-[3/4] border-2 border-[#151522] bg-[#030308] relative overflow-hidden shadow-[6px_6px_0_rgba(6,182,212,0.15)] group-hover:shadow-[6px_6px_0_rgba(6,182,212,0.4)] transition-shadow duration-500 rounded-sm">

                           {/* Image Frame Decor */}
                           <span className="absolute top-0 left-0 bg-[#080812] text-gray-400 text-[0.45rem] md:text-[0.55rem] px-2 py-1 tracking-widest font-bold z-20 shadow-[0_2px_5px_rgba(0,0,0,0.8)] border-b border-r border-[#151522]">
                              ARC-{i + 1}.IMG
                           </span>

                           {item.image ? (
                              <>
                                 <img src={item.image} alt={item.title} className="w-full h-full object-cover grayscale-[30%] opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-[1000ms] group-hover:scale-105 origin-center" />
                                 <div className="absolute inset-0 bg-gradient-to-tr from-cyan-900/20 to-transparent mix-blend-overlay pointer-events-none" />
                                 {/* Minimal CRT Lines */}
                                 <div className="absolute inset-0 pointer-events-none opacity-20" style={{ background: "repeating-linear-gradient(0deg, rgba(0,0,0,0.1) 0px, transparent 1px, transparent 2px)" }} />
                              </>
                           ) : (
                              <div className="absolute inset-0 border border-dashed border-gray-800 flex flex-col items-center justify-center bg-gray-900/20 gap-4">
                                 <Icon size={48} className="text-gray-700" strokeWidth={1} />
                                 <span className="pixel-text text-gray-500 text-[0.6rem] tracking-widest text-center px-4 leading-relaxed">IMAGE DATA<br />CORRUPTED</span>
                              </div>
                           )}

                           {/* Overlaid Crosshair / Interaction Icon */}
                           <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity z-20 flex items-center gap-2">
                              <div className="w-2 h-2 rounded-full bg-cyan-400 anim-blink shadow-[0_0_8px_#22d3ee]" />
                              <span className="pixel-text text-[0.5rem] text-cyan-400 tracking-[0.2em] drop-shadow-[0_2px_2px_rgba(0,0,0,1)]">{item.year}</span>
                           </div>
                        </div>

                        {/* 
                      RIGHT: CLEAN NARRATIVE TEXT 
                      Vertically centered. High padding. Elegant typography. 
                   */}
                        <div className="flex-1 flex flex-col justify-center py-4 relative lg:pl-4">

                           {/* Very subtle backdrop icon (behind text) */}
                           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none z-0 mix-blend-screen">
                              <Icon size={240} strokeWidth={0.5} />
                           </div>

                           <div className="relative z-10 w-full text-center lg:text-left">

                              {/* Year & Icon Header */}
                              <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4 mb-6">
                                 <div className="w-12 h-12 border border-cyan-800/60 bg-[#080812] flex items-center justify-center shrink-0 shadow-[4px_4px_0_rgba(0,0,0,0.3)] rounded-sm group-hover:border-cyan-500/80 transition-colors">
                                    <Icon size={20} className="text-cyan-500" strokeWidth={1.5} />
                                 </div>
                                 <div className="flex flex-col justify-center gap-1">
                                    <span className="pixel-text text-cyan-600 text-[0.55rem] md:text-sm tracking-[0.2em]">YEAR {item.year}</span>
                                    <span className="pixel-text text-gray-500 text-[0.45rem] tracking-[0.3em] uppercase">SYSTEM.LOG_ENTRY</span>
                                 </div>
                              </div>

                              {/* Title */}
                              <h2 className="pixel-text text-xl sm:text-2xl md:text-3xl text-gray-100 mb-6 leading-snug group-hover:text-cyan-100 group-hover:drop-shadow-[0_0_10px_rgba(6,182,212,0.3)] transition-all">
                                 {item.title}
                              </h2>

                              {/* Separator Line */}
                              <div className="w-16 h-px bg-cyan-900/50 mx-auto lg:mx-0 mb-6" />

                              {/* Description */}
                              <p className="mono-text text-sm md:text-base leading-[2] md:leading-[2.2] text-gray-400 text-justify lg:text-left group-hover:text-gray-300 transition-colors">
                                 {item.description}
                              </p>

                              {/* Aesthetic Node UI at the bottom */}
                              <div className="mt-8 md:mt-12 flex items-center justify-center lg:justify-start gap-3 opacity-50 group-hover:opacity-100 transition-opacity">
                                 <span className="w-4 h-1 border-b border-r border-gray-700 rounded-sm" />
                                 <div className="w-1.5 h-1.5 bg-gray-700 group-hover:bg-cyan-500 transition-colors rounded-sm" />
                                 <div className="w-2.5 h-1.5 bg-gray-600 group-hover:bg-cyan-400 transition-colors delay-75 rounded-sm" />
                                 <span className="w-4 h-1 border-t border-l border-gray-700 rounded-sm" />
                              </div>

                           </div>
                        </div>

                     </div>
                  </div>
               )
            })}
         </div>

      </div>
   )
}
