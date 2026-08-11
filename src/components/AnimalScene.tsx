'use client';

import React, { useMemo } from 'react';
import { PixelAnimal, AnimalType, AnimalAction } from './PixelAnimals';
import styles from './AnimalScene.module.css';

interface AnimalSceneProps {
  daysLeft: number;
  user: string;
  partner: string;
}

interface SceneAnimalInstance {
  id: number;
  type: AnimalType;
  action: AnimalAction;
  scale: number;
  flip: boolean;
  leftPercent: number;
  bottomPercent: number;
  dialogue?: string;
}

const CUTE_DIALOGUES = [
  "¡Falta muy poco! 💕",
  "¡Contando los días! 🐾",
  "¡Meow! Qué emoción 🐱",
  "Jesús & Vanessa ✨",
  "¡Cada día más cerca!",
  "Purrr... 🥰",
  "¡Pronto juntitos! 💖",
  "¡Miau miau! 🎉",
  "¡Amor en el aire! 💕",
  "¡Esperando el gran día! 🥳",
  "¡Guau! 🐶",
  "¡Zzz... soñando con veros! 😴",
  "¡Falta nada! ✨"
];

const ANIMAL_POOL: AnimalType[] = [
  'cat-tabby',
  'cat-black',
  'cat-calico',
  'cat-siamese',
  'cat-pink',
  'cat-tabby', // Heavy weight on cats
  'cat-black',
  'dog-corgi',
  'dog-shiba',
  'bunny',
  'hamster'
];

export const AnimalScene: React.FC<AnimalSceneProps> = ({ daysLeft, user, partner }) => {
  // Determine number of animals based on days left
  const animalCount = useMemo(() => {
    if (daysLeft <= 0) return 36; // Celebration mode!
    if (daysLeft === 1) return 28;
    if (daysLeft <= 3) return 22;
    if (daysLeft <= 7) return 16;
    if (daysLeft <= 14) return 11;
    if (daysLeft <= 21) return 7;
    return 4; // Default starting count
  }, [daysLeft]);

  // Generate deterministic positions & styles so they don't jump on re-renders
  const animals = useMemo<SceneAnimalInstance[]>(() => {
    const list: SceneAnimalInstance[] = [];

    // Simple pseudo-random generator with seed
    const pseudoRandom = (seed: number) => {
      const x = Math.sin(seed * 9999) * 10000;
      return x - Math.floor(x);
    };

    for (let i = 0; i < animalCount; i++) {
      const r1 = pseudoRandom(i * 13 + 1);
      const r2 = pseudoRandom(i * 17 + 2);
      const r3 = pseudoRandom(i * 23 + 3);
      const r4 = pseudoRandom(i * 29 + 4);
      const r5 = pseudoRandom(i * 31 + 5);

      const typeIndex = Math.floor(r1 * ANIMAL_POOL.length);
      const type = ANIMAL_POOL[typeIndex];

      const actions: AnimalAction[] = ['idle', 'walk', 'sleep', 'bounce', 'heart'];
      const action = actions[Math.floor(r2 * actions.length)];

      const scale = 0.85 + r3 * 0.45; // scale between 0.85 and 1.3
      const flip = r4 > 0.5;

      // Distribute along horizontal width (5% to 92%)
      const leftPercent = 5 + (i / Math.max(1, animalCount - 1)) * 87 + (r5 * 6 - 3);
      
      // Vertical layering (bottom 10px to 80px)
      const bottomPercent = 10 + (r2 * 65);

      // Random speech bubble for 1 or 2 lucky animals
      let dialogue: string | undefined = undefined;
      if (i === 0 || (i === 3 && animalCount > 5) || (i === 8 && animalCount > 10)) {
        const dIndex = Math.floor(r3 * CUTE_DIALOGUES.length);
        dialogue = CUTE_DIALOGUES[dIndex];
      }

      list.push({
        id: i,
        type,
        action,
        scale,
        flip,
        leftPercent: Math.min(92, Math.max(4, leftPercent)),
        bottomPercent,
        dialogue
      });
    }

    return list;
  }, [animalCount]);

  return (
    <div className={styles.sceneContainer}>
      <div className={styles.grassFloor}>
        <div className={styles.grassTufts}>
          <span>🌱</span>
          <span>🌸</span>
          <span>🌱</span>
          <span>🌼</span>
          <span>🌱</span>
          <span>🌸</span>
          <span>🌱</span>
        </div>
      </div>

      <div className={styles.animalCountBadge}>
        🐾 ¡{animalCount} animalitos esperándoos hoy! 🐾
      </div>

      {animals.map((animal) => (
        <div
          key={animal.id}
          className={styles.animalPositioner}
          style={{
            left: `${animal.leftPercent}%`,
            bottom: `${animal.bottomPercent}px`,
            zIndex: Math.floor(animal.bottomPercent)
          }}
        >
          <PixelAnimal
            type={animal.type}
            action={animal.action}
            scale={animal.scale}
            flip={animal.flip}
            dialogue={animal.dialogue}
          />
        </div>
      ))}
    </div>
  );
};
