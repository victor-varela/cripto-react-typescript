import axios from "axios";
import { create } from "zustand";

const getCriptos = async ()=>{
    const url= 'https://data-api.coindesk.com/asset/v1/top/list?page=1&page_size=20&sort_by=CIRCULATING_MKT_CAP_USD&sort_direction=DESC&groups=ID,BASIC,SUPPLY,PRICE,MKT_CAP,VOLUME,CHANGE,TOPLIST_RANK&toplist_quote_asset=USD'

    try{
        const res= await axios.get(url)
        console.log(res);
        
    }catch (error){
        console.log(error);
        
    }
}

export const useCriptoStore = create(() => ({
  fetchCriptos: () => {
    console.log("desde fetchCriptos");
    getCriptos()
  },
}));


/*
-Las acciones del store las mantenemos 'limpias' por eso ANTES, llamamos a la api con axios



*/
