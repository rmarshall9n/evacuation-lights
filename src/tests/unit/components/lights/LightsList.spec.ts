import { describe, test, expect, vi } from "vitest";
import { shallowMount } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'
import { useLightsStore } from "@/store/lights";
import LightsList from '@/components/lights/LightsList.vue'
import { makeLight } from "@/tests/factory";

describe('LightsList.vue', () => {
  test('No lights are displayed when the prop is empty', () => {
    const pinia = createTestingPinia({createSpy: vi.fn})
    const store = useLightsStore(pinia)
    store.active = []

    const wrapper = shallowMount(LightsList, {
      global: {
        plugins: [pinia],
      },
    })

    expect(wrapper.find('[data-test="light"]').exists()).toBe(false)
  })

  test('two lights can be seen in the list', () => {
    const pinia = createTestingPinia({createSpy: vi.fn})
    const store = useLightsStore(pinia)
    store.active = [
      makeLight({name: 'light 1', description: 'desc 1'}),
      makeLight({name: 'light 2', description: 'desc 2'})
    ]

    const wrapper = shallowMount(LightsList, {
      global: {
        plugins: [pinia],
      },
    })

    const lights = wrapper.findAll('[data-test="light"]')

    expect(store.fetch).toHaveBeenCalledOnce()
    expect(lights.map((a) => a.text())).toEqual([
      'light 1: desc 1  |',
      'light 2: desc 2  |',
    ])
  })
})
