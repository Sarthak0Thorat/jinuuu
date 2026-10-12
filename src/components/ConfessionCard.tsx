import React from 'react';
import { motion } from 'motion/react';
import { Pip } from './Pip';

interface ConfessionCardProps {
  onNext: () => void;
}

export const ConfessionCard: React.FC<ConfessionCardProps> = ({ onNext }) => {
  return (
    <div 
      id="card-7-confession"
      className="min-h-[85vh] flex flex-col items-center justify-center text-center px-6 py-10 max-w-[460px] mx-auto w-full"
    >
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
        className="w-full space-y-6"
      >
        {/* Heading */}
        <h2 className="font-handwriting text-3xl sm:text-4xl text-[#35252A] font-semibold mb-6">
          So here's the truth…
        </h2>

        {/* Short, breathing lines with whitespace */}
        <div className="space-y-4 text-left sm:text-center max-w-[360px] mx-auto">
          <p className="font-serif-love text-lg sm:text-xl text-[#9B3D56] font-medium">
            I have feelings for you.
          </p>

          <p className="font-serif-love text-base text-[#806D72] leading-relaxed">
            I don't know where they'll take us.
          </p>

          <p className="font-serif-love text-base text-[#806D72] leading-relaxed">
            I don't know what you're thinking.
          </p>

          <p className="font-serif-love text-base text-[#806D72] leading-relaxed">
            And I'm not asking you to have an answer just because you're seeing this.
          </p>

          <div className="pt-2">
            <p className="font-serif-love text-base text-[#806D72] mb-1">
              I just wanted you to know…
            </p>
            <p className="font-serif-love text-lg sm:text-xl text-[#35252A] font-semibold italic">
              that you became someone very special to me.
              <span className="text-[#D98295] not-italic ml-1.5">♡</span>
            </p>
          </div>

          <p className="font-serif-love text-base text-[#806D72] pt-1">
            That's it.
          </p>

          {/* Pip the Bunny blushing shyly with paws together */}
          <div className="flex justify-center pt-2 -mb-1">
            <Pip 
              emotion="shy" 
              size={68} 
              label="Pip is blushing shyly ♡" 
            />
          </div>

          {/* Sincere, lighthearted admission */}
          <div className="pt-2">
            <span className="inline-block px-3.5 py-1 rounded-full bg-[#FCECEF] text-[#806D72] font-sans-ui text-xs">
              Okay… that was scary to admit. 😭
            </span>
          </div>
        </div>

        {/* Button */}
        <div className="pt-6 flex justify-center">
          <button
            id="confession-next-btn"
            onClick={onNext}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#9B3D56] text-[#FFF9F5] text-sm font-sans-ui font-medium tracking-wide shadow-sm hover:bg-[#853248] active:scale-95 transition-all duration-200 cursor-pointer"
          >
            <span>one little question →</span>
          </button>
        </div>
      </motion.div>
    </div>
  );
};
