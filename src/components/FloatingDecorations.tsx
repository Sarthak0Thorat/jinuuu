import React from 'react';

export const FloatingDecorations: React.FC<{ isDark?: boolean }> = ({ isDark = false }) => {
  return (
    <div 
      className="fixed inset-0 pointer-events-none overflow-hidden z-0 select-none"
      aria-hidden="true"
    >
      {/* Delicate floating elements with slow, gentle drifting */}
      <span 
        className="absolute top-[12%] left-[8%] text-[14px] opacity-20 animate-pulse transition-opacity duration-1000"
        style={{ animationDuration: '6s' }}
      >
        {isDark ? '✦' : '♡'}
      </span>
      <span 
        className="absolute top-[28%] right-[10%] text-[12px] opacity-25"
        style={{ animationDuration: '7s' }}
      >
        {isDark ? '✧' : '🌸'}
      </span>
      <span 
        className="absolute bottom-[25%] left-[12%] text-[11px] opacity-20"
      >
        {isDark ? '⋆' : '🌷'}
      </span>
      <span 
        className="absolute top-[65%] right-[8%] text-[13px] opacity-20 animate-pulse"
        style={{ animationDuration: '8s' }}
      >
        {isDark ? '✦' : '♡'}
      </span>
      <span 
        className="absolute bottom-[10%] right-[22%] text-[10px] opacity-15"
      >
        {isDark ? '✧' : '⋆'}
      </span>
      <span 
        className="absolute top-[45%] left-[6%] text-[11px] opacity-15"
      >
        {isDark ? '⋆' : '✧'}
      </span>
    </div>
  );
};
