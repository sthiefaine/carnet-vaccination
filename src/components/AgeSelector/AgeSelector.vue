<script setup lang="ts">
import { watch } from 'vue'
import { useAgeStore } from '@/stores/ageStore'

const ageStore = useAgeStore()

watch(
  () => ageStore.age,
  (newAge) => {
    if (ageStore.monthOrYear === 'mois' && newAge >= 24) {
      ageStore.setAge(newAge, 'ans')
    }
  },
)
</script>

<template>
  <div class="age-selector">
    <span class="age-text">J'ai</span>
    <div class="age-selector-container">
      <input
        class="age-input"
        type="number"
        min="1"
        max="100"
        placeholder="1"
        v-model="ageStore.age"
        @input="ageStore.setAge(ageStore.age, ageStore.monthOrYear)"
      />
      <button
        :disabled="ageStore.age >= 24"
        :class="ageStore.monthOrYear === 'mois' ? 'button-active' : ''"
        @click="ageStore.setAge(ageStore.age, 'mois')"
      >
        Mois
      </button>
      <button
        :class="ageStore.monthOrYear === 'ans' ? 'button-active' : ''"
        @click="ageStore.setAge(ageStore.age, 'ans')"
      >
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

.age-input {
  padding: 0.5rem 1rem;
  width: 30px;
  border-radius: 12px;
  text-align: left;
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
  border: none;
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
