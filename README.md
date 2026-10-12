# “A Little Place I Made for You” — Interactive Mobile Love Card

A private, handcrafted, mobile-first interactive single-page website that feels like an authentic digital love letter.

---

## 🌹 Features & Emotional Journey

1. **The Opening (Curiosity)**: Warm cream background, tiny animated heart, handwritten greeting, and an interactive handcrafted envelope with animated seal & unfolding letter.
2. **Why I Made This**: Playful, honest reflection on why a regular message wasn't special enough.
3. **Little Things**: 3 interactive paper note cards that unfold upon tapping to reveal heartfelt observations.
4. **When You Became Special**: Atmospheric transition into a soft evening dusk canvas with golden stars, revealing realizations sequentially.
5. **Her Photograph**: Polaroid-style photo frame with subtle washi tape, gentle rotation, and handwritten caption. Supports:
   - Built-in photo placeholder if an image is not yet loaded (`YOUR PHOTO HERE`)
   - Interactive photo picker / drag-and-drop right on the card (saved to local storage)
   - Custom static image from `public/images/her-photo.jpg`
6. **The Pause**: A quiet, vulnerable transition preparing the heart for honesty.
7. **The Confession**: Sincere, spaced emotional lines—never manipulative or overwhelming.
8. **The Question**: Playful interactive YES / NO interaction.
   - The **NO button** teases playfully twice, stops chasing on the 3rd tap, and also provides a clearly visible `(no, seriously)` escape link so she never feels pressured or trapped.
9. **The Endings**:
   - **YES Celebration**: Gentle pastel confetti burst, floating hearts and flowers, with a heartwarming final note.
   - **Respectful NO**: Emotionally mature, sincere reassurance that preserves dignity and affection without guilt or awkwardness.
10. **Soft Music Box**: Discreet `♪ music` button in the top corner (default OFF) playing a gentle, warm melody synthesized via the Web Audio API with zero external audio dependencies.

---

## 🎨 Personalization Guide

All personal settings are neatly organized in a single file:

👉 **`src/config.ts`**

Look for the clearly marked section:
```ts
// =======================================================================
// PERSONALIZE THIS SECTION
// =======================================================================
```

### 1. Changing Her Name
In `src/config.ts`:
```ts
recipientName: "Jinu", // or "" for the intimate default "Hey, you."
```

### 2. Adding Her Photograph
You can add her photo in two easy ways:
- **Method A (File upload)**: Place your photo inside `public/images/her-photo.jpg`. The Polaroid will automatically load it.
- **Method B (Instant browser pick)**: When previewing the website, tap on the Polaroid photo frame or drag your image file (`jinuuuu.jpg.jpeg`) directly into the frame. It will immediately display in perfect aspect ratio and save to local storage.

### 3. Customizing the Messages & Confession
In `src/config.ts`, you can freely modify:
- `littleThings`: The 3 notes revealed on Card 3
- `specialRealizations`: The lines shown on Card 4
- `questionText`: The question asked on Card 8
- `finalSweetNote`: The secret message revealed on the YES celebration screen

---

## 🚀 Running Locally

```bash
# Install dependencies
npm install

# Start the local development server
npm run dev
```

Visit `http://localhost:3000` in your mobile browser or inspect in mobile emulation (390 × 844 px).

---

## 🌐 Deployment (Cloudflare Pages, Vercel, Netlify)

This project builds into a pure, lightweight static SPA with zero server dependencies:

```bash
npm run build
```

- **Output Directory**: `dist`
- **Build Command**: `npm run build`
- Deployable to **Cloudflare Pages**, **Vercel**, **Netlify**, or **GitHub Pages** with one click!
