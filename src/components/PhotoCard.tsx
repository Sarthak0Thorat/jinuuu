import React, { useState } from 'react';
import { motion } from 'motion/react';
import { loveConfig } from '../config';
import { Pip } from './Pip';
import defaultPhoto from '../assets/photo.jpg';

interface PhotoCardProps {
  onNext: () => void;
}

const FIXED_PHOTO_URL = 'https://imghosting.in/host/s33vky';

export const PhotoCard: React.FC<PhotoCardProps> = ({ onNext }) => {
  const [photoSrc, setPhotoSrc] = useState<string>(() => {
    return loveConfig.photoUrl || FIXED_PHOTO_URL || defaultPhoto;
  });

  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    // If the remote URL encounters any issues, smoothly fall back to the bundled local copy
    if (photoSrc !== defaultPhoto) {
      setPhotoSrc(defaultPhoto);
      setImageError(false);
    } else {
      setImageError(true);
    }
  };

  return (
    <div 
      id="card-5-photo"
      className="min-h-[85vh] flex flex-col items-center justify-center text-center px-4 py-8 max-w-[780px] mx-auto w-full select-none"
    >
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full flex flex-col md:flex-row items-center justify-center gap-8 md:gap-10 lg:gap-12"
      >
        {/* Polaroid Container with surrounding pretty aesthetic embellishments */}
        <div className="relative w-full max-w-[340px] sm:max-w-[370px] md:max-w-[360px] shrink-0">
          {/* Delicate botanical flower sprig peeking behind the top-right edge */}
          <div className="absolute -top-6 -right-5 pointer-events-none z-0 rotate-12 opacity-85">
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 55 C 25 40, 35 25, 45 8" stroke="#D98295" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="1 0" />
              <path d="M28 35 C 38 33, 44 38, 42 43 C 36 43, 30 39, 28 35 Z" fill="#FCECEF" stroke="#D98295" strokeWidth="1" />
              <path d="M22 43 C 14 41, 10 46, 12 51 C 18 51, 22 47, 22 43 Z" fill="#FCECEF" stroke="#D98295" strokeWidth="1" />
              <circle cx="45" cy="8" r="5" fill="#F6D6DE" stroke="#9B3D56" strokeWidth="1" />
              <circle cx="42" cy="11" r="4" fill="#D98295" opacity="0.8" />
              <circle cx="48" cy="11" r="3.5" fill="#FCECEF" stroke="#D98295" strokeWidth="0.8" />
            </svg>
          </div>

          {/* Gentle floating sparkles / heart accents around the frame */}
          <span className="absolute -left-4 top-1/3 text-xs text-[#D98295] opacity-60 animate-pulse pointer-events-none" style={{ animationDuration: '4s' }}>
            ♡
          </span>
          <span className="absolute -right-3 bottom-1/4 text-xs text-[#D98295] opacity-70 pointer-events-none">
            🌸
          </span>
          <span className="absolute -left-2 bottom-6 text-[10px] text-[#D98295] opacity-50 pointer-events-none">
            ✧
          </span>

          {/* Main Polaroid Frame */}
          <div 
            className="relative bg-[#FFFFFF] p-3.5 pb-5 sm:p-4 sm:pb-6 rounded-sm shadow-polaroid border border-[#F6D6DE]/80 rotate-[-2deg] transition-transform duration-300 hover:rotate-0 z-10"
          >
            {/* Soft pink washi tape at top */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-4 washi-tape rotate-[1.5deg] opacity-80 pointer-events-none z-20" />

            {/* Dainty handcrafted gift ribbon bow on top-left corner */}
            <div className="absolute -top-3 -left-3 pointer-events-none z-20 drop-shadow-xs">
              <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 16 C 14 10, 8 13, 10 19 C 12 23, 19 19, 21 17 Z" fill="#F6D6DE" stroke="#D98295" strokeWidth="1.2" />
                <path d="M21 16 C 28 10, 34 13, 32 19 C 30 23, 23 19, 21 17 Z" fill="#F6D6DE" stroke="#D98295" strokeWidth="1.2" />
                <path d="M19 18 C 16 24, 13 28, 11 34 C 14 32, 17 33, 19 32 C 19 26, 20 22, 20 18 Z" fill="#FCECEF" stroke="#D98295" strokeWidth="1" />
                <path d="M23 18 C 26 24, 29 28, 31 34 C 28 32, 25 33, 23 32 C 23 26, 22 22, 22 18 Z" fill="#FCECEF" stroke="#D98295" strokeWidth="1" />
                <ellipse cx="21" cy="17" rx="3" ry="2.5" fill="#9B3D56" />
                <circle cx="21" cy="17" r="1.5" fill="#F6D6DE" />
              </svg>
            </div>

            {/* Photo Frame Window - 4:3 aspect ratio */}
            <div 
              id="polaroid-image-window"
              className="relative w-full aspect-[4/3] bg-[#FCECEF]/40 border border-[#F6D6DE]/70 rounded-xs overflow-hidden shadow-inner flex items-center justify-center"
            >
              {!imageError ? (
                <div className="w-full h-full relative overflow-hidden flex items-center justify-center bg-[#FFF9F5]/40">
                  <img
                    src={photoSrc}
                    alt="For someone special"
                    referrerPolicy="no-referrer"
                    onError={handleImageError}
                    style={{
                      transform: 'translate(-50%, -50%) rotate(270deg)',
                      width: '75%',
                      height: '133.333%',
                      transition: 'transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)',
                    }}
                    className="absolute left-1/2 top-1/2 max-w-none object-cover select-none pointer-events-none"
                  />
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center p-6 text-center">
                  <span className="text-2xl text-[#D98295] mb-1">♡</span>
                  <p className="font-handwriting text-2xl text-[#35252A]">
                    {loveConfig.polaroidCaption}
                  </p>
                </div>
              )}
            </div>

            {/* Handwritten Caption with tiny heart */}
            <div className="mt-3.5 text-center pointer-events-none flex items-center justify-center gap-1.5">
              <span className="text-xs text-[#D98295]">♡</span>
              <p className="font-handwriting text-2xl text-[#35252A]">
                {loveConfig.polaroidCaption}
              </p>
              <span className="text-xs text-[#D98295]">♡</span>
            </div>
          </div>

          {/* Pip the Bunny admiring the photo with a tiny flower */}
          <div className="absolute -bottom-6 -right-3 sm:-bottom-7 sm:-right-5 pointer-events-none z-20">
            <Pip 
              emotion="admiring" 
              size={70} 
              flipped={true} 
              label="Pip thinks you look wonderful ♡" 
            />
          </div>
        </div>

        {/* Text & Action column (side-by-side with photo on desktop) */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-3.5 max-w-[340px]">
          <p className="font-serif-love text-sm text-[#806D72] italic">
            Okay…
          </p>
          <p className="font-serif-love text-base text-[#806D72]">
            This is probably my favorite part.
          </p>
          <p className="font-handwriting text-4xl sm:text-5xl text-[#9B3D56] font-semibold py-1">
            You.
          </p>
          <p className="font-serif-love text-base sm:text-lg text-[#35252A] leading-relaxed">
            Somehow, one person managed to become a pretty important part of my thoughts.
          </p>

          <div className="pt-3 w-full flex justify-center md:justify-start">
            <button
              id="photo-next-btn"
              onClick={onNext}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#9B3D56] text-[#FFF9F5] text-sm font-sans-ui font-medium tracking-wide shadow-sm hover:bg-[#853248] active:scale-95 transition-all duration-200 cursor-pointer"
            >
              <span>continue →</span>
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
