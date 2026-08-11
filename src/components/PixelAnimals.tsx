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
  // SVG Pixel Art Artworks (16x16 pixel grid for maximum cute pixel aesthetics)
  const renderSvg = () => {
    switch (type) {
      case 'cat-tabby':
        // Orange Tabby Cat
        return (
          <svg viewBox="0 0 16 16" className={styles.pixelSvg}>
            {/* Ears */}
            <rect x="2" y="2" width="2" height="2" fill="#E67E22" />
            <rect x="3" y="3" width="1" height="1" fill="#FFB74D" />
            <rect x="12" y="2" width="2" height="2" fill="#E67E22" />
            <rect x="12" y="3" width="1" height="1" fill="#FFB74D" />
            
            {/* Head */}
            <rect x="3" y="4" width="10" height="6" fill="#FFA726" />
            <rect x="6" y="4" width="4" height="1" fill="#E67E22" /> {/* Tabby stripe */}
            
            {/* Eyes */}
            <rect x="4" y="6" width="2" height="2" fill="#2E7D32" />
            <rect x="5" y="6" width="1" height="1" fill="#FFFFFF" />
            <rect x="10" y="6" width="2" height="2" fill="#2E7D32" />
            <rect x="11" y="6" width="1" height="1" fill="#FFFFFF" />
            
            {/* Nose & Cheeks */}
            <rect x="7" y="7" width="2" height="1" fill="#F48FB1" />
            <rect x="3" y="7" width="1" height="1" fill="#FFCDD2" />
            <rect x="12" y="7" width="1" height="1" fill="#FFCDD2" />
            
            {/* Body */}
            <rect x="4" y="10" width="8" height="4" fill="#FFA726" />
            <rect x="6" y="10" width="4" height="3" fill="#FFE0B2" /> {/* Belly */}
            
            {/* Paws */}
            <rect x="4" y="14" width="2" height="2" fill="#FFFFFF" />
            <rect x="10" y="14" width="2" height="2" fill="#FFFFFF" />
            
            {/* Tail */}
            <rect x="12" y="11" width="3" height="2" fill="#E67E22" />
            <rect x="13" y="9" width="2" height="2" fill="#FFA726" />
          </svg>
        );

      case 'cat-black':
        // Tuxedo Black Cat
        return (
          <svg viewBox="0 0 16 16" className={styles.pixelSvg}>
            {/* Ears */}
            <rect x="2" y="2" width="2" height="2" fill="#212121" />
            <rect x="3" y="3" width="1" height="1" fill="#F48FB1" />
            <rect x="12" y="2" width="2" height="2" fill="#212121" />
            <rect x="12" y="3" width="1" height="1" fill="#F48FB1" />
            
            {/* Head */}
            <rect x="3" y="4" width="10" height="6" fill="#37474F" />
            
            {/* Bright Yellow Eyes */}
            <rect x="4" y="6" width="2" height="2" fill="#FDD835" />
            <rect x="5" y="6" width="1" height="1" fill="#212121" />
            <rect x="10" y="6" width="2" height="2" fill="#FDD835" />
            <rect x="11" y="6" width="1" height="1" fill="#212121" />
            
            {/* Nose & White Muzzle */}
            <rect x="7" y="7" width="2" height="2" fill="#FFFFFF" />
            <rect x="7.5" y="7" width="1" height="1" fill="#F48FB1" />
            
            {/* Body */}
            <rect x="4" y="10" width="8" height="4" fill="#37474F" />
            <rect x="6" y="10" width="4" height="4" fill="#FFFFFF" /> {/* Tuxedo Chest */}
            
            {/* Paws */}
            <rect x="4" y="14" width="2" height="2" fill="#FFFFFF" />
            <rect x="10" y="14" width="2" height="2" fill="#FFFFFF" />
            
            {/* Tail */}
            <rect x="12" y="11" width="3" height="2" fill="#212121" />
            <rect x="14" y="9" width="1" height="2" fill="#FFFFFF" /> {/* White tip */}
          </svg>
        );

      case 'cat-calico':
        // Calico Cat (Tri-color: White, Orange, Dark Grey)
        return (
          <svg viewBox="0 0 16 16" className={styles.pixelSvg}>
            {/* Ears */}
            <rect x="2" y="2" width="2" height="2" fill="#FB8C00" />
            <rect x="12" y="2" width="2" height="2" fill="#424242" />
            
            {/* Head */}
            <rect x="3" y="4" width="10" height="6" fill="#FAFAFA" />
            <rect x="3" y="4" width="4" height="3" fill="#FB8C00" />
            <rect x="9" y="4" width="4" height="4" fill="#424242" />
            
            {/* Eyes */}
            <rect x="4" y="6" width="2" height="2" fill="#4CAF50" />
            <rect x="10" y="6" width="2" height="2" fill="#4CAF50" />
            
            {/* Nose */}
            <rect x="7" y="7" width="2" height="1" fill="#F48FB1" />
            <rect x="3" y="7" width="1" height="1" fill="#FFCDD2" />
            <rect x="12" y="7" width="1" height="1" fill="#FFCDD2" />
            
            {/* Body */}
            <rect x="4" y="10" width="8" height="4" fill="#FAFAFA" />
            <rect x="4" y="11" width="3" height="3" fill="#FB8C00" />
            <rect x="9" y="10" width="3" height="2" fill="#424242" />
            
            {/* Paws */}
            <rect x="4" y="14" width="2" height="2" fill="#FAFAFA" />
            <rect x="10" y="14" width="2" height="2" fill="#FAFAFA" />
            
            {/* Tail */}
            <rect x="12" y="10" width="2" height="3" fill="#FB8C00" />
            <rect x="13" y="8" width="2" height="2" fill="#424242" />
          </svg>
        );

      case 'cat-siamese':
        // Siamese Cat (Cream body, Dark brown face/ears)
        return (
          <svg viewBox="0 0 16 16" className={styles.pixelSvg}>
            {/* Dark Ears */}
            <rect x="2" y="2" width="2" height="2" fill="#4E342E" />
            <rect x="12" y="2" width="2" height="2" fill="#4E342E" />
            
            {/* Head (Cream) */}
            <rect x="3" y="4" width="10" height="6" fill="#FFF8E1" />
            {/* Dark Mask */}
            <rect x="5" y="5" width="6" height="5" fill="#4E342E" />
            
            {/* Bright Sapphire Eyes */}
            <rect x="5" y="6" width="2" height="2" fill="#29B6F6" />
            <rect x="6" y="6" width="1" height="1" fill="#FFFFFF" />
            <rect x="9" y="6" width="2" height="2" fill="#29B6F6" />
            <rect x="10" y="6" width="1" height="1" fill="#FFFFFF" />
            
            {/* Nose */}
            <rect x="7" y="8" width="2" height="1" fill="#3E2723" />
            
            {/* Body (Cream) */}
            <rect x="4" y="10" width="8" height="4" fill="#FFF8E1" />
            
            {/* Dark Paws */}
            <rect x="4" y="14" width="2" height="2" fill="#4E342E" />
            <rect x="10" y="14" width="2" height="2" fill="#4E342E" />
            
            {/* Tail */}
            <rect x="12" y="11" width="3" height="2" fill="#4E342E" />
          </svg>
        );

      case 'cat-pink':
        // Pastel Pink Magical Cat
        return (
          <svg viewBox="0 0 16 16" className={styles.pixelSvg}>
            {/* Ears */}
            <rect x="2" y="2" width="2" height="2" fill="#F48FB1" />
            <rect x="3" y="3" width="1" height="1" fill="#FFF" />
            <rect x="12" y="2" width="2" height="2" fill="#F48FB1" />
            <rect x="12" y="3" width="1" height="1" fill="#FFF" />
            
            {/* Head */}
            <rect x="3" y="4" width="10" height="6" fill="#F8BBD0" />
            
            {/* Eyes */}
            <rect x="4" y="6" width="2" height="2" fill="#AB47BC" />
            <rect x="5" y="6" width="1" height="1" fill="#FFFFFF" />
            <rect x="10" y="6" width="2" height="2" fill="#AB47BC" />
            <rect x="11" y="6" width="1" height="1" fill="#FFFFFF" />
            
            {/* Nose & Heart Cheeks */}
            <rect x="7" y="7" width="2" height="1" fill="#EC407A" />
            <rect x="3" y="7" width="1" height="1" fill="#FF80AB" />
            <rect x="12" y="7" width="1" height="1" fill="#FF80AB" />
            
            {/* Body */}
            <rect x="4" y="10" width="8" height="4" fill="#F8BBD0" />
            <rect x="6" y="10" width="4" height="4" fill="#FFFFFF" />
            
            {/* Paws */}
            <rect x="4" y="14" width="2" height="2" fill="#FFFFFF" />
            <rect x="10" y="14" width="2" height="2" fill="#FFFFFF" />
            
            {/* Tail */}
            <rect x="12" y="10" width="3" height="2" fill="#F48FB1" />
          </svg>
        );

      case 'dog-corgi':
        // Cute Corgi Dog
        return (
          <svg viewBox="0 0 16 16" className={styles.pixelSvg}>
            {/* Big Corgi Ears */}
            <rect x="1" y="1" width="3" height="3" fill="#FB8C00" />
            <rect x="2" y="2" width="1" height="2" fill="#FFCC80" />
            <rect x="12" y="1" width="3" height="3" fill="#FB8C00" />
            <rect x="13" y="2" width="1" height="2" fill="#FFCC80" />
            
            {/* Head */}
            <rect x="3" y="4" width="10" height="6" fill="#FFA726" />
            <rect x="6" y="4" width="4" height="6" fill="#FFFFFF" /> {/* White blaze */}
            
            {/* Eyes */}
            <rect x="4" y="6" width="2" height="2" fill="#3E2723" />
            <rect x="10" y="6" width="2" height="2" fill="#3E2723" />
            
            {/* Snoot */}
            <rect x="7" y="7" width="2" height="2" fill="#212121" />
            <rect x="7" y="9" width="2" height="1" fill="#FF4081" /> {/* Happy tongue */}
            
            {/* Body */}
            <rect x="4" y="10" width="8" height="4" fill="#FFA726" />
            <rect x="6" y="10" width="4" height="4" fill="#FFFFFF" />
            
            {/* Little Paws */}
            <rect x="4" y="14" width="2" height="2" fill="#FFFFFF" />
            <rect x="10" y="14" width="2" height="2" fill="#FFFFFF" />
          </svg>
        );

      case 'dog-shiba':
        // Shiba Inu
        return (
          <svg viewBox="0 0 16 16" className={styles.pixelSvg}>
            {/* Ears */}
            <rect x="2" y="2" width="2" height="2" fill="#D84315" />
            <rect x="12" y="2" width="2" height="2" fill="#D84315" />
            
            {/* Head */}
            <rect x="3" y="4" width="10" height="6" fill="#FF7043" />
            <rect x="3" y="7" width="10" height="3" fill="#FFFFFF" /> {/* White cheeks */}
            
            {/* Eyes */}
            <rect x="4" y="5" width="2" height="2" fill="#212121" />
            <rect x="10" y="5" width="2" height="2" fill="#212121" />
            
            {/* Nose */}
            <rect x="7" y="7" width="2" height="2" fill="#212121" />
            
            {/* Body */}
            <rect x="4" y="10" width="8" height="4" fill="#FF7043" />
            <rect x="6" y="10" width="4" height="4" fill="#FFFFFF" />
            
            {/* Curled Tail */}
            <rect x="12" y="9" width="2" height="3" fill="#FF7043" />
            
            {/* Paws */}
            <rect x="4" y="14" width="2" height="2" fill="#FFFFFF" />
            <rect x="10" y="14" width="2" height="2" fill="#FFFFFF" />
          </svg>
        );

      case 'bunny':
        // Cute White Bunny
        return (
          <svg viewBox="0 0 16 16" className={styles.pixelSvg}>
            {/* Long Bunny Ears */}
            <rect x="4" y="0" width="2" height="5" fill="#FAFAFA" />
            <rect x="4" y="1" width="1" height="3" fill="#F48FB1" />
            <rect x="10" y="0" width="2" height="5" fill="#FAFAFA" />
            <rect x="11" y="1" width="1" height="3" fill="#F48FB1" />
            
            {/* Head */}
            <rect x="3" y="5" width="10" height="5" fill="#FAFAFA" />
            
            {/* Eyes */}
            <rect x="4" y="6" width="2" height="2" fill="#AD1457" />
            <rect x="5" y="6" width="1" height="1" fill="#FFF" />
            <rect x="10" y="6" width="2" height="2" fill="#AD1457" />
            <rect x="11" y="6" width="1" height="1" fill="#FFF" />
            
            {/* Pink Nose & Rosy Cheeks */}
            <rect x="7" y="7" width="2" height="1" fill="#FF4081" />
            <rect x="3" y="7" width="1" height="1" fill="#FFCDD2" />
            <rect x="12" y="7" width="1" height="1" fill="#FFCDD2" />
            
            {/* Body */}
            <rect x="4" y="10" width="8" height="4" fill="#FAFAFA" />
            
            {/* Fluffy Paws */}
            <rect x="4" y="14" width="2" height="2" fill="#FAFAFA" />
            <rect x="10" y="14" width="2" height="2" fill="#FAFAFA" />
          </svg>
        );

      case 'hamster':
        // Chubby Hamster
        return (
          <svg viewBox="0 0 16 16" className={styles.pixelSvg}>
            {/* Tiny Ears */}
            <rect x="3" y="3" width="2" height="2" fill="#D7CCC8" />
            <rect x="11" y="3" width="2" height="2" fill="#D7CCC8" />
            
            {/* Chubby Head & Body */}
            <rect x="2" y="4" width="12" height="10" fill="#FFB74D" />
            <rect x="5" y="6" width="6" height="8" fill="#FFF3E0" /> {/* Belly */}
            
            {/* Eyes */}
            <rect x="4" y="6" width="2" height="2" fill="#212121" />
            <rect x="10" y="6" width="2" height="2" fill="#212121" />
            
            {/* Cheeks with seeds */}
            <rect x="2" y="7" width="2" height="2" fill="#FF8A80" />
            <rect x="12" y="7" width="2" height="2" fill="#FF8A80" />
            
            {/* Paws holding a sunflower seed */}
            <rect x="7" y="9" width="2" height="2" fill="#5D4037" />
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
