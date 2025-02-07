import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useModalStore = defineStore('modalStore', () => {
  const modalIsOpen = ref(false)

  function openModal() {
    modalIsOpen.value = true
  }
  function closeModal() {
    modalIsOpen.value = false
  }
  return { modalIsOpen, openModal, closeModal }
})
