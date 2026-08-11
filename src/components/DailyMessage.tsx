'use client';

import React, { useMemo } from 'react';
import styles from './DailyMessage.module.css';

interface DailyMessageProps {
  serverNowIso: string;
  user: string;
  partner: string;
}

const ROMANTIC_MESSAGES = [
  "Cada segundo que pasa es un segundo más cerca de darte un abrazo enorme. 💖",
  "La distancia no significa nada cuando alguien lo significa todo. 🥰",
  "Los animalitos están tan impacientes por veros como vosotros mismos. 🐾✨",
  "¡Contando los días, las horas y cada pequeño latido! 💓",
  "El amor a distancia tiene los abrazos más bonitos del mundo cuando llega el día. 🫂💕",
  "¡Un día menos de espera, un día más cerca de estar juntos! 🌟",
  "Los gatitos del jardín han dejado una nota: '¡Ya casi llega el gran día!' 🐱💌",
  "No hay distancia capaz de apagar esta ilusión. ✨❤️",
  "Guardando todos los abrazos pendientes para cuando os veáis. 🧸",
  "¡Cada amanecer es un paso más hacia el reencuentro de Jesús & Vanessa! 💕",
  "Si los kilómetros hablaran, dirían que este amor puede con todo. 🌍❤️",
  "¡Hoy la cuenta atrás huele a palomitas y risas compartidas! 🍿✨",
  "Mirar el reloj y sonreír sabiendo que la espera vale 100% la pena. ⏳💖",
  "¡Prepara la maleta de los abrazos! 🧳🥰",
  "Cada noche es una noche menos separados bajo el mismo cielo. 🌙✨"
];

export const DailyMessage: React.FC<DailyMessageProps> = ({ serverNowIso, user, partner }) => {
  const dailyQuote = useMemo(() => {
    try {
      const date = new Date(serverNowIso);
      const dayOfYear = Math.floor(
        (date.getTime() - new Date(date.getFullYear(), 0, 0).getTime()) / (1000 * 60 * 60 * 24)
      );
      const index = dayOfYear % ROMANTIC_MESSAGES.length;
      return ROMANTIC_MESSAGES[index];
    } catch {
      return ROMANTIC_MESSAGES[0];
    }
  }, [serverNowIso]);

  return (
    <div className={styles.messageBox}>
      <div className={styles.header}>
        <span className={styles.envelopeIcon}>💌</span>
        <span className={styles.title}>Mensaje especial de hoy</span>
      </div>
      <p className={styles.text}>"{dailyQuote}"</p>
      <div className={styles.footer}>
        Para {user} & {partner} ✨
      </div>
    </div>
  );
};
