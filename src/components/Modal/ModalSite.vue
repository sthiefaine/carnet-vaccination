<script setup lang="ts">
import { useModalStore } from '@/stores/modalStore'
import { useVaccineStore } from '@/stores/vaccineStore'
import { computed } from 'vue'

const modalStore = useModalStore()
const vaccineStore = useVaccineStore()

const handleAddVaccine = () => {
  vaccineStore.addVaccination()
  modalStore.closeModal()
}

const handleRemoveVaccine = () => {
  vaccineStore.removeVaccination()
  modalStore.closeModal()
}

const vaccineIsOnList = computed(() => {
  const index = vaccineStore.vaccinationList.findIndex(
    (vaccination) =>
      vaccination.vaccineName === vaccineStore.currentSelection[0] &&
      vaccination.takenDate === vaccineStore.currentSelection[1],
  )

  return index === -1 ? false : true
})

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
</script>

// https://vuejs.org/guide/built-ins/teleport.html
<template>
  <Teleport to="#modal-root, body">
    <div v-if="modalStore.modalIsOpen" class="modal-overlay">
      <div class="modal-content">
        <button class="button-close" @click="modalStore.closeModal">X</button>
        <h2 class="modal-title">Prise du vaccin</h2>
        <p class="modal-text">{{ getvaccineName }}</p>
        <div class="vaccin-buttons">
          <button v-show="!vaccineIsOnList" class="button-add" @click="handleAddVaccine">
            Ajouter
          </button>
          <button v-show="vaccineIsOnList" class="button-del" @click="handleRemoveVaccine">
            Supprimer
          </button>
        </div>
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
  width: 50vw;
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

.vaccin-buttons {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 1rem;
  gap: 5px;
}

.button-add {
  min-width: 100px;
  color: white;
  padding: 1rem;
  border-radius: 12px;
  background-color: #42b983;
  cursor: pointer;
  border: none;
}

.button-del {
  min-width: 100px;
  color: white;
  padding: 1rem;
  border-radius: 12px;
  background-color: rgb(190, 66, 66);
  cursor: pointer;
  border: none;
}
</style>
