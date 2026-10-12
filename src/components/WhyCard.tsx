import React from 'react';
import { motion } from 'motion/react';
import { Pip } from './Pip';

interface WhyCardProps {
  onNext: () => void;
}

export const WhyCard: React.FC<WhyCardProps> = ({ onNext }) => {
  return (
    <div 
      id="card-2-why"
      className="min-h-[85vh] flex flex-col items-center justify-center text-center px-5 py-8 max-w-[480px] mx-auto w-full"
    >
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="w-full"
      >
        {/* Floating Paper Card */}
        <div className="relative bg-[#FFFFFF] rounded-2xl p-7 sm:p-8 shadow-letter border border-[#F6D6DE]/70 text-center">
          {/* Subtle washi tape at the top center */}
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-5 washi-tape rotate-[-1deg] rounded-xs" />

          {/* Pip the Bunny sitting happily beside the card */}
          <div className="absolute -top-7 -right-3 sm:-top-8 sm:-right-8 pointer-events-none z-20">
            <Pip 
              emotion="happy" 
              size={68} 
              label="Pip is happy you are here ♡" 
            />
          </div>

          {/* Heading */}
          <h2 className="font-handwriting text-3xl sm:text-4xl text-[#35252A] font-semibold mb-5 leading-snug">
            I could've just sent you a message…
          </h2>

          {/* Body text */}
          <p className="font-serif-love text-base sm:text-lg text-[#806D72] italic mb-4 leading-relaxed">
            But somehow,<br />that didn't feel special enough.
          </p>

          <p className="font-serif-love text-base sm:text-lg text-[#35252A] mb-6 leading-relaxed">
            So I made you a little corner of the internet. :)
          </p>

          {/* Handwritten cheeky note */}
          <div className="inline-block bg-gradient-to-r from-[#FCECEF] to-[#FDF2F4] px-4 py-2 rounded-full border border-[#F6D6DE] shadow-xs rotate-[-1deg] transition-transform duration-200 hover:rotate-0">
            <span className="font-handwriting text-base sm:text-lg text-[#9B3D56] font-medium tracking-wide">
              you're totally worth it 😊 ♡
            </span>
          </div>
        </div>

        {/* Button */}
        <div className="mt-8 flex justify-center">
          <button
            id="why-keep-going-btn"
            onClick={onNext}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#9B3D56] text-[#FFF9F5] text-sm font-sans-ui font-medium tracking-wide shadow-sm hover:bg-[#853248] active:scale-95 transition-all duration-200 cursor-pointer"
          >
            <span>keep going →</span>
          </button>
        </div>
      </motion.div>
    </div>
  );
};
