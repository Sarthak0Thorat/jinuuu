import React from 'react';
import { motion } from 'motion/react';
import { loveConfig } from '../config';
import { Pip } from './Pip';

export const NoThanksCard: React.FC = () => {
  return (
    <div 
      id="card-result-no"
      className="min-h-[85vh] flex flex-col items-center justify-center text-center px-4 py-10 max-w-[480px] mx-auto w-full"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.0, ease: 'easeOut' }}
        className="w-full bg-[#FFFFFF] rounded-2xl p-7 sm:p-9 shadow-letter border border-[#F6D6DE]/70 relative text-center"
      >
        {/* Pip communicating gently: "It's okay" with a peaceful flower beside */}
        <div className="flex justify-center mb-2">
          <Pip 
            emotion="understanding" 
            size={76} 
            label="Pip: It's okay ♡" 
          />
        </div>

        {/* Heading */}
        <h2 className="font-handwriting text-3xl sm:text-4xl text-[#35252A] font-semibold mb-3">
          It's okay. ❤️
        </h2>

        {/* Mature, warm, non-pressuring response */}
        <div className="space-y-4 max-w-[340px] mx-auto my-6">
          <p className="font-serif-love text-base sm:text-lg text-[#806D72] italic">
            Seriously.
          </p>

          <p className="font-serif-love text-base sm:text-lg text-[#35252A] leading-relaxed">
            I meant what I said, and I'm glad I was honest with you.
          </p>

          <p className="font-serif-love text-base text-[#806D72] leading-relaxed">
            You don't owe me a yes.
          </p>

          <p className="font-serif-love text-base sm:text-lg text-[#35252A] leading-relaxed">
            You'll still be someone I care about.
          </p>

          <div className="pt-3">
            <p className="font-serif-love text-base text-[#9B3D56] font-medium">
              Thank you for reading my little page. 🌷
            </p>
          </div>
        </div>

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
