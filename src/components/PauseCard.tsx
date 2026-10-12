import React from 'react';
import { motion } from 'motion/react';
import { Pip } from './Pip';

interface PauseCardProps {
  onNext: () => void;
}

export const PauseCard: React.FC<PauseCardProps> = ({ onNext }) => {
  return (
    <div 
      id="card-6-pause"
      className="min-h-[85vh] flex flex-col items-center justify-center text-center px-6 py-10 max-w-[460px] mx-auto w-full"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.0, ease: 'easeOut' }}
        className="w-full space-y-8"
      >
        {/* Subtle breathing dot */}
        <div className="flex justify-center">
          <span className="w-1.5 h-1.5 rounded-full bg-[#D98295] opacity-60 animate-ping" />
        </div>

        {/* Heading */}
        <h2 className="font-serif-love text-2xl sm:text-3xl text-[#35252A] font-medium leading-snug">
          There’s something I haven't said properly.
        </h2>

        {/* Vulnerable lines */}
        <div className="space-y-4 max-w-[340px] mx-auto">
          <p className="font-serif-love text-base sm:text-lg text-[#806D72] leading-relaxed">
            I've thought about whether I should make this page…
          </p>
          <p className="font-serif-love text-base sm:text-lg text-[#806D72] leading-relaxed">
            And whether I should just keep everything to myself.
          </p>
          <p className="font-serif-love text-lg sm:text-xl text-[#35252A] italic pt-2">
            But I'd rather be honest.
          </p>
        </div>

        {/* Pip looking cute and gently nervous: "I'm nervous too" */}
        <div className="flex justify-center -my-2">
          <Pip 
            emotion="nervous" 
            size={66} 
            label="Pip: I'm nervous too ♡" 
          />
        </div>

        {/* Button */}
        <div className="pt-2 flex justify-center">
          <button
            id="pause-next-btn"
            onClick={onNext}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#9B3D56] text-[#FFF9F5] text-sm font-sans-ui font-medium tracking-wide shadow-sm hover:bg-[#853248] active:scale-95 transition-all duration-300 cursor-pointer"
          >
            <span>okay… tell me →</span>
          </button>
        </div>
      </motion.div>
    </div>
  );
};
