import React, { useState, useRef } from "react";
import { useSound } from "./SoundContext";

// --- DATA ---
const LANGS = {
   html: { name: 'HTML', svg: `<svg viewBox="0 0 32 32"><path d="M4 0l2.8 31.4L16 34l9.2-2.6L28 0z" fill="#e44d26"/><path d="M16 31.1l7.4-2.1 2.4-27H16z" fill="#f16529"/><path d="M16 13.5H10l-.4-4.5H16V4.6H5.2l1.3 14.7H16zm0 9.8-.1.1-4.9-1.3-.3-3.6H6.3l.6 7.1 9.1 2.5z" fill="#fff"/><path d="M16 13.5v4.8h5.6l-.5 5.6L16 25v5l9.1-2.5.7-7.8.7-6.3zm0-8.9v4.4h10.6l.3-4.4z" fill="#ebebeb"/></svg>` },
   css: { name: 'CSS3', svg: `<svg viewBox="0 0 32 32"><path d="M4 0l2.8 31.4L16 34l9.2-2.6L28 0z" fill="#1572b6"/><path d="M16 31.1l7.4-2.1 2.4-27H16z" fill="#33a9dc"/><path d="M16 13.5H9.8L9.4 9H16V4.6H5.1l1.3 14.7H16zm0 9.9-.1.1-4.9-1.4-.3-3.6H6.3l.6 7.1L16 29v-5.6z" fill="#fff"/><path d="M16 13.5v4.8h5.9l-.5 6.2L16 26.1V31l9.1-2.5L27.5 9H16v4.5z" fill="#ebebeb"/></svg>` },
   js: { name: 'JavaScript', svg: `<svg viewBox="0 0 32 32"><rect width="32" height="32" fill="#f7df1e"/><path d="M6.5 25.3l3-1.8c.6 1 1.1 1.9 2.3 1.9 1.2 0 1.9-.5 1.9-2.3V13h3.7v10.2c0 3.7-2.2 5.4-5.4 5.4-2.9 0-4.5-1.5-5.5-3.3zm12.1-.4 3-1.8c.8 1.3 1.8 2.2 3.6 2.2 1.5 0 2.5-.75 2.5-1.8 0-1.25-.99-1.7-2.66-2.43l-.91-.39c-2.63-1.12-4.38-2.53-4.38-5.5 0-2.74 2.08-4.82 5.34-4.82 2.32 0 3.98.8 5.18 2.93l-2.84 1.82c-.62-1.12-1.3-1.56-2.34-1.56-1.06 0-1.74.68-1.74 1.56 0 1.09.68 1.53 2.24 2.2l.91.39c3.1 1.33 4.86 2.68 4.86 5.72 0 3.28-2.57 5.09-6.03 5.09-3.38 0-5.56-1.6-6.63-3.75z" fill="#000"/></svg>` },
   python: { name: 'Python', svg: `<svg viewBox="0 0 32 32"><path d="M15.9 2C11.2 2 11.5 4 11.5 4v4.2h4.6v1.3H8.1S4 9 4 14.1s3.6 4.9 3.6 4.9h2.1v-2.4s-.1-3.6 3.5-3.6h6s3.4.05 3.4-3.3V5.3S23.2 2 15.9 2z" fill="#3776ab"/><path d="M16.1 30.1c4.7 0 4.4-2 4.4-2v-4.2h-4.6v-1.3H24s4.1.5 4.1-4.6S24.5 13 24.5 13h-2.1v2.4s.1 3.6-3.5 3.6h-6s-3.4-.05-3.4 3.3v5.5S8.8 30.1 16.1 30.1z" fill="#ffd43b"/><circle cx="13.2" cy="5.8" r="1.2" fill="#fff"/><circle cx="18.8" cy="26.2" r="1.2" fill="#fff"/></svg>` },
   php: { name: 'PHP', svg: `<svg viewBox="0 0 32 32"><ellipse cx="16" cy="16" rx="15" ry="9" fill="#8993be"/><path d="M10.6 12h2l-.4 2H14c1.4 0 2.3.7 2 2.2l-.6 3.8h-2l.6-3.5c.1-.7-.1-1-.7-1h-1.6l-.8 4.5h-2zm9 0h2l-.4 2h1.8c1.4 0 2.3.7 2 2.2l-.6 3.8h-2l.6-3.5c.1-.7-.1-1-.7-1h-1.6l-.8 4.5h-2z" fill="#fff"/></svg>` },
   mysql: { name: 'MySQL', svg: `<svg viewBox="0 0 32 32"><path d="M2 20c2.5.3 4-.4 5.4-1.2.4-.2 1.4-.5 1.6-1-.5-.1-1.1-.2-1.6-.1-.6 0-1.2.1-1.8.3-.4.1-.9.4-1.4.4V16c.5-.1 1-.3 1.5-.3.7-.1 1.5-.1 2.2 0 1.8.3 2.8 1.2 2.8 3 0 .7-.3 1.4-1 1.9-1.1.8-2.7 1-4 1C3.8 22 2.5 21.5 2 20z" fill="#00758f"/><path d="M12 6.5h2.4l2.8 7.4 2.8-7.4h2.3l-4.1 9.9c-.9 2.2-1.6 3-3.4 3-.4 0-.8 0-1.2-.1V17c.3.1.6.1.9.1.7 0 1.2-.4 1.6-1.3L12 6.5z" fill="#00758f"/><path d="M27.5 9.3h-5.7v2h4.8v2h-4.8v2.2h5.7v2H20V7.3h7.5z" fill="#f29111"/><path d="M2 13.8c2.3.2 3.8-.3 5.2-1 .4-.2 1.3-.4 1.5-.9-.5-.1-1-.2-1.5-.2-.6 0-1.2.1-1.7.3-.5.1-.9.3-1.4.3v-1.8c.4-.1.9-.3 1.4-.3.7-.1 1.4-.1 2.1.1 1.7.4 2.6 1.3 2.6 3.1 0 .7-.3 1.4-1 1.9-1 .8-2.6 1-3.8 1C3.5 16.3 2.3 15.6 2 13.8z" fill="#00758f"/></svg>` },
   laravel: { name: 'Laravel', svg: `<svg viewBox="0 0 32 32"><path d="M30 8.7l-9.3-5.4a1 1 0 00-1 0L10.4 9l-8.5-4.9a1 1 0 00-1 0A1 1 0 000 5v12a1 1 0 00.5.9l9.5 5.5v10.7a1 1 0 00.5.9 1 1 0 001 0L30 23.3a1 1 0 00.5-.9V9.6a1 1 0 00-.5-.9z" fill="#ff2d20"/><path d="M29 22.8L11.5 32.7V22l17.5-10.1zM1.5 5.9l8.5 4.9v10.8L1.5 17.2zM11.5 9.6l8.2-4.7 8.8 5.1-8.5 4.9z" fill="rgba(0,0,0,.18)"/></svg>` },
   git: { name: 'Git', svg: `<svg viewBox="0 0 32 32"><path d="M30.8 14.6L17.4 1.2a2.5 2.5 0 00-3.5 0l-2.5 2.5 3.1 3.1a3 3 0 013.8 3.8l3 3a3 3 0 11-1.5 1.5l-2.8-2.8v7.3a3 3 0 11-2 0V12a3 3 0 01-1.6-3.9L10.3 4.9 1.2 14a2.5 2.5 0 000 3.5l13.4 13.3a2.5 2.5 0 003.5 0l12.7-12.7a2.5 2.5 0 000-3.5z" fill="#f05032"/></svg>` },
   next: { name: 'Next.js', svg: `<svg viewBox="0 0 128 128"><path fill="#fff" d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64 64-28.7 64-64S99.3 0 64 0zm33.8 95.8L51.4 34.6H43v58.8h7.4V44.2l39.5 54.1c-1.9 1.1-3.9 2-6 2.8 5.4.1 10.7-.6 15.9-2.3-2 1.1-4 2.1-6.1 3zm-2.1-36.8h-7.4v24.2l7.4 10.1V59z"/></svg>` },
   react: { name: 'React', svg: `<svg viewBox="-11.5 -10.23174 23 20.46348"><circle cx="0" cy="0" r="2.05" fill="#61dafb"/><g stroke="#61dafb" stroke-width="1" fill="none"><ellipse rx="11" ry="4.2"/><ellipse rx="11" ry="4.2" transform="rotate(60)"/><ellipse rx="11" ry="4.2" transform="rotate(120)"/></g></svg>` },
   tailwind: { name: 'Tailwind', svg: `<svg viewBox="0 0 32 32"><path d="M16 8.5C13 8.5 11 10 10 13c1.5-2 3.5-2.5 6-1.5 1.5.6 2.5 1.7 3.7 2.9 1.9 2 4.1 4.1 8.3 4.1 3 0 5-1.5 6-4.5-1.5 2-3.5 2.5-6 1.5-1.5-.6-2.5-1.7-3.7-2.9-2-2-4.1-4.1-8.3-4.1zm-6 9c-3 0-5 1.5-6 4.5 1.5-2 3.5-2.5 6-1.5 1.5.6 2.5 1.7 3.7 2.9 1.9 2 4.1 4.1 8.3 4.1 3 0 5-1.5 6-4.5-1.5 2-3.5 2.5-6 1.5-1.5-.6-2.5-1.7-3.7-2.9-2-2-4.1-4.1-8.3-4.1z" fill="#38bdf8"/></svg>` },
   pwa: { name: 'PWA', svg: `<svg viewBox="0 0 32 32"><path d="M16 2L2 9l14 7 14-7-14-7zM2 23l14 7 14-7-14-7-14 7z" fill="#5a0fc8"/></svg>` }
};

const LORE_DATA = {
   wilmar: {
      type: 'INTERNSHIP QUEST',
      title: 'Internship Wilmar\nBisnis Indonesia',
      date: '2024',
      lore: 'Sang pemain mendapat mentor legendaris — di sinilah jurus-jurus sakti di-unlock satu per satu. AJAX, CRUD, DataTable, Flutter, hingga Laravel dikuasai dalam satu arc. Quest berakhir dengan boss fight sesungguhnya: membangun Inventory Management System untuk Politeknik Wilmar — dan berhasil ditaklukkan.',
      photos: [],
      gear: ['laravel', 'php', 'mysql', 'js', 'git']
   },
   medan: {
      type: 'ORIGIN ARC',
      title: 'SMK Telkom Medan',
      date: '2022 — 2024',
      lore: 'Di sinilah kisah bermula. Pemain level 0 menginjakkan kaki dan menyentuh baris kode pertamanya. HTML, CSS, JS, Bootstrap, Tailwind, Laravel, React — satu per satu skill slot terisi. Tidak ada cheat code, hanya grinding panjang yang mengubah noob menjadi developer.',
      photos: ['/medan0.jpeg', '/medan1.jpeg', '/medan2.jpeg', '/medan3.jpeg', '/medan4.jpeg', '/medan5.jpeg', '/medan6.jpeg'],
      gear: ['html', 'css', 'js', 'laravel', 'php', 'react']
   },
   tult: {
      type: 'CURRENT MAIN QUEST',
      title: 'Telkom University\nARC',
      date: '2025 — PRESENT',
      lore: 'Arena megah menjadi tempat pembuktian berikutnya. Bukan sekadar grinding solo — di sini sang pemain berburu party members, membangun relasi, dan menambah stack baru: Java, Next.js, PWA, Python. Setiap semester adalah dungeon baru. Quest ini belum selesai — dan inilah yang membuatnya berbahaya.',
      photos: ['/tult1.jpeg', '/tult2.jpeg', '/tult3.jpeg', '/tult4.jpeg', '/tult5.jpeg'],
      gear: ['java', 'next', 'react', 'python', 'js', 'git']
   },
   numone: {
      type: 'SOLO BUILD QUEST',
      title: 'Pasundan Dev Isle',
      date: '2025 — PRESENT',
      lore: 'Perantau tanpa guild, hanya senjata dan keyboard. Di sudut sunyi perjalanan, sang pemain solo merancang benteng dagang bernama Numone — satu sistem yang menampung POS Kasir, Stock Opname, Kitchen Display System, hingga Laporan Laba Rugi. Tidak ada NPC yang membantu. Hanya Git, React, Next, PWA, PostgreSQL — dan tekad yang tidak pernah respawn.',
      photos: ['/solo1.jpg', '/solo2.jpg', '/solo3.jpg', '/solo4.jpg', '/solo6.jpeg'],
      gear: ['next', 'react', 'js', 'git', 'pwa', 'mysql']
   }
};

// --- COMPONENT ---
export default function LorePage() {
   const [selectedKey, setSelectedKey] = useState(null);
   const { playClick, playHover } = useSound();
   const scrollRef = useRef(null);

   // Drag scroll logic for gallery
   const [isDragging, setIsDragging] = useState(false);
   const [startX, setStartX] = useState(0);
   const [scrollLeft, setScrollLeft] = useState(0);

   const onMouseDown = (e) => {
      setIsDragging(true);
      if (scrollRef.current) {
         setStartX(e.pageX - scrollRef.current.offsetLeft);
         setScrollLeft(scrollRef.current.scrollLeft);
      }
   };

   const onMouseMove = (e) => {
      if (!isDragging || !scrollRef.current) return;
      e.preventDefault();
      const x = e.pageX - scrollRef.current.offsetLeft;
      const walk = (x - startX) * 1.5;
      scrollRef.current.scrollLeft = scrollLeft - walk;
   };

   const stopDragging = () => setIsDragging(false);

   const openPanel = (key) => {
      playClick();
      setSelectedKey(key);
   };

   const closePanel = () => {
      playClick();
      setSelectedKey(null);
   };

   const currentData = selectedKey ? LORE_DATA[selectedKey] : null;

   return (
      <div className="relative w-full md:h-screen md:overflow-hidden min-h-screen overflow-y-auto font-['Press_Start_2P'] select-none">
         <style>{`
        /* ── ISLAND ── */
        .island-wrapper {
          display: flex; flex-direction: column; align-items: center;
          position: relative; left: auto; top: auto;
        }
        @media (min-width: 768px) {
          .island-wrapper {
            position: absolute;
            left: var(--l);
            top: var(--t);
            transform: translateX(-50%);
          }
        }
        .island-node {
          display: flex; flex-direction: column; align-items: center;
          cursor: pointer; z-index: 10;
          animation: float-anim var(--f, 4s) ease-in-out infinite alternate;
          gap: 0; transition: transform 0.3s ease;
        }
        @keyframes float-anim { from { transform: translateY(0); } to { transform: translateY(-14px); } }
        .island-node:hover .island-img { filter: brightness(1.3) drop-shadow(0 0 20px var(--glow, #4488ff)); }
        .island-node.active .island-img { filter: brightness(1.4) drop-shadow(0_0_28px_var(--glow,#4488ff)); }
        .island-img { width: var(--sz, 150px); height: var(--sz, 150px); object-fit: contain; image-rendering: pixelated; transition: filter 0.2s; }

        .island-label { display: flex; flex-direction: column; align-items: center; margin-top: 6px; gap: 3px; }
        .label-bar { display: flex; align-items: center; gap: 4px; width: 100%; justify-content: center; }
        .bar-line { height: 1px; width: 36px; background: linear-gradient(to right, transparent, rgba(245, 200, 66, 0.55), transparent); }
        .label-arrows { font-size: 5px; color: rgba(245, 200, 66, 0.5); letter-spacing: 1px; }
        .label-text { font-family: 'VT323', monospace; font-size: 18px; color: #f5c842; text-shadow: 0 0 8px rgba(245, 200, 66, 0.5), 1px 1px 0 #7a5000; letter-spacing: 2px; text-align: center; white-space: nowrap; line-height: 1; }

        /* ── PANEL ── */
        .panel-backdrop { position: fixed; inset: 0; z-index: 50; display: flex; align-items: center; justify-content: center; pointer-events: none; transition: background 0.3s ease; }
        .panel-backdrop.visible { pointer-events: auto; background: rgba(0,0,0,0.4); }
        .quest-panel {
          position: relative; width: min(580px, 94vw); max-height: calc(100vh - 48px);
          background: rgba(6, 10, 52, 0.98); border: 2px solid rgba(30, 58, 184, 0.7);
          box-shadow: 0 0 60px rgba(21, 48, 168, 0.5), 0 0 120px rgba(21, 48, 168, 0.2), inset 0 0 30px rgba(0, 0, 30, 0.6);
          transform: scale(0.88) translateY(30px); opacity: 0; transition: transform 0.38s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.32s ease;
          pointer-events: none; display: flex; flex-direction: column; overflow: hidden;
        }
        .quest-panel.open { transform: scale(1) translateY(0); opacity: 1; pointer-events: auto; }

        /* Panel details */
        .panel-header { position: relative; background: linear-gradient(180deg, #190830 0%, #110628 100%); border-bottom: 2px solid rgba(245, 200, 66, 0.25); flex-shrink: 0; }
        .header-topbar { height: 4px; background: linear-gradient(90deg, transparent, #f5c842 20%, #a07818 50%, #f5c842 80%, transparent); }
        .corner-decor { position: absolute; width: 18px; height: 18px; }
        .corner-decor svg { width: 100%; height: 100%; }
        .c-tl { top: 4px; left: 4px; } .c-tr { top: 4px; right: 4px; transform: scaleX(-1); }
        .c-bl { bottom: 0; left: 4px; transform: scaleY(-1); } .c-br { bottom: 0; right: 4px; transform: scale(-1, -1); }
        .header-content { padding: 14px 38px; display: flex; flex-direction: column; align-items: center; gap: 6px; position: relative; }
        .divider-rule { display: flex; align-items: center; gap: 6px; width: 100%; }
        .rule-line { flex: 1; height: 1px; background: linear-gradient(to right, transparent, rgba(245, 200, 66, 0.45), transparent); }
        .rule-diamond { width: 6px; height: 6px; background: #f5c842; clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%); flex-shrink: 0; }
        .header-type { font-size: 6px; color: rgba(245, 200, 66, 0.65); letter-spacing: 3px; margin-bottom: 2px; }
        .header-title { font-family: 'VT323', monospace; font-size: 28px; color: #fff; text-shadow: 0 0 18px rgba(160, 100, 255, 0.55), 2px 2px 0 #1a0040; letter-spacing: 2px; text-align: center; line-height: 1.15; }
        .header-date { font-size: 7px; color: #f5c842; letter-spacing: 2px; }
        .close-btn { position: absolute; top: 9px; right: 9px; width: 26px; height: 26px; background: rgba(0, 0, 0, 0.5); border: 1px solid rgba(255, 255, 255, 0.2); color: rgba(255, 255, 255, 0.7); font-size: 9px; cursor: pointer; display: flex; align-items: center; justify-content: center; transition: background 0.1s, color 0.1s; z-index: 100; }
        .close-btn:hover { background: rgba(200, 0, 60, 0.6); color: #fff; }

        .panel-body { flex: 1; overflow-y: auto; display: flex; flex-direction: column; }
        .lore-section { padding: 16px 22px 14px; background: rgba(10, 5, 40, 0.6); border-bottom: 1px solid rgba(50, 70, 180, 0.3); }
        .section-label { font-size: 6px; color: rgba(245, 200, 66, 0.45); letter-spacing: 3px; margin-bottom: 8px; }
        .lore-text { font-family: 'VT323', monospace; font-size: 18px; color: rgba(200, 210, 255, 0.9); line-height: 1.7; text-align: center; }

        .gallery-section { padding: 14px 20px; border-bottom: 1px solid rgba(50, 70, 180, 0.3); }
        .gallery-scroll { display: flex; gap: 8px; overflow-x: auto; border: 2px solid rgba(80, 100, 220, 0.25); padding: 6px; cursor: grab; }
        .gallery-scroll:active { cursor: grabbing; }
        .gallery-slide { flex: 0 0 auto; min-width: 120px; height: 160px; border: 1px solid rgba(50, 70, 180, 0.25); overflow: hidden; display: flex; align-items: center; justify-content: center; background: repeating-linear-gradient(45deg, rgba(15, 20, 80, 0.8) 0px, rgba(15, 20, 80, 0.8) 4px, rgba(8, 10, 45, 0.8) 4px, rgba(8, 10, 45, 0.8) 10px); font-size: 6px; color: rgba(80, 100, 255, 0.35); text-align: center; }
        .gallery-slide img { height: 100%; width: auto; object-fit: contain; }
        
        .gear-section { padding: 14px 20px 24px; }
        .gear-label { font-size: 7px; color: #f5c842; letter-spacing: 1px; margin-bottom: 12px; }
        .gear-grid { display: flex; flex-wrap: wrap; gap: 10px; }
        .gear-card { width: 68px; background: linear-gradient(145deg, #15103a, #0b0823); border: 2px solid #a07818; display: flex; flex-direction: column; align-items: center; padding: 8px 4px 6px; cursor: pointer; position: relative; transition: border-color .15s, transform .12s; }
        .gear-card::before { content: ''; position: absolute; inset: 3px; border: 1px solid rgba(245, 200, 66, 0.13); pointer-events: none; }
        .gear-card:hover { border-color: #f5c842; transform: translateY(-2px); }
        .gear-stars { position: absolute; top: 3px; right: 3px; font-size: 5px; color: #f5c842; letter-spacing: -1px; }
        .gear-logo { width: 30px; height: 30px; display: flex; align-items: center; justify-content: center; margin-bottom: 5px; }
        .gear-logo svg { width: 100%; height: 100%; }
        .gear-name { font-size: 5px; color: rgba(200, 210, 255, 0.65); text-align: center; line-height: 1.7; letter-spacing: .3px; }
      `}</style>

         {/* ── WORLD CONTENT ── */}
         <div className="relative z-10 w-full flex flex-col items-center gap-16 md:block md:w-full md:h-full py-24 md:py-0 transition-opacity duration-500">
            <div className="md:absolute md:top-[8%] md:left-1/2 md:-translate-x-1/2 text-center pointer-events-none mb-4 md:mb-0">
               <div className="pixel-text text-[clamp(18px,3vw,32px)] text-white tracking-[4px] drop-shadow-[0_0_24px_rgba(100,160,255,0.7)]">
                  PLAYER LORE
               </div>
            </div>

            {/* Wilmar Island */}
            <Island
               id="wilmar"
               name="Wilmar Bisnis"
               img="/wilmar.png"
               pos={{ left: '15%', top: '36%' }}
               sz="160px"
               glow="#5599ff"
               floatDur="4.2s"
               isActive={selectedKey === 'wilmar'}
               onClick={() => openPanel('wilmar')}
               onHover={playHover}
            />

            {/* Medan Island */}
            <Island
               id="medan"
               name="SMK Telkom Medan"
               img="/medan.png"
               pos={{ left: '38.3%', top: '22%' }}
               sz="158px"
               glow="#ff9944"
               floatDur="5.5s"
               isActive={selectedKey === 'medan'}
               onClick={() => openPanel('medan')}
               onHover={playHover}
            />

            {/* TULT Island */}
            <Island
               id="tult"
               name="Telkom University"
               img="/tult.png"
               pos={{ left: '61.7%', top: '36%' }}
               sz="160px"
               glow="#44ffbb"
               floatDur="6s"
               isActive={selectedKey === 'tult'}
               onClick={() => openPanel('tult')}
               onHover={playHover}
            />

            {/* Numone Citadel */}
            <Island
               id="numone"
               name="Pasundan Dev Isle"
               img="/sate.png"
               pos={{ left: '85%', top: '22%' }}
               sz="154px"
               glow="#f5c842"
               floatDur="4.8s"
               isActive={selectedKey === 'numone'}
               onClick={() => openPanel('numone')}
               onHover={playHover}
            />
         </div>

         {/* ── OVERLAY PANEL ── */}
         <div className={`panel-backdrop ${selectedKey ? 'visible' : ''}`} onClick={(e) => e.target === e.currentTarget && closePanel()}>
            <div className={`quest-panel ${selectedKey ? 'open' : ''}`}>
               <div className="panel-header">
                  <div className="header-topbar" />
                  <CornerDecor className="c-tl" />
                  <CornerDecor className="c-tr" />
                  <CornerDecor className="c-bl" />
                  <CornerDecor className="c-br" />
                  <button className="close-btn font-['Press_Start_2P']" onClick={closePanel}>X</button>
                  <div className="header-content">
                     <div className="header-type">{currentData?.type || 'QUEST LOG'}</div>
                     <div className="header-title" dangerouslySetInnerHTML={{ __html: currentData?.title.replace('\n', '<br>') || '...' }} />
                     <div className="divider-rule">
                        <div className="rule-line" />
                        <div className="rule-diamond" />
                        <div className="rule-line" />
                     </div>
                     <div className="header-date">{currentData?.date || '2024'}</div>
                  </div>
               </div>

               <div className="panel-body scrollbar-thin">
                  <div className="lore-section">
                     <div className="section-label">// LORE ENTRY //</div>
                     <div className="lore-text">{currentData?.lore || '...'}</div>
                  </div>

                  <div className="gallery-section">
                     <div className="section-label">// GALLERY //</div>
                     <div
                        className="gallery-scroll scrollbar-hide"
                        ref={scrollRef}
                        onMouseDown={onMouseDown}
                        onMouseMove={onMouseMove}
                        onMouseUp={stopDragging}
                        onMouseLeave={stopDragging}
                     >
                        {[0, 1, 2, 3, 4].map(idx => (
                           <div key={idx} className="gallery-slide">
                              {currentData?.photos[idx] ? (
                                 <img src={currentData.photos[idx]} alt={`foto ${idx + 1}`} />
                              ) : (
                                 <span>[ FOTO {idx + 1} ]</span>
                              )}
                           </div>
                        ))}
                     </div>
                     <div className="text-[5px] text-[#f5c84255] tracking-[2px] text-right mt-1.5">&#8592; GESER &#8594;</div>
                  </div>

                  <div className="gear-section">
                     <div className="gear-label font-['Press_Start_2P']">Gear Acquired</div>
                     <div className="gear-grid">
                        {currentData?.gear.map(k => {
                           const lang = LANGS[k];
                           if (!lang) return null;
                           return (
                              <div key={k} className="gear-card" onMouseEnter={playHover}>
                                 <span className="gear-stars">★★★</span>
                                 <div className="gear-logo" dangerouslySetInnerHTML={{ __html: lang.svg }} />
                                 <div className="gear-name font-['Press_Start_2P']">{lang.name}</div>
                              </div>
                           );
                        })}
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

// --- SUB-COMPONENTS ---

function Island({ id, name, img, pos, sz, glow, floatDur, isActive, onClick, onHover }) {
   return (
      <div
         className="island-wrapper"
         style={{ '--l': pos.left, '--t': pos.top }}
      >
         <div
            className={`island-node ${isActive ? 'active' : ''}`}
            style={{
               '--f': floatDur,
               '--sz': sz,
               '--glow': glow
            }}
            onClick={onClick}
            onMouseEnter={onHover}
         >
            <img className="island-img" src={img} alt={name} />
            <div className="island-label">
               <div className="label-bar">
                  <div className="bar-line" />
                  <span className="label-arrows">&lt;&lt;</span>
                  <div className="bar-line" />
               </div>
               <div className="label-text">{name}</div>
               <div className="label-bar">
                  <div className="bar-line" />
                  <span className="label-arrows">&gt;&gt;</span>
                  <div className="bar-line" />
               </div>
            </div>
         </div>
      </div>
   );
}

function CornerDecor({ className }) {
   return (
      <div className={`corner-decor ${className}`}>
         <svg viewBox="0 0 18 18" fill="none">
            <path d="M2 16V2h14" stroke="#f5c842" strokeWidth="1.5" />
            <circle cx="2" cy="2" r="1.8" fill="#f5c842" />
         </svg>
      </div>
   );
}
