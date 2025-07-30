import {z} from 'zod'
import type { CurrenciesResponseSchema, CurrencySchema } from '../schemas'

export type Currency = z.infer<typeof CurrencySchema>

export type CriptoStore = {
    criptoCurrencies: z.infer<typeof CurrenciesResponseSchema>
    fetchCriptos: () => Promise<void>;
}