import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import FooterSite from './FooterSite.vue'

describe('Footer render', () => {
  it('renders properly with correct url', () => {
    const wrapper = mount(FooterSite)
    expect(wrapper.text()).toContain('Github')

    const link = wrapper.find('a')
    expect(link.attributes('href')).toBe('https://github.com/sthiefaine/carnet-vaccination')
  })
})
