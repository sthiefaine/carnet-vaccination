<script setup lang="ts">
import { ref } from 'vue'
import type { Vaccine } from './TableSite.types'

const datesThead = ref<string[]>([
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

const vaccines = ref<Vaccine[]>([
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
</script>

<template>
  <div class="table-container">
    <table class="table">
      <thead>
        <tr>
          <th>Age approprié</th>
          <th v-for="date in datesThead" :key="date">{{ date }}</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="vaccine in vaccines" :key="vaccine.name">
          <td class="vaccin-name" :style="{ backgroundColor: vaccine.color }">
            {{ vaccine.name }}
          </td>
          <td
            v-for="date in datesThead"
            :key="date"
            :style="{
              backgroundColor:
                vaccine?.sepcialRecommandedDosesDates && date === '65 ans et +'
                  ? vaccine.color
                  : vaccine.recomandedDosesDates.includes(date)
                    ? vaccine.color
                    : 'transparent',
            }"
          >
            {{
              vaccine?.sepcialRecommandedDosesDates && date === '65 ans et +'
                ? vaccine.sepcialRecommandedDosesDates
                : ''
            }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.table-container {
  max-width: 100vw;
  overflow-y: auto;
  overflow-x: auto;
}

.table {
  min-width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
  color: #000;
}

.vaccin-name {
  text-transform: capitalize;
  width: max-content;
}

th,
td {
  border: 1px solid #ccc;
  padding: 6px;
  text-align: center;
  text-wrap: nowrap;
  min-width: 50px;
}

th:first-of-type {
  position: sticky;
  left: -1px;
}

th {
  font-size: medium;
  font-weight: normal;
  color: black;
  background-color: #f4f4f4;
}

td:first-of-type {
  position: sticky;
  left: -1px;
}

td {
  font-size: small;
}

thead > tr > th:first-of-type {
  height: 55px;
  z-index: 2;
}

thead > tr > th:not(:first-of-type) {
  transform: rotate(-45deg);
  white-space: normal;
  text-wrap: wrap;
  text-align: center;
  vertical-align: middle;
  background-color: transparent;
}

tr {
  color: white;
  background-color: #f9f9f9;
  height: 60px;
}

.recomanded-dose {
  display: inline-block;
  width: 20px;
  height: 15px;
}
</style>
