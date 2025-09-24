import React from "react";
import "./styles.css";
import Rotas from "./componets/telas/Rotas";

export default function App() {
  const [tela, setTela] = React.useState("Tela1");
  return (
    <div className="App">
      <h1>Calculadoras </h1>
      <div className="btnTelas">
        <button onClick={() => setTela("Tela1")}>Tela 1</button>
        <button onClick={() => setTela("Tela2")}>Tela 2</button>
        <button onClick={() => setTela("Tela3")}>Tela 3</button>
      </div>
      <Rotas rota={tela} />
    </div>
  );
}
