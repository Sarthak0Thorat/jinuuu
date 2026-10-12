export type StepId = 
  | 'intro'        // Card 1
  | 'why'          // Card 2
  | 'little-things'// Card 3
  | 'special'      // Card 4
  | 'photo'        // Card 5
  | 'pause'        // Card 6
  | 'confession'   // Card 7
  | 'question'     // Card 8
  | 'celebration'  // YES Result
  | 'no-thanks';   // NO Result

export type PipEmotion = 
  | 'curious'
  | 'happy'
  | 'playful'
  | 'thoughtful'
  | 'admiring'
  | 'nervous'
  | 'shy'
  | 'hopeful'
  | 'celebrating'
  | 'understanding';

export interface CardProps {
  onNext?: () => void;
  onSelectYes?: () => void;
  onSelectNo?: () => void;
}
