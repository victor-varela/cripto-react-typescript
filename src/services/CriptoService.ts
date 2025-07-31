import axios from "axios";
import { CurrenciesResponseSchema } from "../schemas";

export const getCriptos = async () => {
  const url =
    "https://data-api.coindesk.com/asset/v1/top/list?page=1&page_size=20&sort_by=CIRCULATING_MKT_CAP_USD&sort_direction=DESC&groups=ID,BASIC,SUPPLY,PRICE,MKT_CAP,VOLUME,CHANGE,TOPLIST_RANK&toplist_quote_asset=USD";

  try {
    //Destructuring de la respuesta API
    const {
      data: {
        Data: { LIST },
      },
    } = await axios(url);
    const parsedList = CurrenciesResponseSchema.safeParse(LIST);
    console.log(LIST);
    
    //Salimos rapido del error. Sino hay error, seguimos.. "Fail Fast, Exit Early”
    if (!parsedList.success) {
      console.log("respuesta mal formada");
      return;
    }

    return parsedList.data; //ahora getCriptos RETORNA este valor. El array de las monedas.
  } catch (error) {
    console.log(error);
  }
};

// export const getCriptoValue = async ()=>{


// }