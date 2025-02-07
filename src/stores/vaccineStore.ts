import { defineStore } from 'pinia'
import { ref } from 'vue'

type Vaccination = {
  vaccineName: string
  takenDate: string
}

export const useVaccineStore = defineStore('VaccineStore', () => {
  const vaccinationList = ref<Vaccination[]>([])
  const currentSelection = ref<[string, string]>(['', ''])

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
