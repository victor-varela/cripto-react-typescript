import { useState } from "react";
import { currencies } from "../data";
import { useCriptoStore } from "../store";
import type { CriptoPair } from "../types";
import Error from "./Error";

const CriptoSearchForm = () => {
  const criptoCurrencies = useCriptoStore(set => set.criptoCurrencies);
  const fetchCriptoPair = useCriptoStore(set => set.fetchCriptoPair);
  const [criptoPair, setCriptoPair] = useState<CriptoPair>({
    currency: "",
    criptocurrency: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCriptoPair({ ...criptoPair, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (Object.values(criptoPair).includes("")) {
      setError("Todos los campos son obligatorios");
      return;
    }
    setError("");

    //consultar la API

    fetchCriptoPair(criptoPair);
  };
  return (
    <form action="" className="form" onSubmit={handleSubmit}>
      {error && <Error>{error}</Error>}
      <div className="field">
        <label htmlFor="currency">Moneda:</label>
        <select name="currency" id="currency" onChange={handleChange} value={criptoPair.currency}>
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
        <select name="criptocurrency" id="criptocurrency" onChange={handleChange} value={criptoPair.criptocurrency}>
          <option value="">-- Seleccione --</option>
          {criptoCurrencies.map(cripto => (
            <option value={cripto.SYMBOL} key={cripto.SYMBOL}>
              {cripto.NAME}
            </option>
          ))}
        </select>
      </div>
      <input type="submit" value="cotizar" />
    </form>
  );
};

export default CriptoSearchForm;
