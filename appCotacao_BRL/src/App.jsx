import { useState } from "react";
import "./App.css";
import Dolar from "./Components/Dolar";
import Euro from "./Components/Euro";
import BTC from "./Components/BTC";
import GBP from "./Components/GBP";

function App() {
  return (
    <div>
      <div className="App">
        <Dolar />
        <Euro />
        <BTC />
        <GBP />
      </div>
    </div>
  );
}

export default App;
