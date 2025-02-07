<script setup lang="ts">
import { ref, watch } from 'vue'

const age = ref(20)
const selectedAge = ref('')
const monthOrYear = ref<'ans' | 'mois'>('ans')

const updateSelectedAge = () => {
  selectedAge.value = `${age.value}${monthOrYear.value}`
}

const handleAgeChange = (value: 'mois' | 'ans') => {
  monthOrYear.value = value
  updateSelectedAge()
}

// https://vuejs.org/guide/essentials/watchers.html
watch(age, (newAge) => {
  // Convertir en années si l'âge est >= 24 mois
  if (monthOrYear.value === 'mois' && newAge >= 24) {
    age.value = Math.floor(newAge / 12)
    monthOrYear.value = 'ans'
  }
  updateSelectedAge()
})
</script>

<template>
  <div class="age-selector">
    <span class="age-text">J'ai</span>
    <div class="age-selector-container">
      <input type="number" min="1" max="100" v-model="age" />
      <button
        :disabled="age >= 24"
        :class="monthOrYear === 'mois' ? 'button-active' : ''"
        @click="handleAgeChange('mois')"
      >
        Mois
      </button>
      <button :class="monthOrYear === 'ans' ? 'button-active' : ''" @click="handleAgeChange('ans')">
        Ans
      </button>
    </div>
  </div>
</template>

<style scoped>
.age-selector {
  display: flex;
  align-items: center;
  padding: 30px;
}

.age-text {
  margin-right: 1rem;
  font-size: 1.5rem;
}

.age-selector-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  width: max-content;
}

button {
  padding: 0.5rem 1rem;
  border-radius: 12px;
  background-color: #fff;
  cursor: pointer;
}

.button-active {
  color: #fff;
  background-color: #42b983;
}

button:disabled {
  cursor: not-allowed;
  color: #ccc;
}
</style>
