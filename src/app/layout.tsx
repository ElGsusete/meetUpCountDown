import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Jesús & Vanessa 💕 Cuenta Atrás',
  description: 'Cuenta atrás especial con animalitos pixel art para nuestro reencuentro',
  keywords: ['countdown', 'cuenta atras', 'pixel art', 'amor a distancia'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
