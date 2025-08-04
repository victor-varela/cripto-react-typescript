import { useCriptoStore } from "../store";
import Spinner from "./Spinner";

//Lo que hiciste se llama indexed access type. el uso de corchetes...
const ShowResult = () => {
  const result = useCriptoStore(set => set.result);
  const loading = useCriptoStore(set=> set.loading);
  const hasResult = result.VALUE > 0;
  
  return (
    <div className="result-wrapper">
      { loading ? <Spinner/> : hasResult && (
        <>
          <h2>Cotizacion</h2>
          <div className="result">
            <div className="result__img">
              <img src="./criptos-img.jpg" alt="Imagen criptomonedas" />
            </div>
            <div className="info">
              <p>
                El precio es de: <span>${result.VALUE.toLocaleString()}</span>
              </p>
              <p>
                Precio mas bajo del dia: <span>${result.CURRENT_DAY_LOW.toLocaleString()}</span>
              </p>
              <p>
                Precio mas alto del dia: <span>${result.CURRENT_DAY_HIGH.toLocaleString()}</span>
              </p>
              <p>
                La variacion del dia es: <span>{result.CURRENT_DAY_CHANGE_PERCENTAGE.toLocaleString()}%</span>
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ShowResult;
