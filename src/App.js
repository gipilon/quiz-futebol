import React, { useState } from 'react';
import Pergunta from './components/Pergunta/Pergunta';
import './App.css';

const App = () => {
  const [indicePergunta, setIndicePergunta] = useState(0);
  const [pontos, setPontos] = useState(0);
  const [terminou, setTerminou] = useState(false);

  const perguntas = [
    {
      pergunta: "Quem ganhou a Copa do Mundo de 2002?",
      opcoes: ["Brasil", "Alemanha", "Itália", "França"],
      respostaCorreta: "Brasil",
    },
    {
      pergunta: "Qual o maior artilheiro da história da Champions League?",
      opcoes: ["Cristiano Ronaldo", "Lionel Messi", "Raúl", "Robert Lewandowski"],
      respostaCorreta: "Cristiano Ronaldo",
    },
    
  ];

  const responder = (resposta) => {
    if (resposta === perguntas[indicePergunta].respostaCorreta) {
      setPontos(pontos + 1);
    }
    if (indicePergunta === perguntas.length - 1) {
      setTerminou(true);
    } else {
      setIndicePergunta(indicePergunta + 1);
    }
  };

  return (
    <div className="app-container">
      {terminou ? (
        <div className="resultado-container">
          <div className="circulo">
            <h1 className="resultado-titulo">Quiz Finalizado!</h1>
            <p className="resultado-texto">
              Você acertou {pontos} de {perguntas.length} perguntas.
            </p>
          </div>
        </div>
      ) : (
        <Pergunta
          pergunta={perguntas[indicePergunta].pergunta}
          opcoes={perguntas[indicePergunta].opcoes}
          responder={responder}
        />
      )}
    </div>
  );
};

export default App;
