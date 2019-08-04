import React, { useState } from "react"; 
import ReactDOM from "react-dom";

import "./styles.css";

/* Exemplo de um jogo utilizando de hooks (ganchos)
para armazenar os estdos.
Hooks só são utilizados quando temos componente funcional no código

Hooks devem ser mantidos nas primeiras partes do 
    código e em ordem
    Significa que não posso usar um uma estrutura de "if", por exemplo,
    entre essas definições
*/

function App() {
  
  const[estado, setEstado] = useState('ENTRADA')

  const[palpite, setPalpite] = useState(150)
  const[numPalpites, setNumPalpites] = useState(1)

  const [min, setMin] = useState(0)
  const [max, setMax] = useState(300)
  //Hooks

  const iniciarJogo = () => {
    setEstado('RODANDO')
    setMin(0)
    setMax(300)
    setNumPalpites(1)
    setPalpite(150)
  }

  if(estado === 'ENTRADA'){
    return <button onClick={iniciarJogo}>Começar a Jogar!</button>
  }

  const menor = () => {
    setNumPalpites(numPalpites + 1)
    setMax(palpite)
    const proxPalpite = parseInt((palpite - min) / 2) + min
    setPalpite(proxPalpite)
  }

  const maior = () => {
    setNumPalpites(numPalpites + 1)
    setMin(palpite)
    const proxPalpite = parseInt((max - palpite) / 2) + palpite
    setPalpite(proxPalpite)
  }
  const acertou = () => {
    setEstado('FIM')
  }

if (estado === 'FIM') {
  return(
    <div> 
      <p> Acertei o número {palpite} com {numPalpites} tentativas! </p>
      <button onClick={iniciarJogo}>Jogar novamente!</button>
    </div>
  )
}
  return(
    <div className = "App">
    <p>O seu palpite é {palpite}?</p>
    <p> Min: {min} / Max: {max}</p>
    <button onClick={menor} >Menor</button>
    <button onClick={acertou}>Acertou!</button>
    <button onClick={maior}>Maior</button>
    </div>
  )
 }


const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
