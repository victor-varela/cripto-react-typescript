import { z } from "zod";
import type { CriptoPairSchema, CurrenciesResponseSchema, CurrencySchema } from "../schemas";

export type Currency = z.infer<typeof CurrencySchema>;

export type CriptoStore = {
  criptoCurrencies: z.infer<typeof CurrenciesResponseSchema>;
  fetchCriptos: () => Promise<void>;
  fetchCriptoPair: (criptoPair: CriptoPair) =>Promise <void>; //En TypeScript, una función async siempre devuelve una Promise, incluso si no retornás explícitamente nada.
};

export type CriptoPair = z.infer<typeof CriptoPairSchema>;
