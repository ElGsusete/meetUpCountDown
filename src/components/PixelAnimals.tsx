'use client';

import React from 'react';
import styles from './PixelAnimals.module.css';

export type AnimalType = 
  | 'cat-tabby'
  | 'cat-black'
  | 'cat-calico'
  | 'cat-siamese'
  | 'cat-pink'
  | 'dog-corgi'
  | 'dog-shiba'
  | 'bunny'
  | 'hamster';

export type AnimalAction = 'idle' | 'walk' | 'sleep' | 'bounce' | 'heart';

interface PixelAnimalProps {
  type: AnimalType;
  action?: AnimalAction;
  scale?: number;
  flip?: boolean;
  dialogue?: string;
}

export const PixelAnimal: React.FC<PixelAnimalProps> = ({
  type,
  action = 'idle',
  scale = 1,
  flip = false,
  dialogue
}) => {
  // SVG Pixel Art Artworks - Exact match to user's reference style (20x20 pixel grid)
  const renderSvg = () => {
    switch (type) {
      case 'cat-tabby':
        // Orange Tabby Cat (Bottom Right in Reference Image)
        return (
          <svg viewBox="0 0 20 20" className={styles.pixelSvg}>
            {/* Ground Shadow */}
            <ellipse cx="10" cy="18.5" rx="7.5" ry="1.2" fill="rgba(0,0,0,0.18)" />

            {/* BLACK OUTLINE */}
            {/* Ears Outline */}
            <rect x="3" y="1" width="3" height="1" fill="#1A1A1A" />
            <rect x="2" y="2" width="1" height="3" fill="#1A1A1A" />
            <rect x="5" y="2" width="1" height="2" fill="#1A1A1A" />
            <rect x="14" y="1" width="3" height="1" fill="#1A1A1A" />
            <rect x="17" y="2" width="1" height="3" fill="#1A1A1A" />
            <rect x="14" y="2" width="1" height="2" fill="#1A1A1A" />

            {/* Head Outline */}
            <rect x="5" y="4" width="10" height="1" fill="#1A1A1A" />
            <rect x="2" y="5" width="1" height="6" fill="#1A1A1A" />
            <rect x="17" y="5" width="1" height="6" fill="#1A1A1A" />
            <rect x="3" y="11" width="14" height="1" fill="#1A1A1A" />

            {/* Side Whiskers (2 horizontal bars on left and right) */}
            <rect x="0" y="6" width="3" height="1" fill="#1A1A1A" />
            <rect x="0" y="8" width="3" height="1" fill="#1A1A1A" />
            <rect x="17" y="6" width="3" height="1" fill="#1A1A1A" />
            <rect x="17" y="8" width="3" height="1" fill="#1A1A1A" />

            {/* Body Outline */}
            <rect x="4" y="11" width="1" height="6" fill="#1A1A1A" />
            <rect x="12" y="11" width="1" height="3" fill="#1A1A1A" />
            <rect x="4" y="17" width="9" height="1" fill="#1A1A1A" />

            {/* Curled Fluffy Tail with Wag Animation */}
            <g className={styles.catTail}>
              <rect x="13" y="13" width="1" height="1" fill="#1A1A1A" />
              <rect x="14" y="12" width="4" height="1" fill="#1A1A1A" />
              <rect x="18" y="8" width="1" height="5" fill="#1A1A1A" />
              <rect x="15" y="7" width="3" height="1" fill="#1A1A1A" />
              <rect x="14" y="8" width="1" height="2" fill="#1A1A1A" />
              <rect x="13" y="10" width="1" height="3" fill="#1A1A1A" />
              <rect x="14" y="13" width="2" height="1" fill="#D36B36" />
              <rect x="15" y="8" width="3" height="4" fill="#D36B36" />
              <rect x="16" y="9" width="1" height="2" fill="#A8481A" /> {/* Tail stripe */}
            </g>
          </svg>
        );

      case 'cat-black':
        // Black Cat with Amber Eyes (Top Left in Reference Image)
        return (
          <svg viewBox="0 0 20 20" className={styles.pixelSvg}>
            <ellipse cx="10" cy="18.5" rx="7.5" ry="1.2" fill="rgba(0,0,0,0.18)" />

            {/* BLACK OUTLINE */}
            <rect x="3" y="1" width="3" height="1" fill="#1A1A1A" />
            <rect x="2" y="2" width="1" height="3" fill="#1A1A1A" />
            <rect x="5" y="2" width="1" height="2" fill="#1A1A1A" />
            <rect x="14" y="1" width="3" height="1" fill="#1A1A1A" />
            <rect x="17" y="2" width="1" height="3" fill="#1A1A1A" />
            <rect x="14" y="2" width="1" height="2" fill="#1A1A1A" />

            <rect x="5" y="4" width="10" height="1" fill="#1A1A1A" />
            <rect x="2" y="5" width="1" height="6" fill="#1A1A1A" />
            <rect x="17" y="5" width="1" height="6" fill="#1A1A1A" />
            <rect x="3" y="11" width="14" height="1" fill="#1A1A1A" />

            <rect x="0" y="6" width="3" height="1" fill="#1A1A1A" />
            <rect x="0" y="8" width="3" height="1" fill="#1A1A1A" />
            <rect x="17" y="6" width="3" height="1" fill="#1A1A1A" />
            <rect x="17" y="8" width="3" height="1" fill="#1A1A1A" />

            <rect x="4" y="11" width="1" height="6" fill="#1A1A1A" />
            <rect x="12" y="11" width="1" height="3" fill="#1A1A1A" />
            <rect x="4" y="17" width="9" height="1" fill="#1A1A1A" />

            {/* FILLS */}
            <rect x="3" y="2" width="2" height="2" fill="#FF80AB" />
            <rect x="15" y="2" width="2" height="2" fill="#FF80AB" />

            {/* Dark Charcoal Body Fill */}
            <rect x="3" y="5" width="14" height="6" fill="#2C2C2C" />
            <rect x="3" y="2" width="1" height="1" fill="#2C2C2C" />
            <rect x="16" y="2" width="1" height="1" fill="#2C2C2C" />

            {/* Amber/Orange Glowing Eyes & Nose */}
            <rect x="6" y="7" width="1" height="2" fill="#FFA000" />
            <rect x="9" y="8" width="1" height="1" fill="#1A1A1A" />
            <rect x="12" y="7" width="1" height="2" fill="#FFA000" />

            {/* Body */}
            <rect x="5" y="11" width="7" height="6" fill="#2C2C2C" />

            {/* Darker Belly Accent */}
            <rect x="5" y="13" width="3" height="4" fill="#212121" />

            <rect x="7" y="16" width="1" height="1" fill="#1A1A1A" />
            <rect x="9" y="16" width="1" height="1" fill="#1A1A1A" />

            {/* Tail */}
            <g className={styles.catTail}>
              <rect x="13" y="13" width="1" height="1" fill="#1A1A1A" />
              <rect x="14" y="12" width="4" height="1" fill="#1A1A1A" />
              <rect x="18" y="8" width="1" height="5" fill="#1A1A1A" />
              <rect x="15" y="7" width="3" height="1" fill="#1A1A1A" />
              <rect x="14" y="8" width="1" height="2" fill="#1A1A1A" />
              <rect x="13" y="10" width="1" height="3" fill="#1A1A1A" />
              <rect x="14" y="13" width="2" height="1" fill="#2C2C2C" />
              <rect x="15" y="8" width="3" height="4" fill="#2C2C2C" />
            </g>
          </svg>
        );

      case 'cat-calico':
        // White Cat with Blue Eyes (Top Right in Reference Image)
        return (
          <svg viewBox="0 0 20 20" className={styles.pixelSvg}>
            <ellipse cx="10" cy="18.5" rx="7.5" ry="1.2" fill="rgba(0,0,0,0.18)" />

            {/* BLACK OUTLINE */}
            <rect x="3" y="1" width="3" height="1" fill="#1A1A1A" />
            <rect x="2" y="2" width="1" height="3" fill="#1A1A1A" />
            <rect x="5" y="2" width="1" height="2" fill="#1A1A1A" />
            <rect x="14" y="1" width="3" height="1" fill="#1A1A1A" />
            <rect x="17" y="2" width="1" height="3" fill="#1A1A1A" />
            <rect x="14" y="2" width="1" height="2" fill="#1A1A1A" />

            <rect x="5" y="4" width="10" height="1" fill="#1A1A1A" />
            <rect x="2" y="5" width="1" height="6" fill="#1A1A1A" />
            <rect x="17" y="5" width="1" height="6" fill="#1A1A1A" />
            <rect x="3" y="11" width="14" height="1" fill="#1A1A1A" />

            <rect x="0" y="6" width="3" height="1" fill="#1A1A1A" />
            <rect x="0" y="8" width="3" height="1" fill="#1A1A1A" />
            <rect x="17" y="6" width="3" height="1" fill="#1A1A1A" />
            <rect x="17" y="8" width="3" height="1" fill="#1A1A1A" />

            <rect x="4" y="11" width="1" height="6" fill="#1A1A1A" />
            <rect x="12" y="11" width="1" height="3" fill="#1A1A1A" />
            <rect x="4" y="17" width="9" height="1" fill="#1A1A1A" />

            {/* FILLS */}
            <rect x="3" y="2" width="2" height="2" fill="#FF80AB" />
            <rect x="15" y="2" width="2" height="2" fill="#FF80AB" />

            {/* Pure White Fill */}
            <rect x="3" y="5" width="14" height="6" fill="#FFFFFF" />
            <rect x="3" y="2" width="1" height="1" fill="#FFFFFF" />
            <rect x="16" y="2" width="1" height="1" fill="#FFFFFF" />

            {/* Sky Blue Eyes & Nose */}
            <rect x="6" y="7" width="1" height="2" fill="#29B6F6" />
            <rect x="9" y="8" width="1" height="1" fill="#1A1A1A" />
            <rect x="12" y="7" width="1" height="2" fill="#29B6F6" />

            {/* White Body */}
            <rect x="5" y="11" width="7" height="6" fill="#FFFFFF" />

            <rect x="7" y="16" width="1" height="1" fill="#1A1A1A" />
            <rect x="9" y="16" width="1" height="1" fill="#1A1A1A" />

            {/* White Tail */}
            <g className={styles.catTail}>
              <rect x="13" y="13" width="1" height="1" fill="#1A1A1A" />
              <rect x="14" y="12" width="4" height="1" fill="#1A1A1A" />
              <rect x="18" y="8" width="1" height="5" fill="#1A1A1A" />
              <rect x="15" y="7" width="3" height="1" fill="#1A1A1A" />
              <rect x="14" y="8" width="1" height="2" fill="#1A1A1A" />
              <rect x="13" y="10" width="1" height="3" fill="#1A1A1A" />
              <rect x="14" y="13" width="2" height="1" fill="#FFFFFF" />
              <rect x="15" y="8" width="3" height="4" fill="#FFFFFF" />
            </g>
          </svg>
        );

      case 'cat-siamese':
        // Grey Tabby Cat (Bottom Left in Reference Image)
        return (
          <svg viewBox="0 0 20 20" className={styles.pixelSvg}>
            <ellipse cx="10" cy="18.5" rx="7.5" ry="1.2" fill="rgba(0,0,0,0.18)" />

            {/* BLACK OUTLINE */}
            <rect x="3" y="1" width="3" height="1" fill="#1A1A1A" />
            <rect x="2" y="2" width="1" height="3" fill="#1A1A1A" />
            <rect x="5" y="2" width="1" height="2" fill="#1A1A1A" />
            <rect x="14" y="1" width="3" height="1" fill="#1A1A1A" />
            <rect x="17" y="2" width="1" height="3" fill="#1A1A1A" />
            <rect x="14" y="2" width="1" height="2" fill="#1A1A1A" />

            <rect x="5" y="4" width="10" height="1" fill="#1A1A1A" />
            <rect x="2" y="5" width="1" height="6" fill="#1A1A1A" />
            <rect x="17" y="5" width="1" height="6" fill="#1A1A1A" />
            <rect x="3" y="11" width="14" height="1" fill="#1A1A1A" />

            <rect x="0" y="6" width="3" height="1" fill="#1A1A1A" />
            <rect x="0" y="8" width="3" height="1" fill="#1A1A1A" />
            <rect x="17" y="6" width="3" height="1" fill="#1A1A1A" />
            <rect x="17" y="8" width="3" height="1" fill="#1A1A1A" />

            <rect x="4" y="11" width="1" height="6" fill="#1A1A1A" />
            <rect x="12" y="11" width="1" height="3" fill="#1A1A1A" />
            <rect x="4" y="17" width="9" height="1" fill="#1A1A1A" />

            {/* FILLS */}
            <rect x="3" y="2" width="2" height="2" fill="#FFB7B2" />
            <rect x="15" y="2" width="2" height="2" fill="#FFB7B2" />

            {/* Cool Grey Fill */}
            <rect x="3" y="5" width="14" height="6" fill="#9E9E9E" />
            <rect x="3" y="2" width="1" height="1" fill="#9E9E9E" />
            <rect x="16" y="2" width="1" height="1" fill="#9E9E9E" />

            {/* Dark Grey Head Stripes */}
            <rect x="6" y="5" width="1" height="2" fill="#616161" />
            <rect x="9" y="5" width="2" height="2" fill="#616161" />
            <rect x="13" y="5" width="1" height="2" fill="#616161" />

            {/* Dark Eyes & Nose */}
            <rect x="6" y="7" width="1" height="2" fill="#1A1A1A" />
            <rect x="9" y="8" width="1" height="1" fill="#1A1A1A" />
            <rect x="12" y="7" width="1" height="2" fill="#1A1A1A" />

            {/* Grey Body */}
            <rect x="5" y="11" width="7" height="6" fill="#9E9E9E" />

            {/* Pinkish Belly / Chest Patch */}
            <rect x="5" y="13" width="3" height="4" fill="#F48FB1" />

            <rect x="7" y="16" width="1" height="1" fill="#1A1A1A" />
            <rect x="9" y="16" width="1" height="1" fill="#1A1A1A" />

            {/* Tail Fill */}
            <g className={styles.catTail}>
              <rect x="13" y="13" width="1" height="1" fill="#1A1A1A" />
              <rect x="14" y="12" width="4" height="1" fill="#1A1A1A" />
              <rect x="18" y="8" width="1" height="5" fill="#1A1A1A" />
              <rect x="15" y="7" width="3" height="1" fill="#1A1A1A" />
              <rect x="14" y="8" width="1" height="2" fill="#1A1A1A" />
              <rect x="13" y="10" width="1" height="3" fill="#1A1A1A" />
              <rect x="14" y="13" width="2" height="1" fill="#757575" />
              <rect x="15" y="8" width="3" height="4" fill="#757575" />
              <rect x="16" y="9" width="1" height="2" fill="#424242" />
            </g>
          </svg>
        );

      case 'cat-pink':
        // Pastel Pink Magical Cat (Matching the reference artwork structure)
        return (
          <svg viewBox="0 0 20 20" className={styles.pixelSvg}>
            <ellipse cx="10" cy="18.5" rx="7.5" ry="1.2" fill="rgba(0,0,0,0.18)" />

            {/* BLACK OUTLINE */}
            <rect x="3" y="1" width="3" height="1" fill="#1A1A1A" />
            <rect x="2" y="2" width="1" height="3" fill="#1A1A1A" />
            <rect x="5" y="2" width="1" height="2" fill="#1A1A1A" />
            <rect x="14" y="1" width="3" height="1" fill="#1A1A1A" />
            <rect x="17" y="2" width="1" height="3" fill="#1A1A1A" />
            <rect x="14" y="2" width="1" height="2" fill="#1A1A1A" />

            <rect x="5" y="4" width="10" height="1" fill="#1A1A1A" />
            <rect x="2" y="5" width="1" height="6" fill="#1A1A1A" />
            <rect x="17" y="5" width="1" height="6" fill="#1A1A1A" />
            <rect x="3" y="11" width="14" height="1" fill="#1A1A1A" />

            <rect x="0" y="6" width="3" height="1" fill="#1A1A1A" />
            <rect x="0" y="8" width="3" height="1" fill="#1A1A1A" />
            <rect x="17" y="6" width="3" height="1" fill="#1A1A1A" />
            <rect x="17" y="8" width="3" height="1" fill="#1A1A1A" />

            <rect x="4" y="11" width="1" height="6" fill="#1A1A1A" />
            <rect x="12" y="11" width="1" height="3" fill="#1A1A1A" />
            <rect x="4" y="17" width="9" height="1" fill="#1A1A1A" />

            {/* Pink Fluffy Tail */}
            <g className={styles.catTail}>
              <rect x="13" y="13" width="1" height="1" fill="#1A1A1A" />
              <rect x="14" y="12" width="4" height="1" fill="#1A1A1A" />
              <rect x="18" y="8" width="1" height="5" fill="#1A1A1A" />
              <rect x="15" y="7" width="3" height="1" fill="#1A1A1A" />
              <rect x="14" y="8" width="1" height="2" fill="#1A1A1A" />
              <rect x="13" y="10" width="1" height="3" fill="#1A1A1A" />
              <rect x="14" y="13" width="2" height="1" fill="#F48FB1" />
              <rect x="15" y="8" width="3" height="4" fill="#F48FB1" />
            </g>
          </svg>
        );

      case 'dog-corgi':
        // Corgi Dog in reference pixel style
        return (
          <svg viewBox="0 0 20 20" className={styles.pixelSvg}>
            <ellipse cx="10" cy="18.5" rx="7.5" ry="1.2" fill="rgba(0,0,0,0.18)" />
            <rect x="2" y="1" width="4" height="1" fill="#1A1A1A" />
            <rect x="14" y="1" width="4" height="1" fill="#1A1A1A" />
            <rect x="1" y="2" width="1" height="4" fill="#1A1A1A" />
            <rect x="18" y="2" width="1" height="4" fill="#1A1A1A" />
            <rect x="2" y="5" width="16" height="6" fill="#1A1A1A" />
            <rect x="3" y="11" width="14" height="6" fill="#1A1A1A" />

            {/* Corgi colors */}
            <rect x="2" y="2" width="3" height="3" fill="#FB8C00" />
            <rect x="15" y="2" width="3" height="3" fill="#FB8C00" />
            <rect x="3" y="5" width="14" height="6" fill="#FB8C00" />
            <rect x="8" y="5" width="4" height="6" fill="#FFFFFF" />
            <rect x="6" y="7" width="1" height="2" fill="#1A1A1A" />
            <rect x="13" y="7" width="1" height="2" fill="#1A1A1A" />
            <rect x="9.5" y="8" width="1" height="1" fill="#1A1A1A" />
            <rect x="4" y="11" width="12" height="6" fill="#FB8C00" />
            <rect x="7" y="11" width="6" height="6" fill="#FFFFFF" />
          </svg>
        );

      case 'dog-shiba':
        // Shiba Inu
        return (
          <svg viewBox="0 0 20 20" className={styles.pixelSvg}>
            <ellipse cx="10" cy="18.5" rx="7.5" ry="1.2" fill="rgba(0,0,0,0.18)" />
            <rect x="3" y="1" width="3" height="1" fill="#1A1A1A" />
            <rect x="14" y="1" width="3" height="1" fill="#1A1A1A" />
            <rect x="2" y="2" width="1" height="3" fill="#1A1A1A" />
            <rect x="17" y="2" width="1" height="3" fill="#1A1A1A" />
            <rect x="3" y="5" width="14" height="12" fill="#1A1A1A" />

            <rect x="3" y="2" width="2" height="3" fill="#E65100" />
            <rect x="15" y="2" width="2" height="3" fill="#E65100" />
            <rect x="3" y="5" width="14" height="6" fill="#F57C00" />
            <rect x="3" y="8" width="14" height="3" fill="#FFFFFF" />
            <rect x="6" y="7" width="1" height="2" fill="#1A1A1A" />
            <rect x="13" y="7" width="1" height="2" fill="#1A1A1A" />
            <rect x="9.5" y="8" width="1" height="1" fill="#1A1A1A" />
            <rect x="4" y="11" width="12" height="6" fill="#F57C00" />
            <rect x="7" y="11" width="6" height="6" fill="#FFFFFF" />
          </svg>
        );

      case 'bunny':
        // Fluffy Bunny
        return (
          <svg viewBox="0 0 20 20" className={styles.pixelSvg}>
            <ellipse cx="10" cy="18.5" rx="7.5" ry="1.2" fill="rgba(0,0,0,0.18)" />
            <rect x="4" y="0" width="3" height="6" fill="#1A1A1A" />
            <rect x="13" y="0" width="3" height="6" fill="#1A1A1A" />
            <rect x="3" y="6" width="14" height="11" fill="#1A1A1A" />

            <rect x="5" y="1" width="1" height="4" fill="#FFB7B2" />
            <rect x="14" y="1" width="1" height="4" fill="#FFB7B2" />
            <rect x="4" y="6" width="12" height="11" fill="#FFFFFF" />
            <rect x="6" y="8" width="1" height="2" fill="#C2185B" />
            <rect x="13" y="8" width="1" height="2" fill="#C2185B" />
            <rect x="9.5" y="9" width="1" height="1" fill="#FF4081" />
          </svg>
        );

      case 'hamster':
        // Chubby Hamster
        return (
          <svg viewBox="0 0 20 20" className={styles.pixelSvg}>
            <ellipse cx="10" cy="18.5" rx="7.5" ry="1.2" fill="rgba(0,0,0,0.18)" />
            <rect x="2" y="3" width="16" height="14" fill="#1A1A1A" />

            <rect x="3" y="4" width="2" height="2" fill="#FF8A80" />
            <rect x="15" y="4" width="2" height="2" fill="#FF8A80" />
            <rect x="3" y="6" width="14" height="10" fill="#FFB74D" />
            <rect x="6" y="8" width="8" height="8" fill="#FFF3E0" />
            <rect x="6" y="8" width="1" height="2" fill="#1A1A1A" />
            <rect x="13" y="8" width="1" height="2" fill="#1A1A1A" />
            <rect x="9.5" y="9" width="1" height="1" fill="#6D4C41" />
          </svg>
        );

      default:
        return null;
    }
  };

  return (
    <div
      className={`${styles.animalContainer} ${styles[action]} ${flip ? styles.flipped : ''}`}
      style={{ transform: `scale(${scale}) ${flip ? 'scaleX(-1)' : ''}` }}
    >
      {dialogue && (
        <div className={styles.speechBubble}>
          {dialogue}
        </div>
      )}

      {action === 'sleep' && (
        <div className={styles.sleepZzz}>
          <span>z</span>
          <span>Z</span>
          <span>z</span>
        </div>
      )}

      {action === 'heart' && (
        <div className={styles.floatingHeart}>
          💖
        </div>
      )}

      <div className={styles.svgWrapper}>
        {renderSvg()}
      </div>
    </div>
  );
};
