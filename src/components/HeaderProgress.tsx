import React from 'react';
import { StepId } from '../types';

interface HeaderProgressProps {
  currentStep: StepId;
}

const STEP_ORDER: StepId[] = [
  'intro',
  'why',
  'little-things',
  'special',
  'photo',
  'pause',
  'confession',
  'question',
];

export const HeaderProgress: React.FC<HeaderProgressProps> = ({ currentStep }) => {
  if (currentStep === 'celebration' || currentStep === 'no-thanks') {
    return null;
  }

  const currentIndex = Math.max(0, STEP_ORDER.indexOf(currentStep));
  const totalSteps = STEP_ORDER.length;
  const progressPercent = Math.round((currentIndex / (totalSteps - 1)) * 100);

  return (
    <div 
      id="subtle-header-progress" 
      className="fixed top-4 left-1/2 -translate-x-1/2 z-30 pointer-events-none transition-opacity duration-500"
      aria-hidden="true"
    >
      <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFF9F5]/80 backdrop-blur-xs border border-[#F6D6DE]/60 text-[11px] text-[#806D72] shadow-xs">
        <span className="text-[#9B3D56] text-xs">♡</span>
        <div className="w-20 sm:w-28 h-1 bg-[#FCECEF] rounded-full overflow-hidden relative">
          <div 
            className="h-full bg-gradient-to-r from-[#F6D6DE] to-[#D98295] rounded-full transition-all duration-700 ease-out"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
        <span className={`text-xs transition-colors duration-300 ${progressPercent === 100 ? 'text-[#9B3D56]' : 'text-[#806D72]'}`}>
          {progressPercent === 100 ? '♡' : '○'}
        </span>
      </div>
    </div>
  );
};
