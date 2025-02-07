import { defineStore } from 'pinia'
import { ref, watch } from 'vue'

type Vaccination = {
  vaccineName: string
  takenDate: string
}

export const useVaccineStore = defineStore('VaccineStore', () => {
  const initialData = localStorage.getItem('vaccinations')
  const vaccinationList = ref<Vaccination[]>(initialData ? JSON.parse(initialData) : [])
  const currentSelection = ref<[string, string]>(['', ''])

  watch(
    vaccinationList,
    (newList) => {
      localStorage.setItem('vaccinations', JSON.stringify(newList))
    },
    { deep: true },
  )

  function addVaccination() {
    const vaccination: Vaccination = {
      vaccineName: currentSelection.value[0],
      takenDate: currentSelection.value[1],
    }

    const index = vaccinationList.value.findIndex(
      (vaccination) =>
        vaccination.vaccineName === currentSelection.value[0] &&
        vaccination.takenDate === currentSelection.value[1],
    )
    if (index === -1) {
      vaccinationList.value.push(vaccination)
    }
  }

  function removeVaccination() {
    const index = vaccinationList.value.findIndex(
      (vaccination) =>
        vaccination.vaccineName === currentSelection.value[0] &&
        vaccination.takenDate === currentSelection.value[1],
    )
    if (index !== -1) {
      vaccinationList.value.splice(index, 1)
    }
  }

  function updateCurrentSelection(vaccineName: string, takenDate: string) {
    currentSelection.value = [vaccineName, takenDate]
  }

  return {
    vaccinationList,
    addVaccination,
    removeVaccination,
    currentSelection,
    updateCurrentSelection,
  }
})
