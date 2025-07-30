import axios from "axios";
import { create } from "zustand";
import { CurrenciesResponseSchema } from "./schemas";
import type { CriptoStore } from "./types";
import { devtools } from "zustand/middleware";

const getCriptos = async () => {
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

export const useCriptoStore = create<CriptoStore>()(
  devtools(set => ({
    //Aca se declaran los states/funciones:
    criptoCurrencies: [],

    fetchCriptos: async () => {
      //Como getCriptos retorna la lista de monedas ya parseada (verificada por zod) la agregamos al state del store. Esto es asincrono.

      const criptoCurrencies = await getCriptos();

      // Con Set asignamos el valor al state (criptoCurrencies)El state y la variable se llaman igual por eso solo el nombre [key] sin [value]
      set(() => ({ criptoCurrencies }));
    },
  }))
);

/*
-Las acciones del store las mantenemos 'limpias' por eso ANTES, llamamos a la api con axios
- MAXIMA: Set siempre devuelve adivina que?... un OBJETO jeje set(()=>({})) parentesis y llaves, parentesis del return y llaves del objeto.
- La ventaja de Zustand es usar la devtools. Para poder ver los estados desde el navegador. para eso importamos devtools y hacemos los ajustes en el codigo, OJO LOS PARENTESIS EN EL CODIGO QUE SON UN DOLOR DE CABEZA es asi:


useSomeStore = create<SomeType>()(

  devtools( ( set )=>({
  
  
  
                        })
          )

)



*/
