import { MiComponente } from "./components/MiComponente";
import { MiFormulario } from "./components/MiFormulario";
import { MiUsuario } from "./components/MiUsuario";
import { PruebasCustom } from "./components/PruebasCustom";

function App() {
  return (
    <>
      <MiUsuario />
      <hr />
      <MiFormulario />
      <hr />
      <PruebasCustom />
      <hr />
      <MiComponente />
      <hr />
    </>
  );
}

export default App