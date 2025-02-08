<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'
import { datesList } from './TableSite.data'
import { useAgeStore } from '@/stores/ageStore'
import { useModalStore } from '@/stores/modalStore'
import { useVaccineStore } from '@/stores/vaccineStore'

const ageStore = useAgeStore()
const modalStore = useModalStore()
const vaccineStore = useVaccineStore()

const dateRefs = ref<{ [key: string]: HTMLTableCellElement | null }>({})

const findDateKey = (age: number, unit: 'ans' | 'mois'): string => {
  if (unit === 'mois') {
    if (age >= 6 && age <= 10) return `5 mois`
    if (age >= 11 && age <= 13) return `11 mois`
    if (age >= 16 && age <= 18) return `16-18 mois`
    if (age >= 18) return `16-18 mois`
    return ageStore.selectedAge
  } else if (unit === 'ans') {
    if (age === 1) return `12 mois`
    if (age >= 2 && age <= 5) return `16-18 mois`
    if (age >= 6 && age <= 11) return `6 ans`
    if (age >= 11 && age <= 13) return `11-13 ans`
    if (age >= 14 && age <= 25) return `14 ans`
    if (age >= 25 && age <= 45) return `25 ans`
    if (age >= 45 && age <= 65) return `45 ans`
    if (age >= 65) return `65 ans et +`
    return ageStore.selectedAge
  } else {
    return ageStore.selectedAge
  }
}

const scrollToAge = () => {
  const dateToScroll = findDateKey(ageStore.age, ageStore.monthOrYear)
  const cell = dateRefs.value[dateToScroll]
  if (cell) {
    cell.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
  }
}

const handleModal = (vaccineName: string, takenDate: string, type: 'info' | 'vaccin') => {
  if (!modalStore.modalIsOpen) {
    vaccineStore.updateCurrentSelection(vaccineName, takenDate)
    modalStore.openModal(type)
  } else {
    vaccineStore.updateCurrentSelection('', '')
    modalStore.closeModal(type)
  }
}

const isDateValidated = (vaccineName: string, takenDate: string): boolean => {
  const isTaken = vaccineStore.vaccinationList.findIndex(
    (vaccine) => vaccine.vaccineName === vaccineName && vaccine.takenDate === takenDate,
  )

  return isTaken === -1 ? false : true
}

// https://vuejs.org/guide/essentials/watchers.html
watch(
  () => ageStore.selectedAge,
  () => scrollToAge(),
)

//https://fr.vuejs.org/guide/essentials/lifecycle
onMounted(() => {
  scrollToAge()
})
</script>

<template>
  <div class="table-container">
    <table class="table">
      <thead>
        <tr>
          <th><span>Age approprié</span><span>Vaccin</span></th>
          <th
            v-for="date in datesList"
            :key="date"
            :ref="(el) => (dateRefs[date] = el as HTMLTableCellElement)"
          >
            {{ date }}
          </th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="vaccine in vaccineStore.vaccinesData" :key="vaccine.name">
          <td
            class="vaccin-name"
            :style="{ backgroundColor: vaccine.color }"
            @click="() => handleModal(vaccine.name, '', 'info')"
          >
            {{ vaccine.name }}
          </td>
          <td
            v-for="date in datesList"
            :key="date"
            @click="() => handleModal(vaccine.name, date, 'vaccin')"
            :class="isDateValidated(vaccine.name, date) ? 'validated' : ''"
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
  max-height: 70vh;
  overflow-y: scroll;
  max-width: 100vw;
  overflow-x: auto;
}

.validated {
  background-image: url('@/assets/success.svg');
  background-size: contain;
  background-repeat: no-repeat;
}

.table {
  border-collapse: collapse;
  color: #000;
}

.vaccin-name {
  text-transform: capitalize;
  width: max-content;
}

.vaccin-name::after {
  content: '';
  position: absolute;
  top: 4px;
  right: 4px;
  width: 15px;
  height: 15px;

  background-image: url('@/assets/info.svg');
  background-size: contain;
  background-repeat: no-repeat;
}

th,
td {
  padding: 6px;
  text-align: center;
  min-width: 63px;
  height: 55px;
  border: 1px solid #ccc;
}

td:not(:first-child) {
  width: 63px !important;
  height: 63px !important;
  max-width: 63px !important;
  max-height: 63px !important;
}

th:first-of-type {
  position: sticky;
}

th {
  font-size: medium;
  font-weight: normal;
  color: black;
}

td:first-of-type {
  position: sticky;
  left: 0;
  top: 67px;
  z-index: 1;
  text-wrap: nowrap;
}

td {
  font-size: small;
}

thead > tr > th:first-of-type {
  position: sticky;
  left: 0;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border: none;
  background-color: white;
}

thead tr {
  position: sticky;
  top: 0;
  z-index: 0;
  background-color: white;
}

thead > tr > th:not(:first-of-type) {
  position: sticky;
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
  height: 50px;
}
</style>
