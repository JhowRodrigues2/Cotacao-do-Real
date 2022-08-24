import React from "react";
import { useEffect } from "react";
import { useState } from "react";

import "./Home.css";
export default function Home() {
  const [nome, setNome] = useState("");
  const [valorMax, setValorMax] = useState("");
  const [valorMin, setValorMin] = useState("");
  let dataAtual = new Date();

  useEffect(() => {
    fetch("https://economia.awesomeapi.com.br/last/EUR-BRL")
      .then((resultado) => resultado.json())
      .then((moedaValor) => {
        setNome(moedaValor.EURBRL.name);
        setValorMax(parseFloat(moedaValor.EURBRL.high).toFixed(2));
        setValorMin(parseFloat(moedaValor.EURBRL.low).toFixed(2));
      });
  }, []);
  return (
    <div className="content">
      <h3>
        {nome} <p>{dataAtual.toLocaleDateString()}</p>
      </h3>
      <div className="main">
        <label>Valor mínimo do dia: R${valorMin}</label>
        <label>Valor máximo do dia: R${valorMax}</label>
      </div>
    </div>
  );
}
