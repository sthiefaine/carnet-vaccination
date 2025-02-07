<script setup lang="ts">
import { useModalStore } from '@/stores/modalStore'

const modalStore = useModalStore()
</script>

// https://vuejs.org/guide/built-ins/teleport.html
<template>
  <Teleport to="#modal-root, body">
    <div v-if="modalStore.modalIsOpen" class="modal-overlay">
      <div class="modal-content">
        <h2>Ma Modale</h2>
        <button @click="modalStore.closeModal">Fermer</button>
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
  background: white;
  padding: 2rem;
  border-radius: 8px;
}
</style>
