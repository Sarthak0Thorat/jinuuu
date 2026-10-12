import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import confetti from 'canvas-confetti';
import { loveConfig } from '../config';
import { Pip } from './Pip';

export const CelebrationCard: React.FC = () => {
  const [showFinalNote, setShowFinalNote] = useState(false);

  useEffect(() => {
    // Gentle pastel confetti burst on mount
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#F6D6DE', '#D98295', '#9B3D56', '#FFF9F5'],
        disableForReducedMotion: true,
      });
    } catch {
      // Graceful fallback
    }
  }, []);

  return (
    <div 
      id="card-result-yes"
      className="min-h-[85vh] flex flex-col items-center justify-center text-center px-4 py-10 max-w-[480px] mx-auto w-full"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full bg-[#FFFFFF] rounded-2xl p-7 sm:p-9 shadow-letter border border-[#F6D6DE] relative text-center"
      >
        {/* Pip celebrating happily */}
        <div className="flex justify-center mb-3">
          <Pip 
            emotion="celebrating" 
            size={84} 
            label="Pip is so happy! ♡" 
          />
        </div>

        {/* Heading */}
        <h2 className="font-handwriting text-3xl sm:text-4xl text-[#9B3D56] font-semibold mb-4 leading-tight">
          WAIT… REALLY?! 😭❤️
        </h2>

        {/* Body text */}
        <div className="space-y-3 mb-8">
          <p className="font-serif-love text-lg sm:text-xl text-[#35252A] font-medium leading-relaxed">
            You just made someone very, very happy.
          </p>
          <p className="font-serif-love text-base text-[#806D72] italic">
            I guess this little website had a pretty good ending.
          </p>
        </div>

        {/* Floating small hearts */}
        <div className="flex justify-center gap-3 text-lg text-[#D98295] mb-6">
          <span className="animate-pulse" style={{ animationDuration: '3s' }}>♡</span>
          <span className="animate-pulse" style={{ animationDuration: '2s' }}>🌸</span>
          <span className="animate-pulse" style={{ animationDuration: '4s' }}>♡</span>
        </div>

        {/* Final reveal toggle */}
        {!showFinalNote ? (
          <button
            id="one-last-thing-btn"
            onClick={() => {
              setShowFinalNote(true);
              try {
                confetti({
                  particleCount: 30,
                  spread: 45,
                  origin: { y: 0.7 },
                  colors: ['#F6D6DE', '#D98295', '#9B3D56'],
                  disableForReducedMotion: true,
                });
              } catch {
                // Ignore
              }
            }}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#9B3D56] text-[#FFF9F5] text-sm font-sans-ui font-medium tracking-wide shadow-sm hover:bg-[#853248] active:scale-95 transition-all duration-200 cursor-pointer"
          >
            <span>one last thing →</span>
          </button>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="pt-4 border-t border-[#F6D6DE]/60 space-y-4"
          >
            <p className="font-serif-love text-base sm:text-lg text-[#35252A] leading-relaxed">
              {loveConfig.finalSweetNote}
            </p>

            <p className="text-sm tracking-widest text-[#9B3D56]">
              🌷 ♡ 🌷 ♡ 🌷
            </p>
          </motion.div>
        )}

        {/* Footer Signature */}
        <div className="mt-8 pt-4 border-t border-[#F6D6DE]/30">
          <p className="font-sans-ui text-xs text-[#806D72]">
            {loveConfig.signature}
          </p>
        </div>
      </motion.div>
    </div>
  );
};
