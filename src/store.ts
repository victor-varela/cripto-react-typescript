import { create } from "zustand";
import type { CriptoStore } from "./types";
import { devtools } from "zustand/middleware";
import { getCriptoPair, getCriptos } from "./services/CriptoService";

export const useCriptoStore = create<CriptoStore>()(
  devtools(set => ({
    // States:
    criptoCurrencies: [],

    //los objetos se tienen que inicializar. los arrays pueden ser vacios
    result: {
        VALUE: 0,
        CURRENT_DAY_CHANGE_PERCENTAGE: 0,
        CURRENT_DAY_HIGH: 0,
        CURRENT_DAY_LOW: 0,
    },

    //Funciones (Acciones/Actions):

    fetchCriptos: async () => {
      //Como getCriptos retorna la lista de monedas ya parseada (verificada por zod) la agregamos al state del store. Esto es asincrono.

      const criptoCurrencies = await getCriptos();

      // Con Set asignamos el valor al state (criptoCurrencies)El state y la variable se llaman igual por eso solo el nombre [key] sin [value]
      set(() => ({ criptoCurrencies }));
    },

    fetchCriptoPair: async criptoPair => {
      const result = await getCriptoPair(criptoPair);

      set(() => ({ result }));
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

fijate que despues del type viene un parentesis(), luego parentesis de toda la funcion y DENTRO devtools que arropa al set

-Siempre que uses Zustand + Zod:

Arrays → podés iniciar con [] sin problemas.

Objetos con shape específico → iniciá con un valor real, o null, o usá as si sabés lo que hacés.

*/
