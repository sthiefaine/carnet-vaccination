<script setup lang="ts">
import { useModalStore } from '@/stores/modalStore'
import { useVaccineStore } from '@/stores/vaccineStore'
import { computed } from 'vue'

const modalStore = useModalStore()
const vaccineStore = useVaccineStore()

const getvaccineName = computed(() => {
  const result = vaccineStore.vaccinesData.find(
    (vaccination) => vaccination.name === vaccineStore.currentSelection[0],
  )

  return result
    ? result.longName
      ? result.longName + ' ' + result.name
      : result.name
    : vaccineStore.currentSelection[0]
})

const getvaccine = computed(() => {
  const result = vaccineStore.vaccinesData.find(
    (vaccination) => vaccination.name === vaccineStore.currentSelection[0],
  )

  return result
})
</script>

// https://vuejs.org/guide/built-ins/teleport.html
<template>
  <Teleport to="#modal-root, body">
    <div
      v-if="modalStore.modalIsOpen"
      class="modal-overlay"
      @click.self="modalStore.closeModal('info')"
    >
      <div class="modal-content">
        <button class="button-close" @click="modalStore.closeModal('info')">X</button>
        <h2 class="modal-title">Informations :</h2>
        <p class="modal-text" :style="{ backgroundColor: getvaccine?.color || '' }">
          {{ getvaccineName }}
        </p>
        <div class="vaccin-information">{{ getvaccine?.information || '' }}</div>
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-content {
  width: 80vw;
  max-width: 300px;
  position: relative;
  background: white;
  padding: 2rem;
  border-radius: 8px;
}

.modal-title {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.modal-text {
  font-size: 1.2rem;
  margin-bottom: 1rem;
  padding: 6px;
  border-radius: 12px;
}

.button-close {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  font-size: 1.5rem;
  cursor: pointer;
  border: none;
  background: none;
}

.vaccin-information {
  font-size: 1.2rem;
  margin-bottom: 1rem;
}
</style>
