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
  criptocurrency: z.string(),
});

export const PairResponseSchema = z.object({
  VALUE: z.number(),
  CURRENT_DAY_CHANGE_PERCENTAGE: z.number(),
  CURRENT_DAY_HIGH: z.number(),
  CURRENT_DAY_LOW: z.number(),
});

/*
- Los schemas son const.

*/
