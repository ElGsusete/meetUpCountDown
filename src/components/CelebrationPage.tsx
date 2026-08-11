'use client';

import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';
import { PixelAnimal } from './PixelAnimals';
import styles from './CelebrationPage.module.css';

interface CelebrationPageProps {
  user: string;
  partner: string;
}

export const CelebrationPage: React.FC<CelebrationPageProps> = ({ user, partner }) => {
  useEffect(() => {
    // Launch heart confetti fireworks
    const duration = 5 * 1000;
    const animationEnd = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 4,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#FFB6C1', '#FF69B4', '#FF1493', '#E6E6FA']
      });
      confetti({
        particleCount: 4,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#FFB6C1', '#FF69B4', '#FF1493', '#E6E6FA']
      });

      if (Date.now() < animationEnd) {
        requestAnimationFrame(frame);
      }
    };

    frame();
  }, []);

  const triggerConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  return (
    <div className={styles.celebrationContainer}>
      <div className={styles.celebrationCard}>
        <div className={styles.partyBanner}>🎉 ¡LLEGO EL DÍA! 🎉</div>
        <h1 className={styles.title}>
          ¡{user} y {partner} ya están juntos! 💕
        </h1>
        <p className={styles.subtitle}>
          Se acabó la cuenta atrás y la distancia. ¡A disfrutar de cada segundo juntitos! 🫂✨
        </p>

        <button className={styles.confettiButton} onClick={triggerConfetti}>
          💖 ¡Lanzar Más Corazones! 💖
        </button>

        <div className={styles.animalPartyFloor}>
          <div className={styles.dancingAnimal}>
            <PixelAnimal type="cat-tabby" action="bounce" dialogue="¡Por fin! 🎉" />
          </div>
          <div className={styles.dancingAnimal}>
            <PixelAnimal type="cat-black" action="bounce" dialogue="¡Abrazos! 💕" />
          </div>
          <div className={styles.dancingAnimal}>
            <PixelAnimal type="dog-corgi" action="bounce" dialogue="¡Yippee! 🐶" />
          </div>
          <div className={styles.dancingAnimal}>
            <PixelAnimal type="cat-pink" action="heart" dialogue="¡Os queremos! ✨" />
          </div>
          <div className={styles.dancingAnimal}>
            <PixelAnimal type="bunny" action="bounce" dialogue="¡Fiesta! 🐰" />
          </div>
        </div>
      </div>
    </div>
  );
};
