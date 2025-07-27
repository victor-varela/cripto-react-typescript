import CriptoSearchForm from "./components/CriptoSearchForm";

function App() {
  return (
    <>
     <div className="container">
      <h1 className="appTitle">Cotizador de <span>Criptomonedas</span></h1>
      <div className="content">
        <CriptoSearchForm/>
      </div>
     </div>
    </>
  );
}

export default App;

/*
  - Usamos Zod para los types de este proyecto.



*/