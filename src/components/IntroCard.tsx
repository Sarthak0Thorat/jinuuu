import React, { useState } from 'react';
import { motion } from 'motion/react';
import { loveConfig } from '../config';
import { Pip } from './Pip';
import { musicPlayer } from '../utils/audio';

interface IntroCardProps {
  onOpen: () => void;
}

export const IntroCard: React.FC<IntroCardProps> = ({ onOpen }) => {
  const [isOpening, setIsOpening] = useState(false);

  const handleOpen = () => {
    if (isOpening) return;
    setIsOpening(true);
    musicPlayer.play();
    // Envelope opens with unfolding letter and petal sparkle burst, then transition to Card 2
    setTimeout(() => {
      onOpen();
    }, 950);
  };

  const renderGreeting = () => {
    const raw = loveConfig.recipientName && loveConfig.recipientName.trim().length > 0 && loveConfig.recipientName.toLowerCase() !== 'you'
      ? loveConfig.recipientName
      : 'you';

    // Check if recipient has a nickname in brackets/parentheses e.g. "Jinu (kalu)"
    const match = raw.match(/^(.*?)\s*(\(.*?\)|\[.*?\]|\{.*?\})\s*(.*)$/);
    if (match) {
      const [, before, bracketText, after] = match;
      return (
        <>
          <span>Hey, {before.trim()}</span>{' '}
          <span className="font-normal text-[0.82em] text-[#69545B] font-serif-love italic inline-block tracking-normal">
            {bracketText}
          </span>
          {after ? ` ${after.trim()}` : ''}. 🌷
        </>
      );
    }

    return <>Hey, {raw}. 🌷</>;
  };

  return (
    <div 
      id="card-1-intro"
      className="min-h-[85vh] flex flex-col items-center justify-center text-center px-4 py-8 max-w-[480px] mx-auto w-full select-none"
    >
      {/* Tiny animated top heart */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="mb-5 flex items-center justify-center"
      >
        <span className="text-[#D98295] text-lg sm:text-xl animate-pulse">
          ♡
        </span>
      </motion.div>

      {/* Main handwritten greeting */}
      <motion.h1
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="font-handwriting text-4xl sm:text-5xl font-semibold text-[#35252A] tracking-wide mb-3 leading-tight"
      >
        {renderGreeting()}
      </motion.h1>

      {/* Subheading */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="font-serif-love text-base sm:text-lg text-[#806D72] italic mb-8 max-w-[320px]"
      >
        This is for you 😉
      </motion.p>

      {/* Small handcrafted envelope illustration with flap opening */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={isOpening ? { scale: 1.05, y: -6 } : { opacity: 1, scale: 1, y: [0, -6, 0] }}
        transition={isOpening ? { duration: 0.4 } : { y: { duration: 3.6, repeat: Infinity, ease: 'easeInOut' }, opacity: { duration: 0.7, delay: 0.5 }, scale: { duration: 0.7, delay: 0.5 } }}
        whileHover={{ scale: 1.04, y: -8, rotate: -0.5 }}
        whileTap={{ scale: 0.98 }}
        className="relative my-5 cursor-pointer group"
        onClick={handleOpen}
      >
        <div className="relative w-56 sm:w-60 h-40 bg-gradient-to-br from-[#FFF5F7] via-[#FCECEF] to-[#F8D9E2] rounded-2xl shadow-[0_12px_32px_rgba(155,61,86,0.14)] border border-[#F6D6DE] flex items-center justify-center overflow-visible transition-all duration-300 group-hover:shadow-[0_18px_38px_rgba(155,61,86,0.22)]">
          {/* Ambient soft glow aura */}
          <div className="absolute -inset-3 bg-gradient-to-r from-[#FBCFE8]/50 via-[#F472B6]/25 to-[#FDA4AF]/50 rounded-3xl blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-500 -z-10 animate-pulse pointer-events-none" />

          {/* Shimmer light sweep on hover */}
          <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
            <div className="absolute -inset-full bg-gradient-to-r from-transparent via-white/35 to-transparent transform -rotate-45 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-in-out pointer-events-none" />
          </div>

          {/* Subtle paper fold lines */}
          <div className="absolute inset-0 pointer-events-none opacity-40">
            <svg viewBox="0 0 240 160" className="w-full h-full stroke-[#D98295]" fill="none" strokeWidth="1">
              <path d="M0 0 L120 90 L240 0" />
              <path d="M0 160 L92 75" />
              <path d="M240 160 L148 75" />
            </svg>
          </div>

          {/* Top flap opening in 3D */}
          <motion.div
            className="absolute top-0 left-0 right-0 h-20 origin-top z-20 pointer-events-none"
            initial={false}
            animate={isOpening ? { rotateX: -180, opacity: 0 } : { rotateX: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            style={{ perspective: 1000 }}
          >
            <svg viewBox="0 0 240 80" preserveAspectRatio="none" className="w-full h-full drop-shadow-[0_2px_4px_rgba(155,61,86,0.08)]">
              <polygon points="0,0 120,80 240,0" fill="#FCECEF" stroke="#F6D6DE" strokeWidth="1" />
            </svg>
          </motion.div>

          {/* Wax seal / heart stamp */}
          <motion.div 
            animate={isOpening 
              ? { scale: [1, 1.35, 0], opacity: [1, 1, 0], rotate: 45 } 
              : { scale: [1, 1.08, 1] }
            }
            transition={isOpening ? { duration: 0.35 } : { duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
            className="relative w-9 h-9 rounded-full bg-gradient-to-br from-[#B34A65] to-[#802B42] text-[#FFF9F5] flex items-center justify-center text-xs shadow-[0_4px_12px_rgba(155,61,86,0.35)] border border-[#EAA6B8]/50 z-30"
          >
            <span className="font-serif-love text-sm select-none">♡</span>
            {/* Embossed ring */}
            <div className="absolute inset-0.5 rounded-full border border-white/20 pointer-events-none" />
          </motion.div>

          {/* Little letter sliding out when opening */}
          <motion.div
            initial={{ y: 20, opacity: 0, scale: 0.9 }}
            animate={isOpening ? { y: -42, opacity: 1, scale: 1 } : { y: 20, opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="absolute -top-3 w-44 sm:w-48 h-26 bg-[#FFFBF7] border border-[#F6D6DE] rounded-lg shadow-[0_8px_20px_rgba(155,61,86,0.15)] flex flex-col items-center justify-center p-2.5 z-15 pointer-events-none"
          >
            <div className="flex items-center gap-1 text-[10px] text-[#D98295] font-serif-love italic mb-0.5">
              <span>♡</span>
              <span>for you</span>
              <span>♡</span>
            </div>
            <span className="font-handwriting text-base text-[#9B3D56] font-semibold tracking-wide">
              Hey, Jinuuu ♡
            </span>
          </motion.div>

          {/* Tiny emerging hearts, sparkles & petals when opening */}
          {isOpening && (
            <>
              {[
                { icon: '♡', x: -40, y: -75, r: -25, delay: 0, scale: 1.4, color: '#D98295' },
                { icon: '✨', x: 35, y: -80, r: 20, delay: 0.08, scale: 1.2, color: '#FBBF24' },
                { icon: '🌷', x: -15, y: -95, r: -15, delay: 0.14, scale: 1.3, color: '#9B3D56' },
                { icon: '♡', x: 25, y: -65, r: 28, delay: 0.2, scale: 1.1, color: '#F472B6' },
                { icon: '✨', x: -50, y: -60, r: -35, delay: 0.12, scale: 1.0, color: '#E8A598' },
                { icon: '🌸', x: 48, y: -70, r: 22, delay: 0.18, scale: 1.2, color: '#FB7185' },
              ].map((item, idx) => (
                <motion.span
                  key={idx}
                  initial={{ opacity: 1, y: 0, x: 0, scale: 0.4, rotate: 0 }}
                  animate={{ opacity: 0, y: item.y, x: item.x, scale: item.scale, rotate: item.r }}
                  transition={{ duration: 0.85, delay: item.delay, ease: 'easeOut' }}
                  style={{ color: item.color }}
                  className="absolute z-40 text-sm select-none pointer-events-none"
                >
                  {item.icon}
                </motion.span>
              ))}
            </>
          )}
        </div>

        {/* Pip the Bunny sitting quietly beside the envelope, looking curious and shy */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="absolute -right-5 sm:-right-12 -bottom-3 sm:-bottom-2 pointer-events-none z-30"
        >
          <Pip
            emotion={isOpening ? 'celebrating' : 'curious'}
            size={68}
            flipped={true}
            label="Pip is curious ♡"
          />
        </motion.div>
      </motion.div>

      {/* Button */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="mt-6"
      >
        <button
          id="open-letter-btn"
          onClick={handleOpen}
          disabled={isOpening}
          className="group relative inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#9B3D56] text-[#FFF9F5] text-sm font-sans-ui font-medium tracking-wide shadow-sm hover:bg-[#853248] active:scale-95 transition-all duration-200 cursor-pointer"
        >
          <span>{isOpening ? 'opening...' : 'open it →'}</span>
        </button>
      </motion.div>
    </div>
  );
};
