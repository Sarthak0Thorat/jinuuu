import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { loveConfig } from '../config';
import { Pip } from './Pip';

interface LittleThingsCardProps {
  onNext: () => void;
}

const noteThemes = [
  {
    bg: 'bg-gradient-to-br from-[#FFF8FA] via-[#FFFFFF] to-[#FFF1F5]',
    revealedBg: 'bg-gradient-to-br from-[#FFF9FA] via-[#FFFFFF] to-[#FDE8EE]',
    border: 'border-[#F8CCD7]',
    borderActive: 'border-[#E88CA2]',
    shadow: 'shadow-[0_4px_16px_rgba(248,204,215,0.25)]',
    tapeBg: 'bg-[#F9CFD9]/90',
    tapeText: 'note 01 ♡',
    tagColor: 'text-[#9B3D56]',
    quoteBox: 'bg-[#FFF2F6]/90 border-[#F8CCD7]',
    quoteText: 'text-[#9B3D56]',
    pillText: 'tap to peek 💌',
    icon: '💌',
  },
  {
    bg: 'bg-gradient-to-br from-[#FFFBF7] via-[#FFFFFF] to-[#FFF3E8]',
    revealedBg: 'bg-gradient-to-br from-[#FFFDF9] via-[#FFFFFF] to-[#FEEFE3]',
    border: 'border-[#FCDCC8]',
    borderActive: 'border-[#F8AE84]',
    shadow: 'shadow-[0_4px_16px_rgba(252,220,200,0.28)]',
    tapeBg: 'bg-[#FDE1CD]/90',
    tapeText: 'note 02 ✨',
    tagColor: 'text-[#B05335]',
    quoteBox: 'bg-[#FFF4EC]/90 border-[#FCDCC8]',
    quoteText: 'text-[#B05335]',
    pillText: 'tap to open ✨',
    icon: '✨',
  },
  {
    bg: 'bg-gradient-to-br from-[#FAF7FD] via-[#FFFFFF] to-[#F5ECFB]',
    revealedBg: 'bg-gradient-to-br from-[#FCFAFF] via-[#FFFFFF] to-[#F3E7FB]',
    border: 'border-[#EADBF6]',
    borderActive: 'border-[#C29CE6]',
    shadow: 'shadow-[0_4px_16px_rgba(234,219,246,0.3)]',
    tapeBg: 'bg-[#EBDDF5]/90',
    tapeText: 'note 03 🌷',
    tagColor: 'text-[#7A4394]',
    quoteBox: 'bg-[#F6ECFC]/90 border-[#EADBF6]',
    quoteText: 'text-[#7A4394]',
    pillText: 'tap to read 🌷',
    icon: '🌷',
  },
];

export const LittleThingsCard: React.FC<LittleThingsCardProps> = ({ onNext }) => {
  const [revealedCards, setRevealedCards] = useState<Record<number, boolean>>({});

  const toggleCard = (id: number) => {
    setRevealedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const allRevealed = loveConfig.littleThings.every((item) => revealedCards[item.id]);

  return (
    <div 
      id="card-3-little-things"
      className="min-h-[85vh] flex flex-col items-center justify-center text-center px-4 py-8 max-w-[480px] mx-auto w-full"
    >
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full relative pt-6"
      >
        {/* Pip peeking playfully near the top corner of the notes */}
        <div className="absolute -top-12 right-2 sm:-right-4 pointer-events-none z-20">
          <Pip 
            emotion={allRevealed ? 'celebrating' : 'playful'} 
            size={68} 
            label="Pip is holding a tiny note ♡" 
            svgClassName="mt-4"
          />
        </div>

        <h2 className="font-handwriting text-3xl sm:text-4xl text-[#35252A] font-semibold mb-2">
          A few things I want to tell you…
        </h2>
        <p className="font-sans-ui text-xs text-[#806D72] mb-6 tracking-wide flex items-center justify-center gap-1.5">
          <span>(tap each note to unfold)</span>
          <span className="text-[#D98295]">♡</span>
        </p>

        {/* 3 Interactive Note Cards */}
        <div className="space-y-4 w-full text-left pt-2">
          {loveConfig.littleThings.map((item, index) => {
            const isRevealed = !!revealedCards[item.id];
            const theme = noteThemes[index % noteThemes.length];
            const rotations = ['rotate-[-0.8deg]', 'rotate-[0.7deg]', 'rotate-[-0.6deg]'];
            const rot = rotations[index % rotations.length];

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                onClick={() => toggleCard(item.id)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    toggleCard(item.id);
                  }
                }}
                className={`group relative p-5 sm:p-5.5 rounded-2xl border transition-all duration-300 cursor-pointer select-none ${rot} ${
                  isRevealed
                    ? `${theme.revealedBg} ${theme.borderActive} ${theme.shadow} scale-[1.01]`
                    : `${theme.bg} ${theme.border} hover:border-[#D98295] shadow-xs hover:shadow-md hover:-translate-y-0.5`
                }`}
              >
                {/* Cute Washi Tape Strip at Top Left */}
                <div 
                  className={`absolute -top-2.5 left-5 px-2.5 py-0.5 rounded-xs text-[10px] font-handwriting font-medium tracking-wide text-[#654A52] shadow-xs ${theme.tapeBg} border-t border-b border-white/70 -rotate-2 pointer-events-none select-none flex items-center gap-1`}
                >
                  <span className="opacity-80">★</span>
                  <span>{theme.tapeText}</span>
                </div>

                {/* Main Card Content */}
                <div className="pt-1">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1">
                      <p className="font-handwriting text-xl sm:text-2xl text-[#35252A] font-medium leading-snug">
                        {item.preview}
                      </p>
                    </div>
                  </div>

                  {/* Unfolded Secret Letter Flap */}
                  <AnimatePresence>
                    {isRevealed && (
                      <motion.div
                        initial={{ opacity: 0, height: 0, y: -4 }}
                        animate={{ opacity: 1, height: 'auto', y: 0 }}
                        exit={{ opacity: 0, height: 0, y: -4 }}
                        transition={{ duration: 0.35, ease: 'easeOut' }}
                        className="overflow-hidden mt-3.5"
                      >
                        <div className={`p-3.5 sm:p-4 rounded-xl border border-dashed ${theme.quoteBox} relative shadow-inner`}>
                          {/* Tiny decorative heart corner */}
                          <div className="absolute top-2 right-2 text-xs opacity-60">♡</div>
                          <p className={`font-serif-love text-sm sm:text-base ${theme.quoteText} italic leading-relaxed`}>
                            "{item.revealed}"
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Button */}
        <div className="mt-8 flex justify-center">
          <button
            id="little-things-next-btn"
            onClick={onNext}
            className={`inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-sans-ui font-medium tracking-wide transition-all duration-300 cursor-pointer ${
              allRevealed
                ? 'bg-[#9B3D56] text-[#FFF9F5] shadow-sm hover:bg-[#853248] active:scale-95'
                : 'bg-[#FCECEF] text-[#806D72] hover:text-[#9B3D56] hover:bg-[#F6D6DE]/60'
            }`}
          >
            <span>there's more ↓</span>
          </button>
        </div>
      </motion.div>
    </div>
  );
};
