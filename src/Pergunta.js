import React from 'react';
import './App.css';

const Pergunta = ({ dados, handleResposta }) => {
  return (
    <div>
      <h2>{dados.pergunta}</h2>
      <ul>
        {dados.opcoes.map((opcao, index) => (
          <li key={index} onClick={() => handleResposta(opcao)}>
            {opcao}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pergunta;

