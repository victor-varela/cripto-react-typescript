import axios from "axios";
import { CurrenciesResponseSchema, PairResponseSchema } from "../schemas";
import type { CriptoPair } from "../types";


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

export const getCriptoPair = async (criptoPair: CriptoPair) => {
  const apiPair = `${criptoPair.criptocurrency}-${criptoPair.currency}`;

  const url = `https://data-api.coindesk.com/index/cc/v1/latest/tick?market=cadli&instruments=${apiPair}&apply_mapping=true`;

  try {
    const {
      data: { Data },
    } = await axios(url);

    const pairData = Data[apiPair]; //accedemos despues del destructuring 'fijo' a la variable 'dinamica' con [] para tener el objeto que tiene la info que necesitamos
    
    //Manejamos error si Data[apiPair] falla:

    if (!pairData) {
      console.error(`No se encontro el par ${apiPair}`);
      return;
    }

    // Validamos la respuesta con Zod. Siempre manejar el resultado de safeParse, especialmente con datos externos.
    // Ignorar el fallo haría que Zod pierda su poder, ya que seguirías usando datos posiblemente inválidos.
    const parsedPair = PairResponseSchema.safeParse(pairData);

    if (!parsedPair.success) {
      console.error("Respuesta invalida:", parsedPair.error);
      return;
    }

    return parsedPair.data; // Paso la validacion. Retornamos en .data esta la info que necesitamos
  } catch (error) {
    console.error("Error al obtener la cripto:", error);
    throw error;
  }
};
