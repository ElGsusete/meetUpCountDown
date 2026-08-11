import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET() {
  // Fecha por defecto si no está definida en la variable de entorno
  const defaultDate = '2026-08-28T15:30:00+02:00';
  const targetDateStr = process.env.MEETUP_DATE || defaultDate;
  
  const serverNow = new Date();
  const targetDate = new Date(targetDateStr);

  return NextResponse.json({
    targetDate: targetDate.toISOString(),
    serverNow: serverNow.toISOString(),
    names: {
      user: 'Jesús',
      partner: 'Vanessa'
    }
  });
}
