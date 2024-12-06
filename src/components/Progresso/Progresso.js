import React from 'react';

const Progresso = ({ atual, total }) => {
  return (
    <div className="mb-3">
      <h4>Progresso: {atual} / {total}</h4>
    </div>
  );
};

export default Progresso;


