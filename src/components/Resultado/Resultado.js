import React from "react";

function Resultado({ pontuacao, total, reiniciarQuiz }) {
  return (
    <div className="circulo">
      <h1 className="resultado-titulo">Resultado</h1>
      <p className="resultado-texto">
        Você acertou {pontuacao} de {total} perguntas.
      </p>
      {pontuacao < total && (
        <p className="resultado-texto">
          Não desista! Tente novamente para acertar todas!
        </p>
      )}
      <button className="botao-reiniciar" onClick={reiniciarQuiz}>
        Tente Novamente
      </button>
    </div>
  );
}

export default Resultado;



