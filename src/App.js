import React, { useState } from 'react';
import Pergunta from './components/Pergunta/Pergunta';
import './App.css';

const perguntas = [
  { pergunta: "Quem ganhou a Copa do Mundo de 2018?", 
    respostaCerta: "França", 
    opcoes: ["Brasil", "França", "Alemanha", "Argentina"] 
  },
  { pergunta: "Qual jogador é conhecido como 'El Pibe de Oro'?", 
    respostaCerta: "Maradona", 
    opcoes: ["Pelé", "Maradona", "Messi", "Zidane"] 
  },
  { pergunta: "Qual é o time com mais títulos da Libertadores?", 
    respostaCerta: "Independiente", 
    opcoes: ["Boca Juniors", "River Plate", "Independiente", "Santos"] },
];

function App() {
  const [etapa, setEtapa] = useState(0);
  const [pontos, setPontos] = useState(0);
  const [terminou, setTerminou] = useState(false);

  const checarResposta = (resposta) => {
    if (resposta === perguntas[etapa].respostaCerta) {
      setPontos(pontos + 1);
    }
    if (etapa + 1 < perguntas.length) {
      setEtapa(etapa + 1);
    } else {
      setTerminou(true);
    }
  };

  const reiniciarQuiz = () => {
    setEtapa(0);
    setPontos(0);
    setTerminou(false);
  };

  return (
    <div className="app">
      {!terminou ? (
        <div className="quiz-container">
          <div className="pergunta">
            <h2>{perguntas[etapa].pergunta}</h2>
            <div className="opcoes">
              {perguntas[etapa].opcoes.map((opcao) => (
                <button key={opcao} onClick={() => checarResposta(opcao)}>
                  {opcao}
                </button>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="resultado">
          <h2>{pontos === perguntas.length ? "Gol de placa! Você acertou todas!" : `Você acertou ${pontos} de ${perguntas.length}`}</h2>
          <button onClick={reiniciarQuiz}>Tente Novamente</button>
        </div>
      )}
    </div>
  );
}

export default App;
