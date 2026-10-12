/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { StepId } from './types';
import { HeaderProgress } from './components/HeaderProgress';
import { MusicToggle } from './components/MusicToggle';
import { FloatingDecorations } from './components/FloatingDecorations';
import { IntroCard } from './components/IntroCard';
import { WhyCard } from './components/WhyCard';
import { LittleThingsCard } from './components/LittleThingsCard';
import { SpecialCard } from './components/SpecialCard';
import { PhotoCard } from './components/PhotoCard';
import { PauseCard } from './components/PauseCard';
import { ConfessionCard } from './components/ConfessionCard';
import { QuestionCard } from './components/QuestionCard';
import { CelebrationCard } from './components/CelebrationCard';
import { NoThanksCard } from './components/NoThanksCard';

export default function App() {
  const [currentStep, setCurrentStep] = useState<StepId>('intro');

  // Scroll to top smoothly on step changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentStep]);

  const isNightTheme = currentStep === 'special';

  return (
    <div 
      className={`min-h-screen w-full transition-colors duration-1000 relative flex flex-col justify-between overflow-x-hidden ${
        isNightTheme ? 'bg-[#23171C] text-[#FFF9F5]' : 'bg-[#FFF9F5] text-[#35252A] paper-pattern'
      }`}
    >
      {/* Background ambient floating particles */}
      <FloatingDecorations isDark={isNightTheme} />

      {/* Unobtrusive Top Controls */}
      <header className="relative z-30 w-full pt-4 px-4 flex items-center justify-between pointer-events-auto">
        <HeaderProgress currentStep={currentStep} />
        <MusicToggle />
      </header>

      {/* Main Centered Intimate Digital Letter Container */}
      <main className="flex-1 flex items-center justify-center relative z-10 px-4 py-6 w-full max-w-[560px] mx-auto">
        <AnimatePresence mode="wait">
          {currentStep === 'intro' && (
            <motion.div
              key="intro"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.6 }}
              className="w-full"
            >
              <IntroCard onOpen={() => setCurrentStep('why')} />
            </motion.div>
          )}

          {currentStep === 'why' && (
            <motion.div
              key="why"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.6 }}
              className="w-full"
            >
              <WhyCard onNext={() => setCurrentStep('little-things')} />
            </motion.div>
          )}

          {currentStep === 'little-things' && (
            <motion.div
              key="little-things"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.6 }}
              className="w-full"
            >
              <LittleThingsCard onNext={() => setCurrentStep('special')} />
            </motion.div>
          )}

          {currentStep === 'special' && (
            <motion.div
              key="special"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.7 }}
              className="w-full"
            >
              <SpecialCard onNext={() => setCurrentStep('photo')} />
            </motion.div>
          )}

          {currentStep === 'photo' && (
            <motion.div
              key="photo"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.6 }}
              className="w-full"
            >
              <PhotoCard onNext={() => setCurrentStep('pause')} />
            </motion.div>
          )}

          {currentStep === 'pause' && (
            <motion.div
              key="pause"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="w-full"
            >
              <PauseCard onNext={() => setCurrentStep('confession')} />
            </motion.div>
          )}

          {currentStep === 'confession' && (
            <motion.div
              key="confession"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.7 }}
              className="w-full"
            >
              <ConfessionCard onNext={() => setCurrentStep('question')} />
            </motion.div>
          )}

          {currentStep === 'question' && (
            <motion.div
              key="question"
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.6 }}
              className="w-full"
            >
              <QuestionCard 
                onYes={() => setCurrentStep('celebration')}
                onNo={() => setCurrentStep('no-thanks')}
              />
            </motion.div>
          )}

          {currentStep === 'celebration' && (
            <motion.div
              key="celebration"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="w-full"
            >
              <CelebrationCard />
            </motion.div>
          )}

          {currentStep === 'no-thanks' && (
            <motion.div
              key="no-thanks"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="w-full"
            >
              <NoThanksCard />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Discreet footer */}
      <footer className="relative z-10 text-center py-4 px-4 text-[11px] text-[#806D72]/60 font-sans-ui pointer-events-none">
        <span>made with care</span>
      </footer>
    </div>
  );
}
