"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function ResultadoPage() {
  const router = useRouter();
  const [diagnostico, setDiagnostico] = useState(null);

  useEffect(() => {
    // Simulação de busca de respostas do localStorage
    const respostas = JSON.parse(localStorage.getItem("respostasQuestionario")) || {};

    const respostasSim = Object.values(respostas).filter((r) => r === "Sim").length;

    let resultado = "";
    if (respostasSim === 0) {
      resultado = "Você parece estar emocionalmente equilibrado no momento.";
    } else if (respostasSim === 1 || respostasSim === 2) {
      resultado = "Alguns sinais de desconforto emocional foram identificados. Reflita sobre isso e procure cuidar de sua saúde mental.";
    } else {
      resultado = "Há indícios de sofrimento psicológico significativo. Recomendamos procurar um profissional de saúde mental.";
    }

    setDiagnostico(resultado);
  }, []);

  function handleReiniciar() {
    localStorage.removeItem("respostasQuestionario");
    router.push("/");
  }

  if (!diagnostico) return <p>Carregando resultado...</p>;

  return (
    <main className="container">
      <div className="card">
        <h1>Resultado da Avaliação</h1>
        <p>{diagnostico}</p>
        <button className="start-btn" onClick={handleReiniciar}>
          Voltar ao início
        </button>
      </div>
    </main>
  );
}