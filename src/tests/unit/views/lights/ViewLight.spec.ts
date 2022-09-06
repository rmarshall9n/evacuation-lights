import { describe, expect, test, vi } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import router from '@/router'
import ViewLight from '@/views/lights/ViewLight.vue'
import LightDetails from '@/components/lights/LightDetails.vue'
import RetireLightButton from '@/components/lights/RetireLightButton.vue'
import { createTestingPinia } from '@pinia/testing'
import { useLightsStore } from "@/store/lights";
import { makeLight } from '@/tests/factory'

describe('ViewLight.vue', () => {
  test('components are displayed if a light is found', async () => {
    const pinia = createTestingPinia({
      createSpy: vi.fn,
    })
    const store = useLightsStore(pinia)
    store.get.mockImplementation((id: number) => makeLight())

    router.push('/lights/123')
    await router.isReady()

    const wrapper = shallowMount(ViewLight, {
      global: {
        plugins: [pinia, router]
      }
    })

    expect(wrapper.text()).toContain('View light')

    expect(store.get).toBeCalledWith(123)

    expect(wrapper.findComponent(LightDetails).exists()).toBe(true)
    expect(wrapper.findComponent(RetireLightButton).exists()).toBe(true)
  })
  test('components are hidden if a light is missing', async () => {
    const pinia = createTestingPinia({
      createSpy: vi.fn,
    })
    const store = useLightsStore(pinia)
    store.get.mockImplementation((id: number) => null)

    router.push('/lights/123')
    await router.isReady()

    const wrapper = shallowMount(ViewLight, {
      global: {
        plugins: [pinia, router]
      }
    })

    expect(wrapper.text()).toContain('View light')

    expect(store.get).toBeCalledWith(123)

    expect(wrapper.findComponent(LightDetails).exists()).toBe(false)
    expect(wrapper.findComponent(RetireLightButton).exists()).toBe(false)
  })
})

