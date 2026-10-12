/**
 * =======================================================================
 * PERSONALIZE THIS SECTION
 * =======================================================================
 * 
 * Edit this configuration object to customize the website for your special person.
 * You can change her name, photograph, custom messages, and secret notes.
 */

export interface LoveCardConfig {
  /**
   * Recipient's name or nickname.
   * If left blank ("") or set to "you", it will use the intimate default: "Hey, you."
   */
  recipientName: string;

  /**
   * Optional custom title for the webpage / love letter.
   */
  letterTitle: string;

  /**
   * Path or URL to her photograph.
   * Place an image in `public/images/her-photo.jpg` or provide an image link.
   * You can also tap the photo card in the app to upload/choose any photo from your device!
   */
  photoUrl: string;

  /**
   * Handwritten caption written at the bottom of the Polaroid photo.
   */
  polaroidCaption: string;

  /**
   * The 3 little things you love / appreciate about her for Card 3.
   */
  littleThings: Array<{
    id: number;
    preview: string;
    revealed: string;
  }>;

  /**
   * Sequential emotional realization lines for Card 4.
   */
  specialRealizations: string[];

  /**
   * Background music URL (.mp3)
   */
  musicUrl: string;

  /**
   * Final question shown in Card 8.
   */
  questionText: string;

  /**
   * Sincere note revealed at the end of the YES celebration.
   */
  finalSweetNote: string;

  /**
   * Sign-off / signature at the very bottom.
   */
  signature: string;
}

export const loveConfig: LoveCardConfig = {
  // Recipient name (e.g. "Jinu", or leave empty "" for "Hey, you.")
  recipientName: "Jinuuu (kalu)",

  // Main title
  letterTitle: "A Little Place I Made for You",

  // Photo path. Fixed image provided by user
  photoUrl: "https://imghosting.in/host/s33vky",

  // Polaroid caption
  polaroidCaption: "for someone special ♡",

  // Card 3: The 3 Little Things
  littleThings: [
    {
      id: 1,
      preview: "You have this weird ability…",
      revealed: "To make an ordinary day feel a little less ordinary.",
    },
    {
      id: 2,
      preview: "Sometimes I catch myself smiling…",
      revealed: "because I remembered something you said.",
    },
    {
      id: 3,
      preview: "And honestly…",
      revealed: "I don't think you realize how special you are to me.",
    },
  ],

  // Card 4: Night/Evening realization lines
  specialRealizations: [
    "You stopped being 'just someone I know.'",
    "And became someone I genuinely care about.",
    "I don't exactly know when it happened.",
    "But somewhere along the way, you became special to me.",
  ],

  // Background music URL (.mp3)
  musicUrl: "https://www.image2url.com/r2/default/audio/1789977176306-f7718b82-8f57-4f17-b942-263b50e21f0c.mp3",

  // Card 8: The Question
  questionText: "Do you think there could be something between us? ❤️",

  // Card 9 (YES): Final message reveal
  finalSweetNote: "Whatever happens next, I'm really glad I told you.",

  // Card 9/10 Signature
  signature: "Made with a ridiculous amount of thought.",
};
