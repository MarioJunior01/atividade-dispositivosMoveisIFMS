import React from "react";

export default function CalcBasica() {
  const [num1, setNum1] = React.useState();
  const [num2, setNum2] = React.useState();
  const [resultado, setResultado] = React.useState();

  function somar() {
    setResultado(parseFloat(num1) + parseFloat(num2));
  }
  function subtrair() {
    setResultado(parseFloat(num1) - parseFloat(num2));
  }

  function multiplicar() {
    setResultado(parseFloat(num1) * parseFloat(num2));
  }

  function dividir() {
    setResultado(parseFloat(num1) / parseFloat(num2));
  }

  const estilos = {
    btn: {
      backgroundColor: "purple",
      color: "white",
      padding: "5px 15px",
      margin: 5,
      borderRadius: 10,
    },
  };

  return (
    <div>
      <h3>Calc Basica </h3>
      <div>
        <label htmlFor="num1"> Num1</label>
        <input
          type="number"
          name="num1"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
        />
        <br />
        <label htmlFor="num2"> Num2</label>
        <input
          type="number"
          name="num2"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
        />
        <br />
        <button style={estilos.btn} onClick={() => somar()}>
          {" "}
          Somar{" "}
        </button>

        <button style={estilos.btn} onClick={() => subtrair()}>
          {" "}
          Subtrair{" "}
        </button>

        <button style={estilos.btn} onClick={() => multiplicar()}>
          {" "}
          Multiplicar{" "}
        </button>

        <button style={estilos.btn} onClick={() => dividir()}>
          {" "}
          Dividir{" "}
        </button>
        <p> resultado {resultado}</p>
      </div>
    </div>
  );
}
