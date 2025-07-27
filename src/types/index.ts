import {z} from 'zod'
import type { CurrencySchema } from '../schemas'

export type Currency = z.infer<typeof CurrencySchema>