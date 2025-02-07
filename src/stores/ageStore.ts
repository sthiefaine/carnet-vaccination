import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAgeStore = defineStore('ageStore', () => {
  const age = ref<number>(14)
  const monthOrYear = ref<'ans' | 'mois'>('ans')
  const selectedAge = ref<string>('14 ans')

  function setAge(newAge: number, unit: 'ans' | 'mois') {
    age.value = newAge
    monthOrYear.value = unit
    selectedAge.value = newAge + ' ' + unit
  }

  return { age, monthOrYear, selectedAge, setAge }
})
