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
  const [simulatedDays, setSimulatedDays] = React.useState<number | null>(null);
  const [showInfoModal, setShowInfoModal] = React.useState(false);

  const effectiveDaysLeft = simulatedDays !== null ? simulatedDays : daysLeft;

  // Determine number of animals based on days left
  const animalCount = useMemo(() => {
    if (effectiveDaysLeft <= 0) return 36; // Celebration mode!
    if (effectiveDaysLeft === 1) return 28;
    if (effectiveDaysLeft <= 3) return 22;
    if (effectiveDaysLeft <= 7) return 16;
    if (effectiveDaysLeft <= 14) return 11;
    if (effectiveDaysLeft <= 21) return 7;
    return 4; // Default starting count
  }, [effectiveDaysLeft]);

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

      // Random speech bubble for select animals
      let dialogue: string | undefined = undefined;
      if (i === 0 || (i === 3 && animalCount > 5) || (i === 8 && animalCount > 10) || (i === 15 && animalCount > 20)) {
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

      <button 
        className={styles.animalCountBadge}
        onClick={() => setShowInfoModal(!showInfoModal)}
        title="Haz clic para ver las reglas de aparición o probar la simulación"
      >
        🐾 ¡{animalCount} animalitos! <span>ℹ️</span>
      </button>

      {/* Info & Simulation Modal */}
      {showInfoModal && (
        <div className={styles.infoModalOverlay} onClick={() => setShowInfoModal(false)}>
          <div className={styles.infoModalCard} onClick={(e) => e.stopPropagation()}>
            <div className={styles.infoModalHeader}>
              <h3>📊 Escala de Aparición de Gatos</h3>
              <button onClick={() => setShowInfoModal(false)}>✕</button>
            </div>
            
            <p className={styles.infoModalDesc}>
              Cuanto más cerca esté la fecha del encuentro, ¡más gatitos y animalitos aparecerán en pantalla!
            </p>

            <table className={styles.scheduleTable}>
              <thead>
                <tr>
                  <th>Días restantes</th>
                  <th>Animalitos en pantalla</th>
                </tr>
              </thead>
              <tbody>
                <tr className={effectiveDaysLeft > 21 ? styles.activeRow : ''}>
                  <td>Más de 21 días</td>
                  <td>🐱 4 animalitos</td>
                </tr>
                <tr className={effectiveDaysLeft <= 21 && effectiveDaysLeft > 14 ? styles.activeRow : ''}>
                  <td>21 a 15 días</td>
                  <td>🐱 7 animalitos</td>
                </tr>
                <tr className={effectiveDaysLeft <= 14 && effectiveDaysLeft > 7 ? styles.activeRow : ''}>
                  <td>14 a 8 días</td>
                  <td>🐱 11 animalitos</td>
                </tr>
                <tr className={effectiveDaysLeft <= 7 && effectiveDaysLeft > 3 ? styles.activeRow : ''}>
                  <td>7 a 4 días</td>
                  <td>🐱 16 animalitos</td>
                </tr>
                <tr className={effectiveDaysLeft <= 3 && effectiveDaysLeft > 1 ? styles.activeRow : ''}>
                  <td>3 a 2 días</td>
                  <td>🐱 22 animalitos</td>
                </tr>
                <tr className={effectiveDaysLeft === 1 ? styles.activeRow : ''}>
                  <td>Falta 1 día</td>
                  <td>🐱 28 animalitos</td>
                </tr>
                <tr className={effectiveDaysLeft <= 0 ? styles.activeRow : ''}>
                  <td>🎉 ¡Día del Encuentro!</td>
                  <td>🥳 36 animalitos de fiesta!</td>
                </tr>
              </tbody>
            </table>

            {/* Simulation controls */}
            <div className={styles.simControlSection}>
              <h4>🔮 Simular cuenta atrás (Prueba en tiempo real):</h4>
              <div className={styles.simBtnGroup}>
                <button 
                  className={simulatedDays === null ? styles.activeSimBtn : ''}
                  onClick={() => setSimulatedDays(null)}
                >
                  Real ({daysLeft}d)
                </button>
                <button 
                  className={simulatedDays === 20 ? styles.activeSimBtn : ''}
                  onClick={() => setSimulatedDays(20)}
                >
                  20 días (7)
                </button>
                <button 
                  className={simulatedDays === 10 ? styles.activeSimBtn : ''}
                  onClick={() => setSimulatedDays(10)}
                >
                  10 días (11)
                </button>
                <button 
                  className={simulatedDays === 5 ? styles.activeSimBtn : ''}
                  onClick={() => setSimulatedDays(5)}
                >
                  5 días (16)
                </button>
                <button 
                  className={simulatedDays === 2 ? styles.activeSimBtn : ''}
                  onClick={() => setSimulatedDays(2)}
                >
                  2 días (22)
                </button>
                <button 
                  className={simulatedDays === 1 ? styles.activeSimBtn : ''}
                  onClick={() => setSimulatedDays(1)}
                >
                  1 día (28)
                </button>
                <button 
                  className={simulatedDays === 0 ? styles.activeSimBtn : ''}
                  onClick={() => setSimulatedDays(0)}
                >
                  Día 0 (36) 🎉
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Simulation Banner when active */}
      {simulatedDays !== null && (
        <div className={styles.simulationBanner}>
          <span>🔮 Modo Simulación: {simulatedDays} días restantes</span>
          <button onClick={() => setSimulatedDays(null)}>Restablecer real</button>
        </div>
      )}

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
