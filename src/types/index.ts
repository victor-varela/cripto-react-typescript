import { z } from "zod";
import type { CriptoPairSchema, CurrenciesResponseSchema, CurrencySchema } from "../schemas";

export type Currency = z.infer<typeof CurrencySchema>;

export type CriptoStore = {
  criptoCurrencies: z.infer<typeof CurrenciesResponseSchema>;
  fetchCriptos: () => Promise<void>;
  fetchCriptoPair: (criptoPair: CriptoPair) => void;
};

export type CriptoPair = z.infer<typeof CriptoPairSchema>;
