import { currencies } from "../data";
import { useCriptoStore } from "../store";

const CriptoSearchForm = () => {
const criptoCurrencies = useCriptoStore(set=> set.criptoCurrencies);
  return (
    <form action="" className="form">
      <div className="field">
        <label htmlFor="currency">Moneda:</label>
        <select name="currency" id="currency">
          <option value="">-- Seleccione --</option>
          {currencies.map(currency => (
            <option value={currency.code} key={currency.code}>
              {currency.name}
            </option>
          ))}
        </select>
      </div>
      <div className="field">
        <label htmlFor="criptocurrency">Criptomoneda:</label>
        <select name="criptocurrency" id="criptocurrency">
          <option value="">-- Seleccione --</option>
          {criptoCurrencies.map(cripto=>(
            <option value={cripto.SYMBOL} key={cripto.SYMBOL}>{cripto.NAME}</option>
          ))}
        </select>
      </div>
      <input type="submit" value="cotizar" />
    </form>
  );
};

export default CriptoSearchForm;
