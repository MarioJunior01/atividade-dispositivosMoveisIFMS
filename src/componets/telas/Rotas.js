import CalcBasica from "./Tela1";
import Tela2 from "./Tela2";
import Tela3 from "./Tela3";

export default function Rotas(props) {
  if (props.rota == "Tela1") {
    return <CalcBasica />;
  } else if (props.rota == "Tela2") {
    return <Tela2 />;
  } else if (props.rota == "Tela3") {
    return <Tela3 />;
  }
}
