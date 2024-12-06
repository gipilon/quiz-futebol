import React, { useState } from 'react';
import Pergunta from './Pergunta';
import Resultado from './Resultado';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  const [questaoAtual, setQuestaoAtual] = useState(0);
  const [pontuacao, setPontuacao] = useState(0);
  const [fimDeJogo, setFimDeJogo] = useState(false);

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
    { 
      pergunta: 'Qual jogador é conhecido como "O Fenômeno"?',
      opcoes: ['Pelé', 'Romário', 'Ronaldo', 'Zico'],
      respostaCerta: 'Ronaldo'
    },
    { 
      pergunta: 'Quem é o jogador com mais títulos na história do futebol?',
      opcoes: ['Pelé', 'Dani Alves', 'Lionel Messi', 'Cristiano Ronaldo'],
      respostaCerta: 'Dani Alves'
    },
    { 
      pergunta: 'Qual time ganhou a Libertadores 2020?',
      opcoes: ['River Plate', 'Palmeiras', 'Santos', 'Boca Juniors'],
      respostaCerta: 'Palmeiras'
    },
    { pergunta: 'Quem foi o artilheiro do Campeonato Brasileiro de 2019?', 
      opcoes: ['Gabigol', 'Bruno Henrique', 'Dudu', 'Everton'], 
      respostaCerta: 'Gabigol' 
    }, 
    { pergunta: 'Qual seleção possui mais títulos da Copa do Mundo?', 
        opcoes: ['Brasil', 'Alemanha', 'Itália', 'Argentina'], 
        respostaCerta: 'Brasil' 
    }
    // Adicione mais perguntas aqui
  ];

  const handleResposta = (resposta) => {
    if (resposta === perguntas[questaoAtual].respostaCerta) {
      setPontuacao(pontuacao + 1);
    }
    const proximaQuestao = questaoAtual + 1;
    if (proximaQuestao < perguntas.length) {
      setQuestaoAtual(proximaQuestao);
    } else {
      setFimDeJogo(true);
    }
  };

  return (
    <div className="container">
      <h1>Quiz de Futebol</h1>
      {!fimDeJogo ? (
        <Pergunta
          dados={perguntas[questaoAtual]}
          handleResposta={handleResposta}
        />
      ) : (
        <Resultado pontuacao={pontuacao} totalPerguntas={perguntas.length} />
      )}
    </div>
  );
};

export default App;



