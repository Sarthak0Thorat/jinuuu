import React from 'react';
import { PipEmotion } from '../types';

interface PipProps {
  emotion: PipEmotion;
  className?: string;
  size?: number;
  isDark?: boolean;
  flipped?: boolean;
  reaction?: string;
  label?: string;
  svgClassName?: string;
}

export const Pip: React.FC<PipProps> = ({
  emotion,
  className = '',
  size = 76,
  isDark = false,
  flipped = false,
  reaction,
  label,
  svgClassName = '',
}) => {
  // Ultra-cute pastel palette for our chubby mochi bunny companion
  const bodyFill = '#FFFFFF';
  const bellyFill = isDark ? '#4A333E' : '#FCECEF';
  const strokeColor = isDark ? '#F6D6DE' : '#8A4356';
  const innerEarFill = isDark ? '#3D2832' : '#FDE6EC';
  const innerEarStroke = isDark ? '#F6D6DE' : '#E599AC';
  const blushFill = '#F8B4C0';
  const eyeFill = isDark ? '#FFF9F5' : '#2D1B22';
  const noseFill = '#E28296';

  const isSlowBreathing = emotion === 'thoughtful' || emotion === 'understanding';
  const isHop = emotion === 'celebrating';
  const isShy = emotion === 'shy';
  const isCelebrating = emotion === 'celebrating';
  const isNervous = emotion === 'nervous';

  const blushOpacity = (isShy || isCelebrating) 
    ? 0.95 
    : (isNervous || emotion === 'admiring' || emotion === 'hopeful') 
    ? 0.8 
    : 0.6;

  return (
    <div 
      className={`inline-flex flex-col items-center select-none pointer-events-auto transition-transform duration-300 ${className}`}
      style={{ width: size, height: size }}
      title={label || "Pip the cute bunny companion ♡"}
      aria-label="Pip the bunny"
    >
      <div 
        className={`w-full h-full relative ${flipped ? '-scale-x-100' : ''}`}
      >
        <svg
          viewBox="0 0 90 90"
          className={`w-full h-full overflow-visible drop-shadow-xs ${isHop ? 'pip-hop' : isSlowBreathing ? 'pip-breathe-slow' : 'pip-breathe'} ${svgClassName}`}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Celebrating floating heart particle */}
          {isCelebrating && (
            <g className="pip-floating-heart">
              <path
                d="M45 10 C45 10, 41 6, 37 8.5 C33 11.5, 37 16, 45 19.5 C53 16, 57 11.5, 53 8.5 C49 6, 45 10, 45 10 Z"
                fill="#D98295"
                stroke={strokeColor}
                strokeWidth="0.8"
              />
            </g>
          )}

          {/* FLUFFY ROUND COTTON PUFF TAIL */}
          <g>
            <path
              d="M20 63 C15 63, 13 56, 17 52 C19 50, 23 51, 24 54 C26 54, 28 58, 26 61 C24 63, 22 63, 20 63 Z"
              fill={bodyFill}
              stroke={strokeColor}
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Fluffy tail tuft line */}
            <path
              d="M19 55 C19.5 57, 21.5 59, 23 58"
              stroke={strokeColor}
              strokeWidth="1"
              strokeLinecap="round"
              opacity="0.4"
            />
          </g>

          {/* EARS (Soft, rounded mochi bunny ears) */}
          {/* Left Ear */}
          <g className="pip-ear-l" style={{ transformOrigin: '36px 26px' }}>
            {emotion === 'nervous' || emotion === 'shy' ? (
              // Shy drooped outward ear
              <>
                <path
                  d="M34 26 C23 21, 15 17, 16 12 C18 7, 28 15, 39 25"
                  fill={bodyFill}
                  stroke={strokeColor}
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M33 24 C24 20, 18 16, 19 13 C20 10, 27 16, 36 23"
                  fill={innerEarFill}
                  stroke={innerEarStroke}
                  strokeWidth="0.9"
                  strokeLinecap="round"
                />
              </>
            ) : emotion === 'thoughtful' || emotion === 'understanding' ? (
              // Relaxed soft ear resting slightly back
              <>
                <path
                  d="M34 26 C28 17, 25 8, 31 7 C36 6, 39 16, 41 26"
                  fill={bodyFill}
                  stroke={strokeColor}
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M34 24 C30 17, 28 11, 32 10 C35 9, 37 17, 39 24"
                  fill={innerEarFill}
                  stroke={innerEarStroke}
                  strokeWidth="0.9"
                  strokeLinecap="round"
                />
              </>
            ) : (
              // Perky, round-tipped chubby ear
              <>
                <path
                  d="M34 26 C30 15, 33 5, 39 5 C45 5, 45 15, 42 26"
                  fill={bodyFill}
                  stroke={strokeColor}
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M36 24 C33 16, 35 9, 39 9 C43 9, 43 16, 40 24"
                  fill={innerEarFill}
                  stroke={innerEarStroke}
                  strokeWidth="0.9"
                  strokeLinecap="round"
                />
              </>
            )}
          </g>

          {/* Right Ear */}
          <g className="pip-ear-r" style={{ transformOrigin: '54px 26px' }}>
            {emotion === 'nervous' || emotion === 'shy' ? (
              // Shy drooped outward ear
              <>
                <path
                  d="M51 26 C62 21, 70 17, 69 12 C67 7, 57 15, 46 25"
                  fill={bodyFill}
                  stroke={strokeColor}
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M52 24 C61 20, 67 16, 66 13 C65 10, 58 16, 49 23"
                  fill={innerEarFill}
                  stroke={innerEarStroke}
                  strokeWidth="0.9"
                  strokeLinecap="round"
                />
              </>
            ) : emotion === 'playful' ? (
              // Flopped folded ear tip!
              <>
                <path
                  d="M48 26 C51 17, 57 11, 62 12 C66 13, 64 18, 60 19 C55 21, 57 24, 55 27"
                  fill={bodyFill}
                  stroke={strokeColor}
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M49 24 C52 17, 56 14, 59 15 C61 16, 58 19, 55 24"
                  fill={innerEarFill}
                  stroke={innerEarStroke}
                  strokeWidth="0.9"
                  strokeLinecap="round"
                />
              </>
            ) : emotion === 'thoughtful' || emotion === 'understanding' ? (
              // Relaxed outward ear
              <>
                <path
                  d="M48 26 C54 18, 62 9, 67 12 C71 15, 63 22, 56 27"
                  fill={bodyFill}
                  stroke={strokeColor}
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M49 24 C53 18, 59 12, 63 14 C66 16, 60 21, 55 24"
                  fill={innerEarFill}
                  stroke={innerEarStroke}
                  strokeWidth="0.9"
                  strokeLinecap="round"
                />
              </>
            ) : emotion === 'curious' ? (
              // Cocked curious angle
              <>
                <path
                  d="M48 26 C53 15, 60 7, 65 9 C69 11, 64 20, 56 27"
                  fill={bodyFill}
                  stroke={strokeColor}
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M49 25 C53 17, 59 11, 62 12 C65 14, 61 20, 55 25"
                  fill={innerEarFill}
                  stroke={innerEarStroke}
                  strokeWidth="0.9"
                  strokeLinecap="round"
                />
              </>
            ) : (
              // Perky, round-tipped chubby ear
              <>
                <path
                  d="M48 26 C52 15, 49 5, 55 5 C61 5, 64 15, 56 26"
                  fill={bodyFill}
                  stroke={strokeColor}
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M50 24 C53 16, 51 9, 55 9 C59 9, 61 16, 54 24"
                  fill={innerEarFill}
                  stroke={innerEarStroke}
                  strokeWidth="0.9"
                  strokeLinecap="round"
                />
              </>
            )}
          </g>

          {/* PLUMP CHUBBY MOCHI BODY */}
          <path
            d="M26 71 C20 68, 21 54, 28 46 C34 40, 56 40, 62 46 C69 54, 70 68, 64 71 C58 74.5, 32 74.5, 26 71 Z"
            fill={bodyFill}
            stroke={strokeColor}
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* SOFT CHUBBY BELLY PATCH */}
          <ellipse
            cx="45"
            cy="59"
            rx="13.5"
            ry="10.5"
            fill={bellyFill}
            opacity="0.8"
          />

          {/* CHUBBY LITTLE MOCHI FEET */}
          <g>
            {/* Left Foot */}
            <ellipse
              cx="32"
              cy="72.5"
              rx="6.5"
              ry="4"
              fill={bodyFill}
              stroke={strokeColor}
              strokeWidth="1.5"
            />
            {/* Left Foot Toe tick marks */}
            <path d="M30 74 L30 72 M34 74 L34 72" stroke={strokeColor} strokeWidth="1" strokeLinecap="round" opacity="0.45" />

            {/* Right Foot */}
            <ellipse
              cx="58"
              cy="72.5"
              rx="6.5"
              ry="4"
              fill={bodyFill}
              stroke={strokeColor}
              strokeWidth="1.5"
            />
            {/* Right Foot Toe tick marks */}
            <path d="M56 74 L56 72 M60 74 L60 72" stroke={strokeColor} strokeWidth="1" strokeLinecap="round" opacity="0.45" />
          </g>

          {/* CHUBBY DUMPLING HEAD (Wide squishy cheeks) */}
          <path
            d="M24 41 C21 34, 25 24, 45 24 C65 24, 69 34, 66 41 C64 48, 58 53, 45 53 C32 53, 26 48, 24 41 Z"
            fill={bodyFill}
            stroke={strokeColor}
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* ROSY PEACH BLUSH CHEEKS */}
          <g>
            <ellipse
              cx="29.5"
              cy="42"
              rx="4.8"
              ry="3"
              fill={blushFill}
              opacity={blushOpacity}
            />
            <circle cx="28.5" cy="41" r="0.75" fill="#FFFFFF" opacity={blushOpacity + 0.15} />

            <ellipse
              cx="60.5"
              cy="42"
              rx="4.8"
              ry="3"
              fill={blushFill}
              opacity={blushOpacity}
            />
            <circle cx="59.5" cy="41" r="0.75" fill="#FFFFFF" opacity={blushOpacity + 0.15} />
          </g>

          {/* EXPRESSIVE EYES (Large, glossy, sparkly boba eyes) */}
          <g className="pip-blinking" style={{ transformOrigin: '45px 38px' }}>
            {emotion === 'happy' || emotion === 'celebrating' ? (
              // Joyful anime crescents ^ ^ with cute eyelash flicks
              <>
                <path
                  d="M32.5 38.5 Q36 34.5, 39.5 38.5"
                  fill="none"
                  stroke={strokeColor}
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M50.5 38.5 Q54 34.5, 57.5 38.5"
                  fill="none"
                  stroke={strokeColor}
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </>
            ) : emotion === 'thoughtful' || emotion === 'understanding' ? (
              // Sweet sleepy lashes
              <>
                <path
                  d="M33 37 Q36.5 40, 40 37"
                  fill="none"
                  stroke={strokeColor}
                  strokeWidth="1.7"
                  strokeLinecap="round"
                />
                <path
                  d="M50 37 Q53.5 40, 57 37"
                  fill="none"
                  stroke={strokeColor}
                  strokeWidth="1.7"
                  strokeLinecap="round"
                />
              </>
            ) : emotion === 'shy' ? (
              // Bashful downward glance
              <>
                <path
                  d="M33.5 37.5 Q36.5 40.5, 39.5 38"
                  fill="none"
                  stroke={strokeColor}
                  strokeWidth="1.7"
                  strokeLinecap="round"
                />
                <path
                  d="M50.5 38 Q53.5 40.5, 56.5 37.5"
                  fill="none"
                  stroke={strokeColor}
                  strokeWidth="1.7"
                  strokeLinecap="round"
                />
              </>
            ) : emotion === 'nervous' ? (
              // Wide shy pupils with highlights
              <>
                <circle cx="36" cy="38" r="2.2" fill={eyeFill} />
                <circle cx="35.3" cy="37.3" r="0.8" fill="#FFFFFF" />
                <circle cx="54" cy="38" r="2.2" fill={eyeFill} />
                <circle cx="53.3" cy="37.3" r="0.8" fill="#FFFFFF" />
              </>
            ) : (
              // Big glossy sparkling boba eyes (Curious / Admiring / Hopeful / Default)
              <>
                {/* Left Eye */}
                <circle cx="35.5" cy="38" r="2.8" fill={eyeFill} />
                <circle cx="34.6" cy="37.1" r="1.15" fill="#FFFFFF" />
                <circle cx="36.8" cy="39.1" r="0.6" fill="#FFFFFF" />

                {/* Right Eye */}
                <circle cx="54.5" cy="38" r="2.8" fill={eyeFill} />
                <circle cx="53.6" cy="37.1" r="1.15" fill="#FFFFFF" />
                <circle cx="55.8" cy="39.1" r="0.6" fill="#FFFFFF" />
              </>
            )}
          </g>

          {/* TINY STRAWBERRY NOSE */}
          <path
            d="M43.8 41.5 C43.8 40.8, 46.2 40.8, 46.2 41.5 C46.2 42.2, 45 43, 45 43 C45 43, 43.8 42.2, 43.8 41.5 Z"
            fill={noseFill}
          />

          {/* SWEET BUNNY-CAT "w" MOUTH */}
          {emotion === 'happy' || emotion === 'celebrating' ? (
            // Joyful open cute "w" smile
            <path
              d="M41.5 43.5 Q43.5 46.5, 45 44.5 Q46.5 46.5, 48.5 43.5"
              fill="none"
              stroke={strokeColor}
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          ) : emotion === 'shy' ? (
            // Shy delicate smile
            <path
              d="M43 44.5 Q44.5 45.8, 46.5 44"
              fill="none"
              stroke={strokeColor}
              strokeWidth="1.4"
              strokeLinecap="round"
            />
          ) : emotion === 'nervous' ? (
            // Cute gentle wobble
            <path
              d="M42.5 45 Q44.5 44, 46.5 45"
              fill="none"
              stroke={strokeColor}
              strokeWidth="1.4"
              strokeLinecap="round"
            />
          ) : (
            // Iconic cute bunny "3" / "w" smile
            <path
              d="M42 44.2 Q43.6 46, 45 44.8 Q46.4 46, 48 44.2"
              fill="none"
              stroke={strokeColor}
              strokeWidth="1.4"
              strokeLinecap="round"
            />
          )}

          {/* CHUBBY LITTLE MARSHMALLOW FRONT PAWS & PROPS */}
          {emotion === 'celebrating' ? (
            // Paws thrown joyfully in the air!
            <>
              <ellipse
                cx="25"
                cy="41"
                rx="4"
                ry="3"
                transform="rotate(-25 25 41)"
                fill={bodyFill}
                stroke={strokeColor}
                strokeWidth="1.5"
              />
              <ellipse
                cx="65"
                cy="41"
                rx="4"
                ry="3"
                transform="rotate(25 65 41)"
                fill={bodyFill}
                stroke={strokeColor}
                strokeWidth="1.5"
              />
            </>
          ) : emotion === 'admiring' ? (
            // Holding a delicate little pink tulip flower close to heart!
            <>
              {/* Tulip stem */}
              <path
                d="M47 57 C49 53, 53 46, 56 40"
                fill="none"
                stroke="#D98295"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              {/* Leaf */}
              <path
                d="M50 51 Q55 51, 53 47"
                fill="none"
                stroke="#D98295"
                strokeWidth="1.2"
                strokeLinecap="round"
              />
              {/* Tulip flower head */}
              <path
                d="M56 40 C53 37, 53 33, 56 32 C59 33, 59 37, 56 40 Z"
                fill="#F6D6DE"
                stroke={strokeColor}
                strokeWidth="1.2"
                strokeLinejoin="round"
              />
              <path
                d="M54.5 36.5 C54 34.5, 55.5 33.5, 56 34"
                fill="none"
                stroke="#D98295"
                strokeWidth="0.8"
              />

              {/* Chubby paws clutching the flower stem */}
              <ellipse
                cx="43"
                cy="53"
                rx="3.6"
                ry="2.8"
                transform="rotate(15 43 53)"
                fill={bodyFill}
                stroke={strokeColor}
                strokeWidth="1.5"
              />
              <ellipse
                cx="48"
                cy="53"
                rx="3.6"
                ry="2.8"
                transform="rotate(-15 48 53)"
                fill={bodyFill}
                stroke={strokeColor}
                strokeWidth="1.5"
              />
            </>
          ) : emotion === 'playful' ? (
            // Holding a sweet little love note
            <>
              <g transform="rotate(-6 48 50)">
                <rect
                  x="42"
                  y="46.5"
                  width="13"
                  height="9.5"
                  rx="1.8"
                  fill="#FFF9F5"
                  stroke={innerEarStroke}
                  strokeWidth="1"
                />
                <path
                  d="M48.5 50.5 C48.5 50.5, 47 48.5, 45.5 49.5 C44 50.5, 45.5 52.5, 48.5 54 C51.5 52.5, 53 50.5, 51.5 49.5 C50 48.5, 48.5 50.5, 48.5 50.5 Z"
                  fill="#D98295"
                />
              </g>
              <ellipse
                cx="40"
                cy="52.5"
                rx="3.5"
                ry="2.7"
                fill={bodyFill}
                stroke={strokeColor}
                strokeWidth="1.5"
              />
              <ellipse
                cx="47"
                cy="52.5"
                rx="3.5"
                ry="2.7"
                fill={bodyFill}
                stroke={strokeColor}
                strokeWidth="1.5"
              />
            </>
          ) : emotion === 'understanding' ? (
            // Paws resting calmly, with a gentle daisy flower beside Pip on the ground
            <>
              <ellipse
                cx="38.5"
                cy="53"
                rx="3.6"
                ry="2.7"
                fill={bodyFill}
                stroke={strokeColor}
                strokeWidth="1.5"
              />
              <ellipse
                cx="51.5"
                cy="53"
                rx="3.6"
                ry="2.7"
                fill={bodyFill}
                stroke={strokeColor}
                strokeWidth="1.5"
              />
              {/* Little daisy on the ground beside Pip */}
              <g>
                <path
                  d="M63 73 Q69 74.5, 73 73"
                  fill="none"
                  stroke="#D98295"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                />
                <circle cx="73" cy="72" r="3.2" fill="#FFF9F5" stroke="#D98295" strokeWidth="0.8" />
                <circle cx="73" cy="72" r="1.3" fill="#E8B072" />
              </g>
            </>
          ) : emotion === 'nervous' || emotion === 'shy' || emotion === 'hopeful' ? (
            // Chubby paws pressed together shyly at the chest
            <>
              <ellipse
                cx="41"
                cy="52.5"
                rx="3.6"
                ry="2.8"
                transform="rotate(15 41 52.5)"
                fill={bodyFill}
                stroke={strokeColor}
                strokeWidth="1.5"
              />
              <ellipse
                cx="47"
                cy="52.5"
                rx="3.6"
                ry="2.8"
                transform="rotate(-15 47 52.5)"
                fill={bodyFill}
                stroke={strokeColor}
                strokeWidth="1.5"
              />
            </>
          ) : (
            // Resting chubby marshmallow paws over tummy (curious, happy, thoughtful)
            <>
              <ellipse
                cx="38.5"
                cy="53"
                rx="3.6"
                ry="2.7"
                fill={bodyFill}
                stroke={strokeColor}
                strokeWidth="1.5"
              />
              <ellipse
                cx="51.5"
                cy="53"
                rx="3.6"
                ry="2.7"
                fill={bodyFill}
                stroke={strokeColor}
                strokeWidth="1.5"
              />
            </>
          )}
        </svg>
      </div>
    </div>
  );
};
