import React from "react";
import { Salario, verificaResultado } from './salario.js';

function App() {
  
  const salario = new Salario(1500, 600); 


  salario.beneficios = 100;
  salario.bonificacoes = 100;


  return (
    <div>
      <h1> Testes </h1>
    </div>
  );
}

export default App;

