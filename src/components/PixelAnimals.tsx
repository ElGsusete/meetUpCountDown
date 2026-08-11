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
        // High-detail Orange Tabby Cat with whiskers, dark outlines, and inner ear detail
        return (
          <svg viewBox="0 0 16 16" className={styles.pixelSvg}>
            {/* Dark Outline Shadow */}
            <rect x="2" y="1" width="3" height="3" fill="#2B1E19" />
            <rect x="11" y="1" width="3" height="3" fill="#2B1E19" />
            <rect x="2" y="3" width="12" height="7" fill="#2B1E19" />
            <rect x="3" y="10" width="10" height="6" fill="#2B1E19" />
            <rect x="12" y="9" width="4" height="4" fill="#2B1E19" />

            {/* Ears */}
            <rect x="3" y="2" width="1" height="2" fill="#E65100" />
            <rect x="3" y="3" width="1" height="1" fill="#F8BBD0" /> {/* Inner ear pink */}
            <rect x="12" y="2" width="1" height="2" fill="#E65100" />
            <rect x="12" y="3" width="1" height="1" fill="#F8BBD0" />

            {/* Head Base */}
            <rect x="3" y="4" width="10" height="5" fill="#FF9800" />

            {/* Tabby Forehead Stripes */}
            <rect x="7" y="4" width="2" height="2" fill="#D84315" />
            <rect x="5" y="4" width="1" height="1" fill="#D84315" />
            <rect x="10" y="4" width="1" height="1" fill="#D84315" />

            {/* Expression Eyes (Emerald Green with shiny highlight) */}
            <rect x="4" y="5" width="2" height="2" fill="#1B5E20" />
            <rect x="4" y="5" width="1" height="1" fill="#FFFFFF" /> {/* Highlight */}
            <rect x="10" y="5" width="2" height="2" fill="#1B5E20" />
            <rect x="10" y="5" width="1" height="1" fill="#FFFFFF" />

            {/* Whiskers */}
            <rect x="0" y="6" width="2" height="1" fill="#8D6E63" />
            <rect x="1" y="8" width="2" height="1" fill="#8D6E63" />
            <rect x="14" y="6" width="2" height="1" fill="#8D6E63" />
            <rect x="13" y="8" width="2" height="1" fill="#8D6E63" />

            {/* Muzzle & Nose */}
            <rect x="6" y="6" width="4" height="3" fill="#FFF8E1" />
            <rect x="7" y="6" width="2" height="1" fill="#FF4081" /> {/* Pink Nose */}
            <rect x="4" y="7" width="1" height="1" fill="#FF8A80" /> {/* Rosy Blush */}
            <rect x="11" y="7" width="1" height="1" fill="#FF8A80" />

            {/* Body */}
            <rect x="4" y="9" width="8" height="5" fill="#FF9800" />
            <rect x="6" y="9" width="4" height="4" fill="#FFF8E1" /> {/* Creamy Belly */}

            {/* White Socks / Paws */}
            <rect x="4" y="13" width="2" height="2" fill="#FFFFFF" />
            <rect x="10" y="13" width="2" height="2" fill="#FFFFFF" />
            <rect x="4" y="14" width="1" height="1" fill="#F8BBD0" /> {/* Paw pad detail */}
            <rect x="11" y="14" width="1" height="1" fill="#F8BBD0" />

            {/* Striped Tail */}
            <rect x="13" y="10" width="2" height="2" fill="#D84315" />
            <rect x="14" y="8" width="1" height="2" fill="#FF9800" />
          </svg>
        );

      case 'cat-black':
        // High-detail Tuxedo Black Cat with glowing golden eyes, whiskers, white chest bib & paws
        return (
          <svg viewBox="0 0 16 16" className={styles.pixelSvg}>
            {/* Dark Outline */}
            <rect x="2" y="1" width="3" height="3" fill="#121212" />
            <rect x="11" y="1" width="3" height="3" fill="#121212" />
            <rect x="2" y="3" width="12" height="7" fill="#121212" />
            <rect x="3" y="10" width="10" height="6" fill="#121212" />

            {/* Ears */}
            <rect x="3" y="2" width="1" height="2" fill="#212121" />
            <rect x="3" y="3" width="1" height="1" fill="#FF8A80" /> {/* Pink inner ear */}
            <rect x="12" y="2" width="1" height="2" fill="#212121" />
            <rect x="12" y="3" width="1" height="1" fill="#FF8A80" />

            {/* Head Base */}
            <rect x="3" y="4" width="10" height="5" fill="#263238" />

            {/* Glowing Golden Eyes */}
            <rect x="4" y="5" width="2" height="2" fill="#FFD54F" />
            <rect x="5" y="5" width="1" height="2" fill="#121212" /> {/* Slit pupil */}
            <rect x="4" y="5" width="1" height="1" fill="#FFFFFF" /> {/* Catchlight */}
            <rect x="10" y="5" width="2" height="2" fill="#FFD54F" />
            <rect x="10" y="5" width="1" height="2" fill="#121212" />
            <rect x="11" y="5" width="1" height="1" fill="#FFFFFF" />

            {/* Whiskers (Light grey pixel whiskers) */}
            <rect x="0" y="6" width="2" height="1" fill="#B0BEC5" />
            <rect x="1" y="8" width="2" height="1" fill="#B0BEC5" />
            <rect x="14" y="6" width="2" height="1" fill="#B0BEC5" />
            <rect x="13" y="8" width="2" height="1" fill="#B0BEC5" />

            {/* Muzzle & Nose */}
            <rect x="6" y="7" width="4" height="2" fill="#FFFFFF" />
            <rect x="7" y="6.5" width="2" height="1" fill="#FF4081" />

            {/* Tuxedo Body & White Bib */}
            <rect x="4" y="9" width="8" height="5" fill="#263238" />
            <rect x="6" y="9" width="4" height="5" fill="#FFFFFF" /> {/* Tuxedo Chest */}
            <rect x="7" y="9" width="2" height="1" fill="#FF4081" /> {/* Cute bowtie/heart accent */}

            {/* White Paws */}
            <rect x="4" y="13" width="2" height="2" fill="#FFFFFF" />
            <rect x="10" y="13" width="2" height="2" fill="#FFFFFF" />

            {/* Tail with White Tip */}
            <rect x="13" y="10" width="2" height="2" fill="#263238" />
            <rect x="14" y="8" width="1" height="2" fill="#FFFFFF" />
          </svg>
        );

      case 'cat-calico':
        // High-detail Calico Cat (Tri-color: White, Ginger, Dark Charcoal)
        return (
          <svg viewBox="0 0 16 16" className={styles.pixelSvg}>
            {/* Outline */}
            <rect x="2" y="1" width="3" height="3" fill="#261C14" />
            <rect x="11" y="1" width="3" height="3" fill="#261C14" />
            <rect x="2" y="3" width="12" height="7" fill="#261C14" />
            <rect x="3" y="10" width="10" height="6" fill="#261C14" />

            {/* Ears */}
            <rect x="3" y="2" width="1" height="2" fill="#FB8C00" /> {/* Ginger ear */}
            <rect x="12" y="2" width="1" height="2" fill="#37474F" /> {/* Charcoal ear */}

            {/* Head Patch Colors */}
            <rect x="3" y="4" width="10" height="5" fill="#FAFAFA" />
            <rect x="3" y="4" width="4" height="4" fill="#FB8C00" /> {/* Ginger patch */}
            <rect x="9" y="4" width="4" height="3" fill="#37474F" /> {/* Dark patch */}

            {/* Eyes (Heterochromia / Cute Teal) */}
            <rect x="4" y="5" width="2" height="2" fill="#26A69A" />
            <rect x="4" y="5" width="1" height="1" fill="#FFFFFF" />
            <rect x="10" y="5" width="2" height="2" fill="#42A5F5" />
            <rect x="10" y="5" width="1" height="1" fill="#FFFFFF" />

            {/* Whiskers */}
            <rect x="0" y="6" width="2" height="1" fill="#78909C" />
            <rect x="1" y="8" width="2" height="1" fill="#78909C" />
            <rect x="14" y="6" width="2" height="1" fill="#78909C" />
            <rect x="13" y="8" width="2" height="1" fill="#78909C" />

            {/* Nose & Blush */}
            <rect x="7" y="6.5" width="2" height="1" fill="#FF4081" />
            <rect x="4" y="7" width="1" height="1" fill="#FFCDD2" />
            <rect x="11" y="7" width="1" height="1" fill="#FFCDD2" />

            {/* Body */}
            <rect x="4" y="9" width="8" height="5" fill="#FAFAFA" />
            <rect x="4" y="10" width="3" height="3" fill="#FB8C00" />
            <rect x="9" y="9" width="3" height="3" fill="#37474F" />

            {/* Paws */}
            <rect x="4" y="13" width="2" height="2" fill="#FAFAFA" />
            <rect x="10" y="13" width="2" height="2" fill="#FAFAFA" />

            {/* Patchwork Tail */}
            <rect x="13" y="10" width="2" height="2" fill="#FB8C00" />
            <rect x="14" y="8" width="1" height="2" fill="#37474F" />
          </svg>
        );

      case 'cat-siamese':
        // High-detail Siamese Cat with deep sapphire eyes & chocolate mask
        return (
          <svg viewBox="0 0 16 16" className={styles.pixelSvg}>
            {/* Outline */}
            <rect x="2" y="1" width="3" height="3" fill="#2E1C12" />
            <rect x="11" y="1" width="3" height="3" fill="#2E1C12" />
            <rect x="2" y="3" width="12" height="7" fill="#2E1C12" />
            <rect x="3" y="10" width="10" height="6" fill="#2E1C12" />

            {/* Dark Chocolate Ears */}
            <rect x="3" y="2" width="1" height="2" fill="#4E342E" />
            <rect x="12" y="2" width="1" height="2" fill="#4E342E" />

            {/* Head (Cream Base + Dark Point Mask) */}
            <rect x="3" y="4" width="10" height="5" fill="#FFF8E1" />
            <rect x="5" y="4.5" width="6" height="4.5" fill="#4E342E" /> {/* Mask */}

            {/* Sapphire Blue Eyes */}
            <rect x="5" y="5" width="2" height="2" fill="#0288D1" />
            <rect x="5" y="5" width="1" height="1" fill="#FFFFFF" />
            <rect x="9" y="5" width="2" height="2" fill="#0288D1" />
            <rect x="9" y="5" width="1" height="1" fill="#FFFFFF" />

            {/* Whiskers */}
            <rect x="0" y="6" width="2" height="1" fill="#A1887F" />
            <rect x="1" y="8" width="2" height="1" fill="#A1887F" />
            <rect x="14" y="6" width="2" height="1" fill="#A1887F" />
            <rect x="13" y="8" width="2" height="1" fill="#A1887F" />

            {/* Nose */}
            <rect x="7" y="7" width="2" height="1" fill="#3E2723" />

            {/* Body */}
            <rect x="4" y="9" width="8" height="5" fill="#FFF8E1" />

            {/* Chocolate Paws */}
            <rect x="4" y="13" width="2" height="2" fill="#4E342E" />
            <rect x="10" y="13" width="2" height="2" fill="#4E342E" />

            {/* Chocolate Tail */}
            <rect x="13" y="10" width="2" height="2" fill="#4E342E" />
            <rect x="14" y="8" width="1" height="2" fill="#3E2723" />
          </svg>
        );

      case 'cat-pink':
        // Magical Pastel Pink Cat with sparkling eyes & heart cheeks
        return (
          <svg viewBox="0 0 16 16" className={styles.pixelSvg}>
            {/* Outline */}
            <rect x="2" y="1" width="3" height="3" fill="#4A148C" />
            <rect x="11" y="1" width="3" height="3" fill="#4A148C" />
            <rect x="2" y="3" width="12" height="7" fill="#4A148C" />
            <rect x="3" y="10" width="10" height="6" fill="#4A148C" />

            {/* Ears */}
            <rect x="3" y="2" width="1" height="2" fill="#F48FB1" />
            <rect x="3" y="3" width="1" height="1" fill="#FFFFFF" />
            <rect x="12" y="2" width="1" height="2" fill="#F48FB1" />
            <rect x="12" y="3" width="1" height="1" fill="#FFFFFF" />

            {/* Head Base */}
            <rect x="3" y="4" width="10" height="5" fill="#F8BBD0" />

            {/* Violet Eyes with Sparkle */}
            <rect x="4" y="5" width="2" height="2" fill="#8E24AA" />
            <rect x="4" y="5" width="1" height="1" fill="#FFFFFF" />
            <rect x="10" y="5" width="2" height="2" fill="#8E24AA" />
            <rect x="10" y="5" width="1" height="1" fill="#FFFFFF" />

            {/* Whiskers */}
            <rect x="0" y="6" width="2" height="1" fill="#CE93D8" />
            <rect x="1" y="8" width="2" height="1" fill="#CE93D8" />
            <rect x="14" y="6" width="2" height="1" fill="#CE93D8" />
            <rect x="13" y="8" width="2" height="1" fill="#CE93D8" />

            {/* Heart Nose & Cheeks */}
            <rect x="7" y="6.5" width="2" height="1" fill="#D81B60" />
            <rect x="4" y="7" width="1" height="1" fill="#FF80AB" />
            <rect x="11" y="7" width="1" height="1" fill="#FF80AB" />

            {/* Body */}
            <rect x="4" y="9" width="8" height="5" fill="#F8BBD0" />
            <rect x="6" y="9" width="4" height="4" fill="#FFFFFF" /> {/* White heart chest */}

            {/* White Paws */}
            <rect x="4" y="13" width="2" height="2" fill="#FFFFFF" />
            <rect x="10" y="13" width="2" height="2" fill="#FFFFFF" />

            {/* Pink Fluffy Tail */}
            <rect x="13" y="10" width="2" height="2" fill="#F48FB1" />
            <rect x="14" y="8" width="1" height="2" fill="#F8BBD0" />
          </svg>
        );

      case 'dog-corgi':
        // Cute Corgi Dog with Outline & floppy ears
        return (
          <svg viewBox="0 0 16 16" className={styles.pixelSvg}>
            <rect x="1" y="0" width="4" height="4" fill="#3E2723" />
            <rect x="11" y="0" width="4" height="4" fill="#3E2723" />
            <rect x="2" y="3" width="12" height="7" fill="#3E2723" />
            <rect x="3" y="10" width="10" height="6" fill="#3E2723" />

            <rect x="2" y="1" width="2" height="3" fill="#EF6C00" />
            <rect x="2" y="2" width="1" height="2" fill="#FFE0B2" />
            <rect x="12" y="1" width="2" height="3" fill="#EF6C00" />
            <rect x="13" y="2" width="1" height="2" fill="#FFE0B2" />

            <rect x="3" y="4" width="10" height="5" fill="#FB8C00" />
            <rect x="6" y="4" width="4" height="5" fill="#FFFFFF" />

            <rect x="4" y="5" width="2" height="2" fill="#212121" />
            <rect x="4" y="5" width="1" height="1" fill="#FFFFFF" />
            <rect x="10" y="5" width="2" height="2" fill="#212121" />
            <rect x="10" y="5" width="1" height="1" fill="#FFFFFF" />

            <rect x="7" y="6.5" width="2" height="2" fill="#121212" />
            <rect x="7.5" y="8.5" width="1" height="1" fill="#FF4081" /> {/* Happy tongue */}

            <rect x="4" y="9" width="8" height="5" fill="#FB8C00" />
            <rect x="6" y="9" width="4" height="5" fill="#FFFFFF" />

            <rect x="4" y="13" width="2" height="2" fill="#FFFFFF" />
            <rect x="10" y="13" width="2" height="2" fill="#FFFFFF" />
          </svg>
        );

      case 'dog-shiba':
        // Shiba Inu
        return (
          <svg viewBox="0 0 16 16" className={styles.pixelSvg}>
            <rect x="2" y="1" width="3" height="3" fill="#3E2723" />
            <rect x="11" y="1" width="3" height="3" fill="#3E2723" />
            <rect x="2" y="3" width="12" height="7" fill="#3E2723" />
            <rect x="3" y="10" width="10" height="6" fill="#3E2723" />

            <rect x="3" y="2" width="1" height="2" fill="#D84315" />
            <rect x="12" y="2" width="1" height="2" fill="#D84315" />

            <rect x="3" y="4" width="10" height="5" fill="#F57C00" />
            <rect x="3" y="7" width="10" height="2" fill="#FFFFFF" />

            <rect x="4" y="5" width="2" height="2" fill="#212121" />
            <rect x="4" y="5" width="1" height="1" fill="#FFFFFF" />
            <rect x="10" y="5" width="2" height="2" fill="#212121" />
            <rect x="10" y="5" width="1" height="1" fill="#FFFFFF" />

            <rect x="7" y="6.5" width="2" height="2" fill="#212121" />

            <rect x="4" y="9" width="8" height="5" fill="#F57C00" />
            <rect x="6" y="9" width="4" height="5" fill="#FFFFFF" />
            <rect x="13" y="8" width="2" height="3" fill="#F57C00" />

            <rect x="4" y="13" width="2" height="2" fill="#FFFFFF" />
            <rect x="10" y="13" width="2" height="2" fill="#FFFFFF" />
          </svg>
        );

      case 'bunny':
        // Fluffy Bunny
        return (
          <svg viewBox="0 0 16 16" className={styles.pixelSvg}>
            <rect x="3" y="0" width="3" height="6" fill="#37474F" />
            <rect x="10" y="0" width="3" height="6" fill="#37474F" />
            <rect x="2" y="5" width="12" height="5" fill="#37474F" />
            <rect x="3" y="10" width="10" height="6" fill="#37474F" />

            <rect x="4" y="1" width="1" height="4" fill="#FAFAFA" />
            <rect x="4" y="2" width="1" height="3" fill="#F48FB1" />
            <rect x="11" y="1" width="1" height="4" fill="#FAFAFA" />
            <rect x="11" y="2" width="1" height="3" fill="#F48FB1" />

            <rect x="3" y="5" width="10" height="5" fill="#FAFAFA" />
            <rect x="4" y="6" width="2" height="2" fill="#C2185B" />
            <rect x="4" y="6" width="1" height="1" fill="#FFF" />
            <rect x="10" y="6" width="2" height="2" fill="#C2185B" />
            <rect x="10" y="6" width="1" height="1" fill="#FFF" />

            <rect x="7" y="7.5" width="2" height="1" fill="#FF4081" />

            <rect x="4" y="9" width="8" height="5" fill="#FAFAFA" />
            <rect x="4" y="13" width="2" height="2" fill="#FAFAFA" />
            <rect x="10" y="13" width="2" height="2" fill="#FAFAFA" />
          </svg>
        );

      case 'hamster':
        // Chubby Hamster
        return (
          <svg viewBox="0 0 16 16" className={styles.pixelSvg}>
            <rect x="2" y="2" width="3" height="3" fill="#4E342E" />
            <rect x="11" y="2" width="3" height="3" fill="#4E342E" />
            <rect x="1" y="4" width="14" height="11" fill="#4E342E" />

            <rect x="3" y="3" width="1" height="1" fill="#FF8A80" />
            <rect x="12" y="3" width="1" height="1" fill="#FF8A80" />

            <rect x="2" y="5" width="12" height="9" fill="#FFB74D" />
            <rect x="5" y="6" width="6" height="8" fill="#FFF3E0" />

            <rect x="4" y="6" width="2" height="2" fill="#212121" />
            <rect x="4" y="6" width="1" height="1" fill="#FFFFFF" />
            <rect x="10" y="6" width="2" height="2" fill="#212121" />
            <rect x="10" y="6" width="1" height="1" fill="#FFFFFF" />

            <rect x="2" y="7" width="2" height="2" fill="#FF8A80" />
            <rect x="12" y="7" width="2" height="2" fill="#FF8A80" />

            <rect x="7" y="9" width="2" height="2" fill="#6D4C41" />
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
