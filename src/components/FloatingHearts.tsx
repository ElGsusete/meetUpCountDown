'use client';

import React, { useMemo } from 'react';
import styles from './FloatingHearts.module.css';

export const FloatingHearts: React.FC = () => {
  const hearts = useMemo(() => {
    return Array.from({ length: 18 }).map((_, i) => {
      const left = Math.random() * 100;
      const animationDuration = 8 + Math.random() * 12;
      const animationDelay = Math.random() * 8;
      const size = 12 + Math.random() * 18;
      const opacity = 0.3 + Math.random() * 0.4;
      const symbols = ['💖', '💕', '🌸', '✨', '💗', '🐾'];
      const symbol = symbols[i % symbols.length];

      return {
        id: i,
        left: `${left}%`,
        animationDuration: `${animationDuration}s`,
        animationDelay: `${animationDelay}s`,
        fontSize: `${size}px`,
        opacity,
        symbol
      };
    });
  }, []);

  return (
    <div className={styles.container} aria-hidden="true">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className={styles.heart}
          style={{
            left: heart.left,
            animationDuration: heart.animationDuration,
            animationDelay: heart.animationDelay,
            fontSize: heart.fontSize,
            opacity: heart.opacity
          }}
        >
          {heart.symbol}
        </div>
      ))}
    </div>
  );
};
