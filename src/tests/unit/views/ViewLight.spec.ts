import { beforeEach, describe, expect, test, vi } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import router from '@/router'
import ViewLight from '@/views/ViewLight.vue'
import { makeLight } from '@/tests/factory'
import LightDetails from '@/components/LightDetails.vue'
import RetireLightButton from '@/components/RetireLightButton.vue'

let mockGetLight = vi.fn()

vi.mock('@/api/lights', () => ({
  getLight: (id: number) => mockGetLight(id)
}))

describe('ViewLight.vue', () => {
  beforeEach(() => {
    mockGetLight = vi.fn()
  })

  test('not found is displayed if the light cannot be found', async () => {
    mockGetLight.mockReturnValue(null)

    router.push('/lights/123')
    await router.isReady()

    const wrapper = shallowMount(ViewLight, {
      global: {
        plugins: [router]
      }
    })

    expect(wrapper.find('[data-test="not-found"]').exists()).toBe(true)
  })

  test('components are displayed if a light is found', async () => {
    mockGetLight.mockReturnValue(makeLight())

    router.push('/lights/123')
    await router.isReady()

    const wrapper = shallowMount(ViewLight, {
      global: {
        plugins: [router]
      }
    })

    expect(wrapper.find('[data-test="not-found"]').exists()).toBe(false)
    expect(wrapper.text()).toContain('View light')

    expect(wrapper.findComponent(LightDetails).exists()).toBe(true)
    expect(wrapper.findComponent(RetireLightButton).exists()).toBe(true)
  })
})

