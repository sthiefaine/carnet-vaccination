import { defineStore } from 'pinia'
import { ref, watch } from 'vue'

export const useAgeStore = defineStore('ageStore', () => {
  const initialData = localStorage.getItem('selectedAge')
  const [nombre, unite] = initialData ? initialData.split(' ') : '14 ans'
  const age = ref<number>(nombre ? parseInt(nombre, 10) : 14)
  const monthOrYear = ref<'ans' | 'mois'>((unite as 'ans' | 'mois') ?? 'ans')
  const selectedAge = ref<string>(initialData ? initialData : '14 ans')

  watch(selectedAge, (selectedAge) => {
    localStorage.setItem('selectedAge', selectedAge)
  })

  function setAge(newAge: number, unit: 'ans' | 'mois') {
    age.value = newAge
    monthOrYear.value = unit
    selectedAge.value = newAge + ' ' + unit
  }

  return { age, monthOrYear, selectedAge, setAge }
})
