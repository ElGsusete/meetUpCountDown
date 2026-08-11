'use client';

import React, { useState, useEffect } from 'react';
import { CountdownTimer } from './CountdownTimer';
import { AnimalScene } from './AnimalScene';
import { DailyMessage } from './DailyMessage';
import { FloatingHearts } from './FloatingHearts';
import { CelebrationPage } from './CelebrationPage';
import styles from './CountdownClient.module.css';

interface ServerCountdownData {
  targetDate: string;
  serverNow: string;
  names: {
    user: string;
    partner: string;
  };
}

export const CountdownClient: React.FC = () => {
  const [data, setData] = useState<ServerCountdownData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  // Realtime countdown state
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    totalSeconds: 0
  });

  // Fetch target date & initial server timestamp
  useEffect(() => {
    let isMounted = true;

    async function fetchServerDate() {
      try {
        const res = await fetch('/api/countdown');
        if (!res.ok) throw new Error('Failed to fetch server date');
        const json: ServerCountdownData = await res.json();
        
        if (isMounted) {
          setData(json);
          setLoading(false);
        }
      } catch (err) {
        if (isMounted) {
          setError('No se pudo conectar con el servidor');
          setLoading(false);
        }
      }
    }

    fetchServerDate();
    return () => { isMounted = false; };
  }, []);

  // Update timer every second using delta from server time
  useEffect(() => {
    if (!data) return;

    const targetTime = new Date(data.targetDate).getTime();
    const serverStartTime = new Date(data.serverNow).getTime();
    const clientStartTime = Date.now();

    const updateTimer = () => {
      // Current estimated server time
      const elapsedTime = Date.now() - clientStartTime;
      const currentServerTime = serverStartTime + elapsedTime;
      const diff = targetTime - currentServerTime;

      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, totalSeconds: 0 });
        return;
      }

      const totalSeconds = Math.floor(diff / 1000);
      const days = Math.floor(totalSeconds / (3600 * 24));
      const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
      const minutes = Math.floor((totalSeconds % 3600) / 60);
      const seconds = totalSeconds % 60;

      setTimeLeft({ days, hours, minutes, seconds, totalSeconds });
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);
  }, [data]);

  if (loading) {
    return (
      <div className={styles.loadingContainer}>
        <div className={styles.loadingHeart}>💖</div>
        <p className={styles.loadingText}>Cargando cuenta atrás mágica...</p>
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className={styles.errorContainer}>
        <p>🐾 {error || 'Error al cargar'}</p>
      </div>
    );
  }

  const { user, partner } = data.names;
  const isCelebration = timeLeft.totalSeconds <= 0;

  if (isCelebration) {
    return (
      <>
        <FloatingHearts />
        <CelebrationPage user={user} partner={partner} />
      </>
    );
  }

  return (
    <main className={styles.mainWrapper}>
      <FloatingHearts />

      <div className={styles.contentContainer}>
        {/* Header Title */}
        <header className={styles.header}>
          <div className={styles.namesTag}>
            <span>{user}</span>
            <span className={styles.heartPulse}>💖</span>
            <span>{partner}</span>
          </div>
          <h1 className={styles.mainTitle}>Faltan poco para vernos</h1>
          <p className={styles.subtitle}>
            ¡Cada segundo estamos más cerca de dar el abrazo más esperando del año! 🐾✨
          </p>
        </header>

        {/* Timer section */}
        <section className={styles.section}>
          <CountdownTimer timeLeft={timeLeft} />
        </section>

        {/* Animal Scene section */}
        <section className={styles.section}>
          <AnimalScene daysLeft={timeLeft.days} user={user} partner={partner} />
        </section>

        {/* Daily Message section */}
        <section className={styles.section}>
          <DailyMessage serverNowIso={data.serverNow} user={user} partner={partner} />
        </section>

        {/* Footer info */}
        <footer className={styles.footer}>
          <span>🔒 Fecha sincronizada desde el servidor</span>
          <span>•</span>
          <span>Hecho con mucho ❤️</span>
        </footer>
      </div>
    </main>
  );
};
