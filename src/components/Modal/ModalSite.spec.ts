import { mount } from '@vue/test-utils'
import { createPinia, setActivePinia } from 'pinia'
import ModalSite from '@/components/Modal/ModalSite.vue'
import { useModalStore } from '@/stores/modalStore'
import { beforeEach, describe, expect, it } from 'vitest'

describe('Modal', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('render when store.modalIsOpen is true', async () => {
    const store = useModalStore()
    store.modalIsOpen = true

    const wrapper = mount(ModalSite, {
      global: {
        stubs: {
          Teleport: true,
        },
      },
    })

    expect(wrapper.find('.modal-overlay').exists()).toBe(true)
  })
})
