import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { loveConfig } from '../config';
import { Pip } from './Pip';

interface SpecialCardProps {
  onNext: () => void;
}

export const SpecialCard: React.FC<SpecialCardProps> = ({ onNext }) => {
  const [revealedCount, setRevealedCount] = useState(1);

  const lines = loveConfig.specialRealizations;

  useEffect(() => {
    if (revealedCount < lines.length) {
      const timer = setTimeout(() => {
        setRevealedCount((prev) => prev + 1);
      }, 1600);
      return () => clearTimeout(timer);
    }
  }, [revealedCount, lines.length]);

  return (
    <div 
      id="card-4-special"
      className="min-h-[85vh] flex flex-col items-center justify-center text-center px-6 py-10 max-w-[500px] mx-auto w-full relative"
    >
      {/* Night atmosphere card wrapper */}
      <div className="relative w-full rounded-2xl p-7 sm:p-9 bg-[#2E1F25] text-[#FFF9F5] shadow-2xl border border-[#48333D] overflow-hidden">
        {/* Subtle night stars */}
        <div className="absolute inset-0 pointer-events-none opacity-40">
          <span className="absolute top-4 left-6 text-xs text-[#F6D6DE]">✦</span>
          <span className="absolute top-10 right-8 text-[9px] text-[#F6D6DE]">✧</span>
          <span className="absolute bottom-8 left-12 text-[10px] text-[#F6D6DE]">⋆</span>
          <span className="absolute bottom-16 right-10 text-xs text-[#F6D6DE]">✦</span>
          <span className="absolute top-1/2 left-3 text-[8px] text-[#F6D6DE]">✧</span>
        </div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-handwriting text-3xl sm:text-4xl text-[#F6D6DE] font-semibold mb-8 leading-snug tracking-wide"
        >
          Somewhere along the way…
        </motion.h2>

        {/* Pip listening quietly and thoughtfully */}
        <div className="absolute -bottom-4 -right-2 sm:-bottom-5 sm:-right-4 pointer-events-none z-20">
          <Pip 
            emotion="thoughtful" 
            size={68} 
            isDark={true}
            label="Pip is listening quietly ♡" 
          />
        </div>

        {/* Sequential lines */}
        <div className="space-y-6 text-left sm:text-center">
          {lines.map((line, idx) => {
            if (idx >= revealedCount) return null;
            const isLast = idx === lines.length - 1;

            return (
              <motion.p
                key={idx}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: 'easeOut' }}
                className={`font-serif-love text-base sm:text-lg leading-relaxed ${
                  isLast
                    ? 'text-[#F6D6DE] font-semibold italic text-lg sm:text-xl pt-2'
                    : 'text-[#E3D0D5]'
                }`}
              >
                {line}
              </motion.p>
            );
          })}
        </div>

        {/* Next Button */}
        {revealedCount >= lines.length && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-10 flex justify-center"
          >
            <button
              id="special-next-btn"
              onClick={onNext}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#F6D6DE] text-[#2E1F25] text-sm font-sans-ui font-medium tracking-wide shadow-sm hover:bg-[#FFFFFF] active:scale-95 transition-all duration-200 cursor-pointer"
            >
              <span>continue →</span>
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
};
