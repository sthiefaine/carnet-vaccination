// https://vuejs.org/api/reactivity-core.html#ref
import { ref } from 'vue'

import type { Vaccine } from './TableSite.types'

export const datesList = ref<string[]>([
  '1 mois',
  '2 mois',
  '3 mois',
  '4 mois',
  '5 mois',
  '11 mois',
  '12 mois',
  '16-18 mois',
  '6 ans',
  '11-13 ans',
  '14 ans',
  '25 ans',
  '45 ans',
  '65 ans et +',
])

export const vaccines = ref<Vaccine[]>([
  {
    id: 1,
    name: 'BCG',
    recomandedDosesDates: ['1 mois'],
    color: '#BA4D97',
  },
  {
    id: 2,
    name: 'DTP',
    recomandedDosesDates: [
      '2 mois',
      '4 mois',
      '11 mois',
      '6 ans',
      '11-13 ans',
      '25 ans',
      '45 ans',
      '65 ans et +',
    ],
    sepcialRecommandedDosesDates: 'tous les 10 ans',
    color: '#58B998',
  },
  {
    id: 3,
    name: 'Coqueluche',
    recomandedDosesDates: ['2 mois', '4 mois', '11 mois', '6 ans', '11-13 ans', '25 ans'],
    color: '#58B998',
  },
  {
    id: 4,
    name: 'Hib',
    recomandedDosesDates: ['2 mois', '4 mois', '11 mois'],
    color: '#58B998',
  },
  {
    id: 5,
    name: 'Hépatite B',
    recomandedDosesDates: ['2 mois', '4 mois', '11 mois'],
    color: '#FDC301',
  },
  {
    id: 6,
    name: 'Pneumocoque',
    recomandedDosesDates: ['2 mois', '4 mois', '11 mois'],
    color: '#EA579A',
  },
  {
    id: 7,
    name: 'ROR',
    recomandedDosesDates: ['12 mois', '16-18 mois'],
    color: '#E6203B',
  },
  {
    id: 8,
    name: 'Méningocoque',
    recomandedDosesDates: ['5 mois', '12 mois'],
    color: '#EA579A',
  },
  {
    id: 9,
    name: 'Rotavirus',
    recomandedDosesDates: ['2 mois', '3 mois', '4 mois'],
    color: '#CB9746',
  },
  {
    id: 10,
    name: 'méningocoque B',
    recomandedDosesDates: ['3 mois', '5 mois', '12 mois'],
    color: '#EA579A',
  },
  {
    id: 11,
    name: 'HPV',
    recomandedDosesDates: ['11-13 ans', '14 ans'],
    color: '#EF7D02',
  },
  {
    id: 12,
    name: 'Grippe',
    recomandedDosesDates: [],
    sepcialRecommandedDosesDates: 'tous les ans',
    color: '#3FC0F0',
  },
  {
    id: 13,
    name: 'Covid 19',
    recomandedDosesDates: [],
    sepcialRecommandedDosesDates: 'tous les ans',
    color: '#4E4495',
  },
  {
    id: 14,
    name: 'Zona',
    recomandedDosesDates: ['65 ans et +'],
    color: '#A95F48',
  },
])
