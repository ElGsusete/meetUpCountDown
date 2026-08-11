'use client';

import React from 'react';
import styles from './CountdownTimer.module.css';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface CountdownTimerProps {
  timeLeft: TimeLeft;
}

export const CountdownTimer: React.FC<CountdownTimerProps> = ({ timeLeft }) => {
  const timeUnits = [
    { label: 'DÍAS', value: timeLeft.days, icon: '📅' },
    { label: 'HORAS', value: timeLeft.hours, icon: '⏰' },
    { label: 'MINUTOS', value: timeLeft.minutes, icon: '💌' },
    { label: 'SEGUNDOS', value: timeLeft.seconds, icon: '✨' },
  ];

  const formatNumber = (num: number) => {
    return num.toString().padStart(2, '0');
  };

  return (
    <div className={styles.timerGrid}>
      {timeUnits.map((unit, index) => (
        <div key={unit.label} className={styles.timerCard}>
          <div className={styles.cardHeader}>
            <span className={styles.cardIcon}>{unit.icon}</span>
            <span className={styles.cardLabel}>{unit.label}</span>
          </div>

          <div className={styles.cardValueWrapper}>
            <span className={styles.cardValue}>
              {formatNumber(unit.value)}
            </span>
          </div>

          <div className={styles.cardFooter}>
            <span className={styles.sparkleLeft}>✦</span>
            <span className={styles.sparkleRight}>✦</span>
          </div>
        </div>
      ))}
    </div>
  );
};
