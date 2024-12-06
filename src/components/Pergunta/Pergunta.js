import React from 'react';
import './Pergunta.css';

const Pergunta = ({ pergunta, opcoes, responder }) => {
  return (
    <div className="pergunta-container">
      <div className="circulo">
        <p className="pergunta-texto">{pergunta}</p>
      </div>
      <div className="opcoes-container">
        {opcoes.map((opcao, index) => (
          <button
            key={index}
            className="botao-opcao"
            onClick={() => responder(opcao)}
          >
            {opcao}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Pergunta;



