import React from 'react';
import 'animate.css/animate.min.css';

const Resultado = ({ pontuacao, totalPerguntas }) => {
  const todasAcertadas = pontuacao === totalPerguntas;

  return (
    <div>
      <h2>Quiz terminado!</h2>
      <p>Sua pontuação: {pontuacao} de {totalPerguntas}</p>
      {todasAcertadas ? (
        <>
          <p>Parabéns, você é um grande jogador! Se quiser, pode jogar novamente.</p>
          <div className="fireworks animate__animated animate__zoomIn"></div>
        </>
      ) : (
        <p>Infelizmente parece que não foi dessa vez, quer tentar de novo?</p>
      )}
      <button onClick={() => window.location.reload()}>Reiniciar</button>
    </div>
  );
};

export default Resultado;



