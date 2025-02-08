export interface Vaccine {
  id: number
  name: string
  longName?: string
  information?: string
  recomandedDosesDates: string[]
  color: string
  sepcialRecommandedDosesDates?: string
}
