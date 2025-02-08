import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useModalStore = defineStore('modalStore', () => {
  const modalIsOpen = ref(false)
  const modalType = ref<'info' | 'vaccin'>('info')

  function openModal(type: 'info' | 'vaccin') {
    modalType.value = type
    modalIsOpen.value = true
  }
  function closeModal(type: 'info' | 'vaccin') {
    modalType.value = type
    modalIsOpen.value = false
  }
  return { modalIsOpen, openModal, closeModal, modalType }
})
