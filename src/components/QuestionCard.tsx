import React, { useState } from 'react';
import { motion } from 'motion/react';
import { loveConfig } from '../config';
import { Pip } from './Pip';

interface QuestionCardProps {
  onYes: () => void;
  onNo: () => void;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({ onYes, onNo }) => {
  const [noAttempts, setNoAttempts] = useState(0);
  const [noPosition, setNoPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  // Playful teasing messages based on user specification
  const teaseMessages = [
    '',
    'Are you sure? 👀',
    'Hmm… think again 😭',
    "Okay okay, I'm not going to chase you 😂",
  ];

  const handleNoClick = () => {
    if (noAttempts === 0) {
      // First attempt: small safe offset
      setNoAttempts(1);
      setNoPosition({ x: 50, y: -25 });
    } else if (noAttempts === 1) {
      // Second attempt: safe alternate offset
      setNoAttempts(2);
      setNoPosition({ x: -45, y: 30 });
    } else if (noAttempts === 2) {
      // Third attempt: stops running away, allows click
      setNoAttempts(3);
      setNoPosition({ x: 0, y: 0 });
    } else {
      // Genuine NO triggered
      onNo();
    }
  };

  return (
    <div 
      id="card-8-question"
      className="min-h-[85vh] flex flex-col items-center justify-center text-center px-4 py-8 max-w-[480px] mx-auto w-full relative select-none"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full bg-[#FFFFFF] rounded-2xl p-7 sm:p-9 shadow-letter border border-[#F6D6DE]/80 relative"
      >
        {/* Soft floating decorative hearts */}
        <span className="absolute top-4 right-5 text-xs text-[#D98295] opacity-50">♡</span>
        <span className="absolute bottom-4 left-5 text-xs text-[#D98295] opacity-50">🌷</span>

        <p className="font-handwriting text-2xl text-[#806D72] mb-1">
          So…
        </p>
        <p className="font-serif-love text-sm text-[#806D72] italic mb-6">
          One little question.
        </p>

        {/* Large question */}
        <h2 className="font-handwriting text-3xl sm:text-4xl text-[#35252A] font-semibold leading-snug mb-5">
          {loveConfig.questionText}
        </h2>

        {/* Pip sitting quietly underneath the question, looking hopeful and expectant */}
        <div className="flex justify-center -mt-1 mb-5">
          <Pip 
            emotion={noAttempts > 0 ? 'nervous' : 'hopeful'} 
            size={70} 
            label="Pip is waiting quietly ♡" 
          />
        </div>

        {/* Teasing feedback message if NO was tapped */}
        {noAttempts > 0 && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 h-6 flex items-center justify-center"
          >
            <span className="font-handwriting text-lg text-[#9B3D56] font-medium">
              {teaseMessages[noAttempts]}
            </span>
          </motion.div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 min-h-[110px] relative">
          {/* YES Button */}
          <button
            id="answer-yes-btn"
            onClick={onYes}
            className="w-full sm:w-auto min-w-[140px] min-h-[50px] px-8 py-3 rounded-full bg-[#9B3D56] text-[#FFF9F5] text-base font-sans-ui font-semibold tracking-wide shadow-md hover:bg-[#853248] active:scale-95 transition-all duration-200 cursor-pointer flex items-center justify-center gap-1.5"
          >
            <span>YES</span>
            <span className="text-sm">♡</span>
          </button>

          {/* Playful NO Button */}
          <motion.div
            animate={{ x: noPosition.x, y: noPosition.y }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="w-full sm:w-auto"
          >
            <button
              id="answer-no-btn"
              onClick={handleNoClick}
              className="w-full sm:w-auto min-w-[120px] min-h-[48px] px-6 py-2.5 rounded-full bg-[#FCECEF] text-[#806D72] text-sm font-sans-ui font-medium border border-[#F6D6DE] hover:text-[#9B3D56] hover:border-[#D98295] active:scale-95 transition-colors duration-200 cursor-pointer"
            >
              <span>NO</span>
            </button>
          </motion.div>
        </div>

        {/* Genuine escape hatch: ensures she never feels trapped */}
        <div className="mt-6 pt-4 border-t border-[#F6D6DE]/40">
          <button
            id="genuine-no-option"
            onClick={onNo}
            className="text-xs text-[#806D72]/80 hover:text-[#806D72] underline underline-offset-4 font-sans-ui cursor-pointer py-1"
          >
            (no, seriously)
          </button>
        </div>
      </motion.div>
    </div>
  );
};
