import { flushPromises, mount } from '@vue/test-utils'
import { createPinia, setActivePinia } from 'pinia'
import TableSite from '@/components/Table/TableSite.vue'
import { useModalStore } from '@/stores/modalStore'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import { useAgeStore } from '@/stores/ageStore'

describe('Table', () => {
  let wrapper: ReturnType<typeof mount>
  let ageStore: ReturnType<typeof useAgeStore>

  beforeEach(async () => {
    localStorage.clear()
    setActivePinia(createPinia())

    ageStore = useAgeStore()
    ageStore.setAge(1, 'ans')

    // on mock la fonction scrollIntoView
    Element.prototype.scrollIntoView = vi.fn()

    await flushPromises()

    wrapper = mount(TableSite, {
      global: {
        stubs: {
          Teleport: true,
        },
      },
    })
  })

  it('when click on date, modal is open', async () => {
    const modalStore = useModalStore()

    const dateToClick = wrapper.find('td:not(:first-child)')

    await dateToClick.trigger('click')
    await flushPromises()

    expect(modalStore.modalIsOpen).toBe(true)
  })
})
