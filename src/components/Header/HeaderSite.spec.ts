import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import HeaderSite from './HeaderSite.vue'

describe('Header render', () => {
  it('renders properly', () => {
    const wrapper = mount(HeaderSite)
    expect(wrapper.text()).toContain('Carnet de Vaccination')
  })
})
