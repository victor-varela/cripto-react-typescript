import { useEffect } from "react";
import CriptoSearchForm from "./components/CriptoSearchForm";
import { useCriptoStore } from "./store";

function App() {
  const fetchCriptos = useCriptoStore(set => set.fetchCriptos);
  
  useEffect(() => {
    fetchCriptos();
  }, []);

  return (
    <>
      <div className="container">
        <h1 className="appTitle">
          Cotizador de <span>Criptomonedas</span>
        </h1>
        <div className="content">
          <CriptoSearchForm />
        </div>
      </div>
    </>
  );
}

export default App;

/*
  - Usamos Zod para los types de este proyecto.
  - Usamos Zustand para el manejo del estado. Recuerda que para acceder debes pasar el parametro set


*/
