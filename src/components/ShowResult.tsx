import { useCriptoStore } from "../store";

//Lo que hiciste se llama indexed access type. el uso de corchetes...
const ShowResult = () => {
  const result = useCriptoStore(set => set.result);
  const hasResult = result.VALUE > 0;

  return (
    <div className="result-wrapper">
      {hasResult && (
        <>
          <h2>Cotizacion</h2>
          <div className="result">
            <img src="./criptos-img.jpg" alt="Imagen criptomonedas" />
            <div>
              <p>
                El precio es de: <span>$ {result.VALUE.toLocaleString()}</span>
              </p>
              <p>
                El precio es de: <span>$ {result.CURRENT_DAY_LOW.toLocaleString()}</span>
              </p>
              <p>
                El precio es de: <span>$ {result.CURRENT_DAY_HIGH.toLocaleString()}</span>
              </p>
              <p>
                El precio es de: <span>$ {result.CURRENT_DAY_CHANGE_PERCENTAGE.toLocaleString()}</span>
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ShowResult;
