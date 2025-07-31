import { useState } from "react";
import { currencies } from "../data";
import { useCriptoStore } from "../store";
import type { CriptoPair } from "../types";

const CriptoSearchForm = () => {
const criptoCurrencies = useCriptoStore(set=> set.criptoCurrencies);
const [CriptoPair, setCriptoPair] = useState<CriptoPair>({
  currency: "",
  criptocurrency:""
})

const handleChange = (e: React.ChangeEvent<HTMLSelectElement>)=>{
  setCriptoPair({...CriptoPair, [e.target.name]: e.target.value})
}

const handleSubmit= (e: React.FormEvent<HTMLFormElement>)=>{
  e.preventDefault();
 if(Object.values(CriptoPair).includes("")){
  console.log('error...');
  return;
 }

 
  
}
  return (
    <form action="" className="form" onSubmit={handleSubmit} >
      <div className="field">
        <label htmlFor="currency">Moneda:</label>
        <select name="currency" id="currency" onChange={handleChange}>
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
        <select name="criptocurrency" id="criptocurrency"onChange={handleChange}>
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
