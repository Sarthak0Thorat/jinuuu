import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';
import { musicPlayer } from '../utils/audio';

export const MusicToggle: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    // Attempt automatic playback as soon as website loads
    musicPlayer.attemptAutoplay();

    // Subscribe to playback state changes so UI stays perfectly synchronized
    const unsubscribe = musicPlayer.subscribe((playing) => {
      setIsPlaying(playing);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const handleToggle = async () => {
    // User click toggles: stops music if playing, starts if paused
    const active = await musicPlayer.toggle();
    setIsPlaying(active);
  };

  return (
    <div className="fixed top-4 right-4 z-40">
      <button
        id="music-toggle-btn"
        onClick={handleToggle}
        aria-label={isPlaying ? 'Pause background music' : 'Play soft background music'}
        title={isPlaying ? 'Pause music' : 'Play soft music'}
        className={`relative w-8 h-8 sm:w-8.5 sm:h-8.5 rounded-full flex items-center justify-center transition-all duration-300 border shadow-xs backdrop-blur-sm cursor-pointer active:scale-90 ${
          isPlaying
            ? 'bg-[#FDF2F4] border-[#D98295] text-[#9B3D56] shadow-sm'
            : 'bg-[#FFF9F5]/90 hover:bg-[#FCECEF] text-[#806D72] hover:text-[#9B3D56] border-[#F6D6DE]'
        }`}
      >
        {/* Subtle acoustic pulse ring when music is playing */}
        {isPlaying && (
          <span className="absolute -inset-1 rounded-full border border-[#D98295]/40 animate-music-ring pointer-events-none" />
        )}

        {isPlaying ? (
          /* Animated playing music equalizer bars */
          <div className="flex items-end justify-center gap-[2.5px] h-3.5 w-3.5 pb-0.5">
            <span className="w-[2px] bg-[#9B3D56] rounded-full animate-bar-1" />
            <span className="w-[2px] bg-[#9B3D56] rounded-full animate-bar-2" />
            <span className="w-[2px] bg-[#9B3D56] rounded-full animate-bar-3" />
          </div>
        ) : (
          /* Small elegant music note icon when paused */
          <Music className="w-3.5 h-3.5 text-[#806D72] transition-transform duration-200 group-hover:scale-105" />
        )}
      </button>
    </div>
  );
};
