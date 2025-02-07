import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAgeStore = defineStore('ageStore', () => {
  const age = ref<number>(12)
  const monthOrYear = ref<'ans' | 'mois'>('ans')
  const selectedAge = ref<string>('')

  const updateSelectedAge = () => {
    selectedAge.value = `${age.value}${monthOrYear.value}`
  }
  function setAge(newAge: number, unit: 'ans' | 'mois') {
    age.value = newAge
    monthOrYear.value = unit
    updateSelectedAge()
  }

  return { age, monthOrYear, setAge }
})
