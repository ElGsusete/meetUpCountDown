# 💕 MeetUp Countdown — Jesús & Vanessa

Página web de cuenta atrás con estética pastel rosa y animalitos pixel art que van multiplicándose cada día a medida que se acerca la fecha del reencuentro.

## 🐾 Características

- **Servidor como fuente de verdad**: La fecha y hora de referencia se sirven desde el API Route (`/api/countdown`), impidiendo adelantamientos o manipulaciones desde el reloj del cliente.
- **Multiplicación de animalitos pixel art**: Cuantos menos días quedan, más animalitos aparecen en el jardín (gatitos de varios colores, perritos corgi/shiba, conejito, hámster).
- **Animaciones y bocadillos de texto**: Animalitos con animaciones (caminar, rebotar, dormitar, corazones) y mensajes bonitos.
- **Mensaje romántico diario**: Un mensaje especial que cambia automáticamente cada día.
- **Pantalla de celebración el Día D**: Confetti de corazones, fiesta de animalitos bailando y mensaje de reencuentro cuando llega la fecha.
- **Estética Pastel & Rosa**: Tonos rosa pastel, corazones flotantes y fuentes pixel art (`Press Start 2P`) y moderna (`Outfit`).

---

## 🚀 Despliegue en Vercel (Paso a Paso)

### Opción A: Despliegue mediante GitHub (Recomendado)
1. Sube este proyecto a tu cuenta de **GitHub**.
2. Entra en [vercel.com](https://vercel.com) e inicia sesión.
3. Haz clic en **"Add New..."** → **"Project"** e importa el repositorio de GitHub.
4. Antes de hacer clic en Deploy, despliega la sección **Environment Variables**:
   - **Key**: `MEETUP_DATE`
   - **Value**: `2026-08-28T15:30:00+02:00` (o la fecha/hora exacta que queráis en formato ISO).
5. Haz clic en **Deploy**. ¡Y listo!

### Opción B: Despliegue mediante Vercel CLI
1. Instala la CLI de Vercel (si no la tienes):
   ```bash
   npm i -g vercel
   ```
2. Ejecuta en la terminal de este proyecto:
   ```bash
   vercel
   ```
3. Sigue los pasos en pantalla. Cuando te pregunte, añade la variable `MEETUP_DATE`.

---

## ⚙️ Cómo cambiar la fecha en el futuro (Sin tocar código)

Si en algún momento queréis cambiar la fecha del encuentro:
1. Ve al Dashboard de tu proyecto en **Vercel**.
2. Ve a **Settings** → **Environment Variables**.
3. Edita el valor de `MEETUP_DATE`.
4. Ve a la pestaña **Deployments** y haz clic en **Redeploy**.

---

## 🛠️ Ejecución Local

Para probarlo en tu ordenador:
```bash
# Instalar dependencias (ya instaladas)
npm install

# Iniciar servidor de desarrollo
npm run dev
```
Abre [http://localhost:3000](http://localhost:3000) en tu navegador.
La fecha local de prueba se configura en el archivo `.env.local`.
