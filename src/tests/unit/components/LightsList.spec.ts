import { describe, test, expect } from "vitest";
import { shallowMount, mount } from '@vue/test-utils'
import LightsList from '@/components/LightsList.vue'

describe('LightsList.vue', () => {
  test('No lights are displayed when the prop is empty', () => {
    const wrapper = mount(LightsList, {
      props: {
        lights: []
      }
    })

    expect(wrapper.find('[data-test="light"]').exists()).toBe(false)
  })

  test('two lights can be seen in the list', () => {
    const wrapper = shallowMount(LightsList, {
      props: {
        lights: [
          {id: 1, name: 'light 1', description: 'desc 1'},
          {id: 2, name: 'light 2', description: 'desc 2'}
        ]
      }
    })

    const lights = wrapper.findAll('[data-test="light"]')

    expect(lights.map((a) => a.text())).toEqual([
      'light 1: desc 1',
      'light 2: desc 2',
    ])
  })
})
