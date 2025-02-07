import { describe, it, expect, beforeEach } from 'vitest'

import { flushPromises, mount } from '@vue/test-utils'
import AgeSelector from './AgeSelector.vue'
import { createPinia } from 'pinia'

describe('Age Selector render', () => {
  let pinia: ReturnType<typeof createPinia>
  let wrapper: ReturnType<typeof mount>

  // Action avant chaque test
  beforeEach(() => {
    pinia = createPinia()

    wrapper = mount(AgeSelector, {
      global: {
        plugins: [pinia],
      },
    })
  })

  it('age button is active', () => {
    const button = wrapper.find('.button-active')
    expect(button.text()).toBe('Ans')
  })

  it('click on button month', async () => {
    const button = wrapper.find('button')
    await button.trigger('click')
    expect(wrapper.find('.button-active').text()).toBe('Mois')
  })

  it('age >= 24 button need to be "Ans', async () => {
    const input = wrapper.find('input')
    await input.setValue(24)

    // https://test-utils.vuejs.org/api/#flushpromises
    // await flushPromises()

    expect(input.element.value).toBe('24')

    const activeButton = wrapper.find('.button-active')
    expect(activeButton.text()).toBe('Ans')
  })

  it('age >= 24 mois button need to be "Ans" and value "2"', async () => {
    // click on button "mois"
    const button = wrapper.find('button')
    await button.trigger('click')

    const input = wrapper.find('input')
    await input.setValue(24)

    // https://test-utils.vuejs.org/api/#flushpromises
    await flushPromises()

    expect(input.element.value).toBe('2')

    const activeButton = wrapper.find('.button-active')
    expect(activeButton.text()).toBe('Ans')
  })
})
