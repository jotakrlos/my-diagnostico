"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const questions = [
  { id: 1, text: "Você tem se sentido ansioso(a) frequentemente?" },
  { id: 2, text: "Você tem dificuldades para dormir?" },
  { id: 3, text: "Você sente falta de interesse em atividades que antes gostava?" },
];

export default function Questionario() {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState({});
  const router = useRouter();

  function handleAnswer(answer) {
    const novaResposta = { ...answers, [questions[current].id]: answer };
    setAnswers(novaResposta);

    if (current < questions.length - 1) {
      setCurrent(current + 1);
    } else {
      // Salva as respostas no localStorage
      localStorage.setItem("respostasQuestionario", JSON.stringify(novaResposta));

      // Redireciona para a página de resultado
      router.push("/resultado");
    }
  }

  return (
    <main className="container">
      <div className="card">
        <h2>Pergunta {current + 1} de {questions.length}</h2>
        <p>{questions[current].text}</p>
        <div className="buttons">
          <button onClick={() => handleAnswer("Sim")} className="btn yes">Sim</button>
          <button onClick={() => handleAnswer("Não")} className="btn no">Não</button>
        </div>
      </div>
    </main>
  );
}