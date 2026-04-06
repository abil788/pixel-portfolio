import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ project, onClick }) => {
  const { id, name, image, description, tech, status, stats } = project;

  const getRarityInfo = (status) => {
    switch (status) {
      case 'legendary':
        return {
          label: '★ LEGENDARY',
          color: '#ffcc00',
          bg: 'rgba(40, 28, 0, 0.9)',
          dark: '#7a5a00'
        };
      case 'epic':
        return {
          label: '◆ EPIC',
          color: '#a855f7',
          bg: 'rgba(30, 0, 40, 0.9)',
          dark: '#6b21a8'
        };
      case 'rare':
      default:
        return {
          label: '● RARE',
          color: '#3b82f6',
          bg: 'rgba(0, 20, 40, 0.9)',
          dark: '#1d4ed8'
        };
    }
  };

  const rarity = getRarityInfo(status);

  return (
    <div 
      className="prj-card" 
      onClick={onClick}
      style={{
        '--c': rarity.color,
        '--cb': rarity.bg,
        '--cd': rarity.dark
      }}
    >
      <div className="prj-br-tl"></div>
      <div className="prj-br-tr"></div>
      <div className="prj-br-bl"></div>
      <div className="prj-br-br"></div>

      <div className="prj-badge">{rarity.label}</div>

      <div className="prj-thumb">
        <div className="prj-thumb-dots"></div>
        <div className="prj-thumb-vignette"></div>
        <div className="prj-thumb-scanline"></div>

        {image ? (
          <img src={image} alt={name} loading="lazy" />
        ) : (
          <div className="prj-thumb-placeholder">
            <svg width="38" height="38" viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg" style={{ imageRendering: 'pixelated' }}>
              <rect x="0" y="2" width="1" height="1" fill={rarity.color}/>
              <rect x="1" y="1" width="8" height="1" fill={rarity.color}/>
              <rect x="1" y="2" width="8" height="4" fill={rarity.dark}/>
              <rect x="2" y="3" width="2" height="2" fill={rarity.color} opacity="0.25"/>
              <rect x="6" y="3" width="2" height="2" fill={rarity.color} opacity="0.25"/>
              <rect x="1" y="6" width="8" height="1" fill={rarity.color}/>
              <rect x="2" y="7" width="2" height="2" fill={rarity.color}/>
              <rect x="6" y="7" width="2" height="2" fill={rarity.color}/>
            </svg>
            <div className="prj-thumb-label">[ NO SCREENSHOT ]</div>
          </div>
        )}

        <div className="prj-thumb-glow"></div>
      </div>

      <div className="prj-body">
        <div className="prj-title-row">
          <div className="prj-title text-glow-cyan">{name.toUpperCase()}</div>
          <div className="prj-num">#{String(id).padStart(3, '0')}</div>
        </div>
        <div className="prj-desc">
          {description}
        </div>
        <div className="prj-divider"></div>
        
        <div className="prj-stats">
          <div className="prj-stat">
            <div className="prj-stat-num" style={{ color: '#ff4455' }}>{stats.power}</div>
            <div className="prj-stat-bar">
              <div className="prj-stat-fill" style={{ background: '#ff4455', width: `${stats.power}%` }}></div>
            </div>
            <div className="prj-stat-lbl">ATK</div>
          </div>
          <div className="prj-stat">
            <div className="prj-stat-num" style={{ color: '#4488ff' }}>{stats.defense}</div>
            <div className="prj-stat-bar">
              <div className="prj-stat-fill" style={{ background: '#4488ff', width: `${stats.defense}%` }}></div>
            </div>
            <div className="prj-stat-lbl">DEF</div>
          </div>
          <div className="prj-stat">
            <div className="prj-stat-num" style={{ color: '#33cc77' }}>{stats.speed}</div>
            <div className="prj-stat-bar">
              <div className="prj-stat-fill" style={{ background: '#33cc77', width: `${stats.speed}%` }}></div>
            </div>
            <div className="prj-stat-lbl">EXP</div>
          </div>
        </div>

        <div className="prj-tags">
          {tech.slice(0, 3).map((t, idx) => (
            <span key={idx} className="prj-tag">{t.toUpperCase()}</span>
          ))}
          {tech.length > 3 && (
            <span className="prj-tag prj-tag-hi">+{tech.length - 3}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
