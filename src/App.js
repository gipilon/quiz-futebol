import React, { useState } from 'react';
import Pergunta from './Pergunta';
import Resultado from './Resultado';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  const [questaoAtual, setQuestaoAtual] = useState(0);
  const [pontuacao, setPontuacao] = useState(0);
  const [rodada, setRodada] = useState(1);
  const [fimDeJogo, setFimDeJogo] = useState(false);

  const perguntasPorRodada = 3;
  const perguntas = [
    { 
      pergunta: 'Qual time ganhou a Copa do Mundo de 2002?',
      opcoes: ['Brasil', 'Alemanha', 'Itália', 'França'],
      respostaCerta: 'Brasil'
    },
    { 
      pergunta: 'Quem foi o artilheiro da Copa do Mundo de 2014?',
      opcoes: ['Lionel Messi', 'Thomas Müller', 'Neymar', 'James Rodríguez'],
      respostaCerta: 'James Rodríguez'
    },
    { 
      pergunta: 'Em que ano foi realizada a primeira Copa do Mundo?',
      opcoes: ['1930', '1950', '1960', '1970'],
      respostaCerta: '1930'
    },
    // Adicione mais perguntas aqui
  ];

  const handleResposta = (resposta) => {
    if (resposta === perguntas[questaoAtual].respostaCerta) {
      setPontuacao(pontuacao + 1);
    }
    const proximaQuestao = questaoAtual + 1;
    if (proximaQuestao < perguntas.length && (proximaQuestao % perguntasPorRodada) !== 0) {
      setQuestaoAtual(proximaQuestao);
    } else if (proximaQuestao < perguntas.length && (proximaQuestao % perguntasPorRodada) === 0) {
      setRodada(rodada + 1);
      setQuestaoAtual(proximaQuestao);
    } else {
      setFimDeJogo(true);
    }
  };

  return (
    <div className="container">
      <h1>Quiz de Futebol</h1>
      {!fimDeJogo ? (
        <>
          <div className="status">
            <p>Rodada: {rodada}</p>
            <p>Pontuação: {pontuacao}</p>
          </div>
          <Pergunta
            dados={perguntas[questaoAtual]}
            handleResposta={handleResposta}
          />
        </>
      ) : (
        <Resultado pontuacao={pontuacao} totalPerguntas={perguntas.length} />
      )}
    </div>
  );
};

export default App;

