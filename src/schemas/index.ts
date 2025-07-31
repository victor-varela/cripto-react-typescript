import { z } from "zod";

export const CurrencySchema = z.object({
  code: z.string(),
  name: z.string(),
});

export const CurrencyResponseSchema = z.object({
    NAME: z.string(),
    SYMBOL: z.string(),
  });

  //uno es el objeto y el otro el array, es para que sea 'mas manejable'.. queda lindo.. 

export const CurrenciesResponseSchema = z.array(CurrencyResponseSchema);

export const CriptoPairSchema = z.object({
  currency: z.string(),
  criptocurrency: z.string()
});

/*
- Los schemas son const.

*/
