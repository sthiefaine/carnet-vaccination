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
    longName: 'Tuberculose',
    information:
      "La vaccination contre la tuberculose est leplus souvent recommandée à partir de 1 mois et jusqu 'à l'âge de 15 ans chez les enfants exposés à un risque élevé de tuberculose.",
    recomandedDosesDates: ['1 mois'],
    color: '#BA4D97',
  },
  {
    id: 2,
    name: 'DTP',
    longName: 'Diphtérie-Tétanos-Poliomyélite',
    information:
      "Les rappels de l'adulte sont recommandés à âges fixes soit 25, 45, 65 ans et ensuite tous les dix ans.",
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
    information:
      "Le rappel de l'adulte contre la coqueluche se fait à 25 ans avec rattrapage possible jusqu'à 39 ans. La vaccination contre la coqueluche de la femme enceinte dès le 2e trimestre de grossesse est recommandée pour protéger son nourrisson.",
    recomandedDosesDates: ['2 mois', '4 mois', '11 mois', '6 ans', '11-13 ans', '25 ans'],
    color: '#58B998',
  },
  {
    id: 4,
    name: 'Hib',
    longName: 'Haemophilus Influenzae de type b',
    information:
      "Pour les enfants n'ayant pas été vaccinés avant 6 mois, un rattrapage vaccinal peut être effectué jusqu'à l'âge de 5 ans avec le vaccin monovalent (1 à 3 doses selon l'âge).",
    recomandedDosesDates: ['2 mois', '4 mois', '11 mois'],
    color: '#58B998',
  },
  {
    id: 5,
    name: 'Hépatite B',
    information:
      "Si la vaccination n'a pas été effectuée au cours jusqu'à 15 ans inclus. de la 1ere année de vie. A partir de 1o ans, elle est recommandée uniquement chez les personnes exposées au risque d'hépatite B.",
    recomandedDosesDates: ['2 mois', '4 mois', '11 mois'],
    color: '#FDC301',
  },
  {
    id: 6,
    name: 'Pneumocoque',
    information:
      "Au-delà de 24 mois, cette vaccination est recommandée chez l'enfant et l'adulte à risque.",
    recomandedDosesDates: ['2 mois', '4 mois', '11 mois'],
    color: '#EA579A',
  },
  {
    id: 7,
    name: 'ROR',
    longName: 'Rougeole-Oreillons-Rubéole',
    information:
      'Pour les personnes nées à partir de 1980, être à jour signifie avoir eu deux doses de vaccin.',
    recomandedDosesDates: ['12 mois', '16-18 mois'],
    color: '#E6203B',
  },
  {
    id: 8,
    name: 'Méningocoque C',
    information:
      "À partir de l'âge de 12 mois et jusqu'à l'âge de 24 ans inclus, une dose unique est recommandée pour ceux qui ne sont pas déjà vaccinés.",
    recomandedDosesDates: ['5 mois', '12 mois'],
    color: '#EA579A',
  },
  {
    id: 9,
    name: 'Rotavirus',
    information:
      'Recommandé à tous les nourrissons à partir de 2 mois. Deux à trois doses (par voie orale) sont nécessaires selon le vaccin.',
    recomandedDosesDates: ['2 mois', '3 mois', '4 mois'],
    color: '#CB9746',
  },
  {
    id: 10,
    name: 'méningocoque B',
    information:
      "Un rattrapage est possible jusqu'à l'âge de 2 ans pour les nourrissons n'ayant pas reçu les trois doses de vaccins recommandées à 3,5 et 12 mois.",
    recomandedDosesDates: ['3 mois', '5 mois', '12 mois'],
    color: '#EA579A',
  },
  {
    id: 11,
    name: 'HPV',
    longName: 'Papillomavirus humain',
    information:
      "La vaccination est recommandée chez les filles et les garçons âgés de 11 à 14 ans avec un rattrapage jusqu'à 19 ans inclus. De plus, la vaccination est recommandée aux hommes ayant des relations sexuelles avec des hommes (HSH) jusqu'à l'âge de 26 ans.",
    recomandedDosesDates: ['11-13 ans', '14 ans'],
    color: '#EF7D02',
  },
  {
    id: 12,
    name: 'Grippe',
    information:
      "La vaccination est recommandée, chaque année, notamment pour les personnes à risque de complications : les personnes âgées de 65 ans et plus, celles atteintes de certaines maladies chroniques dont les enfants à partir de 6 mois, les femmes enceintes et les personnes souffrant d'obésité (IMC>40 kg m2). La vaccination contre la grippe sera désormais proposée à tous les enfants de 2 à 17 ans.",
    recomandedDosesDates: [],
    sepcialRecommandedDosesDates: 'tous les ans',
    color: '#3FC0F0',
  },
  {
    id: 13,
    name: 'Covid 19',
    information:
      "En automne, en plus des personnes à risque ciblées par la vaccination contre la grippe, les personnes atteintes de troubles psychiatriques, de démence ou de trisomie 21 sont également ciblées pour la vaccination contre le Covid-19 Au printemps, la vaccination est recommandée pour les personnes de 80 ans et plus, les résidents d'EHPAD et USLD, et les personnes immunodéprimées quel que soit leur âge.",
    recomandedDosesDates: [],
    sepcialRecommandedDosesDates: 'tous les ans',
    color: '#4E4495',
  },
  {
    id: 14,
    name: 'Zona',
    information: 'La vaccination est recommandée chez les personnes de 65 ans et plus.',
    recomandedDosesDates: ['65 ans et +'],
    color: '#A95F48',
  },
])
