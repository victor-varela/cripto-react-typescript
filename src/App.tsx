import { useEffect } from "react";
import CriptoSearchForm from "./components/CriptoSearchForm";
import { useCriptoStore } from "./store";
import ShowResult from "./components/ShowResult";

function App() {
  const fetchCriptos = useCriptoStore(set => set.fetchCriptos);
  const data = useCriptoStore(set => set.result);

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
        <div>{data.VALUE > 0 && <ShowResult data={data} />}</div>
      </div>
    </>
  );
}

export default App;

/*
  - Usamos Zod para los types de este proyecto.
  - Usamos Zustand para el manejo del estado. Recuerda que para acceder debes pasar el parametro set


*/
