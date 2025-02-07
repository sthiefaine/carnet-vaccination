import { describe, it, expect } from 'vitest'

import { flushPromises, mount } from '@vue/test-utils'
import AgeSelector from './AgeSelector.vue'

describe('Age Selector render', () => {
  it('age button is active', () => {
    const wrapper = mount(AgeSelector)
    const button = wrapper.find('.button-active')
    expect(button.text()).toBe('Ans')
  })

  it('click on button month', async () => {
    const wrapper = mount(AgeSelector)
    const button = wrapper.find('button')
    await button.trigger('click')
    expect(wrapper.find('.button-active').text()).toBe('Mois')
  })

  it('age >= 24 button need to be "Ans', async () => {
    const wrapper = mount(AgeSelector)
    const input = wrapper.find('input')
    await input.setValue(24)

    // https://test-utils.vuejs.org/api/#flushpromises
    // await flushPromises()

    expect(input.element.value).toBe('24')

    const activeButton = wrapper.find('.button-active')
    expect(activeButton.text()).toBe('Ans')
  })

  it('age >= 24 mois button need to be "Ans" and value "2"', async () => {
    const wrapper = mount(AgeSelector)
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
