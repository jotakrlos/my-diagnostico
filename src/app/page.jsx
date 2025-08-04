"use client";

import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  function handleStart() {
    router.push('/questionario'); // Agora está correto
  }

  return (
    <main className="container">
      <div className="card">
        <h1>Diagnóstico Psicológico</h1>
        <p>
          Responda a um breve questionário e receba uma análise inicial sobre sua saúde mental.
          Rápido, privado e gratuito.
        </p>
        <button className="start-btn" onClick={handleStart}>
          Iniciar Avaliação
        </button>
      </div>
    </main>
  );
}
