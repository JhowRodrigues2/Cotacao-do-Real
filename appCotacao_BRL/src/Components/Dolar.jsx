import React from "react";
import { useEffect } from "react";
import { useState } from "react";

import "./Home.css";
export default function Home() {
  let dataAtual = new Date();

  const [nome, setNome] = useState("");
  const [valorMax, setValorMax] = useState("");
  const [valorMin, setValorMin] = useState("");

  useEffect(() => {
    fetch("https://economia.awesomeapi.com.br/last/USD-BRL")
      .then((resultado) => resultado.json())
      .then((moedaValor) => {
        setNome(moedaValor.USDBRL.name);
        setValorMax(parseFloat(moedaValor.USDBRL.high).toFixed(2));
        setValorMin(parseFloat(moedaValor.USDBRL.low).toFixed(2));
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
