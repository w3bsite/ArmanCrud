import { Address } from '~/data/models/address'

export type User = {
  id: number | null,
  'first_name': string,
  addresses?: Address[],
}
